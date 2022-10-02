import React, { useState } from 'react'
import { useContext } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { Context } from '../../context/Context'
import axios from 'axios';
import "./singlePost.css"
import { useEffect } from 'react';

export default function SinglePost({ currentPost }) {
    const navigate = useNavigate();
    const { user } = useContext(Context);
    const { pathname } = useLocation();
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [updateMode, setUpdateMode] = useState(false)
    const currentPostId = pathname.split("/")[2];
    // currentPost._id===pathname.split("/")[2];
    useEffect(() => {
        setTitle(currentPost.title);
        setDesc(currentPost.desc);
    }, [currentPost])

    const handleDelete = async () => {
        await axios.delete("/posts/" + currentPostId, { data: { username: user.username } });
        navigate("/");
    }

    const handleEdit = (e) => {
        e.preventDefault();
        setUpdateMode(true);
    }
    const handleUpdate = async () => {
        try {
            await axios.put(`/posts/${currentPostId}`, { title, desc, username: user.username });
            setUpdateMode(false);
        } catch (e) {

        }
    }

    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img className="postImg" alt="post img" src={currentPost.photo ? `http://localhost:5000/images/${currentPost.photo}` : "https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg?auto=compress&cs=tinysrgb&w=1000"} />
                {updateMode ? <input type="text" value={title} placeholder="edit title" className='singlePostTitleInput' onChange={(e) => setTitle(e.target.value)} /> :

                    (<h1 className="singlePostTitle">
                        {title}
                        {
                            currentPost.username === user?.username &&
                            <div className="singlePostEdit">
                                <i className="singlePostIcon fa-regular fa-pen-to-square" onClick={handleEdit} ></i>
                                <i className="singlePostIcon fa-regular fa-trash-can" onClick={handleDelete}></i>
                            </div>
                        }
                    </h1>)
                }
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">
                        Author:
                        <Link to={`/?user=${currentPost.username}`} className="link">
                            <b>{currentPost.username}</b>
                        </Link>
                    </span>
                    <span className="singlePostDate">{new Date(currentPost.createdAt).toDateString()}</span>
                </div>
                {
                    updateMode ? <textarea rows="10" className="singlePostDescInput" placeholder="update Description" value={desc} onChange={(e) => setDesc(e.target.value)} /> :
                        <p className="singlePostDesc">{desc}</p>
                }
                {
                    updateMode &&
                <button className='singlPostButton' onClick={handleUpdate}>Update</button>
                }
            </div>
        </div>
    )
}
