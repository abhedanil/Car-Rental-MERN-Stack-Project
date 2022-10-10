
import {useState, useEffect} from 'react'
import {FaUser} from 'react-icons/fa'
import {useSelector, useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import {register,reset} from '../redux/features/Auth/authSlice'
import Spinner from '../components/Spinner'
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { Avatar, Grid, Paper, Typography, TextField, Button } from '@mui/material'
import { Box } from '@mui/system'

function Register() {
    const paperStyle = { padding: '30px 20px', width: 500, margin: '70px auto', }
    const headerStyle = { margin: "10px 0", }
    const avatarStyle = { backgroundColor: '#1bbd72' }

    const [formData,setFormData] = useState({
        name:'',
        email:'',
        password:'',
        password2: '',
    })

    const {name,email,password,password2}= formData

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {user,isLoading,isError,isSuccess,message}= 
    useSelector(
        (state)=> state.auth
    )

    useEffect(()=>{
        if(isError){
            toast.error(message)
        }
        if(isSuccess || user){
            navigate('/')
        }
        dispatch(reset())

    },[user,isError,isSuccess,message,navigate,dispatch])

    

    const onChange = (e) =>{
        setFormData((prevState)=>({
            ...prevState,
            [e.target.name] :e.target.value,
        }))
    }

    const onSubmit = (e) =>{
        e.preventDefault()

        if(password !==password2){
            toast.error('password do not match')
        }
        else{
            const userData ={
                name,
                email,
                password
            }
            dispatch(register(userData))
        }
    }
    if(isLoading){
        return <Spinner/>
    }

  return (
    <>
    <div className='outer'>
    <Grid >
                <Paper elevation={20} style={paperStyle}>
                    <Grid align="center">
                        <Avatar style={avatarStyle}>
                            <LockOpenIcon />
                        </Avatar>
                        <h2 style={headerStyle} >Signup</h2>
                    </Grid>
                    <form onSubmit={onSubmit}>
                        <TextField label='Name' type="text"name="name" value={name} fullWidth sx={{ margin: "5px 0" }} onChange={onChange}/>
                        <TextField label='Email' type="text" name="email" value={email} fullWidth sx={{ margin: "5px 0" }}onChange={onChange} />
                       
                        <TextField label='Password' type="text" name="password" fullWidth value={password} sx={{ margin: "5px 0" }} onChange={onChange} />
                        <TextField label='Confirm password' type="text" name="password2" value={password2} fullWidth sx={{ margin: "5px 0" }} onChange={onChange} />            
                        <Box align="center" sx={{ margin: "10px 0" }}>
                            <Button type="submit" variant="contained" color="primary" align="center">Signup</Button>
                        </Box>

                    </form>
                </Paper>
            </Grid>
    </div>
        
    </>
  )
}

export default Register
