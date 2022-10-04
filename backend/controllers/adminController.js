const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const dotenv = require('dotenv').config()
const UserModel = require('../model/UserModel')
const ApplicationModel = require('../model/HostApplicationModel')
const getAllUsers = asyncHandler(async(req,res)=>{
    try{
        const users = await UserModel.find({})
        console.log(users,"ddddddddddd") 
        res.status(200).json({
            message:'Users fetched succesfully',
            data:users,
            success:true
        })
    }catch(error){
        res.status(500).send({
            message:'Error getting users'
            

        })
    }
})
const getAllApplications = asyncHandler(async(req,res)=>{
    console.log("enter get all apps")
    try{
        const allApps= await ApplicationModel.find({})
        console.log(allApps)
        res.status(200).json({
            data:allApps,
            success:true
        })    
    }catch(error){
        throw new Error("error getting applications")
    }
}) 

const changeHostStatus= asyncHandler(async(req,res)=>{  
    // console.log("inside changeHoststatus");
    // console.log(req.body,"gfghfghfghfghf");
    const {formId} = req.body
    console.log(formId);
    try{
       const statusUpdated = await ApplicationModel.findByIdAndUpdate(
        formId,
        {$set:{status:"approved"}}
        ) 
        res.status(200).json({
            success:true,
            message:`approved`,

        })
       
    }catch(error){
        console.log(error)
        res.status(304).json({
            success:false,
            error
        })
    }
})


const changeUserToHost = asyncHandler(async(req,res)=>{
    const {userId} = req.body
    console.log(userId,"000000000000000000000000")
    try{
        const roleupdated = await UserModel.findByIdAndUpdate(
            userId,
            {$set:{isHost:true}}
        )

        res.status(200).json({
            success:true,
            message:"changed users role to host"
        })
        console.log(roleupdated,"iiiiiiiiiiiiiii")
    }catch(error){
        console.log(error)
        res.status(304).json({
            success:false,
            error
        })
     }
})

const Userdetails = asyncHandler(async(req,res)=>{
    const userid = req.user._id
    console.log(userid,"888888888888888")
    try{
        const details = await UserModel.find({_id:userid})
        res.status(200).json({
            success:true,
            message:"User found successfully",
            details
        })
    }catch(error){
        res.status(404).json({
            success:false,
            message:"error in finding user",
            error
        })
    }

})

module.exports = {getAllUsers,getAllApplications,changeHostStatus,changeUserToHost,Userdetails}