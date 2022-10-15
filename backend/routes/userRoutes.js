const express = require('express')
const router = express.Router()
const {registerUser,loginUser,getMe,getSearchCars} = require('../controllers/userController')
const {protect} = require('../Middleware/AuthMiddleware')

router.post('/',registerUser)
router.post('/login',loginUser)
router.get('/me',protect,getMe)
router.post('/searchCars',getSearchCars)
      
module.exports =router