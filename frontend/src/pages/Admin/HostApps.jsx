import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Layout from '../../components/Layout'
import { TableContainer, Table, TableHead, TableRow, TableCell, Paper, TableBody } from '@mui/material'
import axios from 'axios'
import '../../components/layout.css'


function HostApps() {

    const [tableData, setTableData] = useState([])
    const { user } = useSelector((state) => state.auth)
    const token = user.token
     console.log(tableData,"tabledata")
     const {userId} = tableData
     console.log(userId,"usssssssssssssssssssssssssss")

    const hostApps = async () => {
        try {
            const response = await axios.get("/api/admin/getAllApps", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            
            if (response.data.success) {
                console.log(response.data.data)
                setTableData(response.data.data)
            }
        } catch (error) {
            console.log("coudn't complete get request")
        }
    }
    useEffect(() => {
        hostApps()
       
    }, [])
          

    const changeHostStatus=async(formId)=>{
       console.log(userId);
        const response= await axios.post("/api/admin/changeHostStatus",{formId:formId},{
            headers:{
                Authorization:   `Bearer ${token}`
                
            }
        })
        console.log(response)
        if (response.data.success) {
            console.log(response.data)
            hostApps()
        }
    }
  
    const makeHost = async(userId)=>{
        console.log(userId,)
        const response= await axios.post("/api/admin/makeHost",{userId:userId},
        {
            headers:{
                Authorization:  `Bearer ${token}`
            }
        })
    }

    return (
        <Layout>
          
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Form Id</TableCell>
                                <TableCell>User Id</TableCell>
                                <TableCell>Name</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell>Actions</TableCell>
                               
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {tableData.map((row) => (
                                <TableRow key={1} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell>{row._id}</TableCell>
                                    <TableCell>{row.userId}</TableCell>
                                    <TableCell>{row.firstname}{row.lastname}</TableCell>
                                    <TableCell>{row.email}</TableCell>
                                    <TableCell>{row.status=="pending" ? (
                                        <button className='Approve-button'  onClick={()=>{changeHostStatus(row._id);makeHost(row.userId)}}>Approve</button>
                                    ) : (<h3>Approved</h3>)}</TableCell>
                                 
                                </TableRow>
                            ))} 
                        </TableBody>
                    </Table>
                </TableContainer>
        </Layout>

    )
}

export default HostApps
