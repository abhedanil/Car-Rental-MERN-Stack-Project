const express = require('express')
const router = express.Router()
const {registerUser,loginUser,getMe,getAllCars,getMyCars,getSingleCar,orders,verifyPayment} = require('../controllers/userController')
const {protect} = require('../Middleware/AuthMiddleware')

router.post('/',registerUser)
router.post('/login',loginUser)
router.get('/me',protect,getMe)
router.get('/getAllCars',getAllCars)
router.post('/searchMyCars',getMyCars)
router.get('/getSingleCar/:carid',getSingleCar)
router.post('/orders',protect,orders)
router.post('/verify',verifyPayment)



module.exports =router