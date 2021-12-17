import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Box, Container } from '@mui/material';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Checkbox from '@mui/material/Checkbox';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import { Button } from '@mui/material';


const mainProducts = [
    {
        id: 2,
        name: "Pizza Tartufata",
        img: "https://templates.envytheme.com/handout/default/assets/img/pizza-shop/3.png",
        price: "19",
        price1: "7",
        price2: "30",
        price3: "21",
        price4: "50",
        price5: "30",
        price6: "33",
        type: "fast food",
        text: "Learning do amet contur dicivt suia non nuameius velit"
    },

];
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

console.log(mainProducts)
const MainProducts = () => {

    return (
        <>
            <Box>
                <Typography>View Flow</Typography>
                <Container sx={{ my: 10, mt: 10 }}>
                    {
                        mainProducts.map(product => <Card sx={{ maxWidth: '100%' }}>
                            <Grid container spacing={2}>
                                <Grid md={2}>
                                    <Box sx={{ ml: 2, mt: 2 }}>
                                        <img src={product.img} alt="" />
                                    </Box>
                                </Grid>
                                <Grid md={5}>
                                    <Typography variant="h4" style={{ width: "100%" }} sx={{ mt: 3, ml: 10 }}>{product.name}</Typography>
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
                                                {product.text}
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
                                        <Button variant="outlined">Rs: {product.price1}</Button>


                                    </Box>



                                </Grid>
                                <Grid item md={2}>
                                    <Box style={{ display: 'flex' }}>
                                        <  LocalPizzaIcon sx={{ mt: 1, p: 1 }} />
                                        <Button variant="outlined">Rs: {product.price2}</Button>


                                    </Box>


                                </Grid>
                                <Grid item md={2}>
                                    <Box style={{ display: 'flex' }}>
                                        <  LocalPizzaIcon sx={{ mt: 1, p: 1 }} />
                                        <Button variant="outlined">Rs: {product.price3}</Button>


                                    </Box>


                                </Grid>
                                <Grid item md={2}>
                                    <Box style={{ display: 'flex' }}>
                                        <  LocalPizzaIcon sx={{ mt: 1, p: 1 }} />
                                        <Button variant="outlined">Rs: {product.price4}</Button>


                                    </Box>


                                </Grid>
                                <Grid item md={2}>
                                    <Box style={{ display: 'flex' }}>
                                        <  LocalPizzaIcon sx={{ mt: 1, p: 1 }} />
                                        <Button variant="outlined">Rs: {product.price5}</Button>


                                    </Box>


                                </Grid>
                            </Grid>

                        </Card>)
                    }
                </Container>

            </Box>
        </>
    );
};

export default MainProducts;