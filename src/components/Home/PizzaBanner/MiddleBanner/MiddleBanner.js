import { Box, Typography } from '@mui/material';
import React from 'react';
import Grid from '@mui/material/Grid';

const MiddleBanner = () => {
    return (
        <>
            <Box>
                <Typography variant="h5" style={{ color: '#FCBC1B' }} sx={{ textAlign: 'center' }}>What You Expect!</Typography>
                <Typography variant='h3' style={{ color: '#1D1D1D' }} sx={{ textAlign: 'center' }}>The Initially Have Covered</Typography>

                <Box>
                    <Grid container spacing={2}>
                        <Grid md={3}>
                            <Box></Box>
                        </Grid>
                        <Grid md={3}>

                        </Grid>
                        <Grid md={3}>

                        </Grid>
                        <Grid md={3}>

                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </>
    );
};

export default MiddleBanner;