import React from "react";
import { Card, CardContent, Typography, Button, Grid } from "@mui/material";
import { Meeting } from "../data/nextMeetingsState";
import ChatIcon from "@mui/icons-material/Chat";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import CancelIcon from "@mui/icons-material/Cancel";
import { useNavigate } from "react-router-dom";

export const MeetingCard: React.FC<{ meeting: Meeting }> = ({ meeting }) => {
  const navigate = useNavigate();
  const { consultant, topic, date } = meeting;
  const meetingDate = new Date(date).toLocaleString();

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card>
      <CardContent>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <img
              src={consultant.imageUrl}
              alt={consultant.name}
              style={{ borderRadius: "50%", width: "50px", height: "50px" }}
            />
          </Grid>
          <Grid item>
            <Typography variant="h6">{topic.name}</Typography>
            <Typography variant="subtitle1">{consultant.name}</Typography>
            <Typography variant="body2">{meetingDate}</Typography>
            <Button
              variant={expanded ? "outlined" : "contained"}
              onClick={handleExpandClick}
            >
              Details
            </Button>
          </Grid>
        </Grid>
        {expanded && (
          <div style={{ marginTop: "16px" }}>
            <Typography variant="body2">{topic.description}</Typography>
            <Typography variant="body2">
              Additional clients:{" "}
              {meeting.additionalClients
                .map((client) => client.name)
                .join(", ")}
            </Typography>
            <Typography variant="body2">
              Hourly rate: {topic.hourlyRate}
            </Typography>
            <div style={{ marginTop: "16px" }}>
              <Button variant="contained" startIcon={<ChatIcon />}>
                Chat
              </Button>
              <Button
                variant="contained"
                startIcon={<VideoCallIcon />}
                onClick={() => {
                  navigate("/mock-call");
                }}
              >
                Go to meeting
              </Button>
              <Button
                variant="outlined"
                style={{ marginLeft: "8px" }}
                startIcon={<CancelIcon />}
                color="error"
              >
                Cancel
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
