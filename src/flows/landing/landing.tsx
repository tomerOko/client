import styled from "styled-components";

import "@fontsource-variable/public-sans";
import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../common/assets/logo.svg";
import landingButtonBackground from "./assets/landingButtonBackground.png";
import landingTopBackground from "./assets/landingTopBackground.png";

const Page = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
`;
const MainColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 1200px;
  height: 100%;
`;

const TopBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 2vh;
  height: 6vh;
  justify-content: space-between;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 200px;
  height: 100%;
`;

const Logo = styled.div`
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: 150px;
  height: 100%;
`;

const ActionButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 300px;
  height: 100%;
  gap: 30px;
  align-items: center;
  justify-content: end;
`;

const ActionButtonBase = styled.button`
  width: 100px;
  height: 50px;
  margin: 5px;
  border: none;
  border-radius: 12px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 21px;
  text-align: center;
`;

const SignUpButton = styled(ActionButtonBase)`
  color: #121417;
  background-color: #f0f2f5;
`;

const SignInButton = styled(ActionButtonBase)`
  color: #ffffff;
  background-color: #1a80e6;
`;

const ContentContainer = styled.div`
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

const BackgroundContainerBase = styled.div`
  background-image: url(${landingTopBackground});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  display: flex;
  justify-content: center;
`;

const TopBackgroundContainer = styled(BackgroundContainerBase)`
  background-image: url(${landingTopBackground});
  align-items: end;
`;

const BottomBackgroundContainer = styled(BackgroundContainerBase)`
  background-image: url(${landingButtonBackground});
`;

const LandingText = styled.div`
  font-family: "Public Sans Variable", sans-serif;
  font-weight: 800;
  font-style: normal;
  font-size: 60px;
  line-height: 76px;
  text-align: center;
  letter-spacing: -2px;
  width: 80%;
  margin: 20px;
  color: #ffffff;
`;

export const LandingPage: React.FC = () => {
  const navigete = useNavigate();
  return (
    <Page id="page-container">
      <MainColumn id="main-column">
        <TopBarContainer id="top-bar-container">
          <LogoContainer id="logo-container">
            <Logo id="logo" />
          </LogoContainer>
          <ActionButtonsContainer id="action-buttons-container">
            <SignUpButton
              id="sign-up-button"
              onClick={() => {
                navigete("/signup");
              }}
            >
              Sign Up
            </SignUpButton>
            <SignInButton
              id="sign-in-button"
              onClick={() => {
                navigete("/signin");
              }}
            >
              Sign In
            </SignInButton>
          </ActionButtonsContainer>
        </TopBarContainer>
        <ContentContainer id="content-container">
          <TopBackgroundContainer id="top-background-container">
            <LandingText id="landing-text-1">
              Welcome to the Consultant Community Marketplace
            </LandingText>
          </TopBackgroundContainer>
          <BottomBackgroundContainer id="bottom-background-container">
            <LandingText id="landing-text-2">
              Discover the Perfect Consultant for Your Project in Our
              Professional Network
            </LandingText>
          </BottomBackgroundContainer>
        </ContentContainer>
      </MainColumn>
    </Page>
  );
};
