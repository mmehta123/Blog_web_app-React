import React from 'react';
import "./post.css"
import { Link } from "react-router-dom";


export const Post = ({ post }) => {
    const PF="http://localhost:5000/images/";
    return (
        <div className='post'>
            <img className="postImg" alt="post img" src={post.photo ? `${PF+post.photo}` : "https://images.pexels.com/photos/281260/pexels-photo-281260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} />
            <div className='postInfo'>
                <div className="postCats">
                    {
                        post.categories.map((c, i) => (
                            <span key={i} className="postCat">{c}</span>
                        ))
                    }
                </div>
                <Link to={`/post/${post._id}`} className="link">
                    <span className="postTitle">{post.title}</span>
                </Link>
                <hr />
                <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
                <p className="postDesc">{post.desc}</p>
            </div>
        </div>
    )
}
