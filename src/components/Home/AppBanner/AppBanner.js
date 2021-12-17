import React from 'react';
import './Appbanner.css'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
const AppBanner = () => {
    return (
        <div className="bg" >
            <Box>
                <Grid container spacing={2}>
                    <Grid md={6} xs={12}>
                        <div>
                            <img style={{ width: "100%" }} src="https://templates.envytheme.com/handout/default/assets/img/app-mobile.png" />
                        </div>
                    </Grid>
                    <Grid md={6} xs={4}>
                        <div>
                            <Typography variant="h6" sx={{ textAlign: 'center', my: 10 }}>Download app</Typography>
                            <Typography variant="h3" sx={{ textAlign: 'center', my: 3 }}>
                                Download app
                                Get More In Our Application Sit Back And Enjoy</Typography>
                            <Typography variant="subtitle1" sx={{ textAlign: 'center', my: 5 }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.

                                Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravid</Typography>
                            <Typography sx={{ textAlign: 'center', my: 10 }}>
                                <div>
                                    <img src='https://templates.envytheme.com/handout/default/assets/img/holder/1.png' />
                                    <img src='https://templates.envytheme.com/handout/default/assets/img/holder/2.png' />
                                </div>
                            </Typography>
                        </div>
                    </Grid>

                </Grid>
            </Box>
        </div>
    );
};

export default AppBanner;