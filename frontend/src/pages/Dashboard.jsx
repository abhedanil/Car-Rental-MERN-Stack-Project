
import React from "react"
import { useState, useEffect } from 'react'
import { FaSignInAlt } from 'react-icons/fa'
import { FaUser } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useLocation, useNavigate, Navigate } from "react-router-dom"
import { logout, reset } from "../redux/features/Auth/authSlice"
import { toast } from 'react-toastify'

import HeroSection from "../components/HeroSection"
import  NavBar from "../components/Navbar"


import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import { CardActionArea } from '@mui/material';

import { Grid, AppBar, Toolbar, Typography, Tab, Tabs, Button, useMediaQuery, useTheme } from "@mui/material"
import CarRentalIcon from '@mui/icons-material/CarRental'
import DrawerComp from "../components/DrawerComp"
const PAGES = ["Your Bookings", "services", "About", "Contact Us",]


function Dashboard() {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { user } =
    useSelector(
      (state) => state.auth
    )

  const [value, setValue] = useState()
  const theme = useTheme()
  console.log(theme)
  const isMatch = useMediaQuery(theme.breakpoints.down('md'))
  console.log(isMatch)

  const toLogin = () => {

    navigate("/login")
  }
  const toSignup = () => {
    navigate('/register')
  }


  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate("/login")
  }

  return (
    <>

    <NavBar/>
  
    <HeroSection/>
  
  
    </>
  
  )
}

export default Dashboard
