import React from 'react'
import { useFetchApi } from '../customHooks/fetchApi'

function UserList() {
    const { data, loading, error } = useFetchApi(`https://jsonplaceholder.typicode.com/posts`)

    if (loading) return <div>Loading...</div>
    if (error) return <div>ERROR {error.message}</div>
    if (!Array.isArray(data)) return <div>No data found</div>

    return (
        <>
            <div className='container'>
                <h2>User List</h2>
                <ul>
                    {data.map((item) => (
                        <li key={item.title}>{item.title}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default UserList