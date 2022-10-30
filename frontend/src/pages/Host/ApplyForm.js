import React from 'react'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { styled } from '@mui/material/styles';
import MuiInput from '@mui/material/Input';
import { Avatar, Paper, Typography,  Button , FormControl, InputLabel, OutlinedInput } from '@mui/material'
import { Box } from '@mui/system'
import ListAltIcon from '@mui/icons-material/ListAlt';
import { spacing } from '@mui/system';
import Spinner from '../../components/Spinner'
import axios from 'axios';

import {toast} from 'react-toastify'
import {

    Grid,
    TextField,
   

} from "@mui/material";




function ApplyForm() {
    const paperStyle = { padding: '30px 20px', width: 500, margin: '80px auto', }
    const headerStyle = { margin: "10px 0", }
    const avatarStyle = { backgroundColor: '#1bbd72' }

    const {user} = useSelector((state)=>state.auth)
    const token = user.token
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        place: '',
        district: '',
        state:'',
        idproof:''
        
    })

    const [IdImage,setIdImage] = useState()
    const [userImage,setUserImage] = useState()

    const { firstname, lastname, email, phone, place, district, state, idproof } = formData

    const AppData = {
        firstname: firstname,
        lastname: lastname,
        email: email,
        phone: phone,
        place: place,
        district:district,
        state:state,
        idproof:idproof,
    }



    const navigate = useNavigate()
    const dispatch = useDispatch()

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

  
    const onSubmit=async(e)=>{
        e.preventDefault()
        const formdata = {firstname, lastname,email, phone,place,district,state,idproof,userImage,IdImage}
        console.log(formdata,"fffffff")
        try{
            const response= await axios.post("/api/application/newApplicationform",{
                formdata
            },{
                headers:{
                    Authorization: `Bearer ${token}`
                }
            })
            console.log(response)
            if(response.data.data.success){
                toast.success(response.data.message)
               
            }
            navigate('/')
        }catch(error){
            console.log(error)
        }
       
            
    }


    return (

        <div style={{width:"120%"}} align="center">
            <Grid  sx={{}} >
                <Paper elevation={20} style={paperStyle}>
                    <Grid align="center">
                        <Avatar style={avatarStyle}>
                            <ListAltIcon />
                        </Avatar>
                        <h2 style={headerStyle} >Application</h2>
                    </Grid>
                    <form onSubmit={onSubmit}>
                        <TextField  label="firstname" className="form-control"
                            id="firstname" name="firstname"
                            value={firstname} fullWidth sx={{ margin: "5px 0" }} onChange={onChange}/>
                        <TextField label="lastname" className="form-control"
                            id="lastname" name="lastname"
                            value={lastname} fullWidth sx={{ margin: "5px 0" }}onChange={onChange} />
                       
                        <TextField type="email" label="Email" className="form-control"
                            id="email" name="email"
                            value={email} sx={{ margin: "5px 0" }} onChange={onChange} fullWidth />
                        <TextField type="text" label="phone" name="phone" value={phone}  fullWidth sx={{ margin: "5px 0" }} onChange={onChange} />            
                        <TextField  type="text" label="Enter exact place" className='form-control'
                            id="place" name="place"
                            value={place} fullWidth sx={{ margin: "5px 0" }} onChange={onChange} />            
                        <TextField  type="text" label="Enter your ditsrict" className="form-control"
                            id="district" name="district"
                            value={district}  fullWidth sx={{ margin: "5px 0" }} onChange={onChange} />            
                        <TextField  type="text"  label="Enter your state" className="form-control"
                            id="state" name="state"
                            value={state}  fullWidth sx={{ margin: "5px 0" }} onChange={onChange} />            

                        <TextField type="text"  label="Enter voter id number" className="form-control"
                            id="idproof" name="idproof"
                            value={idproof} fullWidth sx={{ margin: "5px 0" }} onChange={onChange} />

                        <Typography  align="center" sx={{ margin: "5px 0" }}>Upload Identification</Typography>
                            <FormControl sx={{ margin: "5px 0" }}>
                            <InputLabel htmlFor="outlined-adornment-amount"></InputLabel>
                            <OutlinedInput id="outlined-adornment-amount" label="Amount" type="file" name='IdImage' onChange={(e)=>setIdImage(e.target.files[0])} sx={{ margin: "5px 0" }}/>
                            </FormControl>
                        <Typography  align="center" sx={{ margin: "5px 0" }}>Upload Your Image</Typography>
                            <FormControl sx={{ margin: "5px 0" }}>
                            <InputLabel htmlFor="outlined-adornment-amount"></InputLabel>
                            <OutlinedInput id="outlined-adornment-amount" label="Amount" type="file" name='userImage' onChange={(e)=>setUserImage(e.target.files[0])} sx={{ margin: "5px 0" }}/>
                            </FormControl> 
                        <Box align="center" sx={{ margin: "10px 0" }}>
                            <Button type="submit" variant="contained" color="primary" align="center">Submit</Button>
                        </Box>


                    </form>
                </Paper>
            </Grid>
    </div>
    
    )
}

export default ApplyForm
