import styled from "styled-components";
import { NotLoggedInTopBar } from "../../../common/components/notLoggedInTopBar";
import {
  BackgroundImageContainerBase,
  ContentContainer,
  MainColumn,
  Page,
} from "../../../common/styledComponents";
import { SignupDetailsForm } from "../components/signupDetailsForm";
import { SignupPincodeForm } from "../components/signupPincodeForm";
import { useSignupState } from "../data/signupState";
import signupImage from "../assets/test.png";

const TopBackgroundContainer = styled(BackgroundImageContainerBase)`
  background-image: url(${signupImage});
  height: 35vh;
  margin-bottom: 30px;
  background-position: 0vw -20vh;
  width: 80%;
`;

const BottomBackgroundContainer = styled(BackgroundImageContainerBase)`
  height: 35vh;
  justify-content: left;
  margin-top: 30px;
  width: 80%;
`;

const SignupText = styled.div`
  font-family: "Public Sans Variable", sans-serif;
  font-weight: 800;
  font-style: normal;
  font-size: 40px;
  line-height: 50px;
  letter-spacing: -2px;
  width: 80%;
  color: black;
`;

const SignuipContentContainer = styled(ContentContainer)`
  gap: 0px;
`;

export const SignupPage = () => {
  const { signupDetails } = useSignupState();

  return (
    <Page id="page-container">
      <MainColumn id="main-column">
        <NotLoggedInTopBar showButtons={false} />
        <SignuipContentContainer id="content-container">
          <TopBackgroundContainer />
          <SignupText>
            {signupDetails.isSent
              ? "Enter the code we sent you"
              : "join our community"}
          </SignupText>
          <BottomBackgroundContainer>
            {signupDetails.isSent ? (
              <SignupDetailsForm />
            ) : (
              <SignupPincodeForm />
            )}
          </BottomBackgroundContainer>
        </SignuipContentContainer>
      </MainColumn>
    </Page>
  );
};
