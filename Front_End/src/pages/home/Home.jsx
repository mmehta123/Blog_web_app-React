import React from 'react';
import { useState } from 'react';
import { Header } from '../../components/header/Header'
import "./home.css"
import { Posts } from "../../components/posts/Posts";
import { SideBar } from '../../components/sideBar/SideBar'
import { useEffect } from 'react';
import axios from "axios";
import { useLocation } from 'react-router-dom';


const Home = () => {
  const [ posts, setPosts ] = useState([]);
  const {search}=useLocation();

  useEffect(()=>{
    const fetchPosts=async()=>{
      const res = await axios.get('/posts'+search);
      setPosts(res.data);
    }
    fetchPosts();
  },[search]);
  
  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts}/>
        <SideBar />
      </div>
    </>
  )
}

export default Home