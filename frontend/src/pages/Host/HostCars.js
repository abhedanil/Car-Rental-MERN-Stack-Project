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
                            <TableCell>Car Name</TableCell>
                            <TableCell>Car Type</TableCell>
                            <TableCell>Seat Capacity</TableCell>
                            <TableCell>Fuel Type</TableCell>
                            <TableCell>Y.O.M</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>

                        {hostCars?.map((car) => (

                            <TableRow key={1} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell>{car._id}</TableCell>
                                <TableCell ><img src={car.image} style={{width:"150px", height:"70px" }}/></TableCell>
                                <TableCell>{car.carname}</TableCell>
                                <TableCell>{car.cartype}</TableCell>
                                <TableCell>{car.seatCapacity}</TableCell>
                                <TableCell>{car.fueltype}</TableCell>
                                <TableCell>{car.yom}</TableCell>
                            </TableRow>

                        ))}


                    </TableBody>
                </Table>
            </TableContainer>
        </Layout>
    )
}

export default HostCars