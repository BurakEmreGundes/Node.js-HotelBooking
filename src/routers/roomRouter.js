const router=require("express").Router()
const roomController=require("../controllers/roomController")



router.post("/add-room",roomController.create)


router.get("/rooms/:id",roomController.getRoomByRoomType)

router.get("/bookings/:roomNumber",roomController.getRoomBookingsByRoomNumber)

router.patch("/updateBookingDates",roomController.updateRoomBookingsByRoomNumber)


router.get("/cameFromBookingForDeleteDates",roomController.deleteRoomBookingDatesByBooking)


module.exports=router