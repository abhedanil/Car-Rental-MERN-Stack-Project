import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import { useSelector } from 'react-redux'

import { Link } from 'react-router-dom';
import axios from 'axios';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Button } from '@mui/material';

import EventSeatIcon from '@mui/icons-material/EventSeat';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import SpeedIcon from '@mui/icons-material/Speed';



import TimeToLeaveIcon from '@mui/icons-material/TimeToLeave';
import MotionPhotosAutoIcon from '@mui/icons-material/MotionPhotosAuto';
import SettingsIcon from '@mui/icons-material/Settings';
import EvStationIcon from '@mui/icons-material/EvStation';

import ListGroup from 'react-bootstrap/ListGroup';

import FilterResult from './FilterResult';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),

];



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));



function FilterLayout() {

    const { user } = useSelector((state) => state.auth)
    const token = user.token



    const district = JSON.parse(localStorage.getItem('districtName'))
    console.log(district, "*********")

    const districtName = district.districtName



    const [isSuvActive, setSuvActive] = useState(false)
    const [isSedanActive, setSedanActive] = useState(false)
    const [isHatchbackActive, setHachbackActive] = useState(false)

    const [isManualActive, setManualActive] = useState(false)
    const [isAutomaticActive, setAutomaticActive] = useState(false)
    const [isElectricActive, setElectricActive] = useState(false)

    const [isLowtoHighActive, setLowToHighActive] = useState(false)
    const [isHightoLowActive, setHighToLowActive] = useState(false)

    const Suvselected = () => {
        setSuvActive(!isSuvActive)
        console.log(isSuvActive, "iiiiiiiiiiiiiiiiiiiiiiiiii33333")
    }

    const HatchbackSelected = () => {
        setHachbackActive(!isHatchbackActive)
        

    }
    const SedanSelected = () => {
        setSedanActive(!isSedanActive)

        console.log(isSedanActive)
    }
    const ManualSelected = () => {
        setManualActive(!isManualActive)
    }
    const AutomaticSelected = () => {
        setAutomaticActive(!isAutomaticActive)
    }
    const ElectricSelected = () => {
        setElectricActive(!isElectricActive)
    }

    const LowToHighSelected = () => {
        setLowToHighActive(!isLowtoHighActive)
    }
    const HighToLowSelected = () => {
        setHighToLowActive(!isHightoLowActive)
    }

    const [searchResult, setSearchResult] = useState([])
    const [Items, setItems] = useState(searchResult)
    const [transmissionFilters,setTransmissionFilters]= useState()
    const [carGroupFilters,setCarGroupFilters]= useState()
    const searchCar = async () => {

        try {

            const response = await axios.get('/api/users/getAllCars')
            if (response) {
                console.log(response.data.cars, "resssssssssssss555555")
                setSearchResult(response.data.cars)
                setItems(response.data.cars)
               console.log(Items,"caaa")
            }
        
        } catch (error) {
        }
    }


    useEffect(() => {
        searchCar()


    }, [])


    const filterByCarType = (carType) => {
   
        if (carType) {

            console.log(carType, "tttttttttttyyyyyyyyyyyypeeee")
            const updatedItems = Items.filter((curElem) => {
                return curElem.cartype === carType
            })
            setItems(updatedItems)
            setCarGroupFilters(updatedItems)
            console.log(Items, "itemmmmmmmmmmmmmmmmmmmmmmssssssss")
        }
        
        else{
            setItems(searchResult)
        }
    }   
    
    const filterByTransmissionType=(transmissionType)=>{
  
        if(transmissionType){
            if(carGroupFilters){

                const updatedItems= carGroupFilters.filter((curElem)=>{
                    return curElem.transmission === transmissionType
                })
                setItems(updatedItems)
            }
            else{
                const updatedItems= Items.filter((curElem)=>{
                    return curElem.transmission === transmissionType
                })
                setItems(updatedItems)
            }

        }
        else{
        
            setItems(searchResult)
          
        }
    }

    return (
        <div>
            <Box sx={{ mt: 9, flexGrow: 1, backgroundColor: '#bdc2c8', height: "100vh" }}>
                <Grid container spacing={1} sx={{ pl: 0, pr: 0 }}>
                    <Grid item xs={3}>
                        <Item sx={{ height: "100vh" }}>
                            <Grid>
                                <Typography sx={{ mt: 1, mb: 3 }}>Find Cars near Your location</Typography>

                                <Grid container  >
                                    <Grid Item xs={6}>
                                        <Item sx={{ m: .5, height: "10vh" }} >

                                            <Typography>Selected location</Typography>
                                            <Typography>{districtName}</Typography>




                                        </Item>
                                    </Grid>
                                    <Grid Item xs={6} >
                                        <Item sx={{ m: .5, height: "10vh" }} >
                                            <Typography sx={{ mt: 1, fontSize: "11px" }}>start-date:  </Typography>
                                            <Typography sx={{ fontSize: "12px" }}>end-date: </Typography>
                                        </Item>
                                    </Grid>
                                </Grid>


                            </Grid>
                            <Grid>
                                <Item sx={{ mt: 3, height: "8vh" }} >
                                    <Typography>Total time</Typography>
                                </Item>
                            </Grid>
                            <Typography sx={{ mt: 3, mb: 3 }}>Car Group</Typography>
                            <Grid container>
                                <Grid Item xs={4}>

                                    {isSedanActive ? (
                                        <>
                                            <Item sx={{ m: .5, height: "10vh", backgroundColor: "#d7df21" }} onClick={() => { SedanSelected();filterByCarType()  }}  >
                                                <TimeToLeaveIcon />
                                                <Typography >Sedan</Typography>
                                            </Item>

                                        </>) :
                                        (
                                            <>
                                                <Item sx={{ m: .5, height: "10vh" }} onClick={()=>{ SedanSelected();filterByCarType('sedan')}} >
                                                    <TimeToLeaveIcon />
                                                    <Typography >Sedan</Typography>
                                                </Item>
                                            </>
                                        )}


                                </Grid>
                                <Grid Item xs={4} >

                                    {isHatchbackActive ? (
                                        <>
                                            <Item sx={{ m: .5, height: "10vh", backgroundColor: "#d7df21" }} onClick={() => { HatchbackSelected(); filterByCarType() }} >
                                                <TimeToLeaveIcon />
                                                <Typography >Hatchback</Typography>
                                            </Item>

                                        </>) :
                                        (
                                            <>
                                                <Item sx={{ m: .5, height: "10vh" }} onClick={() => { HatchbackSelected(); filterByCarType('Hatchback') }}  >
                                                    <TimeToLeaveIcon />
                                                    <Typography >Hatchback</Typography>
                                                </Item>
                                            </>
                                        )}



                                </Grid>
                                <Grid Item xs={4} >
                                    {isSuvActive ? (

                                        <>
                                            <Item sx={{ m: .5, height: "10vh", backgroundColor: "#d7df21" }} onClick={()=>{Suvselected();filterByCarType()}} >
                                                <TimeToLeaveIcon />
                                                <Typography  >SUV</Typography>
                                            </Item>
                                        </>
                                                                               

                                    ) : (

                                        <>
                                            <Item sx={{ m: .5, height: "10vh", }}  onClick={()=>{Suvselected();filterByCarType('SUV')}} >
                                                <TimeToLeaveIcon />
                                                <Typography  >SUV</Typography>
                                            </Item>
                                        </>


                                    )
                                    }

                                </Grid>
                            </Grid>
                            <Typography sx={{ mt: 3, mb: 3 }}>Transmission</Typography>
                            <Grid container>
                                <Grid Item xs={4}>
                                    {isManualActive ? (

                                        <>
                                            <Item sx={{ m: .5, height: "10vh", backgroundColor: "#d7df21" }} onClick={()=>{ManualSelected();filterByTransmissionType()}} >
                                                <SettingsIcon />
                                                <Typography>Manual</Typography>
                                            </Item>
                                        </>
                                    ) : (
                                        <>
                                            <Item sx={{ m: .5, height: "10vh" }} onClick={()=>{ManualSelected();filterByTransmissionType('manual')}}>
                                                <SettingsIcon />
                                                <Typography>Manual</Typography>
                                            </Item>
                                        </>

                                    )}

                                </Grid>
                                <Grid Item xs={4} >
                                    {isAutomaticActive ? (
                                        
                                        <>
                                            <Item sx={{ m: .5, height: "10vh", backgroundColor: "#d7df21" }} onClick={()=>{AutomaticSelected();filterByTransmissionType()}} >
                                                <MotionPhotosAutoIcon />
                                                <Typography>Automatic</Typography>
                                            </Item>
                                        </>
                                    ) : (
                                        <>
                                            <Item sx={{ m: .5, height: "10vh" }} onClick={()=>{AutomaticSelected();filterByTransmissionType('Automatic')}}>
                                                <MotionPhotosAutoIcon />
                                                <Typography>Automatic</Typography>
                                            </Item>
                                        </>

                                    )}
                                </Grid>
                                <Grid Item xs={4} >
                                    {isElectricActive ? (

                                        <>
                                            <Item sx={{ m: .5, height: "10vh", backgroundColor: "#d7df21" }} onClick={ElectricSelected} >
                                                <EvStationIcon />
                                                <Typography>Electric</Typography>
                                            </Item>
                                        </>
                                    ) : (
                                        <>
                                            <Item sx={{ m: .5, height: "10vh" }} onClick={ElectricSelected}>
                                                <EvStationIcon />
                                                <Typography>Electric</Typography>
                                            </Item>
                                        </>

                                    )}
                                </Grid>
                            </Grid>

                        </Item>
                    </Grid>
                    <Grid item xs={9}>

                        <Grid>



                            <Item sx={{ height: "10vh" }}>


                                <Grid container >


                                    <Grid Item xs={2}>

                                        <Typography sx={{ mt: 2 }}>Sort by</Typography>

                                    </Grid>
                                    <Grid Item sx={{ mt: 0 }} xs={3} >
                                        {isLowtoHighActive ? (
                                            <>
                                                <Item sx={{ m: .5, height: "7vh", backgroundColor: "#d7df21" }} onClick={LowToHighSelected}>
                                                    <Typography>price:low to high </Typography>
                                                </Item>
                                            </>

                                        ) : (

                                            <>
                                                <Item sx={{ m: .5, height: "7vh" }} onClick={LowToHighSelected}>
                                                    <Typography>price:low to high </Typography>
                                                </Item>
                                            </>
                                        )}


                                    </Grid>
                                    <Grid Item sx={{ mt: 0 }} xs={3} >
                                        {isHightoLowActive ? (
                                            <>
                                                <Item sx={{ m: .5, height: "7vh", backgroundColor: "#d7df21" }} onClick={HighToLowSelected}>
                                                    <Typography>price:low to high </Typography>
                                                </Item>
                                            </>

                                        ) : (

                                            <>
                                                <Item sx={{ m: .5, height: "7vh" }} onClick={HighToLowSelected}>
                                                    <Typography>price:low to high </Typography>
                                                </Item>
                                            </>
                                        )}
                                    </Grid>
                                    <Grid Item xs={4} >

                                    </Grid>

                                </Grid>


                            </Item>
                        </Grid>
                        <Grid sx={{ mt: 2 }}>

                            <TableContainer sx={{ ml: 0, mb: 3 }} component={Paper} >
                                <Table sx={{ minWidth: 550 }} size="small" aria-label="a dense table">
                                    <TableHead>

                                    </TableHead>
                                    {Items ? (

                                        <>
                                            <TableBody >
                                                {Items?.map((car) => (
                                                    <TableRow
                                                        key={car.carname}
                                                    >
                                                        <TableCell sx={{ width: "250px" }} >
                                                            <img src={car.carimage} style={{ width: "150px", height: "100px" }} />
                                                        </TableCell>
                                                        <TableCell align="left" sx={{ mr: "5" }} >
                                                            <Typography variant="h5">{car.companyName} {car.carname}</Typography>
                                                            <Typography sx={{ mt: 1 }} > <EventSeatIcon sx={{ width: "17px" }} />  {car.seatCapacity}seater    <LocalGasStationIcon sx={{ width: "17px" }} /> {car.fueltype}    <SpeedIcon sx={{ width: "17px" }} />  {car.transmission}</Typography>
                                                        </TableCell>
                                                        {/*<TableCell align="center" ></TableCell>*/}
                                                        <TableCell align="center">{car.location} | {car.district}</TableCell>
                                                        <TableCell align="center" ><Typography sx={{ color: "black", fontWeight: "bold" }} variant="h6">{car.rentPerDay}₹</Typography></TableCell>
                                                        <TableCell align="center" ><Button variant="contained" color="success"><Link to={`/booking/${car._id}`}>Book now</Link></Button></TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </>
                                    ) : (
                                        <>
                                            <Typography>Nothing to show</Typography>
                                        </>
                                    )}

                                </Table>
                            </TableContainer>

                        </Grid>
                    </Grid>

                </Grid>
            </Box>
        </div>
    )
}

export default FilterLayout
