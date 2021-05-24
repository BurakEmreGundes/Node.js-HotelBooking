const mongoose =require ("mongoose")


const roomSchema=new mongoose.Schema({
    includeRoomType:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"RoomType",
    },
    roomNumber:{
        type:Number,
        required:true,
        unique:true
    },
    roomBookingDates:{
        type:[String],
        default:[]
    },
},{collection:'room',timestamps:true});


const Room=new mongoose.model("Room",roomSchema)


module.exports=Room


