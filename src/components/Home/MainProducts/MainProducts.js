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
import AddShoppingCartTwoToneIcon from '@mui/icons-material/AddShoppingCartTwoTone';
import AddIcCallTwoToneIcon from '@mui/icons-material/AddIcCallTwoTone';
import AirportShuttleTwoToneIcon from '@mui/icons-material/AirportShuttleTwoTone';
import AirplanemodeActiveTwoToneIcon from '@mui/icons-material/AirplanemodeActiveTwoTone';
import AodTwoToneIcon from '@mui/icons-material/AodTwoTone';
import ArrowForwardIosTwoToneIcon from '@mui/icons-material/ArrowForwardIosTwoTone';
import CabinTwoToneIcon from '@mui/icons-material/CabinTwoTone';
import CameraswitchTwoToneIcon from '@mui/icons-material/CameraswitchTwoTone';
import CelebrationTwoToneIcon from '@mui/icons-material/CelebrationTwoTone';
import LocalDiningTwoToneIcon from '@mui/icons-material/LocalDiningTwoTone';
import IcecreamTwoToneIcon from '@mui/icons-material/IcecreamTwoTone';
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
    }, {
        id: 3,
        name: "Boscaiola",
        img: "https://templates.envytheme.com/handout/default/assets/img/pizza-shop/8.png",
        price1: "7",
        price2: "30",
        price3: "21",
        price4: "50",
        price: "30",
        price6: "33",
        price: "14",
        type: "fast food",
        text: "Learning do amet contur dicivt suia non nuameius velit"
    }

];
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

