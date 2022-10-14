import React,{useState} from 'react'

import { Card, CardActionArea, CardContent, CardMedia, TextField } from '@mui/material';

import { Box, Paper, Grid, AppBar, Toolbar, Typography, Tab, Tabs, Button, useMediaQuery, useTheme } from "@mui/material"
import Modal from '@mui/material/Modal';

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
    display:"flex",
    flexDirection:"row"
  };




function SearchCard() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [startDate,setStartDate] = useState('Select Start date ')
    const [endDate, setEndDate] = useState('Select end Date')




    const ChangeStart=(e)=>{
        console.log(e.target.name,"555555555555")
    }


    return (
        <div>
            <Grid sx={{ margin: "120px" }}>
                <Card sx={{ width: "77%", margin: "auto", backgroundColor: '#d3d3d379', borderRadius: "20px", height: "80px" }}>


                    <CardContent>
                        <Grid container >


                            <Grid item sx={{ margin: "auto" }} >
                                <Box sx={{ display: "flex", }}  >
                                    <Paper sx={{ color: "black", m: 1, width: "200px", height: "40px", borderRadius: "5px", backgroundColor: "white" }} id="outlined-name" label="Name" size="small"><Button  variant="text" sx={{ color: "black", ml: 1, mt: .6 }} size="small">select Pickup location</Button></Paper>
                                       
                                    <Paper  sx={{ color: "black", m: 1, width: "200px", height: "40px", borderRadius: "5px", backgroundColor: "white" }}  size="small"><Button onClick={handleOpen} padding="auto" variant="text" sx={{ color: "black", ml: 3, mt: .6 }} size="small">{startDate}</Button></Paper>
                                        <Modal
                                                open={open}
                                                onClose={handleClose}
                                                aria-labelledby="modal-modal-title"
                                                aria-describedby="modal-modal-description"
                                            >
                                            <Box sx={style} >
                                                <TextField type="datetime-local" name="startdate" value={startDate} onChange={ChangeStart} ></TextField>
                                                <Button variant="contained" type="submit" color="success" sx={{m:2}} size="small">submit</Button>
                                            </Box>
                                        </Modal>
                                    
                                    
                                    <Paper  sx={{ color: "black", m: 1, width: "200px", height: "40px", borderRadius: "5px", backgroundColor: "white" }}  size="small"><Button onClick={handleOpen} variant="text" sx={{ color: "black", ml: 3, mt: .6 }} size="small">{endDate}</Button></Paper>
                                        <Modal
                                                open={open}
                                                onClose={handleClose}
                                                aria-labelledby="modal-modal-title"
                                                aria-describedby="modal-modal-description"
                                            >
                                            <Box sx={style} >
                                                <TextField type="datetime-local" name="endDate" value={endDate} onChange={onChange} ></TextField>
                                                <Button variant="contained" color="success" sx={{m:2}} size="small">submit</Button>
                                            </Box>
                                        </Modal>
                                    
                                    <Button variant="contained" color="success" sx={{ ml: 3, mt: .6, m: 1, width: "200px", height: "40px", borderRadius: "5px" }} id="outlined-name" label="Name" size="small">Find Cars</Button>

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
