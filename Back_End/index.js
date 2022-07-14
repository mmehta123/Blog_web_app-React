const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();
const path = require("path");
const authRoute = require('./Routes/auth.route');
const userRoute = require('./Routes/user.route');
const postRoute = require('./Routes/post.route');
const categoryRoute = require('./Routes/category.route');
const multer = require("multer");

const app = express();
app.use(express.json());

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./images");
    },
    filename: (req, file, cb) => {
        cb(null, "image123.jpeg");
    },
});

const upload = multer({ storage: storage });

app.post("/upload", upload.single("file"), (req, res) => {
    res.status(200).json("file uploaded successfully");
});

app.use('/auth', authRoute);
app.use('/users', userRoute);
app.use('/posts', postRoute);
app.use('/categories', categoryRoute);




const connect = () => {
    console.log("connection to DB started");
    return mongoose.connect(process.env.CONNECTION_URL);
}

const server = app.listen(5000, async () => {
    try {
        await connect();
        console.log("connection to DB Successful");
    } catch (error) {
        console.log("connection to DB failed " + error.message);
    }
});