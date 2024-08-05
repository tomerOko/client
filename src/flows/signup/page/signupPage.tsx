import { SignupDetailsForm } from "../components/signupDetailsForm";
import { SignupPincodeForm } from "../components/signupPincodeForm";
import { useSignupState } from "../data/signupState";

export const SignupPage = () => {
  const { signupDetails } = useSignupState();

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Lets Start</h1>
      <div>
        {signupDetails.isSent ? <SignupDetailsForm /> : <SignupPincodeForm />}
      </div>
    </div>
  );
};
