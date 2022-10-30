const jwt = require("jsonwebtoken")
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const ApplicationModel = require("../model/ApplicationModel")
const cloudinary = require('../utils/cloudinary')
const dotenv = require('dotenv').config()

//Add Application

const ApplyForm = asyncHandler(async (req, res) => {

    const user = req.user._id
    console.log(req.body,"**************")
    console.log(user)
    const { firstname, lastname, email, phone, place, district, state, idproof } = req.body

    // if (!firstname || !lastname || !email || !phone || !place || !district || !state || !idproof) {
    //     res.status(400)
    //     throw new error("Please fill the fields")
    // }   
    //check if user exist
    try { 
        console.log("inside try");
        const IdImage = await cloudinary.uploader.upload(req.files.IdImage[0].path)
        const userImage = await cloudinary.uploader.upload(req.files.userImage[0].path)
   
        const newform = new ApplicationModel({ 
            userId:user,
            firstname:req.body.firstname,
            lastname:req.body.lastname,
            email:req.body.email,
            phone:req.body.phone,
            place:req.body.place,
            state:req.body.state,
            district:req.body.district,
            status:req.body.status,
            idproof:req.body.idproof,
            IdImage:IdImage.url,
            userImage:userImage.url

        })
        await newform.save()

        res.status(200).json({
            success: true,
            message: "form applied successfully"

        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "Error appliying host form",
            success: false,
            error:error
           
        })
        
    }
})

const ApplicationStatus = asyncHandler(async (req, res) => {
    console.log("enter get status");
    const userId = req.user.id
    try {

        const getStatus = await ApplicationModel.findOne({ user: userId })
        // console.log(getStatus)
        if (!getStatus) {
            res.json({ status: false })
        }
        res.json({ status: true, data: getStatus.status, id: getStatus.id })

    } catch (error) {

    }


})

       



module.exports = { ApplyForm, ApplicationStatus }