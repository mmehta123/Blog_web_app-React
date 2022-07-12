import React from 'react'
import "./write.css"

export default function Write() {
    return (
        <div className="write">
            <img src="https://images.pexels.com/photos/55787/pexels-photo-55787.jpeg?auto=compress&cs=tinysrgb&w=600" className='writeImage' alt="" />
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor='fileInput'>
                        <i className="writeIcon fa-solid fa-plus"></i>
                    </label>
                    <input type="file" id='fileInput' style={{display: 'none'}}/>
                    <input type="text" placeholder='Title' className='writeInput' autoFocus={true} />
                </div>
                <div className="writeFormGroup">
                    <textarea className="writeInput writeText" type="text" placeholder="Tell your story..." /> 
                </div>
                <button className="writeSubmit">Publish</button>
            </form>
        </div>
    )
}
