import './App.css'
import Display from './components/Display'
import Login from './components/Login'
import UserContextProvider from './contexts/UserContextProvider'

function App() {

  return (
    <UserContextProvider>
      <Login />
      <Display />
    </UserContextProvider>
  )
}

export default App
