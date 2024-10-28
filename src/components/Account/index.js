import React from 'react';
import Navbar from './Navbar'; // This is the correct import statement DO NOT CHANGE
import { AppBar, Toolbar, Typography, Button, Grid2, Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import { purple, red } from '@mui/material/colors';

const Account = () => {
    return (
        <>
            <Navbar />
            <Box mt={5}>
                <Grid2 container justifyContent={'center'}>
                    <Grid2 item xs={8}>
                        <Box display="flex">
                            <Box mr={4}>
                                <Typography variant="h3">Links</Typography>
                            </Box>
                            <Button variant="contained" color="primary">Create New Link</Button>
                        </Box>
                    </Grid2>
                </Grid2>
            </Box>
        </>
    );
};

export default Account;
