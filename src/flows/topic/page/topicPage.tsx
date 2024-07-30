import {
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import { Calendar } from "../../../common/components/clendar/demo-app";
import { useCurrentTopicState } from "../data/currentTopicState";

export const TopicPage: React.FC = () => {
  const { currentTopic } = useCurrentTopicState();

  const { teacher, topic, ratings } = currentTopic.data;

  const buttonContainerStyles = {
    marginBottom: "10px",
    display: "flex",
    gap: "10px",
  };

  return (
    <Box p={3}>
      <Paper elevation={3} sx={{ padding: 2, marginBottom: 2 }}>
        <Typography variant="h5">Teacher Details</Typography>
        <Typography variant="body1">
          name: {`${teacher.firstName} ${teacher.lastName}`}
        </Typography>
        <Typography variant="subtitle1">
          about the theacher: {teacher.description}
        </Typography>
      </Paper>

      <Paper elevation={3} sx={{ padding: 2, marginBottom: 2 }}>
        <Typography variant="h5">Topic Details</Typography>
        <Typography variant="body1">{topic.extendedDescription}</Typography>
        <Typography variant="body1">{`Hourly Rate: $${topic.hourlyRate}`}</Typography>
        <Typography variant="body1">{`Minimum Minutes: ${topic.minimalMinutes}`}</Typography>
      </Paper>

      <Paper elevation={3} sx={{ padding: 2, marginBottom: 2 }}>
        <Typography variant="h5">Ratings</Typography>
        <Typography variant="body1">{`Average Rating: ${ratings.averageRating}`}</Typography>
        <List>
          {ratings.examples.map((example, index) => (
            <ListItem key={index}>
              <ListItemText
                primary={`Rating: ${example.rating}`}
                secondary={example.comment}
              />
            </ListItem>
          ))}
        </List>
      </Paper>

      <Paper elevation={3} sx={{ padding: 2, marginBottom: 2 }}>
        <Typography variant="h5">Availability</Typography>

        <Box style={buttonContainerStyles}>
          <Button variant="contained" color="primary">
            Try Call Now
          </Button>
          <Button variant="contained" color="primary">
            chat
          </Button>
        </Box>
        <Calendar />
      </Paper>
    </Box>
  );
};
