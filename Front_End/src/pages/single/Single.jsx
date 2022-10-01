import React,{useEffect,useState}from 'react'
import { SideBar } from '../../components/sideBar/SideBar'
import SinglePost from '../../components/singlePost/SinglePost'
import "./single.css";
import axios from "axios";
import {useLocation} from 'react-router-dom';

export default function Single() {
    const location=useLocation();
    const currentId=(location.pathname.split('/')[2]);
    const [currentPost, setCurrentPost]=useState([]);
    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get(`/posts/${currentId}`);
            setCurrentPost(res.data);
        }
        getPost();
    }, [currentId]);
    return (
        <div className='single'>
            <SinglePost currentPost={currentPost}/>
            <SideBar/>
        </div>
    )
}
