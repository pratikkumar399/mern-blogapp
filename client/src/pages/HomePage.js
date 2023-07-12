import React, { useEffect, useState } from 'react'
import Posts from '../components/Posts'

const HomePage = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('http://localhost:8080/post').then(response => {
            response.json().then(posts => {
                setPosts(posts);
            });
        });
    }, []);

    return (
        <>
            {
                posts.length > 0 && posts.map(post => {
                    return (
                        <Posts {...post} />
                    )
                }
                )
            }
        </>
    )
}

export default HomePage
