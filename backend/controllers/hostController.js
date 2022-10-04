const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const cloudinary = require('../utils/cloudinary')
const carModel = require('../model/CarModel')


const addNewCar =asyncHandler(async (req,res)=>{

    try{    
        const user= req.user._id
        const result = await cloudinary.uploader.upload(req.file.path)
       
        //instance of car
        const car= new carModel({
            carname: req.body.carname,
            cartype:req.body.cartype,
            image:result.url,
            OwnerName:user,
            seatCapacity:req.body.seatcapacity,
            fueltype:req.body.fueltype,
            yom:req.body.yom

        })
        //save car
        await car.save()
        res.status(201).json({
            car,
            success:true
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
