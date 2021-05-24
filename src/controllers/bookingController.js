const Booking=require("../models/booking.model")


exports.list=async (req,res)=>{
    
    try{
        Booking.find({}).sort({createdAt:-1}).populate("roomType").exec((err,bookings)=>{
            if(err){
                res.render("./admin/list-bookings",{layout:'./layout/admin-layout.ejs',saveState:false,saveStateMessage:"Rezervasyon Getirme İşleminde Bir Hata Oluştu",bookings:new Booking(),deleteState:req.query.state,deleteMessage:req.query.deleteMessage})
            }else{
                if(bookings.length>0){
                    res.render("./admin/list-bookings",{layout:'./layout/admin-layout.ejs',saveState:true,saveStateMessage:"Rezervasyonlar Listelendi",bookings:bookings,deleteState:req.query.state,deleteMessage:req.query.deleteMessage})
                }else{ 
                    res.render("./admin/list-bookings",{layout:'./layout/admin-layout.ejs',saveState:false,saveStateMessage:"Rezervasyon Bulunamadı",bookings:bookings,deleteState:req.query.state,deleteMessage:req.query.deleteMessage})
                }
            }
        })
       
    }catch(e){
        res.send(e.message)
    }
  
}



exports.getOneBookingByUniqKey=async (req,res)=>{
  
         Booking.findOne({bookingUniqCode:req.query.bookingUniqCode}).populate("roomType").exec((err,booking)=>{
             if(err){
              
             res.render("./admin/search-booking",{layout:'./layout/admin-layout.ejs',saveState:false,saveStateMessage:"Rezervasyon Getirme İşleminde Bir Hata Oluştu",booking:new Booking()})
             }else{
                if(booking){

                    res.render("./admin/booking-detail",{layout:'./layout/admin-layout.ejs',saveState:true,saveStateMessage:"Rezervasyon Getirildi",booking})
                 }else{
                    res.render("./admin/search-booking",{layout:'./layout/admin-layout.ejs',saveState:false,saveStateMessage:"Rezervasyon Bulunamadı",booking:new Booking()})
                 }
             }
         })
       
        
   
}


exports.deleteBooking=async(req,res)=>{
    try{
       const booking =await Booking.findOneAndDelete({bookingUniqCode:req.query.bookingUniqCode})
   
       res.redirect(`/room/cameFromBookingForDeleteDates?roomNumber=${booking.roomNumber}&selectedDates=${JSON.stringify(booking.roomSelectedDates)}`)
    }catch(e){
        res.send(e.message)
    }

}

