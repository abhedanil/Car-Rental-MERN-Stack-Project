import React from 'react'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { styled } from '@mui/material/styles';
import MuiInput from '@mui/material/Input';
import { Avatar, Paper, Typography,  Button } from '@mui/material'
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
    const paperStyle = { padding: '30px 20px', width: 500, margin: '70px auto', }
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
    const { firstname, lastname, email, phone, place, district, state, idproof } = formData
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
        const formData = {firstname, lastname,email, phone,place,district,state,idproof}
        try{
            const response= await axios.post("/api/application/newApplicationform",{
                ...formData
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

        <div className='outer'>
    <Grid >
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
                            value={email} sx={{ margin: "5px 0" }} onChange={onChange} />
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
