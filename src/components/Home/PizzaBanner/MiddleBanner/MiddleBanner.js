import { Box, Typography } from '@mui/material';
import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import products from './../../Products/Products';
const pizza = [
    {
        id: 1,
        name: "Quattro Stagioni",
        img: "https://templates.envytheme.com/handout/default/assets/img/pizza-shop/1.png",
        text: "Learning do amet contur dicivt suia non nuameius velit",
        price: "56.00",

    },
    {
        id: 2,
        name: "Pizza Al Pesto",
        img: "https://templates.envytheme.com/handout/default/assets/img/pizza-shop/2.png",
        text: "Learning do amet contur dicivt suia non nuameius velit",
        price: "87",

    },
    {
        id: 3,
        name: "Fiori Di Zuccaa",
        img: "https://templates.envytheme.com/handout/default/assets/img/pizza-shop/3.png",
        text: "Learning do amet contur dicivt suia non nuameius velit",
        price: "98",

    },
    {
        id: 4,
        name: "Fiori Di Zucca",
        img: "https://templates.envytheme.com/handout/default/assets/img/pizza-shop/4.png",
        text: "Learning do amet contur dicivt suia non nuameius velit",
        price: "23",

    }

];
console.log(pizza)
const MiddleBanner = () => {
    return (
        <>
            <Box>
                <Typography variant="h5" style={{ color: '#FCBC1B' }} sx={{ textAlign: 'center' }}>What You Expect!</Typography>
                <Typography variant='h3' style={{ color: '#1D1D1D' }} sx={{ textAlign: 'center' }}>The Initially Have Covered</Typography>

                <Box sx={{ my: 7 }}>

                    <Grid sx={{ alignContent: 'center', justifyContent: 'center' }} container spacing={2}>
                        {
                            pizza?.map(product => <Grid md={3} xs={12}>
                                <Card sx={{ maxWidth: '90%', my: 2, ml: 6 }}>
                                    <CardMedia
                                        component="img"
                                        alt="green iguana"
                                        height="30%"
                                        image={product.img}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {product.name}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {product.text}
                                        </Typography>
                                    </CardContent>

                                </Card>
                            </Grid>
                            )
                        }

                    </Grid>
                </Box>
            </Box>
        </>
    );
};

export default MiddleBanner;