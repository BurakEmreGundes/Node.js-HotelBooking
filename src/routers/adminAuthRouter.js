const router=require("express").Router()
const adminAuthController=require("../controllers/adminAuthController")


router.get("/login",adminAuthController.login_get)
router.post("/login",adminAuthController.login_post)




module.exports=router