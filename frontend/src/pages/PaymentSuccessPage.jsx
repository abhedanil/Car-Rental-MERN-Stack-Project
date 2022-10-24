import { Box, Button, Paper, Typography } from '@mui/material'
import React from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useNavigate } from 'react-router-dom';
function PaymentSuccessPage() {
    const navigate=useNavigate()
  return (
    <div  align="center" style={{height:"300px"}}>
        
        <Box sx={{mt:"15vh" ,width:"70vh",}} align="center">
            <Paper sx={{height:"400px",paddingTop:"10vh"}}>
                <CheckCircleIcon sx={{color:"#14e32c",fontSize: '96px'}} size="medium"/>
                <div >
                    <Typography sx={{mt:2}} variant="h4">Payment Success</Typography>
                </div>
                <Button sx={{mt:6}} variant="contained" color="primary" onClick={()=>navigate('/')}>OK</Button>
            </Paper>
        </Box>
    </div>
  )
}

export default PaymentSuccessPage
