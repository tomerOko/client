import styled from "styled-components";

const Header = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 28px;
  color: #1c170d;
  font-family: "Plus Jakarta Sans", sans-serif;
  margin-bottom: -1npm0px;
`;

const AverageRating = styled.div`
  font-family: "Plus Jakarta Sans";
  font-style: normal;
  font-weight: 800;
  font-size: 36px;
  line-height: 45px;
  letter-spacing: -1px;
  margin-top: 10px;
  color: #1c170d;
`;

const RatingSummary = styled.div`
  display: flex;
  height: 185px;
  gap: 20px;
`;

const RatingAverageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
  width: 120px;
`;

const RatingDistributionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  width: 440px;
  color: #a1824a;
`;

export const TopicRatingStyles = {
  Header,
  AverageRating,
  RatingSummary,
  RatingAverageContainer,
  RatingDistributionContainer,
};
