import React from 'react'
import "./singlePost.css"

export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img src="https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg?auto=compress&cs=tinysrgb&w=1000" alt=""
                    className="singlePostImg" />
                <h1 className="singlePostTitle">
                    Lorem ipsum dolor sit amet consectetur
                    <div className="singlePostEdit">
                        <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
                        <i className="singlePostIcon fa-regular fa-trash-can"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">
                        Author: <b>Kevin</b>
                    </span>
                    <span className="singlePostDate">1 hour ago</span>
                </div>
                <p className="singlePostDesc">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure earum fugit suscipit,
                    alias nulla magnam quo sapiente architecto corrupti itaque sed volupt atum error.
                    Amet provident in itaque sit, temporibus laborum, aliquam suscipit excepturi dicta eaque eos odio harum id maxime tenetur fuga adipisci,
                    voluptatum enim mollitia consequatur perspiciatis quasi. Voluptate error fuga in eos. Facere soluta, laborum tenetur harum ducimus expedita.
                    Harum autem reprehenderit officiis nostrum possimus expedita odit voluptatem.
                </p> 
            </div>
        </div>
    )
}
