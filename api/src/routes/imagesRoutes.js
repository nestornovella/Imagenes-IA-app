const { Router } = require("express")
const { sendData } = require("../controllers/imagesController")

const router = Router()

router.post("/", sendData)

module.exports = router