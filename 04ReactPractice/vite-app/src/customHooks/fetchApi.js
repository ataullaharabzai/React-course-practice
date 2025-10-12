import { useEffect, useState } from "react";

export function useFetchApi(url) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null) 

    useEffect(() => {
        async function fetchApi() {
            try {
                const res = await fetch(url)
                const output = await res.json()
                setData(output)
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }
        }
        fetchApi()
    }, [url])

    return { data, loading, error }
}

// async function fetchApi() {
//     try {
//         const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
//         const data = await res.json()
//         console.log(data)
//     } catch (error) {
//         console.log("error data not found")
//     }
// }
// fetchApi()