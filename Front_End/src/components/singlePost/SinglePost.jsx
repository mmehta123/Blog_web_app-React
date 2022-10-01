import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import "./singlePost.css"

export default function SinglePost({ currentPost }) {
    console.log(currentPost)
    const { pathname } = useLocation();
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img className="postImg" alt="post img" src={currentPost.photo ? `http://localhost:5000/images/${currentPost.photo}` : "https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg?auto=compress&cs=tinysrgb&w=1000"} />
                <h1 className="singlePostTitle">
                    {currentPost.title}
                    <div className="singlePostEdit">
                        <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
                        <i className="singlePostIcon fa-regular fa-trash-can"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">
                        Author:
                        <Link to={`/?user=${currentPost.username}`} className="link">
                            <b>{currentPost.username}</b>
                        </Link>
                    </span>
                    <span className="singlePostDate">{new Date(currentPost.createdAt).toDateString()}</span>
                </div>
                <p className="singlePostDesc">{currentPost.desc}</p>
            </div>
        </div>
    )
}
