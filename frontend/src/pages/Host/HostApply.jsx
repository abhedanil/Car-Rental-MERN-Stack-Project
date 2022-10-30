import React from 'react'
import ApplyNav from './ApplyNav'
import ApplyForm from './ApplyForm';
import CarRentalIcon from '@mui/icons-material/CarRental'
import DrawerComp from "../../components/DrawerComp"
import {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { Grid, AppBar, Toolbar, Typography, Tab, Tabs, Button, useMediaQuery, useTheme } from "@mui/material"
import { logout, reset } from "../../redux/features/Auth/authSlice"
import { Link, useLocation, useNavigate, Navigate } from "react-router-dom"
import NavBar from '../../components/Navbar';


function HostApply() {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const PAGES = ["products", "services", "About", "Contact Us",]

 const {user}= 
 useSelector(
     (state)=> state.auth
 )
 const toLogin = () => {

  navigate("/login")
}
const toSignup = () => {
  navigate('/register')
}
const [value, setValue] = useState()
const theme = useTheme()
console.log(theme)
const isMatch = useMediaQuery(theme.breakpoints.down('md'))
console.log(isMatch)

const onLogout = () => {
  dispatch(logout())
  dispatch(reset())
  navigate("/login")
}


  return (
    <>
        <NavBar/>
        <ApplyForm/>
    </>
  )
}

export default HostApply
