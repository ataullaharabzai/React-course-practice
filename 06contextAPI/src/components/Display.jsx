import React, { useContext } from 'react'
import myContext from '../contexts/UserContext'

function Display() {

  const { user } = useContext(myContext)

  if (!user) return <div>No user found</div>
  if (!user.password && !user.username) return <div>Password and Username is must</div>;

  return (
    <>
      <div>
        Welcom {user.username}
      </div>
      <p>Your password is: {user.password}</p>
    </>
  )
}

export default Display