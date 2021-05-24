const mongoose =require ("mongoose")
const slugify=require("slugify")

const roomTypeSchema=new mongoose.Schema({
    roomType:{
        type:String,
        minLength:3,
        required:true
    },
    roomServices:{
        type:[String],
        required:true
    },
    roomDescription:{
        type:String,
        required:true
    },
    roomImages:{
        type:[String],
        required:true,
        maxLength:8
    },
    slugify:{
        type:String,
        unique:true,
        require:true
    }
    

},{collection:'roomType',timestamps:true});


 
roomTypeSchema.pre("validate",function(next){
  
        this.slugify=slugify(this.roomType,{lower:true,strict:true})
    

    next()
})

const RoomType=new mongoose.model("RoomType",roomTypeSchema)


module.exports=RoomType


