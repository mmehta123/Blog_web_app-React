import React, { useRef } from 'react'
import "./register.css"
import { Link,useNavigate } from "react-router-dom";
import axios from 'axios';
import { useState } from 'react';

export default function Register() {
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error,setError] = useState("");
    const navigate=useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        try{    
            const res=await axios.post("/auth/register",{
                username,email,password
            });
            res.data && navigate("/login")
        }catch(e){
            setError(e);
            console.log(error.message)
        }
    }
    return (
        <div className="register">
            <span className='registerTitle'>Register</span>
            <form className="registerform">
                <label>Username</label>
                <input type="text" placeholder='Username' onChange={(e) => setUserName(e.target.value)} />
                <label>Email</label>
                <input type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                <label>Password</label>
                <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
                <button className="registerButton" onClick={handleRegister}>Register</button>
            </form>
            <button className="registerLoginButton"><Link className='link' to="/login">Login</Link></button>
        </div>
    )
}
