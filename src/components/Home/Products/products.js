import { Box, Button, Container } from '@mui/material';
import React from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
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
    text: "Learning do amet contur dicivt suia non nuameius velit passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from "
};
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const products = () => {

    console.log(foodItems)
    return (
        <div>




            {/* Food Button */}
            <Container sx={{ my: 10 }}>
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
                <Container>
                    <Typography sx={{ ml: 2 }} sx={{ mt: 2 }} variant="h5">Our Products</Typography>
                </Container>

            </Box>
            <Box sx={{ my: 2 }}>
                <Container>
                    <Card data-aos="zoom-out-left" sx={{ maxWidth: "100%", height: '400px' }}>
                        <Grid container spacing={2}>
                            <Grid md={2}>
                                <Box sx={{ ml: 2, mt: 2 }}>
                                    <img src={foodItems.img} alt="" />
                                </Box>
                            </Grid>
                            <Grid md={5}>
                                <Typography variant="h4" style={{ width: "100%" }} sx={{ mt: 3, ml: 10 }}>{foodItems.name}</Typography>
                                <Typography>
                                    <TextField sx={{ mt: 3, ml: 10 }}
                                        id="outlined-number"
                                        label="Menu Catagory"
                                        type="text"
                                        palceholder="Menu Item"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                </Typography>
                            </Grid>
                            <Grid md={5}>

                                <Grid container spacing={2}>
                                    <Grid item md={4}>
                                        <Typography variant="h6" sx={{ mt: 3 }}>Pizza Hut</Typography>
                                    </Grid>
                                    <Grid md={6}>
                                        <TextField sx={{ mt: 5 }}
                                            id="outlined-number"
                                            label="FOOD Menu"
                                            type="text"
                                            palceholder="Menu Item"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}

                                        />
                                        <br />
                                        <Typography sx={{ mt: 2 }}>
                                            {foodItems.text}
                                        </Typography>
                                        <br />
                                        <Checkbox {...label} />

                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid sx={{ ml: 2, mt: 2 }} container spacing={2}>
                            <Grid item md={2}>
                                <Typography variant="h6">Base Price :</Typography>
                            </Grid>
                            <Grid item md={2}>
                                <Box style={{ display: 'flex' }}>
                                    <  LocalPizzaIcon sx={{ mt: 1, p: 1 }} />
                                    <Button variant="outlined">Rs: {foodItems.price1}</Button>


                                </Box>



                            </Grid>
                            <Grid item md={2}>
                                <Box style={{ display: 'flex' }}>
                                    <  LocalPizzaIcon sx={{ mt: 1, p: 1 }} />
                                    <Button variant="outlined">Rs: {foodItems.price2}</Button>


                                </Box>


                            </Grid>
                            <Grid item md={2}>
                                <Box style={{ display: 'flex' }}>
                                    <  LocalPizzaIcon sx={{ mt: 1, p: 1 }} />
                                    <Button variant="outlined">Rs: {foodItems.price3}</Button>


                                </Box>


                            </Grid>
                            <Grid item md={2}>
                                <Box style={{ display: 'flex' }}>
                                    <  LocalPizzaIcon sx={{ mt: 1, p: 1 }} />
                                    <Button variant="outlined">Rs: {foodItems.price4}</Button>


                                </Box>


                            </Grid>
                            <Grid item md={2}>
                                <Box style={{ display: 'flex' }}>
                                    <  LocalPizzaIcon sx={{ mt: 1, p: 1 }} />
                                    <Button variant="outlined">Rs: {foodItems.price5}</Button>


                                </Box>


                            </Grid>
                        </Grid>
                    </Card>
                </Container>

            </Box>


        </div >
    );
};

export default products;