import React from 'react'
import myContext from './UserContext'


function UserContextProvider({ children }) {

    const [user, setUser] = React.useState('')

    return (
        <myContext.Provider value={{user, setUser}}>
            {children}
        </myContext.Provider>
    )
}

export default UserContextProvider