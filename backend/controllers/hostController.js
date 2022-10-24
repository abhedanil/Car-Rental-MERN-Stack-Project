const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const cloudinary = require('../utils/cloudinary')
const carModel = require('../model/CarModel')


const addNewCar =asyncHandler(async (req,res)=>{

    try{    

        console.log("inside add car try")
        console.log(req.body,"11111111111111111111111")
        const user= req.user._id
        const carimage = await cloudinary.uploader.upload(req.files.carimage[0].path)
        const RCimage = await cloudinary.uploader.upload(req.files.RCimage[0].path)

        
        //instance of car
        const car= new carModel({
            carname: req.body.carname,
            companyName:req.body.companyName,
            cartype:req.body.cartype,
            carimage:carimage.url,
            RCimage:RCimage.url,
            OwnerName:user,
            seatCapacity:req.body.seatcapacity,
            fueltype:req.body.fueltype,
            transmission:req.body.transmission,
            rentPerDay:req.body.rentperday,
            yom:req.body.yom,
            location:req.body.location,
            district:req.body.district,
        })
        //save car
        await car.save()
        res.status(201).json({
            car,
            success:true,
            
        })
        console.log(car)
    }catch(err){
        console.log(err)
        res.status(400).json({
            success:false,
            message:"Couldn't save in database"
        })
    }  
})

const getMyCars = asyncHandler(async(req,res)=>{

    const user= req.user._id
    try{
        const mycars = await carModel.find({OwnerName:user})
        res.status(200).json({
            success:true,
            mycars:mycars

        })

    }catch(error){

    }


})

module.exports ={addNewCar,getMyCars}
