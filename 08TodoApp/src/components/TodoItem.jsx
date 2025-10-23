import React, { useState } from 'react'
import { useTodo } from '../contexts/TodoContext'

function TodoItem({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false)
  const [todoMsg, setTodoMsg] = useState(todo.todo || '')

  const { updateTodo, deleteTodo, toggelComplete } = useTodo()

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMsg })
    setIsTodoEditable(false)
  }

  const toggelCompleted = () => {
    toggelComplete(todo.id)
  }

  const todoDelet = () => { 
    deleteTodo(todo.id)
  }

  return (
    <div className="itemContainer">
          <div className={`checkAndTdodInputes ${todo.completed ? 'completed' : ''}`}>
        <input type="checkbox"
          checked={todo.completed}
          onChange={toggelCompleted}
        />

        <input id='todoBox' type="text"
          value={todoMsg}
          onChange={(e) => setTodoMsg(e.target.value)}
          readOnly={!isTodoEditable}
        />
      </div>
      {/*edit, save button  */}
      <button
        onClick={() => {
          if (todo.completed) return

          if (isTodoEditable) {
            editTodo()
          } else setIsTodoEditable((prev) => !prev)
        }}
      >
        {isTodoEditable ? "📁" : "✏"}
      </button>

      {/* delete button */}
      <button
        onClick={todoDelet}
      >
        ❌
      </button>
    </div>
  )
}

export default TodoItem