import { useEffect, useState } from 'react'
import { TodoProvider } from './contexts/TodoContext'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {

  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev])
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((oldTodo) => oldTodo.id !== id))
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((oldTodo) => oldTodo.id === id ? todo : oldTodo))
  }

  const toggelComplete = (id) => {
    setTodos((prev) => prev.map((oldTodo) => oldTodo.id === id ? { ...oldTodo, completed: !oldTodo.completed } : oldTodo))
  }

  useEffect(() => {
    const todoStorage = JSON.parse(localStorage.getItem("todos"))

    if (todoStorage && todoStorage.length > 0) {
      setTodos(todoStorage)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  return (
    <TodoProvider value={{ todos, addTodo, deleteTodo, updateTodo, toggelComplete }}>
      <div className='container'>
        <div className="todoForm">
          <TodoForm />
        </div>

        <div className="todoItems">
          {todos.map((todo) => (
            <div key={todo.id}>
              <TodoItem todo={todo} />
            </div>
          ))}

        </div>
      </div>
    </TodoProvider>
  )
}

export default App
