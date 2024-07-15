
import { Box, Grid, List, ListItem, ListItemText, Paper, Typography } from "@mui/material";
import { useCurrentTopicState } from "../data/currentTopicState";



export const TopicPage: React.FC = () => {

  const {currentTopic} = useCurrentTopicState()

  const { teacher, topic, ratings, availability } = currentTopic.data

  const renderAvailability = () => {
    // Create an array to hold available times
    let availableTimes: boolean[] = Array(24).fill(false);

    // Mark available times as true in the array
    availability.forEach(avail => {
      for (let i = avail.fromTime; i <= avail.toTime; i++) {
        availableTimes[i] = true;
      }
    });

    // Render calendar-like presentation
    return (
      <Grid container spacing={1}>
        {availableTimes.map((available, index) => (
          <Grid item key={index}>
            <Paper elevation={available ? 3 : 0} sx={{ padding: 1, backgroundColor: available ? 'lightblue' : 'inherit' }}>
              <Typography variant="body2" align="center">{`${index}:00`}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    );
  };

  return (
    <Box p={3}>
      <Paper elevation={3} sx={{ padding: 2, marginBottom: 2 }}>
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
              <ListItemText primary={`Rating: ${example.rating}`} secondary={example.comment} />
            </ListItem>
          ))}
        </List>
      </Paper>

      <Paper elevation={3} sx={{ padding: 2, marginBottom: 2 }}>
        <Typography variant="h5">Availability</Typography>
        {renderAvailability()}
      </Paper>
    </Box>
  );
};

