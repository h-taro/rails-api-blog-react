import * as React from 'react'
import api from './api'
import styles from './app.module.scss'

interface Post {
    id: number
    title: string
}

export default function App() {
    const [posts, setPosts] = React.useState<Post[]>([])

    React.useEffect(() => {
        api.get('/posts')
            .then((response) => {
                const posts: Post[] = response.data.data.map((post: Post) => {
                    return {
                        id: post.id,
                        title: post.title
                    }
                })
                setPosts(posts)
            })
            .catch(error => {
                console.error(error)
            })
    }, [])

    return (
        <>
            {
                posts.map((post) => {
                    return (
                        <div key={post.id} className={styles['my-component']} >
                            <h1>{post.title}</h1>
                        </div>
                    )
                })
            }
        </>
    )
}
