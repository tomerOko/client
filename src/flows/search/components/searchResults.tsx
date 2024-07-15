
import {
    Avatar,
    Card,
    CardContent,
    CardHeader,
    CircularProgress,
    Container,
    Grid,
    Link,
    Rating,
    Typography,
} from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSearchResultsState } from '../data/serchState';
import { useCurrentTopicState } from '../../topic/data/currentTopicState';
import { currentTopicMock } from '../../topic/mock/mockTopic';


export const SearchResults: React.FC = () => {

    const navigate = useNavigate();

    const {searchResults} = useSearchResultsState()
    const { setCurrentTopic} = useCurrentTopicState()


  if (searchResults.isLoading) {
    return (
      <Container>
        <CircularProgress />
      </Container>
    );
  }

  const handleNavigate = (topicName: string, teacherEmail: string) => {
    setCurrentTopic({
        identifier: {
            topicName,
            teacherEmail
        },
        data: currentTopicMock
    }) 
    navigate(`/topic`);
  };


    return (
        <Container>
          <Grid container spacing={2}>
            {searchResults.topicSummerys.map((topicSummery) => (
              <Grid item xs={12} sm={6} md={4} key={topicSummery.topicName+topicSummery.teacherEmail}>
                <Link  onClick={() => handleNavigate(topicSummery.topicName, topicSummery.teacherEmail)} underline="none">
                  <Card>
                    <CardHeader
                      avatar={<Avatar src={topicSummery.profilePictureUrl} />}
                      title={topicSummery.topicName}
                      subheader={`$${topicSummery.hourlyRate}/hour`}
                    />
                    <CardContent>
                      <Typography variant="body2" color="textSecondary">
                        {topicSummery.description}
                      </Typography>
                      <Rating name="read-only" value={topicSummery.rating} readOnly  precision={0.1}/>
                    </CardContent>
                  </Card>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Container>
      );
  
};

