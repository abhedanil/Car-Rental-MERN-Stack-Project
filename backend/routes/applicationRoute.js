const express = require('express')
const router = express.Router()
const { ApplyForm, ApplicationStatus} = require('../controllers/applicationController')
const {protect} = require('../Middleware/AuthMiddleware')
const upload=require("../utils/multer")

router.post('/newApplicationform',protect,upload.fields([
    { name: "IdImage", maxCount: 1 },
    { name: "userImage", maxCount: 1 },
]),ApplyForm)
router.get('/getStatus',protect,ApplicationStatus)


module.exports =router


   
 