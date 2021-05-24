const RoomType=require("../models/room.type.model")

const getRoomTypes=require("../config/get-room-types")




exports.create=async (req,res)=>{

    try{
        const roomImagesArray=[];

        for(let i=0;i<req.files.length;i++){
            roomImagesArray.push(req.files[i].filename)
        }

        const gelenBilgiler={
            roomType:req.body.roomType,
            roomServices:req.body.roomServices.split(","),
            roomDescription:req.body.roomDescription,
            roomImages:roomImagesArray
        }
      
     
       const roomType=new RoomType(gelenBilgiler)
        await roomType.save()
        res.render("./admin/add-room-type.ejs",{layout:"./layout/admin-layout.ejs",saveState:true,saveStateMessage:"Oda Başarıyla Eklendi"})
    }catch(e){
      
        res.render("./admin/add-room-type.ejs",{layout:"./layout/admin-layout.ejs",saveState:false,saveStateMessage:"Oda İsminin Daha Önceden Eklenmediğine Dikkat Ediniz! Resim sayısı en fazla 8 olabilir!"})
    }
}

exports.getOneRoomType=async (req,res)=>{
    //BURASI SLUGİFY İLE ÇALIŞACAK
    try{
    const roomTypeDetail=await RoomType.findOne({_id:req.params.roomTypeId})
    res.send(roomTypeDetail)
 
    }catch(error){
        res.send(error.message)
    }
}

exports.getAllRoomType=async (req,res)=>{
    try{
        const roomTypes=await RoomType.find()
        // res.send(roomTypeDetail)
        res.send(roomTypes)
      }catch(error){
          res.send(error.message)
      }
}

exports.getOneRoomAndUpdate=async (req,res)=>{
    try {
        let roomTypes=await getRoomTypes()
        console.log(req.body)
        const roomType=await RoomType.findByIdAndUpdate(req.body.includeRoomType,{roomType:req.body.roomType,
            roomServices:req.body.roomServices.split(","),
            roomDescription:req.body.roomDescription},{new:true})
        res.render("./admin/update-room-type.ejs",{layout:"./layout/admin-layout.ejs",saveState:true,saveStateMessage:"Oda Başarıyla Güncellendi",roomTypes:roomTypes})

    } catch (error) {
        res.render("./admin/update-room-type.ejs",{layout:"./layout/admin-layout.ejs",saveState:false,saveStateMessage:"Oda Güncellenemedi",roomTypes:roomTypes})
    }

   
}



exports.deleteRoomTypeImage=async (req,res)=>{
    try {
        const roomType=await RoomType.findOne({slugify:req.body.roomType})
       let newRoomImages = roomType.roomImages.filter((element)=>{
            if(element!=req.body.imageName){
                return element
            }
        })

        const newRoomType=await RoomType.findByIdAndUpdate(roomType._id,{roomImages:newRoomImages},{new:true})
        res.send({
           saveState:true,
            saveStateMessage:"Resim Başarıyla Silindi",
            roomImages:newRoomType.roomImages
        })
  
    } catch (error) {
        res.send({
            saveState:false,
            saveStateMessage:"Resim Silme İşlemi Başarısız",
            roomImages:[]
        })
    }
}

exports.getOneRoomTypeImages=async (req,res)=>{
    try {
        
        const roomType=await RoomType.findOne({slugify:req.body.roomType})
        res.render("./admin/update-room-type-image",{layout:"./layout/admin-layout.ejs",saveState:true,saveStateMessage:"Resimler Başarıyla Getirildi",roomType:roomType})
    } catch (error) {
        res.render("./admin/update-room-type-image",{layout:"./layout/admin-layout.ejs",saveState:false,saveStateMessage:"Resimler Getirilemedi",roomType:roomType})
    }
}