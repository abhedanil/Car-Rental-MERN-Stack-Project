const express = require('express')
const router = express.Router()
const { ApplyForm, ApplicationStatus} = require('../controllers/applicationController')
const {protect} = require('../Middleware/AuthMiddleware')

router.post('/newApplicationform',protect,ApplyForm)
router.get('/getStatus',protect,ApplicationStatus)


   

module.exports =router


   
 