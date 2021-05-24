const Admin=require("../models/admin.model")




exports.create=async (req,res)=>{
    try {
        const admin=new Admin(req.body)
        await admin.save()
        res.send("Admin başarıyla eklendi")
    } catch (error) {
        res.send(error.message)
    }
}