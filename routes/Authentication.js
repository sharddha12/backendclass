const express=require('express');
const router=express.Router();
const Authentication=require('../controller/Authentication');


router.post('/create',Authentication.createAuthentication);






module.exports=router;