
import { useState, useEffect } from 'react'
import { FaSignInAlt } from 'react-icons/fa'
import { FaUser } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { login, reset } from '../redux/features/Auth/authSlice'
import Spinner from '../components/Spinner'
import { Avatar, Grid, Paper, Typography , TextField, Button } from '@mui/material'
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { Box } from '@mui/system'

import "../components/Login.css"
function Login() {

    const [formData, setFormData] = useState({

        email: '',
        password: '',

    })

    const { email, password } = formData

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user, isLoading, isError, isSuccess, message } =
        useSelector(
            (state) => state.auth
        )
        console.log(user,"888888888888888888")
        if (user?.isAdmin||user?.isHost) {
            navigate("/adminAndHost")
        }
        else if(user){
            console.log("gh");
            navigate("/")
        } 
       
    
    


    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()

        const userData = {
            email,
            password
        }

        dispatch(login(userData))
    }

    if (isLoading) {
        return <Spinner />
    }


    const paperStyle = { padding: '30px 20px', width: 300, margin: '150px auto', }
    const headerStyle = { margin: "10px 0", }
    const avatarStyle = { backgroundColor: '#1bbd72' }

    return (
        <>
            <div >
                <Grid >
                    <Paper elevation={20} style={paperStyle}>
                        <Grid align="center">
                            <Avatar style={avatarStyle}>
                                <LockOpenIcon />
                            </Avatar>
                            <h2 style={headerStyle} >Login</h2>
                        </Grid>
                        <form onSubmit={onSubmit}>
                            <TextField label='Email' type="text" name="email" value={email} onChange={onChange} fullWidth sx={{ margin: "5px 0" }} />
                            <TextField label='Password' fullWidth type="password" name="password" value={password} onChange={onChange} sx={{ margin: "5px 0" }} />


                            <Box align="center" sx={{ margin: "10px 0" }}>
                                <Button type="submit" variant="contained" color="primary" align="center">Login</Button>
                            </Box>
                        </form>
                    </Paper>
                </Grid>
            </div>
        </>
    )
}

export default Login
