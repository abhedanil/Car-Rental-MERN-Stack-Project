import { Box } from '@mui/system'
import React,{useState} from 'react'

import NavBar from '../components/Navbar'

import { Typography,TableRow ,TableHead,TableContainer,TableCell,TableBody,Table ,Button, Paper } from '@mui/material';

import { Link } from 'react-router-dom';
import axios from 'axios';



import EventSeatIcon from '@mui/icons-material/EventSeat';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import SpeedIcon from '@mui/icons-material/Speed';


function UserBookings() {


    const [Items, setItems] = useState()

    return (
        <div>
            <NavBar />
            <Box sx={{ mt: "10vh", backgroundColor: "#f7f4f4", width: "100%", ml: "10vw", height: "100vh" }}>
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
                                <Box>
                                    <Typography variant="h1">No bookings to show</Typography>
                                </Box>
                            </>
                        )}

                    </Table>
                </TableContainer>
            </Box>
        </div>
    )
}

export default UserBookings