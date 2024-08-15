import React, { useState } from "react";
import {
  Box,
  Typography,
  Avatar,
  Grid,
  LinearProgress,
  IconButton,
  Button,
} from "@mui/material";
import { useCurrentTopicState } from "../../data/currentTopicState";
import { TopicRatingStyles } from "./topicRatingStyles";
import styled from "styled-components";

const {
  Header,
  AverageRating,
  RatingSummary,
  RatingAverageContainer,
  RatingDistributionContainer,
} = TopicRatingStyles;

const GreenProgressBar = styled(LinearProgress)({
  height: "8px!important",
  borderRadius: 5,
  backgroundColor: "#E8DECF!important", // gray background color
  width: "340px",
  marginX: 1,
  marginLeft: "20px",
  marginRight: "20px",
  marginTop: "10px",
  "& .MuiLinearProgress-bar": {
    borderRadius: 5,
    backgroundColor: "#009963!important", // green color
  },
});

const RatingsComponent: React.FC = () => {
  const { ratings } = useCurrentTopicState();
  const [showReviews, setShowReviews] = useState(false);

  const reviews = ratings.data;
  const totalReviews = reviews.length;
  const averageRating =
    reviews.reduce((acc, review) => acc + review.rating, 0) / totalReviews;

  const ratingDistribution = Array(5)
    .fill(0)
    .map((_, i) => {
      const stars = 5 - i;
      const count = reviews.filter((review) => review.rating === stars).length;
      const percentage = (count / totalReviews) * 100;
      return { stars, percentage };
    });

  return (
    <Box>
      <Header>Ratings</Header>

      <RatingSummary>
        <RatingAverageContainer>
          <AverageRating>{averageRating.toFixed(1)}</AverageRating>
          <div>
            {"★".repeat(Math.round(averageRating))}
            {"☆".repeat(5 - Math.round(averageRating))}
          </div>
          <div>{totalReviews} reviews</div>
        </RatingAverageContainer>
        <RatingDistributionContainer>
          {ratingDistribution.map((dist, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: "row",
                alignContent: "start",
              }}
            >
              <div style={{ width: "20px" }}>{dist.stars}</div>

              <GreenProgressBar variant="determinate" value={dist.percentage} />

              <div>{dist.percentage.toFixed(0)}%</div>
            </div>
          ))}
        </RatingDistributionContainer>
      </RatingSummary>

      <Box mt={3}>
        <Button variant="outlined" onClick={() => setShowReviews(!showReviews)}>
          {showReviews ? "Hide Reviews" : "Show Reviews"}
        </Button>
        {showReviews && (
          <Box mt={2}>
            {reviews.map((review, index) => (
              <Box key={index} mb={2}>
                <Grid container spacing={2}>
                  <Grid item>
                    <Avatar src={review.user.profilePictureUrl} />
                  </Grid>
                  <Grid item xs>
                    <Typography variant="subtitle1">
                      {review.user.firstName} {review.user.lastName}
                    </Typography>
                    <Typography variant="caption" color="textSecondary">
                      {new Date(review.date).toLocaleDateString()}
                    </Typography>
                    <Box display="flex" alignItems="center">
                      <Typography variant="body2">
                        {"★".repeat(review.rating)}
                        {"☆".repeat(5 - review.rating)}
                      </Typography>
                    </Box>
                    <Typography variant="body2">{review.comment}</Typography>
                    {/* 
                    import ThumbUpIcon from "@mui/icons-material/ThumbUp";
                    import ThumbDownIcon from "@mui/icons-material/ThumbDown";
                    
                    <Box display="flex" alignItems="center">
                      <IconButton size="small">
                        <ThumbUpIcon fontSize="small" /> {review.likes}
                      </IconButton>
                      <IconButton size="small">
                        <ThumbDownIcon fontSize="small" /> {review.dislikes}
                      </IconButton>
                    </Box> */}
                  </Grid>
                </Grid>
              </Box>
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default RatingsComponent;
