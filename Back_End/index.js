const express = require("express");
const mongoose=require("mongoose");
require('dotenv').config();

const app = express();


const connect= () => {
    console.log("connection to DB started");
    return mongoose.connect(process.env.CONNECTION_URL);
}

const server=app.listen(5000,async()=>{
    try {
        await connect();
        console.log("connection to DB Successful");
    } catch (error) {
        console.log("connection to DB failed "+error.message);
    }  
});