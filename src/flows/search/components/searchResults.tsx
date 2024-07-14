
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
import { useSearchResultsState } from '../data/serchState';


export const SearchResults: React.FC = () => {

    const {searchResults} = useSearchResultsState()


  if (searchResults.isLoading) {
    return (
      <Container>
        <CircularProgress />
      </Container>
    );
  }

    return (
        <Container>
          <Grid container spacing={2}>
            {searchResults.topicSummerys.map((topicSummery) => (
              <Grid item xs={12} sm={6} md={4} key={topicSummery.name}>
                <Link href={`/Topic/${topicSummery.name}`} underline="none">
                  <Card>
                    <CardHeader
                      avatar={<Avatar src={topicSummery.profilePictureUrl} />}
                      title={topicSummery.name}
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

