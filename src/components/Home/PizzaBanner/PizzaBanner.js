import React from 'react';
import Grid from '@mui/material/Grid';
import { Box, Typography, Button } from '@mui/material';

const PizzaBanner = () => {
    return (
        <>
            <Grid container spacing={2}>
                <Grid sm={12} md={6}>
                    <Box sx={{ my: 10 }}>
                        <Box sx={{ my: 10 }}>
                            <Typography data-aos="fade-up" sx={{ textAlign: 'center', my: 5 }} variant='h3'>What You Want To Select A <br />Pickup Through Online</Typography>
                            <Typography data-aos="fade-up" sx={{ textAlign: 'center', my: 4 }} variant='subtitle1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.

                                <br />  Eusmod tempor incididunt ut labore et dolore magna aliqua. Quis suspendisse ultrices gravida.</Typography>
                            <Typography data-aos="fade-up" sx={{ textAlign: 'center', my: 5 }}>
                                <Button data-aos="fade-up" style={{ backgroundColor: 'red', color: '#fff', padding: '15 25 px' }}>Order Now</Button>
                            </Typography>

                        </Box>
                    </Box>
                </Grid>
                <Grid sm={12} md={6}>
                    <Box>
                        <img data-aos="fade-left" style={{ width: '100%', height: '100%' }} src="https://templates.envytheme.com/handout/default/assets/img/services/image1.png" alt="" />
                    </Box>
                </Grid>

            </Grid>
            <Box>
                <img data-aos="fade-left" style={{ width: '100%', height: '100%' }} src="https://templates.envytheme.com/handout/default/assets/img/our-services.png" alt="" />
            </Box>
        </>
    );
};

export default PizzaBanner;