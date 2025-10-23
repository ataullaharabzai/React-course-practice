import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Developer() {

  const user = useLoaderData()
  console.log(user)

  return (
    <div className='developr_container'>
      <div className="userImag">
        <img src={user.avatar_url} alt="Ataullah Photo" width={350} />
      </div>
      <div className="userInfo">
        <span id='userName'>{user.name}</span>
        <p id='userBio'>{user.bio}</p>
        <div className="loc_foll">
          <span>Location: {user.location}</span>
          <span>Followers: {user.followers}</span>
          <span>Contact me: ataullaharabzai4@gmail.com</span>
        </div>
      </div>
    </div>
  )
}

export default Developer