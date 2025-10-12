import { useCallback, useState, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numAllow, setNumAllow] = useState(false)
  const [charAllow, setCharAllow] = useState(false)
  const [password, setPassword] = useState('');

  const passwordCopy = useRef(null)

  const passowrdGenerator = useCallback(() => {
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

    if (numAllow) str += '0123456789'
    if (charAllow) str += '!@#$%&*{}[]/?'

    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)
  },
    [length, numAllow, charAllow,])

  useEffect(() => {
    passowrdGenerator()
  }, [length, numAllow, charAllow, passowrdGenerator])

  const passwordCopyToClipbord = useCallback(() => {
    passwordCopy.current?.select()
    passwordCopy.current?.setSelectionRange(0, 30)
    window.navigator.clipboard.writeText(password)
  }, [password])

  return (
    <>
      <div className='container'>
          <h1>Password Generator</h1>
        <div className="passContainer">
          <input
            type="text"
            value={password}
            placeholder='Password'
            ref={passwordCopy}
          />
          <button onClick={passwordCopyToClipbord}>Copy</button>
        </div>
        <div className="rangeContainer">
          <div>
            <input
              value={length}
              type="range"
              min={8}
              max={32}
              onChange={e => setLength(e.target.value)}
            />
            <label>Length {length}</label>
          </div>
          <div>
            <input
              type='checkbox'
              value={numAllow}
              onChange={() => { setNumAllow(prev => !prev) }}
            // defaultChecked = {numAllow}
            />
            <label htmlFor="">Numbers</label>
          </div>
          <div>
            <input
              type="checkbox"
              value={charAllow}
              onChange={() => { setCharAllow(prev => !prev) }}
            // defaultChecked = {charAllow}
            />
            <label htmlFor="">Charecter</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
