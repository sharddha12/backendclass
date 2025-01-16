const book=require("../controller/book");
const express=require("express");   
const router=express.Router();
router.post("/add",book.addBook);
module.exports=router;
