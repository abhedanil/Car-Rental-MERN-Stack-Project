
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const UserModel = require('../model/UserModel')
const CarModel = require('../model/CarModel')
const BookingModel=require('../model/BookingModel')
const dotenv = require('dotenv').config()
const Razorpay = require('razorpay')
const crypto = require('crypto')
//Register new user
//POST/api/users
const registerUser = asyncHandler(async(req,res)=>{
   
    const {name, email, password} = req.body
    console.log(name);
    if(!name || !email||!password){
        res.status(400)
        throw new Error("Please fill the fields")
    }
    //check if user exists
    const userExists = await UserModel.findOne({email})

    if(userExists){
        res.status(400)
        throw new Error('User already exist')
    }
    //Hash the password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password,salt)

    //Create User

    const user = await UserModel.create({
        name,
        email,
        password:hashedPassword
    })
    if(user){
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email:user.email,
            token : generateToken(user._id)
        })
    }else{
        res.status(400)
        throw new Error('invalid user data')
    }

    res.json({ message: 'Register User '})
})

//Authenticate a user
// POST/api/users/login
const loginUser = asyncHandler(async(req,res)=>{
    const {email,password} = req.body
    
    //check for user email
    const user= await UserModel.findOne({email})
    console.log(user)
    if(user && (await bcrypt.compare(password,user.password))){
        res.json({
            _id: user.id,
            name: user.name,
            email:user.email,
            isAdmin:user.isAdmin,
            isHost:user.isHost,
            token : generateToken(user._id)
        })
    }else{
        res.status(400)
        throw new Error('Invalid Credentials')
    }
})

//Get user data
//GET /api/users/me
//@access private
const getMe = asyncHandler(async(req,res)=>{
    const {_id,name,email} = await UserModel.findById(req.user.id)

    res.status(200).json({
        id : _id,
        name,
        email
    })
    res.json({ message: 'User data display'})
})
   
//Generate JWT

const generateToken = (id) => {
    console.log(id,"66666666666")
    console.log(process.env.JWT_SECRET)
    return jwt.sign({id}, process.env.JWT_SECRET,{
        expiresIn:'30d'
    })
}

const getAllCars =asyncHandler(async(req,res)=>{
   
  
    try{  
    
        const cars = await CarModel.find({})

        if(cars){
        console.log(cars)   
        }
        res.status(200).json({
    
            cars,
 
            message :"cars fetch suucessfull" 
        }
        )
    }catch(error){

        res.status(400).json({
            error,

        })
    }

}) 

const getMyCars =asyncHandler(async(req,res)=>{

    console.log("inside get my cars")

    try{
        const cars= await CarModel.find({})
        if(cars){
            console.log(cars,"888888888")
        }
        res.status(200).status({
            cars,
            message:"cars found successfull"
        })
    }catch(error){
        console.log(error)
        res.status(400).json({
            error
        })
       
    }
})
  

const getSingleCar = asyncHandler(async(req,res)=>{
    const carid = req.params.carid
    console.log(carid)

    try{

        const singleCar= await CarModel.find({_id:carid})
        console.log(singleCar,"single")
        res.status(200).json({
            singleCar,
            message:"single car fetch successful"
        })
    }catch(error){
        console.log(error)
        res.status(400).json({
            error
        })
    }
})

const orders =asyncHandler(async(req,res)=>{
    console.log(req.body,"00000000")
    const bookingObj = BookingModel({
        carname:req.body.carname,
        startDate:req.body.startdate,
        endDate:req.body.endDate,
        totalDays:req.body.days,
        totalAmount:req.body.amount,
        user:req.user._id
    })

    const saved=  await bookingObj.save()
    if(saved){
        console.log(saved)
    }
    try{
        const instance = new Razorpay({
            key_id: process.env.RAZORPAY_KEY_ID,
            key_secret: process.env.RAZORPAY_KEY_SECRET,
          })


          const options = {
            amount: req.body.amount * 100, // 
            currency: "INR",
            receipt: "receipt#1",
            payment_capture: 0,
       // 1 for automatic capture // 0 for manual capture
          };
        instance.orders.create(options, async function (err, order) {
          if (err) {
            return res.status(500).json({
              message: "Something Went Wrong",
            });
          }
        return res.status(200).json(order);
       });

    }catch(error){
        console.log(error)
        res.status(500).json({message:"internal server error"})
    }
})     


const verifyPayment = asyncHandler(async(req,res)=>{

    try{
        console.log("entered verify")

        const {razorpay_order_id,
        razorpay_payment_id,
        razorpay_signature}= req.body
        
        const sign = razorpay_order_id + "|" + razorpay_payment_id
        var expectedSignature = crypto.createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
                                  .update(sign.toString())
                                  .digest('hex');
        
        if(razorpay_signature===expectedSignature)
        {     
            return res.status(200).json({
                message:"payment succesfull"
            })
        }
        else{
            return res.status(400).json({
                message:"invalid signature sent!"
            })
        }

    }catch(error){


        console.log(error)
        res.status(500).json({
            message:"internal server error"
        })
    }
})

module.exports = { registerUser,loginUser,getMe,getAllCars,getMyCars,getSingleCar,orders,verifyPayment}