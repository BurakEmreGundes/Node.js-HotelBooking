const Admin=require("../models/admin.model")


exports.login_get=(req,res)=>{
    res.render("./admin/login",{layout:"./layout/admin-layout"})
}

exports.login_post=async (req,res)=>{
    try {
   
        const admin=await Admin.adminLogin(req.body.Email,req.body.Password)
        const token=await admin.generateJWT()
        res.cookie("jwt",token,{maxAge: 900000, httpOnly: true })
        res.redirect("/admin-panel")
    } catch (error) {
        res.send(error.message)
    }
   
}

