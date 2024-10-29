import React from 'react';
import { Typography, Button, Box, Paper, Grid } from '@mui/material';
import BarChartIcon from '@mui/icons-material/BarChart';
import { FormatAlignCenter } from '@mui/icons-material';

const LinkCard = ({ id, createdAt, name, longURL, shortCode, totalVisits }) => {
    return (
        <Paper
            elevation={3}
            style={{
                padding: '15px',
                marginBottom: '15px',
                borderRadius: '8px',
            }}
            alignItems={FormatAlignCenter}
        >
            <Box mb={1}> {/* Reduced margin */}
                <Typography variant="subtitle2" color="textSecondary">
                    Created At: {createdAt ? createdAt.toString() : "N/A"}
                </Typography>
                <Typography variant="h5" mb={1} style={{ fontSize: '1.25rem' }}> {/* Reduced font size */}
                    {name || "No Name"}
                </Typography>
                <Typography variant="body2" color="textSecondary">{longURL || "No URL"}</Typography>
            </Box>

            <Box display="flex" alignItems="center" justifyContent="space-between" mt={1} mb={1}> {/* Reduced margin */}
                <Box>
                    <Typography variant="h6" style={{ fontSize: '1rem' }}>
                        {window.location.host}/{shortCode || "No Short Code"}
                    </Typography>
                    <Button size="small" variant="outlined" style={{ marginTop: '6px' }}>Copy</Button>
                </Box>

                <Box display="flex" alignItems="center">
                    <Typography variant="h6" style={{ fontSize: '1rem' }}>{totalVisits || 0}</Typography>
                    <BarChartIcon style={{ marginLeft: '5px' }} />
                    <Typography variant="body2" ml={1} style={{ fontSize: '0.875rem' }}>Total Visits</Typography>
                </Box>
            </Box>
        </Paper>

    );
}

export default LinkCard;
