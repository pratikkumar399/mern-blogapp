import React from 'react'
import { Link } from 'react-router-dom'
import { formatISO9075 } from 'date-fns'

const Posts = ({ _id, title, summary, cover, content, createdAt, author }) => {
    return (
        <div className="post">
            <div className='image'>

                <Link to={`/post/${_id}`}>
                    <img src={'https://mernapp-4kgs.onrender.com/' + cover} alt="" />
                </Link>


            </div>
            <div className="texts">
                <h2>
                    <Link to={`/post/${_id}`}>
                        {title}
                    </Link>
                </h2>
                <p className="info">
                    <Link to="/" className="author">{author?.username}</Link>
                    <time>{formatISO9075(new Date(createdAt))}</time>
                </p>
                <p className='summary'>
                    {summary}
                </p>
            </div>
        </div>

    )
}

export default Posts
