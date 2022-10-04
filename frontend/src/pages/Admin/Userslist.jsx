import React,{useState,useEffect} from 'react'
import { useSelector } from 'react-redux'
import Layout from '../../components/Layout'
import {TableContainer,Table,TableHead,TableRow,TableCell,Paper, TableBody} from '@mui/material'
import axios from 'axios'
import '../../components/layout.css'

function Userslist() {
    const[tableData, setTableData]= useState([])
    const {user}= useSelector((state)=>state.auth)
    const token = user.token
    
   const getUserData=async()=>{

    try{
        const response= await axios.get("/api/admin/getAllUsers",{
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        if(response.data.success){
            console.log(response.data.data)
            setTableData(response.data.data)
        }
    }catch(error){
        console.log("cant complete get request")
    }

   }

   useEffect(() => {  

        getUserData()
   
    }, [])
   


    
  return (
    <Layout>
       <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Host/user</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tableData.map((row)=>(
                        <TableRow key={1} sx={{'&:last-child td, &:last-child th':{ border:0 }}}>
                            <TableCell>{row._id}</TableCell>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.email}</TableCell>
                            <TableCell>{row.blocked?(
                                <button className='ublock-button'>Unblock</button>
                            ):(<button className='block-button' >Block User</button>)}</TableCell>
                            <TableCell>{row.isHost?("Host"):("user")}</TableCell>
                        </TableRow>
                    )) }
                </TableBody>
            </Table>
       </TableContainer>
    </Layout>
    
  )
}

export default Userslist


