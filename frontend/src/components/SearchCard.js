import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'

import { Card, CardActionArea, CardContent, CardMedia, TextField } from '@mui/material';

import { Box, Paper, Grid, AppBar, Toolbar, Typography, Tab, Tabs, Button, useMediaQuery, useTheme } from "@mui/material"
import Modal from '@mui/material/Modal';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';

import { useSelector, useDispatch } from 'react-redux'

import {SearchCars} from '../redux/features/searchCar/searchCarslice'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    height:"400px",
    overflow:"auto"
  };




function SearchCard() {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user, isLoading, isError, isSuccess, message } =
    useSelector(
        (state) => state.auth
    )

    const district = ['Kasaragod', 'Kannur', 'Kozhikode','Wayanad','Malappuram' ,'Thrissur','Palakkad','Eranakulam','Alappuzha','Idukki','Kollam','Kottayam','Pathanamthitta','Trivandrum']
    console.log(district.length,"11111111111111111")
    
    const [openStartmodal, setOpenStartModal] = React.useState(false);
    const handleOpenstartModal = () => setOpenStartModal(true);
    const handleCloseStartModal = () => setOpenStartModal(false);
    
    const [openEndModal, setOpenEndModal] = React.useState(false);
    const handleOpenEndModal = () => setOpenEndModal(true);
    const handleCloseEndModal = () => setOpenEndModal(false);
    
    const [openLocationModal, setOpenLocationModal]= useState(false)
    const handleOpenLocationModal =() => setOpenLocationModal(true)
    const handleCloseLocationModal = () => setOpenLocationModal(false)
    
    const [districtName,setDistrictName] = useState('Select District')
    const [startDate,setStartDate] = useState('Select Start date ')
    const [endDate, setEndDate] = useState('Select end Date')
    console.log(districtName)

 

    const SubmitDistrict =(dis)=>{
                setDistrictName(dis)
                handleCloseLocationModal()
    }

    
    let formdata= new FormData();

    const onSubmit=async(e)=>{
        e.preventDefault()
        
            formdata.append("district",districtName)
            handleSubmit()
           
    }    
    const handleSubmit=()=>{
        console.log(formdata)
        dispatch(SearchCars(districtName))
        navigate("/filterPage")
    }
 
    return (
        <div>
            <Grid sx={{ margin: "120px" }}>
                <Card sx={{ width: "77%", margin: "auto", backgroundColor: '#d3d3d379', borderRadius: "20px", height: "80px" }}>


                    <CardContent>
                        <Grid container >


                            <Grid item sx={{ margin: "auto" }} >
                                <Box sx={{ display: "flex", }}  >
                                    <Paper sx={{ color: "black", m: 1, width: "200px", height: "40px", borderRadius: "5px", backgroundColor: "white" }} id="outlined-name" label="Name" size="small"><Button  onClick={handleOpenLocationModal} variant="text" sx={{ color: "black", ml: 1, mt: .6 }} size="small">{districtName}</Button>
                                    
                                        <Modal
                                                open={openLocationModal}
                                                onClose={handleCloseLocationModal}
                                                aria-labelledby="modal-modal-title"
                                                aria-describedby="modal-modal-description"
                                            >
                                            <Box  sx={style}display="flex" flexDirection="column" >
                                                {district.map((district,index)=>(
                                                    <MenuList>
                                                        <MenuItem  name="districtName"  onClick={()=>SubmitDistrict(district)}  >{district}</MenuItem>
                                                       
                                                    </MenuList> 
                                                ))} 
                                            </Box>
                                        </Modal>
                                    
                                    
                                    
                                    </Paper>
                                       
                                    <Paper  sx={{ color: "black", m: 1, width: "200px", height: "40px", borderRadius: "5px", backgroundColor: "white" }}  size="small"><Button onClick={handleOpenstartModal} padding="auto" variant="text" sx={{ color: "black", ml: 3, mt: .6 }} size="small">{startDate}</Button>
                                        <Modal
                                                open={openStartmodal}
                                                onClose={handleCloseStartModal}
                                                aria-labelledby="modal-modal-title"
                                                aria-describedby="modal-modal-description"
                                            >
                                            <Box sx={style} >
                                                <TextField type="datetime-local" name="startdate" value={startDate}  onChange={(e) => setStartDate(e.target.value)} ></TextField>
                                                <Button variant="contained" type="submit" color="success" sx={{m:2}} size="small" onClick={handleCloseStartModal}>submit</Button>
                                            </Box>
                                        </Modal>
                                        </Paper>
                                    
                                    <Paper  sx={{ color: "black", m: 1, width: "200px", height: "40px", borderRadius: "5px", backgroundColor: "white" }}  size="small"><Button onClick={handleOpenEndModal} variant="text" sx={{ color: "black", ml: 3, mt: .6 }} size="small">{endDate}</Button>
                                        <Modal
                                                open={openEndModal}
                                                onClose={handleCloseEndModal}
                                                aria-labelledby="modal-modal-title"
                                                aria-describedby="modal-modal-description"
                                            >
                                            <Box sx={style} >
                                                <TextField type="datetime-local" name="endDate" value={endDate} onChange={(e) => setEndDate(e.target.value)}   ></TextField>
                                                <Button variant="contained" color="success" sx={{m:2}} size="small" onClick={handleCloseEndModal}>submit</Button>
                                            </Box>
                                        </Modal>
                                        </Paper>
                                    <Button variant="contained" color="success" sx={{ ml: 3, mt: .6, m: 1, width: "200px", height: "40px", borderRadius: "5px" }} id="outlined-name" label="Name" size="small" onClick={onSubmit} >Find Cars</Button>

                                </Box>
                            </Grid>
                        </Grid>
                    </CardContent>

                </Card>
            </Grid>
        </div>
    )
}

export default SearchCard
