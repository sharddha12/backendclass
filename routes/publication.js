const publication=require("../controller/Publication");
const express=require("express");
const router=express.Router();
router.post("/add",publication.addPublication);
router.get("/get",publication.getPublications);
module.exports=router;