console.log(mainProducts)
const MainProducts = () => {

    return (
        <>
            <Box>
                <Container>
                    <Typography variant='h6' sx={{ my: 2 }}>View Flow</Typography>
                </Container>

                <Container sx={{ my: 10, mt: 10 }}>
                    {
                        mainProducts.map(product => <Card data-aos="zoom-in-left" sx={{ maxWidth: '100%', height: 'auto', my: 10 }}>
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
                            {/* Gird-1 */}
                            <Grid sx={{ ml: 2, mt: 1 }} container spacing={2}>
                                <Grid item md={2}>
                                    <Typography variant="h6">Regular Price :</Typography>
                                </Grid>
                                <Grid item md={2}>
                                    <Box style={{ display: 'flex' }}>
                                        <  LocalPizzaIcon sx={{ mt: 1, p: 1 }} />
                                        <Button variant="outlined">Rs: {product.price1}</Button>


                                    </Box>



                                </Grid>
                                <Grid item md={2}>
                                    <Box style={{ display: 'flex' }}>
                                        <  AddShoppingCartTwoToneIcon sx={{ mt: 1, p: 1 }} />
                                        <Button variant="outlined">Rs: {product.price5}</Button>


                                    </Box>


                                </Grid>
                                <Grid item md={2}>
                                    <Box style={{ display: 'flex' }}>
                                        <  AddIcCallTwoToneIcon sx={{ mt: 1, p: 1 }} />
                                        <Button variant="outlined">Rs: {product.price1}</Button>


                                    </Box>


                                </Grid>
                                <Grid item md={2}>
                                    <Box style={{ display: 'flex' }}>
                                        <  AirportShuttleTwoToneIcon sx={{ mt: 1, p: 1 }} />
                                        <Button variant="outlined">Rs: {product.price2}</Button>


                                    </Box>


                                </Grid>
                                <Grid item md={2}>
                                    <Box style={{ display: 'flex' }}>
                                        <  AirplanemodeActiveTwoToneIcon sx={{ mt: 1, p: 1 }} />
                                        <Button variant="outlined">Rs: {product.price1}</Button>


                                    </Box>


                                </Grid>
                            </Grid>
                            <Grid sx={{ ml: 2, mt: 2 }} container spacing={2}>
                                <Grid item md={2}>
                                    <Typography variant="h6"> Large :</Typography>
                                </Grid>
                                <Grid item md={2}>
                                    <Box style={{ display: 'flex' }}>
                                        <  CabinTwoToneIcon sx={{ mt: 1, p: 1 }} />
                                        <Button variant="outlined">Rs: {product.price3}</Button>


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
                                        <  ArrowForwardIosTwoToneIcon sx={{ mt: 1, p: 1 }} />
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

                            {/* Gird-3 */}
                            <Box sx={{ my: 5 }} style={{ display: 'flex' }}>
                                <Typography variant="h6" sx={{ mt: 1, ml: 3 }}> Tooping : Min-1</Typography>
                                <Button variant="outlined" sx={{ ml: 10 }}>Add On</Button>


                            </Box>
                            <Grid sx={{ ml: 2, mt: 1, }} container spacing={2}>
                                <Grid item md={2}>
                                    <Typography variant="h6">Chesse :</Typography>
                                </Grid>
                                <Grid item md={2}>
                                    <Box style={{ display: 'flex' }}>
                                        <  CameraswitchTwoToneIcon sx={{ mt: 1, p: 1 }} />
                                        <Button variant="outlined">Rs: {product.price1}</Button>


                                    </Box>



                                </Grid>
                                <Grid item md={2}>
                                    <Box style={{ display: 'flex' }}>
                                        <  CelebrationTwoToneIcon sx={{ mt: 1, p: 1 }} />
                                        <Button variant="outlined">Rs: {product.price5}</Button>


                                    </Box>


                                </Grid>
                                <Grid item md={2}>
                                    <Box style={{ display: 'flex' }}>
                                        <  LocalPizzaIcon sx={{ mt: 1, p: 1 }} />
                                        <Button variant="outlined">Rs: {product.price1}</Button>


                                    </Box>


                                </Grid>
                                <Grid item md={2}>
                                    <Box style={{ display: 'flex' }}>
                                        <  LocalDiningTwoToneIcon sx={{ mt: 1, p: 1 }} />
                                        <Button variant="outlined">Rs: {product.price2}</Button>


                                    </Box>


                                </Grid>
                                <Grid item md={2}>
                                    <Box style={{ display: 'flex' }}>
                                        <  IcecreamTwoToneIcon sx={{ mt: 1, p: 1 }} />
                                        <Button variant="outlined">Rs: {product.price1}</Button>


                                    </Box>


                                </Grid>
                            </Grid>
                            {/* Gird-4 */}

                            <Grid sx={{ ml: 2, mt: 2, my: 3 }} container spacing={2}>
                                <Grid item md={2}>
                                    <Typography variant="h6">Onnion :</Typography>
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
                            {/*Card Footer  */}
                            <hr />

                            <Box>
                                <Typography sx={{ textAlign: 'center' }}>Show More</Typography>
                            </Box>
                            <Box sx={{ my: 5 }}>
                                <Grid container spacing={2}>
                                    <Grid md={4}>
                                        {/* Check Box */}
                                        <Box>
                                            <Typography sx={{ textAlign: "center", mb: 7 }}>Taxs</Typography>
                                            <Grid container spacing={2}>
                                                <Grid md={8}>
                                                    <Typography sx={{ ml: 6 }}>Deffault Tax</Typography>
                                                    <div style={{ display: 'flex' }}>
                                                        <Checkbox sx={{ ml: 5 }} {...label} defaultChecked />
                                                        <Typography sx={{ ml: 1, mt: 1 }}>CGST: 2.5%</Typography>
                                                    </div>
                                                    <div style={{ display: 'flex' }}>
                                                        <Checkbox sx={{ ml: 5 }} {...label} defaultChecked />
                                                        <Typography sx={{ ml: 1, mt: 1 }}>SGST: 3.5%</Typography>
                                                    </div>


                                                </Grid>
                                                <Grid md={4}>
                                                    <Typography sx={{ ml: 6 }}>Item Level</Typography>
                                                    <div style={{ display: 'flex' }}>
                                                        <Checkbox sx={{ ml: 1 }} {...label} defaultChecked />
                                                        <Typography sx={{ ml: 1, mt: 1 }}>SGST: 3.5%</Typography>
                                                    </div>
                                                </Grid>
                                            </Grid>
                                        </Box>
                                    </Grid>
                                    <Grid md={4}>

                                    </Grid>
                                    <Grid md={4}>
                                        <div sx={{ mt: 4 }}>
                                            <Button sx={{ my: 1, ml: 10, mt: 2 }} variant="contained" color="success">
                                                Recipe Setup
                                            </Button>
                                            <br />
                                            <Button sx={{ my: 1, ml: 10 }} variant="contained" color="success">
                                                Tex setup
                                            </Button>
                                            <br />
                                            <Button sx={{ my: 1, ml: 10 }} variant="contained" color="success">
                                                Inventory Setup
                                            </Button>
                                        </div>
                                    </Grid>

                                </Grid>
                            </Box>
                        </Card>)
                    }
                </Container>

            </Box>
        </>
    );
};

export default MainProducts;