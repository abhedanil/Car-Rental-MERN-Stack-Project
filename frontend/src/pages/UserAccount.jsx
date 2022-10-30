
import React from 'react'
import NavBar from '../components/Navbar'
import axios from 'axios';

import { Box, TextField, Divider, Typography, Button, CardMedia, CardContent, CardActions, Card } from '@mui/material'




function UserAccount() {

    const styles = {
        paper: {
            backgroundColor: "#b8b4b4",
            marginTop: "60px",
            height: "100vh",
            backgroundRepeat: "no-repeat",
            backgroundSize: 'cover',
            justify: "flex-end",
            backgroundPosition: 'center',
            width: `calc(100vw)`,
            margin: 0,
            overflow: "hidden"
        }
    };


    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>

            <NavBar />
            <div style={styles.paper} >

                <Box display="flex" >


                    <Box sx={{ marginTop: "150px", marginLeft: "150px" }} align="left" >


                        <Card sx={{ minWidth: 250, height: "400px" }} >


                        </Card>





                    </Box>
                    <Box sx={{ marginTop: "100px", marginLeft: "150px" }} align="left" >



                        <Card sx={{ width: 700, height: "500px" }} >
                            <Divider sx={{ mt: 3 }}>Car info</Divider>
                            <CardContent>
                                
                            </CardContent>

                            <CardActions sx={{ paddingTop: "17 0px", paddingLeft: "180px" }} size="small" align="center">


                            </CardActions>
                        </Card>




                    </Box>

                </Box>

            </div>

        </>
    )
}

export default UserAccount