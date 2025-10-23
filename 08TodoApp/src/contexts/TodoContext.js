import React, { createContext, useContext } from "react";

const TodoContext = createContext({
    todos: {
        id: 1,
        todo: 'todo message',
        completed: false
    },

    addTodo: (todo) => { },
    deleteTodo: (id) => { },
    updateTodo: (id, todo) => { },
    toggelComplete: (id) => { }
})

export const TodoProvider = TodoContext.Provider

export const useTodo = () => {
    return useContext(TodoContext)
}