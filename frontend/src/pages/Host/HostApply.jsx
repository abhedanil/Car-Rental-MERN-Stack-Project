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
        <AppBar sx={{ background: "#478e00778" }}>
          <Toolbar>

            <CarRentalIcon sx={{ width: "50px", height: "50px" }} />
            {isMatch ? (
              <>
                <Typography>
                  rent-UP
                </Typography>
                <DrawerComp />
              </>
            ) : (

              <>
                <Typography>Rent-UP</Typography>
                <Tabs textColor="inherit" value={value}
                  onChange={(e, value) => setValue(value)}
                  indicatorColor="secondary" >
                  {
                    PAGES.map((page, index) => (
                      <Tab key={index} label={page} />
                    ))
                  }
                </Tabs>
                {user ? (
                  <>
                    <Link to="/becomeHost"><Button sx={{ marginLeft: 'auto' }} variant="contained" onClick={toLogin} >Become A Host</Button></Link>
                    <Button sx={{ marginLeft: 'auto' }} variant="contained" onClick={toLogin} >{user.name}</Button>
                    <Button sx={{ marginLeft: "20px" }} variant="contained" onClick={onLogout}>Logout</Button>
                  </>

                ) : (
                  <>
                    <Button sx={{ marginLeft: 'auto' }} variant="contained" onClick={toLogin} > Login</Button>
                    <Button sx={{ marginLeft: "20px" }} variant="contained" onClick={toSignup}>Signup</Button>
                  </>
                )}



              </>
            )}

          </Toolbar>

        </AppBar>
        <ApplyForm/>
    </>
  )
}

export default HostApply
