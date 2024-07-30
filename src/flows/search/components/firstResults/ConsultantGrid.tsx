// ConsultantGrid.tsx
import React from "react";
import { Grid } from "@mui/material";
import { ConsultantCard } from "./ConsultantCard";
import { Consultant } from "./types";

interface ConsultantGridProps {
  consultants: Consultant[];
}

export const ConsultantGrid: React.FC<ConsultantGridProps> = ({
  consultants,
}) => {
  return (
    <Grid container spacing={2}>
      {consultants.map((consultant, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
          <ConsultantCard
            profilePictureUrl={consultant.profilePictureUrl}
            name={consultant.name}
            topic={consultant.topic}
            hourlyRate={consultant.hourlyRate}
            averageRating={consultant.averageRating}
            numberOfRatings={consultant.numberOfRatings}
          />
        </Grid>
      ))}
    </Grid>
  );
};
