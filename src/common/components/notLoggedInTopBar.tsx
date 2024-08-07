import styled from "styled-components";
import logo from "../assets/logo.svg";
import { useNavigate } from "react-router-dom";

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

const NotLoggedInTopBarButtons = () => {
  const navigete = useNavigate();
  return (
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
  );
};

export const NotLoggedInTopBar = ({ showButtons = true }) => {
  return (
    <TopBarContainer id="top-bar-container">
      <LogoContainer id="logo-container">
        <Logo id="logo" />
      </LogoContainer>
      {showButtons && <NotLoggedInTopBarButtons />}
    </TopBarContainer>
  );
};
