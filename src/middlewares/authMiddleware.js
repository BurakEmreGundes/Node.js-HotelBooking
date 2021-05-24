const jwt=require("jsonwebtoken")
const Admin=require("../models/admin.model")


 const authMiddleware = async (req,res,next)=>{
    const token=req.cookies.jwt
    try {
        if(token){
           const result=await jwt.verify(token,"secret-key")

         const admin=await Admin.findById({_id:result._id})
         if(admin){
            req.adminId=admin._id
            next()
         }else{     
            res.redirect("/") 
         }

        }else{
            res.redirect("/")
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports =authMiddleware