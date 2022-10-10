const express = require('express')
const router = express.Router()
const {protect} = require('../Middleware/AuthMiddleware')
const {addNewCar,getMyCars} =require('../controllers/hostController')

const upload=require("../utils/multer")


router.post('/addNewCar',protect,upload.fields([
    { name: "RCimage", maxCount: 1 },
    { name: "carimage", maxCount: 1 },
]),addNewCar)
router.get('/myCars',protect,getMyCars)


module.exports = router