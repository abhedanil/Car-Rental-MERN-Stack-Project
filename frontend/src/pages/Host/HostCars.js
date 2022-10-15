import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Layout from '../../components/Layout'

function HostCars() {

    const [hostCars, setHostCars] = useState()
    const { user } = useSelector((state) => state.auth)
    const token = user.token
    useEffect(() => {

        getmyCars()
    }, [])

    const getmyCars = async () => {

        try {
            const response = await axios.get("/api/host/myCars", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            if (response.data.success) {
                console.log(response.data.mycars, "hhhhhhhhh")
                setHostCars(response.data.mycars)
            }

        } catch (error) {
            console.log(error)
        }
    }
    console.log(hostCars, "fffffffffff")
    return (
        <Layout>
            <TableContainer >
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell>Car Image</TableCell>
                            <TableCell>RC image</TableCell>
                            <TableCell>Car name</TableCell>
                            <TableCell>Car Type</TableCell>
                            <TableCell>Seat Capacity</TableCell>
                            <TableCell>Fuel Type</TableCell>
                            <TableCell>Y.O.M</TableCell>
                            <TableCell>location</TableCell>
                            <TableCell>district</TableCell>
                            <TableCell>start date</TableCell>
                            <TableCell>end date</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>

                        {hostCars?.map((car) => (

                            <TableRow key={1} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell>{car._id}</TableCell>
                                <TableCell ><img src={car.carimage} style={{width:"150px", height:"70px" }}/></TableCell>
                                <TableCell ><img src={car.RCimage} style={{width:"150px", height:"70px" }}/></TableCell>
                                <TableCell>{car.carname}</TableCell>
                                <TableCell>{car.cartype}</TableCell>
                                <TableCell>{car.seatCapacity}</TableCell>
                                <TableCell>{car.fueltype}</TableCell>
                                <TableCell>{car.yom}</TableCell>
                                <TableCell>{car.location}</TableCell>
                                <TableCell>{car.district}</TableCell>
                                <TableCell>{car.startdate}</TableCell>
                                <TableCell>{car.enddate}</TableCell>
                            </TableRow>

                        ))}


                    </TableBody>
                </Table>
            </TableContainer>
        </Layout>
    )
}

export default HostCars