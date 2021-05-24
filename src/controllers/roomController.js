const Room=require("../models/room.model")

// getRoomTypes
const getRoomTypes =require("../config/get-room-types")



exports.create=async (req,res)=>{
    try{
        let roomTypes=await getRoomTypes()
        const room=new Room(req.body)
        await room.save()
        res.render("./admin/add-room",{layout:"./layout/admin-layout.ejs",saveState:true,saveStateMessage:"Oda Başarıyla Eklendi!",roomTypes:roomTypes})
    }catch(e){
        res.render("./admin/add-room",{layout:"./layout/admin-layout.ejs",saveState:false,saveStateMessage:"Oda Numarasının Kayıtlı Olmadığına Dikkat Ediniz!",roomTypes:roomTypes})
    }
}


// O Türdeki Bütün Odaları Getirme
exports.getRoomByRoomType=(req,res)=>{
    Room.find({includeRoomType:req.params.id}).populate("includeRoomType").exec((err,rooms)=>{
     if(err){
         res.send(err.message)
     }else{
         if(rooms){
             res.send(rooms)               
         }else{
             res.send("Bu türde bir oda bulunmuyor")
         }
     }
 })
 }


 exports.getRoomBookingsByRoomNumber=(req,res)=>{
     Room.find({roomNumber:req.params.roomNumber}).populate("includeRoomType").exec((err,room)=>{
         if(err){
             res.send(err)
         }else{
             if(room){
                 res.send(room)
             }else{
                 res.send("Oda Bulunamadı")
             }
         }
     }) 
 }

 exports.updateRoomBookingsByRoomNumber=async (req,res)=>{
    Room.findOne({roomNumber:req.body.roomNumber}).populate("includeRoomType").exec((err,room)=>{
        if(err){
            res.send(err)
        }else{
            if(room){

                const newBookingDates=room.roomBookingDates.map(function(element){
                    //dizi elemanı 
                    if(req.body.bookingDate!=element){
                        return element
                    }
                })

                Room.findOneAndUpdate({roomNumber:req.body.roomNumber},{roomBookingDates:newBookingDates},{new:true},(err,newRoom)=>{
                    if(err){
                        res.send(err)
                    }else{
                        if(newRoom){
                            res.send(newRoom)
                        }else{
                            res.send("Oda Bulunamadı")
                        }
                    }
                })
            }else{
                res.send("Oda Bulunamadı")
            }
        }
    }) 
 }

 exports.deleteRoomBookingDatesByBooking=(req,res)=>{
  

    let selectedBookingDates=JSON.parse(req.query.selectedDates)
    let roomNumber=req.query.roomNumber
    

          
   
     Room.findOne({roomNumber:roomNumber},(err,room)=>{
        if(err){
            res.send("Oda silinirken hata oluştu lütfen gidip odadan bu tarihleri siliniz : "+selectedBookingDates)
        }else{
            let newArray=room.roomBookingDates.filter((element)=>{
                if(!selectedBookingDates.includes(element)){
                    return element
                }
            })

            Room.findOneAndUpdate({roomNumber:room.roomNumber},{roomBookingDates:newArray},{new:true},(err,room)=>{
                if(err){
                  res.redirect(`/booking?state=false&deleteMessage=Oda silinirken hata oluştu lütfen gidip odadan bu tarihleri siliniz : ${JSON.stringfy(selectedBookingDates)}`)
                }else{
                    res.redirect("/booking?state=true&deleteMessage=Rezervasyonu Silme İşlemi Başarıyla Gerçekleşti")
                }
            })
        }
    })
 
   
 }





 


