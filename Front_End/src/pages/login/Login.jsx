import React,{useRef} from 'react'
import "./login.css"
import {Link} from "react-router-dom"
import { useContext } from 'react';
import axios from 'axios';
import { Context } from "../../context/Context";


export default function Login() {
    const userRef=useRef();
    const passRef=useRef();
    const {dispatch, isFetching} = useContext(Context);
    
    const handleSubmit=async(e)=>{
        e.preventDefault();
        dispatch({type:"LOGIN_START"});
        try {
            const res=await axios.post("auth/login",{
                username:userRef.current.value,
                password:passRef.current.value
            });
            dispatch({type:"LOGIN_SUCCESS",payload:res.data});
        } catch (error) {
            dispatch({type:"LOGIN_FAILURE"});
        }
    }
    return (
        <div className="login">
            <span className='loginTitle'>Login</span>
            <form action="" className="loginform" onSubmit={handleSubmit}>
                <label>Username</label>
                <input  placeholder='User' ref={userRef}/>
                <label>Password</label>
                <input type="password" placeholder='Password' ref={passRef} />
            <button className="loginButton" type='submit' disabled={isFetching}>Login</button>
            </form>
            <button className="loginRegisterButton"><Link className="link" to="/register">Register</Link></button>
        </div>
    )
}
