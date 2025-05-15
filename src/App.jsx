import { useState } from 'react'
import logo from "/react.svg"
import * as h from './components/Handle'
import './App.css'

function App() {
  const [num1, setNum1] = useState('')
  const [num2, setNum2] = useState('')
  const [result, setResult] = useState(0)

  function clear () {
    setNum1('')
    setNum2('')
    setResult(0)
  }

  return (
    <>
      <img src={logo} alt="logo" className='logo react' />
      <h1>React Calculator</h1>
      <h3>Created by RoMan</h3>
      <input 
        type="number" 
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <input 
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      /> <br />
      <button onClick={() => setResult(h.HandleAdd(num1, num2))}>+</button>
      <button onClick={() => setResult(h.HandleSub(num1, num2))}>-</button>
      <button onClick={() => setResult(h.HandleMul(num1, num2))}>*</button>
      <button onClick={() => setResult(h.HandleDiv(num1, num2))}>/</button> <br />

      <button onClick={clear}>Clear</button>
      <p>Result: {Number(result).toFixed(2)}</p>
    </>
  )
}

export default App
