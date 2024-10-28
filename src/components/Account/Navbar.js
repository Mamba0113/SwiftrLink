import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Navbar = () => {
    return (
        <AppBar position="static">
            <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="h6">Swiftr</Typography>
                <div>
                    <Button variant="contained" color="primary" style={{ marginRight: '8px' }}>
                        Links
                    </Button>
                    <Button variant="contained" color="secondary">
                        Logout
                    </Button>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;

