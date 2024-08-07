import styled from "styled-components";

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
`;

export const MainColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 1200px;
  height: 100%;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding: 30px 0;
  /* padding: 50px; */
`;

export const BackgroundImageContainerBase = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  display: flex;
  justify-content: center;
`;
