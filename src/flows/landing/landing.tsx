import { Button, TextField, Typography } from '@mui/material';
import React from 'react';

export const LandingPage: React.FC = () => {
return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <Typography variant="h4" component="h1" gutterBottom>
            Welcome to the Landing Page
        </Typography>
        <Button variant="contained" color="primary" href="/signup" style={{ marginRight: '10px' }}>
            Sign Up
        </Button>
        <Button variant="contained" color="primary" href="/signin">
            Log In
        </Button>
    </div>
);
};

