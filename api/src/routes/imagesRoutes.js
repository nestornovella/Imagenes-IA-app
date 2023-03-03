const { Router } = require("express")
const { sendData } = require("../controllers/imagesController")

const router = Router()

router.use("/", sendData)



module.exports = router