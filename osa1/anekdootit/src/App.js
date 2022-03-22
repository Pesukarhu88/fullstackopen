import { useState } from 'react'

const Button = ({handleClick, text}) => {
  return (
    <div style={{display:'inline'}}>
      <button onClick={handleClick}>{text}</button>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
  const [best, setBest] = useState(0)

  const randomNumber = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  const vote = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
    setBest(copy.indexOf(Math.max(...copy)))
  }
 
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <div>{anecdotes[selected]}</div>
      <p>has {votes[selected]} votes</p>
      <Button handleClick={vote} text="vote"/>
      <Button handleClick={randomNumber} text="next anecdote"/>
      <h1>Anecdote with most votes</h1>
      <div>{anecdotes[best]}</div>
      <p>has {votes[best]} votes</p>
    </div>
  )
}

export default App
