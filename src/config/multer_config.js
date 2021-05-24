const multer=require("multer")
const path=require("path")




const storage=multer.diskStorage({
    
    destination:function(req,file,cb){
        console.log("seaaaa");
        cb(null,path.join(__dirname,"../uploads/room-images"))
    },
    filename:function(req,file,cb){
    
        cb(null,Date.now()+"-"+file.originalname)
    }
})

const resimFileFilter=(req,file,cb)=>{
    console.log("buraya girdi");
    if(file.mimetype=='image/jpeg' || file.mimetype=='image/png' || file.mimetype=='image/jpg'){
        console.log("bufsagsads");
        cb(null,true)
    }else{
        console.log("yanlış girdi");
        cb(null,false)
    }
} 

const upload=multer({storage:storage,fileFilter:resimFileFilter})

module.exports=upload