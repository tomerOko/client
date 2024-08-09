// ConsultantCard.tsx
import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Avatar,
  CardMedia,
  Rating,
} from "@mui/material";
import { Consultant } from "../types";
import { Description } from "@mui/icons-material";

export const ConsultantCard: React.FC<Consultant> = ({
  profilePictureUrl,
  name,
  topic,
  hourlyRate,
  averageRating,
  numberOfRatings,
  description,
}) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        margin: "auto",
        borderRadius: 2,
        boxShadow: 3,
        transition: "transform 0.2s",
        "&:hover": {
          transform: "scale(1.05)",
        },
      }}
    >
      <CardMedia
        sx={{
          height: 140,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        // image={profilePictureUrl}
        title={name}
      >
        <Avatar
          src={profilePictureUrl}
          sx={{
            width: 80,
            height: 80,
            border: "2px solid white",
            boxShadow: 1,
          }}
        />
      </CardMedia>
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            height: "3.6em",
            overflow: "hidden",
            textOverflow: "ellipsis",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "-10px",
          }}
        >
          {name} | {topic}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description.length > 100
            ? `${description.slice(0, 100)}...`
            : description}{" "}
        </Typography>
        <Typography variant="body1" color="text.primary">
          <Rating
            name="read-only"
            value={averageRating}
            readOnly
            precision={0.1}
          />
          <span style={{ marginLeft: 10 }}>({numberOfRatings})</span>
        </Typography>
        <div></div>
        <Typography variant="body1" color="text.primary">
          ${hourlyRate.toFixed(2)} / hour
        </Typography>
      </CardContent>
    </Card>
  );
};
