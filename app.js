const express = require('express');
const app=express()
const expressLayouts=require("express-ejs-layouts")
const cookieParser=require("cookie-parser")
const path=require("path")
const multer=require("multer")
const main=require("./src/config/mailer")
const dotenv=require("dotenv")
require("./src/db/db-connection")




/// routers
const roomRouter=require("./src/routers/roomRouter")
const roomTypeRouter=require("./src/routers/roomTypeRouter")
const generalRouter=require("./src/routers/generalRouter")
const adminAuthRouter=require("./src/routers/adminAuthRouter")
const adminRouter=require("./src/routers/adminRouter")
const bookingRouter=require("./src/routers/bookingRouter")

///  Deluxe Id : 60a5776605f64250241c5854




app.get("/mail",(req,res)=>{
    main("","","32423432-burak","Burak Gündeş","burakemregundes@gmail.com","05528002734","Single Room","2","0","28-05-2021","30-05-2021","Odamı gelmeden önce temizler misiniz lütfen")
    res.send("sea")
})


app.use(express.static(path.resolve(__dirname, 'public')));
app.use("/uploads",express.static(path.join(__dirname, '/src/uploads')))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.set("view engine","ejs")
app.set("views",path.resolve(__dirname,"./src/views"))
app.use(expressLayouts)
app.use(cookieParser())




app.use("/",generalRouter);
app.use("/room-type",roomTypeRouter)
app.use("/room",roomRouter)
app.use("/booking",bookingRouter)


app.use("/admin-auth",adminAuthRouter)
app.use("/admin",adminRouter)




app.listen(3030,_=>{
    console.log(`Server 3030 portunu dinliyor....!`);
})