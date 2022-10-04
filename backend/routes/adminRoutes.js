const express = require('express')
const router = express.Router()
const {getAllUsers,getAllApplications,changeHostStatus,changeUserToHost,Userdetails} = require('../controllers/adminController')
const {protect} = require('../Middleware/AuthMiddleware')

router.get('/getAllUsers',protect,getAllUsers)
router.get('/getAllApps',protect,getAllApplications)
router.post('/changeHostStatus',protect,changeHostStatus)
router.post('/makeHost',protect,changeUserToHost)
router.get("/getUserDetails",protect,Userdetails)

module.exports = router