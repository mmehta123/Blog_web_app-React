import React from 'react';
import "./post.css"

export const Post = () => {
    return (
        <div className='post'>
            <img className="postImg" alt="post" src="https://images.pexels.com/photos/281260/pexels-photo-281260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
            <div className='postInfo'>
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Tech</span>
                </div>
                <span className="postTitle">Title</span>
                <hr />
                <span className="postDate">1 hour ago</span>
                <p className="postDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, totam!
                    Corrupti expedita odio ducimus, ad ipsum nisi voluptates iste laboriosam.
                    Corrupti expedita odio ducimus, ad ipsum nisi voluptates iste laboriosam.
                    </p>
            </div>
        </div>
    )
}
