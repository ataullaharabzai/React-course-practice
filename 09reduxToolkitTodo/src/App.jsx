import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {

  return (
    <div className='container'>
      <AddTodo />
      <Todos />
    </div>
  )
}

export default App
