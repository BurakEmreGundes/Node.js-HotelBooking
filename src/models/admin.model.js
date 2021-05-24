const mongoose=require("mongoose");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");

const adminSchema=new mongoose.Schema({
    name:{
        type:String,
        minLength:3,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    }
},{collection:"admins",timestamps:true})



adminSchema.pre("save",async function(next){
    this.password=await bcrypt.hash(this.password,10);
    next()
})

adminSchema.methods.generateJWT=async function(){
    const token=await jwt.sign({_id:this._id},"secret-key",{expiresIn:"2h"})
    return token
}

adminSchema.statics.adminLogin=async (email,password)=>{

 const admin= await Admin.findOne({email:email})

 if(admin){
     const validatePassword=await bcrypt.compare(password,admin.password)
     if(!validatePassword){
         throw Error("Şifre Hatalı");
     }else{
         return admin;
     }
 }else{
     throw Error("Kullanıcı Bulunamadı");
 }

}



const Admin=new mongoose.model("Admin",adminSchema);

module.exports=Admin;