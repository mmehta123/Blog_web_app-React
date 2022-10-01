const express = require('express');
const router=express.Router();
const UserModel=require("../Models/user.model");
const bcrypt=require("bcrypt");

// Register
router.post('/register',async(req,res)=>{
    try{
        console.log("Heil")
        const {username,email,password}=req.body;
        const hashedPassword=await bcrypt.hash(password,8);
        const user=await UserModel.create({
            username,email,password:hashedPassword
        });
        return res.status(200).json(user);
    }catch(e){
        console.log(e.message);
        return res.status(500).json({message: e.message});
    }
});


// Login
router.post("/login",async(req,res)=>{
    try {
        const user=await UserModel.findOne({username:req.body.username});
        if(!user ){
            return res.status(400).json({message:"user does not exist"});
        }
        const valid = await bcrypt.compare(req.body.password, user.password);
        if(!valid){
            return res.status(400).json({ message: "wrong credentials" });
        }
        const {password,...others}=user;
        res.status(200).json(others._doc);
    } catch (error) {
        return res.status(505).json({error:error.message});
    }
});

module.exports =router;