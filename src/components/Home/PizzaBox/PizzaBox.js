import React from 'react';
import Grid from '@mui/material/Grid';
import { Typography, Box } from '@mui/material';

const PizzaBox = () => {
    return (
        <div sx={{ my: 10 }}>
            <Grid container spacing={2}>
                <Grid md={6} xs={8}>
                    <Box>
                        <Typography style={{ color: 'orange' }} variant="h6">Pizza box</Typography>
                        <Typography sx={{ textAlign: 'center' }} style={{ color: 'orange' }} variant="h3">What Type Of Pizza Box Will Be Provided</Typography>
                        <Typography sx={{ my: 3 }} variant="subtitle1">Eusmod tempor incididunt ut labore dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</Typography>
                    </Box>
                    <Box>
                        <Grid container spacing={2}>
                            <Grid md={6} xs={12}>
                                <div sx={{ ml: 2, my: 3 }}>
                                    <img sx={{ ml: 5 }} src="https://templates.envytheme.com/handout/default/assets/img/pizza-box/box1.png" alt="" />
                                </div>

                            </Grid>
                            <Grid md={6} xs={12}>
                                <div sx={{ my: 3 }}>
                                    <img src="https://templates.envytheme.com/handout/default/assets/img/pizza-box/box2.png" />
                                </div>

                            </Grid>

                        </Grid>
                    </Box>
                </Grid>
                <Grid md={6} xs={4}>
                    <div>
                        <img style={{ width: '100%', }} src="https://templates.envytheme.com/handout/default/assets/img/pizza-box/image1.jpg" />
                    </div>
                </Grid>

            </Grid>
        </div>
    );
};

export default PizzaBox;