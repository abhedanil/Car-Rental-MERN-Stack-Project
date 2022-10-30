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
  formdata.append("companyName",e.target.companyName.value)
  formdata.append("cartype",e.target.cartype.value);
  formdata.append("seatcapacity",e.target.seatcapacity.value);
  formdata.append("fueltype",e.target.fueltype.value)
  formdata.append("transmission",e.target.transmission.value)
  formdata.append("rentperday",e.target.rentperday.value)
  formdata.append("yom",e.target.yom.value)
  formdata.append("carimage",carimage)
  formdata.append("RCimage",RCimage)
  formdata.append("location",e.target.location.value)
  formdata.append("district",e.target.district.value)

  
 
  console.log(formdata,"ffffffff")
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
                  <InputLabel htmlFor="outlined-adornment-amount">Company Name</InputLabel>
                  <OutlinedInput id="outlined-adornment-amount" type='text' name='companyName' />
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
                  <InputLabel htmlFor="outlined-adornment-amount">Transmission Type</InputLabel>               
                  <OutlinedInput id="outlined-adornment-amount" label="transmission"type='text' name='transmission' />
                </FormControl>
                <FormControl fullWidth sx={{ m: 1, width: '70ch', ml: 45 }}>
                  <InputLabel htmlFor="outlined-adornment-amount">Rent Per Day</InputLabel>               
                  <OutlinedInput id="outlined-adornment-amount" label="transmission"type='text' name='rentperday' />
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
