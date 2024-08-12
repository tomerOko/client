import styled from "styled-components";

const Lander = styled.div`
  height: 100vh;
  width: 100vw;
  max-width: 100%;
  max-height: 100%;
`;

const MainColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  max-height: 100%;
  width: 1200px;
  overflow-y: scroll;
  margin: 0 auto;
`;

const MetaDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 400px;
  border: 1px solid black;
`;

const RatingContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 400px;
  border: 1px solid black;
`;

const AvailabilityContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 400px;
  border: 1px solid black;
`;

export const TopicPageComponents = {
  Lander,
  MainColumn,
  MetaDataContainer,
  RatingContainer,
  AvailabilityContainer,
};
