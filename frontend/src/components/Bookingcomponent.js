import { Box, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import Divider from '@mui/material/Divider';

import EventSeatIcon from '@mui/icons-material/EventSeat';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import SpeedIcon from '@mui/icons-material/Speed';
import { useSelector } from 'react-redux';

function Bookingcomponent() {

    const navigate = useNavigate()
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [totalAmount, setTotalAmount] = useState(0);
    const [numberOfDays, setNumberOfDays] = useState(0)
    const [totalPayableAmount, setTotalPayableAmount] = useState(0)


    console.log(startDate, "startttt")
    console.log(endDate, "endddd")


    const RefundableDeposit = 500



    const params = useParams()
    const carid = params.carid
    const [carDetails, setCarDetails] = useState()
    useEffect(() => {
        fetchCar()

    }, [])


    useEffect(() => {

        setTotalPayableAmount(+carDetails?.rentPerDay + +RefundableDeposit);

    }, [carDetails])

    useEffect(() => {
        if (startDate != '' && endDate != '') {
            const from = new Date(startDate)
            const fromTime = from.getTime()
            const to = new Date(endDate)
            const toTime = to.getTime()
            const Difference_In_Time = (toTime - fromTime)
            const totalDays = Difference_In_Time / (1000 * 3600 * 24)
            console.log(totalDays, "tttttttttttt")
            setNumberOfDays(Math.round(totalDays))




            console.log(fromTime, "frrrr")
            console.log(toTime, "tooooooo")
            console.log(Difference_In_Time, "diffintime")
            console.log(totalDays, "diffindays")
        }
    }, [startDate, endDate])

    useEffect(() => {
        if (numberOfDays > 0) {
            setTotalPayableAmount(+carDetails?.rentPerDay * numberOfDays + +RefundableDeposit);
        }
    }, [numberOfDays])

    const fetchCar = async () => {

        const response = await axios.get(`/api/users/getSingleCar/${carid}`)
        console.log(response.data.singleCar[0], "dataaaa")
        setCarDetails(response.data.singleCar[0])

    }
    console.log(carDetails, "ccccccc")

    //verifypayment

    const initPayment = (data) => {
        console.log("888888888")
        const options = {
            key: process.env.RAZORPAY_KEY_ID,
            amount: data.amount,
            currency: data.currency,
            name: carDetails.carname,
            description: "test transaction",
            image: carDetails.carimage,
            order_id: data.id,
            handler: async (response) => {
                try {

                    const verifyUrl = "/api/users/verify"
                    const { data } = await axios.post(verifyUrl, response)
                    console.log(data, "verifieeeeedd")
                    if (data) {
                        navigate("/paymentSuccess")
                    }
                } catch (error) {
                    console.log(error, "9999999999999999")
                    console.log("inside catch");
                }
            },
            theme: {
                color: "#3399c"
            }
        }
        const rzp1 = new window.Razorpay(options)
        rzp1.open()
    }

    const { user } = useSelector((state) => state.auth)
    const token = user.token
    console.log(token, "tooooooooooo")
    //payment code below

    const paymentHandler = async (e) => {
        try {

            const orderUrl = '/api/users/orders'
            e.preventDefault();
            const bookingData = {
                amount: totalPayableAmount,
                startdate: startDate,
                endDate: endDate,
                carname: carDetails.carname,
                days: numberOfDays
            }
            const { data } = await axios.post(orderUrl, bookingData
                , {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
            console.log(data, "ressssdaaaaaaaaatafrommmmserver");
            console.log(data, "daaaaaaaaaaaaaaataaaaaaaaaaaaaafrrrrrrrrrrrr")
            initPayment(data)

        } catch (error) {
            console.log(error, "7777777")
        }
    }


    //payment end




    return (
        <>
            <Box display="flex" >


                <Box sx={{ marginTop: "150px", marginLeft: "200px" }} align="left" >

                    {carDetails &&

                        <Card sx={{ maxWidth: 600, height: "400px" }} >
                            <CardMedia

                                height="300px"
                                component="img"
                                alt="green iguana"
                                image={carDetails.carimage}

                            />

                        </Card>


                    }


                </Box>
                <Box sx={{ marginTop: "100px", marginLeft: "150px" }} align="left" >

                    {carDetails &&

                        <Card sx={{ width: 500, height: "500px" }} >
                            <Divider sx={{ mt: 3 }}>Car info</Divider>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" align="left" fontWeight="bold">
                                    {carDetails.carname}
                                </Typography>
                                <Typography sx={{ mt: 2 }} variant="body2" color="text.secondary" align="left">company: {carDetails.companyName}</Typography>
                                <Typography variant="body2" color="text.secondary" align="left">
                                    <EventSeatIcon sx={{ width: "17px", mt: 1 }} />{carDetails.seatCapacity}seater <LocalGasStationIcon sx={{ width: "17px" }} />{carDetails.fueltype} <SpeedIcon sx={{ width: "17px" }} /> {carDetails.transmission}
                                </Typography>

                                <Typography sx={{ mt: 1 }}>Exact location: {carDetails.location}</Typography>
                                <Typography sx={{ mt: 1 }}>District :{carDetails.district}</Typography>

                                <div style={{ display: "flex" }}>
                                    <Typography sx={{ mt: 1 }}>start date</Typography>

                                    <Typography sx={{ ml: "150px", mt: 1 }}>end date</Typography>

                                </div>
                                <div style={{ display: "flex" }}>
                                    <TextField sx={{ width: "200px" }} variant="outlined" size="small" type="datetime-local" name="startdate" value={startDate} onChange={(e) => setStartDate(e.target.value)} ></TextField>
                                    <TextField sx={{ ml: 1, width: "200px" }} variant="outlined" size="small" type="datetime-local" name="endDate" value={endDate} onChange={(e) => setEndDate(e.target.value)} ></TextField>

                                </div>


                                <Typography sx={{ mt: 2 }} >Total days :{numberOfDays} </Typography>

                                <Typography sx={{ mt: 1 }} >Rent Per day: {carDetails.rentPerDay}₹</Typography>
                                <Typography>Refundable Deposit: {RefundableDeposit}₹</Typography>
                                <Typography sx={{ mt: 1 }} fontWeight="bold">Total Payable Amount: {totalPayableAmount}₹ </Typography>
                            </CardContent>

                            <CardActions sx={{ paddingTop: "17 0px", paddingLeft: "180px" }} size="small" align="center">
                                <Button variant="contained" color="success" size="small" onClick={paymentHandler} >Proceed To Pay</Button>

                            </CardActions>
                        </Card>


                    }


                </Box>

            </Box>
        </>
    )
}

export default Bookingcomponent
