const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const UserModel = require('../model/UserModel')
const dotenv = require('dotenv').config()

const protect = asyncHandler(async(req,res,next)=>{
console.log("SHSDHSHD");
    let token
    if(req.headers.authorization &&req.headers.authorization.startsWith('Bearer')){
        try{
            //Get tokens from header
            token = req.headers.authorization.split(' ')[1]
            
            //verify token
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
           
            
            req.user = await UserModel.findById(decoded.id).select('-password')
            console.log(req.user)
            next()
        }catch(error){
            console.log(error);
            res.status(401)
            throw new Error('Not authorized')
        }
    
    }
    if(!token){
        res.status(401)
        throw new Error('Not authorized, no token')
    }

})


module.exports = {protect}

