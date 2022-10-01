import React from 'react'
import { useState } from 'react'
import "./write.css"
import {useNavigate} from "react-router-dom";
 import axios from "axios"

export default function Write() {
    const [title,setTitle]=useState("");
    const [desc,setDesc]=useState("");
    const [file,setFile]=useState("");
    const {username}=JSON.parse(localStorage.getItem("user"));
    const navigate=useNavigate();

    const handleSubmit=async(e)=>{
        e.preventDefault();
        const newPost={username,desc,title};
        if (file){
            const data=new FormData();
            const filename=Date.now()+file.name;
            data.append("name",filename)
            data.append("file",file)
            newPost.photo=filename;
            try{
                await axios.post("/upload",data);
            }catch(e) {

            }
        }
        const res=await axios.post("/posts",newPost);
        navigate("/post/"+res.data._id);
    }

    return (
        <div className="write">
            {
                file ?
                    <img src={URL.createObjectURL(file)} alt="file" className='writeImage'/>
                :
                <img src="https://images.pexels.com/photos/55787/pexels-photo-55787.jpeg?auto=compress&cs=tinysrgb&w=600" className='writeImage' alt="" />
            }
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor='fileInput'>
                        <i className="writeIcon fa-solid fa-plus"></i>
                    </label>
                    <input type="file" id='fileInput' style={{display: 'none'}} onChange={e=>setFile(e.target.files[0])}/>
                    <input type="text" placeholder='Title' className='writeInput' autoFocus={true} onChange={(e)=>setTitle(e.target.value)}/>
                </div>
                <div className="writeFormGroup">
                    <textarea className="writeInput writeText" type="text" placeholder="Tell your story..." onChange={(e) => setDesc(e.target.value)} /> 
                </div>
                <button className="writeSubmit" onClick={handleSubmit}>Publish</button>
            </form>
        </div>
    )
}
