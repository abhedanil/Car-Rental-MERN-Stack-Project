import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography, TextField } from '@mui/material'
import React from 'react'
import SearchCard from "./SearchCard"



const styles = {
    paper: {
        backgroundImage: `url(${"https://www.rd.com/wp-content/uploads/2020/08/exterior_new_2.jpg"})`,
        marginTop: "60px",
        height: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: 'cover',
        justify: "flex-end",
        backgroundPosition: 'center',
        width: `calc(100vw + 48px)`,
        margin: 0,

    }
};


function HeroSection() {



    return (
        <>
            <div style={styles.paper} >


                <Grid className='hero ' >

                    <Box paddingTop={"150px"}>
                        <Typography textAlign="center" color="white" variant="h4">Own the experience,Not the ride</Typography>
                        <br />
                        <Typography textAlign="center" color="white" variant="h6">Rent vehicles from people around you</Typography>
                    </Box>
                    <SearchCard/>
                </Grid>

            </div>


        </>
    )
}

export default HeroSection
