import React,{useEffect,useState} from 'react'
import {useSelector} from 'react-redux'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Button, Typography } from '@mui/material';

import EventSeatIcon from '@mui/icons-material/EventSeat';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import SpeedIcon from '@mui/icons-material/Speed';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import axios from 'axios';
import { Link } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


function FilterResult({props}) {

console.log(props,"pppppppppppppppppp")

const [searchResult,setSearchResult]=useState([])

const [Items,setItems] = useState(searchResult)

const filterWithCategory = (props)=>{
        const updatedItems = searchResult.filter((curElem)=>{
            return curElem.cartype === props
        })
        setItems(updatedItems)

}

      const searchCar =async()=>{
 
        try{

            const response = await axios.get('/api/users/getAllCars')
            if(response){
                console.log(response.data.cars,"resssssssssssss555555")
                setSearchResult(response.data.cars)
                console.log(searchResult,"seeeeeeeaaaaarrrrrrrrcccccchhhhhhhh")
            }
        }catch(error){
        }
    }


    useEffect(() => {
        searchCar()
    }, [])





    return (
        <>


           
            <TableContainer sx={{ml:0,mb:3}} component={Paper} >
                <Table sx={{ minWidth: 550 }} size="small" aria-label="a dense table">
                    <TableHead>

                    </TableHead>
                    {searchResult?(

                        <>
                            <TableBody > 
                        {searchResult?.map((car) => (
                            <TableRow 
                                key={car.carname}
                            >
                                <TableCell sx={{ width: "250px" }} >
                                    <img src={car.carimage} style={{ width: "150px", height: "100px" }}/>
                                </TableCell>
                                <TableCell align="left" sx={{ mr: "5" }} >
                                    <Typography variant="h5">{car.companyName} {car.carname}</Typography>            
                                    <Typography sx={{mt:1}} > <EventSeatIcon sx={{width:"17px"}}/>{car.seatCapacity}seater <LocalGasStationIcon sx={{width:"17px"}} />{car.fueltype} <SpeedIcon  sx={{width:"17px"}}/> {car.transmission}</Typography>
                                    </TableCell>
                                {/*<TableCell align="center" ></TableCell>*/}
                                <TableCell align="center">{car.location} | {car.district}</TableCell>
                                <TableCell align="center" ><Typography sx={{color:"black" , fontWeight:"bold"}} variant="h6">{car.rentPerDay}₹</Typography></TableCell>
                                <TableCell align="center" ><Button variant="contained" color="success"><Link to={`/booking/${car._id}`}>Book now</Link></Button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                        </>
                    ):(
                        <>
                            <Typography>Nothing to show</Typography>
                        </>
                    )}
                    
                </Table>
            </TableContainer>
      
        </>
    )
}

export default FilterResult
