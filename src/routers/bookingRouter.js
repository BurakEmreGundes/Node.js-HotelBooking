const router=require("express").Router()
const bookingController=require("../controllers/bookingController")
const authMiddleware=require("../middlewares/authMiddleware")


router.get("/",authMiddleware,bookingController.list)
router.get("/booking-detail/",authMiddleware,bookingController.getOneBookingByUniqKey)

router.get("/delete-booking",bookingController.deleteBooking)





module.exports=router