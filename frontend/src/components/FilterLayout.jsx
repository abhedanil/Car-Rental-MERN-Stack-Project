import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import ListGroup from 'react-bootstrap/ListGroup';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),

];



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));



function FilterLayout() {
    return (
        <div>
            <Box sx={{ mt: 12, ml: 12, flexGrow: 1 }}>
                <Grid container spacing={7}>
                    <Grid item xs={4}>
                        <Item sx={{ height: "80vh" }}>
                            <Grid>
                                <Typography sx={{ mt: 5 }}>Find Cars near Your location</Typography>
                                <Item sx={{ mt: 3, height: "15vh" }}>
                                    <Grid container  >
                                        <Grid Item xs={6}>
                                            <Item sx={{ m: .5, height: "10vh" }} >
                                                <Typography>Selected location</Typography>
                                            </Item>
                                        </Grid>
                                        <Grid Item xs={6} >
                                            <Item sx={{ m: .5, height: "10vh" }} >
                                                <Typography>date and time </Typography>
                                            </Item>
                                        </Grid>
                                    </Grid>
                                </Item>

                            </Grid>
                            <Grid>
                                <Item sx={{ mt: 3, height: "8vh" }} >
                                    <Typography>Total time</Typography>
                                </Item>
                            </Grid>
                            <Typography sx={{ mt: 2 }}>Car Group</Typography>
                            <Grid container>
                                <Grid Item xs={4}>
                                    <Item sx={{ m: .5, height: "10vh" }} >
                                        <Typography>Sedan</Typography>
                                    </Item>
                                </Grid>
                                <Grid Item xs={4} >
                                    <Item sx={{ m: .5, height: "10vh" }} >
                                        <Typography>Hatchback</Typography>
                                    </Item>
                                </Grid>
                                <Grid Item xs={4} >
                                    <Item sx={{ m: .5, height: "10vh" }} >
                                        <Typography>SUV</Typography>
                                    </Item>
                                </Grid>
                            </Grid>
                            <Typography sx={{ mt: 2 }}>Transmission</Typography>
                            <Grid container>
                                <Grid Item xs={4}>
                                    <Item sx={{ m: .5, height: "10vh" }} >
                                        <Typography>Manual</Typography>
                                    </Item>
                                </Grid>
                                <Grid Item xs={4} >
                                    <Item sx={{ m: .5, height: "10vh" }} >
                                        <Typography>Automatic</Typography>
                                    </Item>
                                </Grid>
                                <Grid Item xs={4} >
                                    <Item sx={{ m: .5, height: "10vh" }} >
                                        <Typography>Electric</Typography>
                                    </Item>
                                </Grid>
                            </Grid>

                        </Item>
                    </Grid>
                    <Grid item xs={8}>



                        <Item sx={{ height: "80vh" }}>


                            <Grid container >


                                <Grid Item xs={2}>

                                    <Typography sx={{ mt: 4 }}>Sort by</Typography>

                                </Grid>
                                <Grid Item sx={{ mt: 2 }} xs={3} >
                                    <Item sx={{ m: .5, height: "7vh" }} >
                                        <Typography>price:low to high </Typography>
                                    </Item>
                                </Grid>
                                <Grid Item sx={{ mt: 2 }} xs={3} >
                                    <Item sx={{ ml: 5, m: .5, height: "7vh" }} >
                                        <Typography>price:high to low </Typography>
                                    </Item>
                                </Grid>
                                <Grid Item xs={4} >

                                </Grid>

                            </Grid>
                            <Grid sx={{mt:3}}>
                               
                                    <TableContainer component={Paper}>
                                        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                                            <TableHead>
                                             
                                            </TableHead>
                                            <TableBody>
                                                {rows.map((row) => (
                                                    <TableRow
                                                        key={row.name}
                                                         
                                                    >
                                                        <TableCell component="th" scope="row" sx={{borderRight:1,borderRightColor:"black"}} >
                                                            {row.name}
                                                        </TableCell>
                                                        <TableCell align="right" sx={{borderRight:1,borderRightColor:"black"}}>{row.calories}</TableCell>
                                                        <TableCell align="right" sx={{borderRight:1,borderRightColor:"black"}}>{row.fat}</TableCell>
                                                        <TableCell align="right" sx={{borderRight:1,borderRightColor:"black"}}>{row.carbs}</TableCell>
                                                        <TableCell align="right" sx={{borderRight:1,borderRightColor:"black"}}>{row.protein}</TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                              
                            </Grid>


                        </Item>
                    </Grid>

                </Grid>
            </Box>
        </div>
    )
}

export default FilterLayout
