
import React from "react"
import { useState, useEffect } from 'react'
import { FaSignInAlt } from 'react-icons/fa'
import { FaUser } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Header from '../components/Header'
import { applicationStatus } from '../features/HostForm/formSlice'
import "../components/dashboard.css"
import Banner from "../components/Banner"
import { AppBar, Toolbar, Typography, Tab, Tabs, Button, useMediaQuery, useTheme } from "@mui/material"
import CarRentalIcon from '@mui/icons-material/CarRental'
import DrawerComp from "../components/DrawerComp"
const PAGES = ["products", "services", "About", "Contact Us",]


function Dashboard() {

  const dispatch = useDispatch()

  const { user } =
    useSelector(
      (state) => state.auth
    )

  const [value, setValue] = useState()
  const theme = useTheme()
  console.log(theme)
  const isMatch = useMediaQuery(theme.breakpoints.down('md'))
  console.log(isMatch)
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
                      PAGES.map((page,index)=>(
                        <Tab key={index} label={page}/>
                      ))
                    }
                </Tabs>
                <Button sx={{ marginLeft: 'auto' }} variant="contained" >Login </Button>
                <Button sx={{ marginLeft: '10px' }} variant="contained">Signup</Button>

              </>
            )}

          </Toolbar>

        </AppBar>

      </React.Fragment>
    </>
  )
}

export default Dashboard
