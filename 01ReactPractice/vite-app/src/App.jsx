import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")
  const [text, setText] = useState("#fff")
  const [bcount, setbCount] = useState(0)
  const [pcount, setpCount] = useState(0)
  const [ocount, setoCount] = useState(0)
  const [brcount, setbrCount] = useState(0)
  const [grcount, setgrCount] = useState(0)
  const [gracount, setgraCount] = useState(0)

  function blackBg() {
    setColor('black')
    setText("white")
    setbCount(bcount + 1)
  }
  function purpleBg() {
    setColor('purple')
    setText("white")
    setpCount(pcount + 1)
  }
  function orangeBg() {
    setColor('orange')
    setText("black")
    setoCount(ocount + 1)
  }
  function brownBg() {
    setColor('brown')
    setText("white")
    setbrCount(brcount + 1)
  }
  function greenBg() {
    setColor('green')
    setText("white")
    setgrCount(grcount + 1)
  }
  function greyBg() {
    setColor('grey')
    setText("black")
    setgraCount(gracount + 1)
  }

  return (
    <>
      <div style={{ backgroundColor: color, color: text }} className='container'>
        <h1>Total buttons Clicked = {bcount + pcount + ocount + brcount + grcount + gracount}</h1>
        <div className="btn-container">
          <button onClick={blackBg}>Black {bcount}</button>
          <button onClick={purpleBg}>Purple {pcount}</button>
          <button onClick={orangeBg}>Orange {ocount}</button>
          <button onClick={brownBg}>Brown {brcount}</button>
          <button onClick={greenBg}>Green {grcount}</button>
          <button onClick={greyBg}>Grey {gracount}</button>
        </div>
      </div>
    </>
  )
}

export default App
