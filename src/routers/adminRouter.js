const router=require("express").Router()
const adminController=require("../controllers/adminController")


router.post("/",adminController.create)





module.exports=router