import * as React from 'react'
import api from './api'

interface Post {
    title: string
}

export default function App() {
    const [posts, setPosts] = React.useState<Post[]>([])

    React.useEffect(() => {
        api.get('/posts')
            .then(response => {
                console.log(response.data)
                setPosts(response.data)
            })
            .catch(error => {
                console.error(error)
            })
    }, [])

    return <h1>Hello, World!</h1>
}