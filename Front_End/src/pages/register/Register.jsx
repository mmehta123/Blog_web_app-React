import React from 'react'
import "./register.css"
import {Link} from "react-router-dom";

export default function Register() {
    return (
        <div className="register">
            <span className='registerTitle'>Register</span>
            <form action="" className="registerform">
                <label>Username</label>
                <input type="text" placeholder='Username ' />
                <label>Email</label>
                <input type="email" placeholder='Email' />
                <label>Password</label>
                <input type="password" placeholder='Password' />
            <button className="registerButton">Register</button>
            </form>
            <button className="registerLoginButton"><Link className='link' to="/login">Login</Link></button>
        </div>
    )
}
