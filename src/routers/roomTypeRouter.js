const router=require("express").Router()
const roomTypeController=require("../controllers/roomTypeController")
const authMiddleware=require("../middlewares/authMiddleware")
const multerConfig=require("../config/multer_config")


router.get("/",roomTypeController.getAllRoomType)

router.get("/:roomTypeId",roomTypeController.getOneRoomType)

router.post("/update",roomTypeController.getOneRoomAndUpdate)

router.post("/delete-room-type-image",roomTypeController.deleteRoomTypeImage)

router.post("/update-room-type-images/",roomTypeController.getOneRoomTypeImages)

router.post("/add-room-type", multerConfig.array("roomImages",12) ,roomTypeController.create)








module.exports = router