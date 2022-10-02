import React, { useContext, useState } from 'react'
import { SideBar } from "../../components/sideBar/SideBar"
import "./settings.css";
import { Context } from "../../context/Context";
import axios from 'axios';


export default function Settings() {
    const { user,dispatch } = useContext(Context);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [file, setFile] = useState("");
    const [success, setSuccess] = useState(false);
    const PF="http://localhost:5000/images/"
    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({type:"UPDATE_START"});
        const updatedUser = { userId: user._id, email, password, username };
        if (file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename)
            data.append("file", file)
            updatedUser.profilePic = filename;
            try {
                await axios.post("/upload", data);
            } catch (e) {
            }
        }
        try{
            const res=await axios.put("/users/" + user._id, updatedUser);
            dispatch({ type: "UPDATE_SUCCESS" ,payload:res.data});
            setSuccess(true);
        }catch(e){
            dispatch({ type: "UPDATE_FAILED" });
        }
    }

    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Account</span>
                    <span className="settingsDeleteTitle">Delete Account</span>
                </div>
                <form action="" className="settingsForm">
                    <label htmlFor="">Profile Picture</label>
                    <div className="settingsPP">
                        <img className='settingsPPImg' alt="profile " src={file? URL.createObjectURL(file): (PF+user.profilePic)} />
                        <label htmlFor="fileInput">
                            <i className="settingsPPIcon fa-solid fa-user"></i>
                        </label>
                        <input type="file" id="fileInput" style={{ display: 'none' }} onChange={e => setFile(e.target.files[0])} />
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder={user.username} onChange={(e) => setUsername(e.target.value)} />
                    <label>Email</label>
                    <input type="email" placeholder={user.email} onChange={(e) => setEmail(e.target.value)} />
                    <label>Password</label>
                    <input type="password" placeholder="New Password" onChange={(e) => setPassword(e.target.value)} />
                    <button className="settingsSubmit" onClick={handleSubmit} >Update</button>
                    {
                        success &&
                    <p style={{color:"green" ,textAlign:"center",marginTop:'5px'}}>user updated successfully</p>
                    }
                </form>
            </div>
            <SideBar />
        </div>
    )
}
