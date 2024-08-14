// src/pages/UserFormPage.tsx
import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { ConsoltantDetailsForm } from "../components/consoltantDetailsForm";

export const ConsoltantDetailsPage: React.FC = () => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 10 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Your Details As A Consultant
        </Typography>
        <ConsoltantDetailsForm />
      </Box>
    </Container>
  );
};
