import React from 'react';
import "./posts.css";
import {Post} from "./post/Post";

export const Posts = ({posts}) => {
  return (
    <div className="posts">
      {
        posts.map((post,index) => (
          <Post post={post} key={index}/>
        ))
      }
    </div>
  )
}
