import React from 'react'
import { useFetchApi } from '../customHooks/fetchApi'

function PostList() {
    const {data, loading, error} = useFetchApi(`https://jsonplaceholder.typicode.com/posts`)

    if (loading) return <div>Loading...</div>
    if (error) return <div>{error.message}</div>
    if (!Array.isArray(data)) return <div>Data not found</div>

    return (
        <>
            <div>
                <h1>Post List</h1>
                <ul>
                    {data.map((item) => (
                        <li key={item.title}>{item.body}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default PostList