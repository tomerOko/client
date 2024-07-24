// src/pages/UserFormPage.tsx
import React from "react";
import { Container, Typography } from "@mui/material";
import { BecomeTeacherForm } from "../components/becomeTeacherForm";

export const BecomeTeacherPage: React.FC = () => {
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>
        Let's Become a Consultant!
      </Typography>
      <BecomeTeacherForm />
    </Container>
  );
};
