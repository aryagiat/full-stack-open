import React, { useState } from 'react'

const Heading = ({ text }) => {
  return (
    <h1>{text}</h1>
  )
}

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const Statistic = ( { text, value } ) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = (props) => {
  if (props.all === 0) {
    return (
      <p>No feedback given</p>
    )
  }
  return (
    <div>
      <table>
      <tbody>
        <Statistic text="good" value={props.good} />
        <Statistic text="neutral" value={props.neutral} />
        <Statistic text="bad" value={props.bad} />
        <Statistic text="all" value={props.all} />
        <Statistic text="average" value={props.average} />
        <Statistic text="positive" value={props.positive} />
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  const addGood = () => {setGood(good+1); setTotal(total + 1)};
  const addNeutral = () => {setNeutral(neutral + 1); setTotal(total + 1)};
  const addBad = () => {setBad(bad+1); setTotal(total + 1)};

  const getAverage = () => ((good * 1) + (bad * -1)) / total
  const getPositive = () => (good / total) * 100 + "%"

  return (
    <div>
      <Heading text="give feedback" />
      <Button handleClick={addGood} text="good" />
      <Button handleClick={addNeutral} text="neutral" />
      <Button handleClick={addBad} text="bad" />


      <Heading text="statistics" />
      <Statistics good={good} neutral={neutral} bad={bad} all={total} average={getAverage()} positive={getPositive()}/>
    </div>
  )
}

export default App