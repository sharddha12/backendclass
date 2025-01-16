const user=require("../controller/user");
const express=require("express");
const router=express.Router();
router.post("/create",user.createUser);
module.exports=router;