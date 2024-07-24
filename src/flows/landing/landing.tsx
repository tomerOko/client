import { Button, Card, CardContent, Typography } from '@mui/material';
import React from 'react';


export const LandingPage: React.FC = () => {
return (
<div style={{ padding: '2rem' }}>
      <Typography variant="h1" gutterBottom>
        Welcome to the Community Market of Consultants
      </Typography>
      <Card>
        <CardContent>
          <Typography variant="h2">
            Find the best consultant for your needs
          </Typography>
          <Typography variant="body1">
            Browse through our list of professional consultants and find the right fit for your project.
          </Typography>
          <Button variant="contained" color="primary" href="/signup" style={{ marginRight: '10px' }}>
            Sign Up
        </Button>
        <Button variant="contained" color="primary" href="/signin">
            Log In
        </Button>
        </CardContent>
      </Card>
    </div>
);
};

