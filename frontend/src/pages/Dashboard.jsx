
import React from "react"
import { useState, useEffect } from 'react'
import { FaSignInAlt } from 'react-icons/fa'
import { FaUser } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useLocation, useNavigate, Navigate } from "react-router-dom"
import { logout, reset } from "../redux/features/Auth/authSlice"
import { toast } from 'react-toastify'


import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import { CardActionArea } from '@mui/material';

import { Grid, AppBar, Toolbar, Typography, Tab, Tabs, Button, useMediaQuery, useTheme } from "@mui/material"
import CarRentalIcon from '@mui/icons-material/CarRental'
import DrawerComp from "../components/DrawerComp"
const PAGES = ["products", "services", "About", "Contact Us",]


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
      <React.Fragment>
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
        
        <Grid sx={{margin:"80px"}}>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="/static/images/cards/contemplative-reptile.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        </Grid>
      </React.Fragment>
    </>
  )
}

export default Dashboard
