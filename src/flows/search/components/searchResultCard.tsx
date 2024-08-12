// ConsultantCard.tsx
import {
  Avatar,
  Card,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";
import { TopicSummery, useSearchState } from "../data/serchState";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export const SearchResultCard: React.FC<{ data: TopicSummery }> = ({
  data,
}) => {
  const navigate = useNavigate();
  const { setChosenTopic } = useSearchState();

  const handleClick = () => {
    setChosenTopic(data);
    navigate("/topic");
  };

  const {
    description,
    teacher: { profilePictureUrl, name: teacherName, email: teacherEmail },
    name,
    hourlyRate,
    averageRating,
    numberOfRatings,
  } = data;

  return (
    <Card
      id="card"
      sx={{
        maxWidth: 200,
        height: 400,
        margin: "auto",
        borderRadius: 2,
        boxShadow: 3,
        transition: "transform 0.2s",
        position: "relative",
        "&:hover": {
          transform: "scale(1.05)",
        },
      }}
    >
      <CardMedia
        id="card-media"
        sx={{
          height: 140,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        // image={profilePictureUrl}
        title={name}
        style={{ height: "120px" }}
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
      <CardContent id="card-content">
        <Typography
          id="card-title"
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
            // justifyContent: "center",
            // alignItems: "center",
            marginTop: "-10px",
          }}
          style={{ fontSize: "18px", height: "70px" }}
        >
          {name} | {teacherName}
        </Typography>
        <Typography
          id="card-description"
          variant="body2"
          color="text.secondary"
        >
          {description.length > 100
            ? `${description.slice(0, 100)}...`
            : description}
        </Typography>
      </CardContent>
      <div
        style={{ position: "absolute", bottom: "10px", paddingLeft: "14px" }}
      >
        <div id="card-rating" style={{ display: "flex" }}>
          <Rating
            name="read-only"
            value={averageRating}
            readOnly
            precision={0.1}
            color="#33333"
            sx={{ color: "cadetblue!important" }}
          />
          <span style={{ marginLeft: "10px", marginTop: "2px" }}>
            ({numberOfRatings})
          </span>
        </div>
        <Typography
          id="card-hourly-rate"
          variant="body1"
          color="text.primary"
          style={{ marginLeft: "3px" }}
        >
          ${hourlyRate.toFixed(2)} / hour
        </Typography>
      </div>
    </Card>
  );
};

// const CardContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   width: 200px;
//   height: 500px;
//   /* border: 1px solid black; */
//   border-radius: 10px;
//   font-family: "Plus Jakarta Sans", sans-serif;
// `;

// const CardImage = styled.img`
//   width: 100%;
//   height: 200px;
//   object-fit: cover;
//   border-radius: 10px;
// `;

// const CardHeader = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;

//   font-weight: 500;
//   margin-top: 10px;

//   font-size: 18px;
//   line-height: 26px;
//   align-self: stretch;
//   flex-grow: 0;
//   font-style: normal;
// `;

// const CardBody = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   font-size: 15px;
//   color: #a1824a;
//   align-self: stretch;
//   flex-grow: 0;
//   font-style: normal;
// `;
// <>
//   <CardContainer>
//     <CardImage src={profilePictureUrl} alt={name} />
//     <CardHeader>
//       {name} | {teacherName}
//     </CardHeader>
//     <CardBody>
//       {description.length > 100
//         ? `${description.slice(0, 100)}...`
//         : description}
//       <Rating
//         name="read-only"
//         value={averageRating}
//         readOnly
//         precision={0.1}
//       />
//       <span>({numberOfRatings})</span>
//       <div></div>${hourlyRate.toFixed(2)} / hour
//     </CardBody>
//   </CardContainer>
// </>
