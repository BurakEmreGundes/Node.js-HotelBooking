const router=require("express").Router()
const generalController=require("../controllers/generalController")
const authMiddleware=require("../middlewares/authMiddleware")
const Booking=require("../models/booking.model")
const getRoomTypes=require("../config/get-room-types")


router.get("/", function(req, res){
    res.render("index")
})

router.post("/add-booking",generalController.createBooking)



router.get("/admin-panel",authMiddleware,(req,res)=>{
    res.render("./admin/index",{layout:"./layout/admin-layout"})
})

router.get("/admin/add-room-type",authMiddleware,(req,res)=>{
    res.render("./admin/add-room-type",{layout:"./layout/admin-layout",saveState:3,saveStateMessage:""})
})
router.get("/admin/add-room",authMiddleware,async (req,res)=>{
    let roomTypes=await getRoomTypes()
    res.render("./admin/add-room",{layout:"./layout/admin-layout",saveState:3,saveStateMessage:"",roomTypes})
})

router.get("/home",(req,res)=>{
    res.render("index")
})
router.get("/contact",(req,res)=>{
    res.render("contact")
})
router.get("/admin/search-booking",authMiddleware,(req,res)=>{
    res.render("./admin/search-booking",{layout:"./layout/admin-layout",saveState:3,saveStateMessage:""})
})
router.get("/admin/update-room-type",authMiddleware,async (req,res)=>{
    let roomTypes=await getRoomTypes()
    res.render("./admin/update-room-type",{layout:"./layout/admin-layout",saveState:3,saveStateMessage:"",roomTypes:roomTypes})
})
router.get("/admin/search-room-type-detail",authMiddleware,async (req,res)=>{
    let roomTypes=await getRoomTypes()
    res.render("./admin/search-room-type-detail",{layout:"./layout/admin-layout",saveState:3,saveStateMessage:"",roomTypes:roomTypes})
})




router.get("/booking-form",(req,res)=>{
    res.render("booking-form",{
        BookingName:"",
        BookingEmail:"",
        BookingAdults:"",
        BookingChildrens:""
    })
})


router.post("/booking-form",(req,res)=>{
    res.render("booking-form",{
        BookingName:req.body.BookingName,
        BookingEmail:req.body.BookingEmail,
        BookingAdults:req.body.BookingAdults,
        BookingChildrens:req.body.BookingChildrens
    })
})



module.exports=router