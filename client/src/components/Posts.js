import React from 'react'
import { Link } from 'react-router-dom'

const Posts = () => {
    return (
        <div className="post">
            <div className='image'>
                <img src="https://images.pexels.com/photos/15746302/pexels-photo-15746302/free-photo-of-black-and-white-photo-of-a-tree-crown.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />

            </div>
            <div className="texts">
                <h2>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h2>
                <p className="info">
                    <Link to="/" className="author">Pratik Rai</Link>
                    <time>2023-07-07 18:09</time>
                </p>
                <p className='summary'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. At facere consectetur quam, aut similique vel, consequuntur
                </p>
            </div>
        </div>

    )
}

export default Posts
