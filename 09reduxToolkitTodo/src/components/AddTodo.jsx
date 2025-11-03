import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../featurs/todo/todoSlice'

function AddTodo() {

    const [input, setInput] = useState()
    const dispatch = useDispatch()

    const todoHindler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }

    return (
        <form onSubmit={todoHindler}>
            <input type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder='Add todo...'
            />
            <button id='saveBtn' type='submit'>Save</button>
        </form>
    )
}

export default AddTodo