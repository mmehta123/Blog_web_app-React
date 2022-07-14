const express = require('express');
const router = express.Router();
const PostModel = require("../Models/post.model");


// create Post
router.post('/', async (req, res) => {
    try {
        const newPost = await PostModel.create(req.body);
        return res.status(200).json(newPost);
    } catch (e) {
        return res.status(400).json({ message: "Error While creating Post" });
    }
});

// Update Post
router.put('/:id', async (req, res) => {
    const post = await PostModel.findById(req.params.id);
    try {
        if (post.username === req.body.username) {
            try {
                const updatedPost = await PostModel.findByIdAndUpdate(req.params.id, {
                    $set: req.body
                }, { new: true });
                return res.status(200).json(updatedPost);
            } catch (e) {
                return res.status(400).json({ message: "Error While creating Post" });
            }
        } else {
            return res.status(404).json({ message: "You don't have permission to update this post." });
        }
    } catch (e) {
        return res.status(400).json({ message: "Something went wrong" });
    }
});

// Delete Post
router.delete("/:id", async (req, res) => {
    const post = await PostModel.findById(req.params.id);
    try {
        if (post.username === req.body.username) {
            try {
                await PostModel.findByIdAndDelete(req.params.id);
                return res.status(200).json({ message: "Post Deleted Successfully"});
            } catch (e) {
                return res.status(400).json({ message: "Error While deleting Post" });
            }
        } else {
            return res.status(404).json({ message: "You don't have permission to delete this post" });
        }
    } catch (e) {
        return res.status(400).json({ message: "Something went wrong" });
    }
});

// Get single post
router.get('/:id', async (req, res) => {
    try {
        const post = await PostModel.findById(req.params.id);
        return res.status(200).json(post);
    } catch (error) {
        return res.status(500).json({ message: "Error while getting Post" });
    }
});

// Get all posts of users if exists or all the posts
router.get('/', async (req, res) => {
    const username=req.query.user;
    const cat=req.query.cat;
    try {
        let posts;
        if(username){
            posts=await PostModel.find({username});
        }else if(cat){
            posts=await PostModel.find({categories:{
                $in:[cat]
            }});
        }else{
            posts=await PostModel.find();
        }
        return res.status(200).json(posts);
    } catch (error) {
        return res.status(500).json({ message: "Error while getting Post" });
    }
});

module.exports = router;