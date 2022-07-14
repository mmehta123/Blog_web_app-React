const express = require('express');
const router = express.Router();
const UserModel = require("../Models/user.model");
const PostModel = require("../Models/post.model");
const bcrypt = require("bcrypt");

// Update
router.put('/:id', async (req, res) => {
    if (req.body.userId === req.params.id) {
        if (req.body.password) {
            req.body.password = await bcrypt.hash(req.body.password, 8);
        }
        try {
            const updatedUser = await UserModel.findByIdAndUpdate(req.params.id, {
                $set: req.body
            });
            return res.status(200).json(updatedUser);
        } catch (e) {
            return res.status(400).json({ message: "Error While Updating User" });
        }
    }
    else {
        return res.status(400).json({ message: "you don't have permission to update" });
    }
});

// Delete
router.delete("/:id", async (req, res) => {

    if (req.body.userId === req.params.id) {
        try {
            const user = await UserModel.findById(req.params.id);
            if (!user) {
                return res.status(400).json({ message: 'User not found' });
            }
            try {
                // this will delete the user and its associated posts
                await PostModel.deleteMany({ username: user.username });
                await UserModel.findByIdAndDelete(req.params.id);
                return res.status(200).json('user is deleted');
            } catch (e) {
                return res.status(400).json({ message: "Error While deleting User" });
            }
        }
        catch (error) {
            return res.status(400).json({ message: "Something went wrong" });
        }
    }
    else {
        return res.status(400).json({ message: "you don't have permission to delete" });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const user= await UserModel.findById(req.params.id);
        const {password,...others}=user._doc;
        return res.status(200).json(others)
    } catch (error) {
        return res.status(500).json({ message: "user not found"});
    }
});

module.exports = router;