import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    const users = useLoaderData()

    console.log(users)

    return (
        <>
            <div className="myimag">
                <img src={users.avatar_url} alt="Hitesh Photo" width={150} />
            </div>
            <div className='githubPage hh'>
                <h3>{users.name}</h3>
                <p>{users.bio}</p>
            </div>
        </>
    )
}

export default Github