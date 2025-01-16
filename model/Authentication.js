const mongoose=require("mongoose");
const Authentication=new mongoose.Schema({
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,

    },
    
});
module.exports=mongoose.model("Authentication",Authentication,);