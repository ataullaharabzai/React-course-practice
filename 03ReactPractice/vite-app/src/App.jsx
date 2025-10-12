import { useState, useEffect, useCallback, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const counterRef = useRef(null)

  const autoCounterStart = useCallback(() => {
    counterRef.current = setInterval(() => {
      setCount(prev => prev + 1)
    }, 1000);
  }, [])

  const pauseCounter = useCallback(() => {
    counterRef.current = clearInterval(counterRef.current)
  }, [])

  useEffect(() => {
    autoCounterStart()
    return () => clearInterval(counterRef.current)
  }, [])

  return (
    <>
      <div>
        <h1>{count} Secends</h1>
        <button onClick={pauseCounter}>Pause</button>
      </div>
    </>
  )
}

export default App
