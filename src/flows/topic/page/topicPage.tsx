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
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSearchState } from "../../search/data/serchState";
import { mockTopicAvalabilities, mockTopicRatings } from "../mock/mockTopic";
import { TopicPageComponents } from "../components/styledComponents";

const {
  MainColumn,
  AvailabilityContainer,
  Lander,
  MetaDataContainer,
  RatingContainer,
} = TopicPageComponents;

export const TopicPage: React.FC = () => {
  const navigate = useNavigate();
  const {
    setMetaData,
    availability,
    metaData,
    ratings,
    setAvailability,
    setRatings,
  } = useCurrentTopicState();
  const { chosenTopic } = useSearchState();

  /* LOAD FROM CLICKED CARD STATE */
  useEffect(() => {
    if (!chosenTopic) {
      navigate("/search");
      return;
    }
    const { ID, averageRating, description, hourlyRate, name, teacher } =
      chosenTopic;
    setMetaData({
      extendedDescription: description,
      hourlyRate,
      ID,
      name,
      teacher,
    });
    setRatings({
      averageRating,
      examples: [],
    });
  }, [chosenTopic, navigate, setMetaData, setRatings]);

  /* FETCH */
  useEffect(() => {
    // fetch availability, ratings and all of the topic details
    console.log("fetching availability");
    setAvailability(mockTopicAvalabilities);
    setRatings(mockTopicRatings);
  }, [setAvailability, setRatings]);

  return (
    <Lander>
      <MainColumn>
        <MetaDataContainer></MetaDataContainer>
        <RatingContainer></RatingContainer>
        <AvailabilityContainer>
          <Calendar />
        </AvailabilityContainer>
      </MainColumn>
    </Lander>
  );
};
