import React, { useContext, useRef, useState } from 'react'
import myContext from '../contexts/UserContext'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [show, setShow] = useState(false)

  const { setUser } = useContext(myContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    setUser({ username, password })
    setUsername('')
    setPassword('')
  }

  return (
    <div>
      <h2>Login to your Account</h2>
      <input type="text"
        value={username}
        placeholder='Username'
        onChange={(e) => setUsername(e.target.value)}
      />

      <input type={show ? "text" : "password"}
        value={password}
        placeholder='Password'
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleSubmit}>Submit</button>
      <button onClick={() => setShow((prev) => !prev)}>{show ? "Hide Password" : "Show Password"}</button>
    </div>
  )
}

export default Login