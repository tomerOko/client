import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import { useCurrentTopicState } from "../data/currentTopicState";
import ScheduleTable from "../../../common/components/calendar/calendar";

export const TopicPage: React.FC = () => {
  const { currentTopic } = useCurrentTopicState();

  const { teacher, topic, ratings } = currentTopic.data;

  console.log(currentTopic.data);

  return (
    <Box p={3}>
      <Paper elevation={3} sx={{ padding: 2, marginBottom: 2 }}>
        <Typography variant="h5">Teacher Details</Typography>
        <Typography variant="h4">{`${teacher.firstName} ${teacher.lastName}`}</Typography>
        <Typography variant="subtitle1">{teacher.description}</Typography>
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
        <ScheduleTable />
      </Paper>
    </Box>
  );
};
