import React, { useContext, useRef, useState } from 'react'
import myContext from '../contexts/UserContext'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const {setUser} = useContext(myContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    setUser({username, password})
  }

  const inputRef = useRef(null)

  const showPassword = () => {
    inputRef.current.type = 'text'
  }

  return (
    <div>
      <h2>Login to your Account</h2>
      <input type="text"
      value={username}
      placeholder='Username'
      onChange={(e) => setUsername(e.target.value)}
       />

      <input type="password"
      value={password}
      placeholder='Password'
      onChange={(e) => setPassword(e.target.value)}
      ref={inputRef}
       />

       <button onClick={handleSubmit}>Submit</button>
       <button onClick={showPassword}>Show Password</button>
    </div>
  )
}

export default Login