const Admin=require("../model/Admin");
const bcrypt=require('bcrypt');

exports.createAdmin=async(req,res)=>{
    const {email,password}=req.body;
    const hashedpassword=await bcrypt.hash(password,salt);
    const admin=new Admin({
        email,
        password:hashedpassword,
    })
    try{
        await admin.save();
        res.status(201).json(admin);
    }catch(err){
        res.status(400).json({error:err.message});
    }
    }
