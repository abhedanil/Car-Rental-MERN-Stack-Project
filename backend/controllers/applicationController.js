const jwt = require("jsonwebtoken")
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const ApplicationModel = require("../model/ApplicationModel")
const dotenv = require('dotenv').config()

//Add Application

const ApplyForm = asyncHandler(async (req, res) => {
    console.log("inside apply form")
    const user = req.user._id
    console.log(user)
    const { firstname, lastname, email, phone, place, district, state, idproof } = req.body
    console.log(req.body, "ssssssssssssssssss");
    if (!firstname || !lastname || !email || !phone || !place || !district || !state || !idproof) {
        res.status(400)
        throw new error("Please fill the fields")
    }
    //check if user exist
    try {
        const newform = new ApplicationModel({ ...req.body, userId: user })
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
            error
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