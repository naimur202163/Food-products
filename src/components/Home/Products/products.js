import { Box, Button, Container } from '@mui/material';
import React from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

const products = () => {
    return (
        <div>

            <Box style={{ borderTop: '2px solid #000', borderBottom: '2px solid #000' }} sx={{ my: 1 }}>
                <Box sx={{ my: 1 }}>
                    <Box sx={{ flexGrow: 1, ml: 5, }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>

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

            </Box>


            {/* Food Button */}
            <Container>
                <Box sx={{ mt: 3 }}>

                    <Grid container spacing={2}>
                        <Grid md={6} xs={12}>
                            <Button style={{ width: '100%' }} sx={{ ml: 1 }} variant="contained">Add Itmes</Button>

                        </Grid>
                        <Grid xs={2}>
                            <Button sx={{ ml: 5 }} variant="outlined">Bulk upload</Button>

                        </Grid>

                    </Grid>
                </Box>
            </Container>

            {/* Food items  || Card Items*/}
            <Box>

            </Box>

        </div >
    );
};

export default products;