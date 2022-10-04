const express = require('express')
const router = express.Router()
const {protect} = require('../Middleware/AuthMiddleware')
const {addNewCar,getMyCars} =require('../controllers/hostController')

const upload=require("../utils/multer")


router.post('/addNewCar',protect,upload.single('image'),addNewCar)
router.get('/myCars',protect,getMyCars)


module.exports = router