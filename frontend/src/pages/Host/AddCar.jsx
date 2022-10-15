import React, { useState } from 'react'
import Layout from '../../components/Layout'
import { Box } from '@mui/system'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import {
  Card, CardContent, Button,
  Typography, FormControl, InputLabel, OutlinedInput, Select, MenuItem
} from '@mui/material'

  



function AddCar() {

  const [carimage,setCarImage] = useState()
  const [RCimage,setRcImage ] = useState()


  const {user} = useSelector((state)=>state.auth)
  const token = user.token;
  const handleSubmit=async(e)=>{
    e.preventDefault()
  
  let formdata= new FormData();
  formdata.append("carname",e.target.carname.value);
  formdata.append("cartype",e.target.cartype.value);
  formdata.append("seatcapacity",e.target.seatcapacity.value);
  formdata.append("fueltype",e.target.fueltype.value)
  formdata.append("yom",e.target.yom.value)
  formdata.append("carimage",carimage)
  formdata.append("RCimage",RCimage)
  formdata.append("location",e.target.location.value)
  formdata.append("district",e.target.district.value)
  formdata.append("startDate",e.target.startDate.value)
  formdata.append("endDate",e.target.endDate.value)
  
 
  console.log(formdata)
  const response= await axios.post("/api/host/addNewCar",formdata,{
    headers:{
      Authorization: `Bearer ${token}`
    }
  })
  console.log(response)

}


  return (
    <div>
      <Layout>
        <div>
          <form onSubmit={handleSubmit} >
            <Typography gutterBottom variant="h3" align='center'>Add New Car</Typography>
            <Card>
              <CardContent>
                <FormControl fullWidth sx={{ m: 1, width: '70ch', ml: 45 }}>
                  <InputLabel htmlFor="outlined-adornment-amount">Car Name</InputLabel>
                  <OutlinedInput id="outlined-adornment-amount" type='text'  name='carname' />
                </FormControl>
                <FormControl fullWidth sx={{ m: 1, width: '70ch', ml: 45 }}>
                  <InputLabel htmlFor="outlined-adornment-amount">Car Type</InputLabel>
                  <OutlinedInput id="outlined-adornment-amount" type='text' name='cartype' />
                </FormControl>
                <FormControl fullWidth sx={{ m: 1, width: '70ch', ml: 45 }}>
                  <InputLabel htmlFor="outlined-adornment-amount">Seat Capcity</InputLabel>
                  <OutlinedInput id="outlined-adornment-amount" name='seatcapacity' />
                </FormControl>
                <FormControl fullWidth sx={{ m: 1, width: '70ch', ml: 45 }}>
                  <InputLabel htmlFor="outlined-adornment-amount">Fuel Type</InputLabel>               
                  <OutlinedInput id="outlined-adornment-amount" label="fueltype"type='text' name='fueltype' />
                </FormControl>
                <FormControl fullWidth sx={{ m: 1, width: '70ch', ml: 45 }}>
                  <InputLabel htmlFor="outlined-adornment-amount">Year Of Manufacture</InputLabel>
                  <OutlinedInput id="outlined-adornment-amount"  label="Amount" name='yom' />
                </FormControl>
                <FormControl fullWidth sx={{ m: 1, width: '70ch', ml: 45 }}>
                  <InputLabel htmlFor="outlined-adornment-amount">Exact Location</InputLabel>
                  <OutlinedInput id="outlined-adornment-amount"  label="Amount" name='location' />
                </FormControl>
                <FormControl fullWidth sx={{ m: 1, width: '70ch', ml: 45 }}>
                  <InputLabel htmlFor="outlined-adornment-amount">District</InputLabel>
                  <OutlinedInput id="outlined-adornment-amount"  label="Amount" name='district' />
                </FormControl>
                <FormControl fullWidth sx={{ m: 1, width: '70ch', ml: 45 }}>
                  <InputLabel htmlFor="outlined-adornment-amount">Start date</InputLabel>
                  <OutlinedInput id="outlined-adornment-amount" type="datetime-local"  name='startDate' />
                </FormControl>
                <FormControl fullWidth sx={{ m: 1, width: '70ch', ml: 45 }}>
                  <InputLabel htmlFor="outlined-adornment-amount">End date</InputLabel>
                  <OutlinedInput id="outlined-adornment-amount" type="datetime-local" name='endDate' />
                </FormControl>
                <Typography sx={{ mr: 50 }} align="center">Upload Car Image</Typography>
                  <FormControl fullWidth sx={{ m: 1, width: '70ch', ml: 45 }}>
                      <InputLabel htmlFor="outlined-adornment-amount"></InputLabel>
                      <OutlinedInput id="outlined-adornment-amount" label="Amount" type="file" name='carimage' onChange={(e)=>setCarImage(e.target.files[0])}/>
                  </FormControl>
                  <Typography sx={{ mr: 50 }} align="center">Upload RC image</Typography>
                  <FormControl fullWidth sx={{ m: 1, width: '70ch', ml: 45 }}>
                      <InputLabel htmlFor="outlined-adornment-amount"></InputLabel>
                      <OutlinedInput id="outlined-adornment-amount" label="Amount" type="file" name='RCimage' onChange={(e)=>setRcImage(e.target.files[0])}/>
                  </FormControl>
              </CardContent>
              <Box align="center">

                <Button variant="contained" type="submit">Submit</Button>
              </Box>


            </Card>

          </form>

        </div>

      </Layout>
    </div>
  )
}


export default AddCar
