const mongoose=require("mongoose")


mongoose.connect("mongodb://localhost/HotelBooking",{useCreateIndex:true,useUnifiedTopology:true,useNewUrlParser:true,useFindAndModify:false})
.then(_=>console.log("Veri Tabanına Bağlandık Boklu Bezelye...!"))
.catch(err=>console.log(err))