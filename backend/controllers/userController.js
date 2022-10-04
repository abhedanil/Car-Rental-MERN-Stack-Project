
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const UserModel = require('../model/UserModel')
const dotenv = require('dotenv').config()
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
    return jwt.sign({id}, process.env.JWT_SECRET,{
        expiresIn:'30d'
    })
}

module.exports = { registerUser,loginUser,getMe}