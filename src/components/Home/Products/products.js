import { Box, Button, Container } from '@mui/material';
import React from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';

// This is Fake Data
const foodItems = {
    id: 1,
    name: "Quattro Stagioni",
    img: "https://templates.envytheme.com/handout/default/assets/img/pizza-shop/1.png",
    price1: "7",
    price: "27",
    price2: "30",
    price3: "21",
    price4: "50",
    price5: "30",
    price6: "33",
    type: "Fast food",
    text: "Learning do amet contur dicivt suia non nuameius velit"
};
const products = () => {

    console.log(foodItems)
    return (
        <div>

            {/* <Box style={{ borderTop: '2px solid #000', borderBottom: '2px solid #000' }} sx={{ my: 1 }}>
                <Box sx={{ my: 1 }}>
                    <Box sx={{ flexGrow: 1, ml: 5, }}>
                        <Grid container spacing={2}>
                            <Grid item md={12}>

                                <TextField
                                    id="outlined-number"
                                    label="Number"
                                    type="number"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                                <TextField
                                    id="outlined-number"
                                    label="Number"
                                    type="number"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Grid>
                        </Grid>

                    </Box>

                </Box>

            </Box> */}


            {/* Food Button */}
            <Container>
                <Box sx={{ mt: 3 }}>

                    <Grid container spacing={2}>
                        <Grid md={6} md={12}>
                            <Button style={{ width: '70%' }} sx={{ ml: 1 }} variant="contained">Add Itmes</Button>
                            <Button sx={{ ml: 5 }} variant="outlined">Bulk upload</Button>

                        </Grid>
                    </Grid>
                </Box>
            </Container>

            {/* Food items  || Card Items*/}
            <Box>
                <Typography sx={{ ml: 2 }} sx={{ mt: 2 }} variant="h5">Our Products</Typography>
            </Box>
            <Box sx={{ my: 2 }}>
                <Container>
                    <Card sx={{ maxWidth: "100%", height: '300px' }}>
                        <Grid container spacing={2}>
                            <Grid md={2}>
                                <Box sx={{ ml: 2, mt: 2 }}>
                                    <img src={foodItems.img} alt="" />
                                </Box>
                            </Grid>
                            <Grid md={5}>
                                <Typography variant="h5" style={{ width: "100%" }} sx={{ mt: 3, ml: 10 }}>{foodItems.name}</Typography>
                            </Grid>
                            <Grid md={5}>

                                <Grid container spacing={2}>
                                    <Grid item md={4}>
                                        <Typography sx={{ mt: 3 }}>{foodItems.type}</Typography>
                                    </Grid>
                                    <Grid md={6}>
                                        <TextField sx={{ mt: 5 }}
                                            id="outlined-number"
                                            label="Menu Item"
                                            type="number"
                                            palceholder="Menu Item"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />

                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Card>
                </Container>

            </Box>


        </div >
    );
};

export default products;