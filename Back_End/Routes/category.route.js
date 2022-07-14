const express = require('express');
const router = express.Router();
const CategoryModel=require("../Models/category.model");

router.post("/",async(req,res)=>{
    try{
        const cat=await CategoryModel.create(req.body);
        return res.status(200).json(cat);
    }catch(err){
        return res.status(400).json({message:err.message});
    }
});
router.get("/",async(req,res)=>{
    try{
        const cat=await CategoryModel.find();
        return res.status(200).json(cat);
    }catch(err){
        return res.status(400).json({message:err.message});
    }
});
module.exports=router;