import React from 'react'
import "./TopBar.css";
import { Link } from "react-router-dom"
import { Context } from '../../context/Context';
import { useContext } from 'react';

export const TopBar = () => {
    const { user,dispatch } = useContext(Context);
    const handleLogout=()=>{
        dispatch({type:"LOGOUT"});
    }
    console.log(user)
    return (
        <div className='top'>
            <div className="topLeft">
                <i className="topIcon fa-brands fa-facebook"></i>
                <i className="topIcon fa-brands fa-twitter"></i>
                <i className="topIcon fa-brands fa-instagram"></i>
                <i className="topIcon fa-brands fa-linkedin"></i>
            </div>

            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link className='link' to="/">
                            Home
                        </Link>
                    </li>
                    <li className="topListItem">
                        <Link className='link' to="#">
                            Profile
                        </Link>
                    </li>
                    <li className="topListItem">
                        <Link className='link' to="/about">
                            About
                        </Link>
                    </li>
                    <li className="topListItem">
                        <Link className='link' to="/contact">
                            Contact
                        </Link>
                    </li>
                    <li className="topListItem">
                        <Link className='link' to="/write">
                            Write
                        </Link>
                    </li>
                    <li className="topListItem" onClick={handleLogout}>
                        <Link className='link' to="/login">
                            {user && "Logout"}
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="topRight">
                {
                    user ?
                        <img src={user.profilePic} alt="user"
                            className="topImage" /> :
                        <ul className="topList">
                            <li className="topListItem">
                                <Link className='link' to="register">Register</Link>
                            </li>
                            <li className="topListItem">
                                <Link className='link' to="login">Login</Link>
                            </li>
                        </ul >
                }
                <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}
