import React from 'react'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { styled } from '@mui/material/styles';
import MuiInput from '@mui/material/Input';
import {applyForm ,reset} from '../../features/HostForm/formSlice'
import { spacing } from '@mui/system';
import Spinner from '../../components/Spinner'
import axios from 'axios';
import {toast} from 'react-toastify'
import {

    Grid,
    TextField,
   

} from "@mui/material";




function ApplyForm() {

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
                navigate('/')
            }
            
        }catch(error){
            console.log(error)
        }
       
            
    }



    return (
        <div style={{margin:"30px 0"}}>


            <form onSubmit={onSubmit}>
                <Grid container spacing={1}>
                    <Grid xs={12} lg={6} sm={6} sx={{}} item>
                        <TextField sx={{width:400}} type="text" label="firstname" className="form-control"
                            id="firstname" name="firstname"
                            value={firstname}
                            placeholder="Enter your first name"
                            onChange={onChange} fullWidth/>
                    </Grid>
                    <Grid xs={12} lg={6} sm={6} item>
                        <TextField sx={{width:400}} type="text" label="lastname" className="form-control"
                            id="lastname" name="lastname"
                            value={lastname}
                            placeholder="Enter your last name"
                            onChange={onChange}fullWidth />
                    </Grid>
                    <Grid xs={12} lg={6} item>
                        <TextField sx={{width:400 ,mt:3}} type="email" label="Email" className="form-control"
                            id="email" name="email"
                            value={email}
                            placeholder="Enter your email"
                            onChange={onChange} fullWidth />
                    </Grid>
                    <Grid xs={12} lg={6} item>
                        <TextField sx={{width:400,mt:3}} type="text" label="phone" name="phone" value={phone} placeholder="Enter phone number" variant="outlined" onChange={onChange} fullWidth />
                    </Grid>
                    <Grid xs={12} lg={6} item>
                        <TextField  sx={{width:400,mt:3}} label="Enter exact place" type="text" className='form-control'
                            id="place" name="place"
                            value={place}
                            placeholder="Enter exact place"
                            onChange={onChange} fullWidth/>
                    </Grid>
                    <Grid xs={12} lg={6} sm={6} item>
                        <TextField sx={{width:400,mt:3}} type="text" label="Enter your ditsrict" className="form-control"
                            id="district" name="district"
                            value={district}
                           
                            onChange={onChange}fullWidth />
                    </Grid>
                    <Grid xs={12} lg={6} sm={6} item>
                        <TextField sx={{width:400,mt:3}} type="text" label="Enter your state" className="form-control"
                            id="state" name="state"
                            value={state}
                            placeholder="Enter your state"
                            variant="outlined"
                            onChange={onChange}fullWidth />
                    </Grid>
                    <Grid xs={12} lg={6} sm={6} item>
                        <TextField sx={{width:400,mt:3}} type="text" label="Enter voter id number" className="form-control"
                            id="idproof" name="idproof"
                            value={idproof}
                            placeholder="Enter your voter id number"
                            onChange={onChange}fullWidth />
                    </Grid>

                    <Grid lg={12}  align="center" sx={{ pt: 2 }} item>
                        <button type="submit" className=' btn btn-primary'>Submit</button>
                    </Grid>

                </Grid>
            </form>



        </div>
    )
}

export default ApplyForm
