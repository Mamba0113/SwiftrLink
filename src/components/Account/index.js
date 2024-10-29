import React from 'react';
import { useState } from 'react';
import Navbar from './Navbar'; // This is the correct import statement DO NOT CHANGE
import { AppBar, Toolbar, Typography, Button, Grid2, Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import { purple, red } from '@mui/material/colors';
import LinkCard from './LinkCard';
import { Container } from '@mui/material';

const dummyData = [
    {
        id: 'fffff',
        createdAt: new Date(),
        name: 'Example Site',
        longURL: 'https://google.com',
        shortCode: 'goog',
        totalVisits: 13

    }
]


const Account = () => {
    const [links, setLinks] = useState(dummyData);

    return (
        <>
            <Navbar />
            <Container maxWidth="lg"> {/* Use "lg" or "xl" to control width */}
                <Box mt={5}>
                    <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
                        <Typography variant="h3">Links</Typography>
                        <Button variant="contained" color="primary">Create New Link</Button>
                    </Box>
                    {links.map(link => (<LinkCard key={link.id} {...link} />))}
                </Box>
            </Container>
        </>
    );
};

export default Account;
