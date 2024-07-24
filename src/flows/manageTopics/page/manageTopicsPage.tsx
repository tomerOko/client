import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  Box,
} from "@mui/material";
import TopicForm from "../components/topicForm";
import { managedTopicsMock } from "../mock/managedTopicsMock";

interface Topic {
  extendedDescription: string;
  hourlyRate: number;
  minimalMinutes: number;
}

export const ManageTopicsPage: React.FC = () => {
  const [topics, setTopics] = useState<Topic[]>(managedTopicsMock);
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);

  const handleAddUpdateTopic = (newTopic: Topic) => {
    if (selectedTopic) {
      setTopics((prevTopics) =>
        prevTopics.map((topic) => (topic === selectedTopic ? newTopic : topic))
      );
      setSelectedTopic(null);
    } else {
      setTopics((prevTopics) => [...prevTopics, newTopic]);
    }
  };

  const handleDeleteTopic = (topicToDelete: Topic) => {
    setTopics((prevTopics) =>
      prevTopics.filter((topic) => topic !== topicToDelete)
    );
  };

  return (
    <Box>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setSelectedTopic(null)}
        style={{ marginBottom: "20px" }}
      >
        Add New Topic
      </Button>
      <TopicForm
        onSubmit={handleAddUpdateTopic}
        initialValues={selectedTopic}
      />
      <Box display="flex" flexDirection="column" gap={2} marginTop={2}>
        {topics.map((topic, index) => (
          <Card key={index}>
            <CardContent>
              <Typography variant="h6">{topic.extendedDescription}</Typography>
              <Typography>Hourly Rate: ${topic.hourlyRate}</Typography>
              <Typography>Minimal Minutes: {topic.minimalMinutes}</Typography>
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                color="primary"
                onClick={() => setSelectedTopic(topic)}
              >
                Edit
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => handleDeleteTopic(topic)}
              >
                Delete
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </Box>
  );
};
