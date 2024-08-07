import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Rating,
  Grid,
  Paper,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export const ReviewingPage = () => {
  const navigate = useNavigate();
  const [generalRating, setGeneralRating] = React.useState<number | null>(0);
  const [communicationRating, setCommunicationRating] = React.useState<
    number | null
  >(0);
  const [helpfulnessRating, setHelpfulnessRating] = React.useState<
    number | null
  >(0);
  const [consultantTimeRating, setConsultantTimeRating] = React.useState<
    number | null
  >(0);
  const [comment, setComment] = React.useState("");

  const handleSubmit = () => {
    // Handle the submit logic here

    navigate("/search");
  };

  return (
    <Paper elevation={3} sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        Review & Rating
      </Typography>

      <Typography variant="h6">General Rating</Typography>
      <Rating
        name="general-rating"
        value={generalRating}
        onChange={(event, newValue) => {
          setGeneralRating(newValue);
        }}
      />

      <Typography variant="h6" sx={{ marginTop: 2 }}>
        Detail Rating
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <Typography>Communication Skills</Typography>
          <Rating
            name="communication-rating"
            value={communicationRating}
            onChange={(event, newValue) => {
              setCommunicationRating(newValue);
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Typography>Helpfulness of Consulting</Typography>
          <Rating
            name="helpfulness-rating"
            value={helpfulnessRating}
            onChange={(event, newValue) => {
              setHelpfulnessRating(newValue);
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Typography>Consultant Took Too Long</Typography>
          <Rating
            name="consultant-time-rating"
            value={consultantTimeRating}
            onChange={(event, newValue) => {
              setConsultantTimeRating(newValue);
            }}
          />
        </Grid>
      </Grid>

      <Typography variant="h6" sx={{ marginTop: 2 }}>
        Comment Section
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}>
        <TextField
          fullWidth
          multiline
          rows={4}
          placeholder="Provide your feedback here..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </Box>

      <Button
        variant="contained"
        color="secondary"
        fullWidth
        onClick={handleSubmit}
      >
        Submit Review
      </Button>
    </Paper>
  );
};
