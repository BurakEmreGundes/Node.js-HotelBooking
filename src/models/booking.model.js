const mongoose=require('mongoose')



const bookingSchema=new mongoose.Schema({
    roomType:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"RoomType",
    },
    roomNumber:{
        type:Number,
        required:true,
    },
    roomSelectedDates:{
        type:[String],
        required:true
    },
    roomChildrenInfo:{
        type:Number,
        default:0
    },
    roomAdultInfo:{
        type:Number,
        default:0
    },
    userName:{
        type:String,
        required:true
    },
    userEmail:{
        type:String,
        required:true
    },
    userPhone:{
        type:String,
        maxLength:11
    },
    bookingComments:{
        type:String,
        required:false,
        default:"Otelimizinden hiçbir istekde bulunmadınız. İyi tatiller dileriz."
    },
    bookingUniqCode:{
        type:String,
        required:true,
        unique:true
    }
},{collection:"Bookings",timestamps:true})





const Booking=new mongoose.model("Booking",bookingSchema)


module.exports=Booking




//// burdada oda tipi oda numarası ve o anki rez bilgileri  yer alıcak