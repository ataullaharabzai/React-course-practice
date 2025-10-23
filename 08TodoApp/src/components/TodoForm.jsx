import React, { useState } from 'react'
import { useTodo } from '../contexts/TodoContext'

function TodoForm() {
    const [todo, setTodo] = useState('')

    const { addTodo } = useTodo()

    const addYourTodo = (e) => {
        e.preventDefault()

        if (!todo) return

        addTodo({ todo, completed: false })
        setTodo('')
    }

    return (
        <form onSubmit={addYourTodo}>
            <input type="text"
                value={todo}
                placeholder='Add task...'
                onChange={(e) => setTodo(e.target.value)}
            />

            <button type='submit'>
                Add
            </button>
        </form>
    )
}

export default TodoForm