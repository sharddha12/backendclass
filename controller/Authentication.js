const express=require('express');
const Authentication=require('../model/Authentication');


const bcrypt=require('bcrypt');

exports.createAuthentication=async(req,res)=>

    {
        const {email,password}=req.body;
        if(!email || !password){
            return res.status(400).json({error:"email and password are required"});
        }
        const hashedpassword=await bcrypt.hash(password,10);
        const authentication=new Authentication({
            email,
            password:hashedpassword,
        })
        try{
            await authentication.save();
            res.status(201).json(authentication);
        }catch(err){
            res.status(400).json({error:err.message});
        }

}