const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const cors=require("cors");
const authRoute = require('./Routes/auth.route');
const userRoute = require('./Routes/user.route');
const postRoute = require('./Routes/post.route');
const categoryRoute = require('./Routes/category.route');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

// Multer upload
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

// routes
app.use('/auth', authRoute);
app.use('/users', userRoute);
app.use('/posts', postRoute);
app.use('/categories', categoryRoute);


const connect = () => {
    console.log("connection to DB started");
    return mongoose.connect(process.env.CONNECTION_URL);
}
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, async () => {
    try {
        await connect();
        console.log("connection to DB Successful on Port "+ PORT);
    } catch (error) {
        console.log("connection to DB failed " + error.message);
    }
});