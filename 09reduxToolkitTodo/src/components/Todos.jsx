import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteTodo } from '../featurs/todo/todoSlice'

function Todos() {

    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

    return (
        <>
            {todos.map((todo) => (
                <li key={todo.id}>
                    {todo.text}
                    <button id='removeBtn' onClick={() => dispatch(deleteTodo(todo.id))}>X</button>
                </li>
            ))}
        </>
    )
}

export default Todos