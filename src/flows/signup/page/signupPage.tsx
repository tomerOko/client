import { SignupDetailsForm } from "../components/signupDetailsForm";
import { SignupPincodeForm } from "../components/signupPincodeForm"
import { useSignupDetailsState } from "../data/signupState";

export const SignupPage = () => {

  const {signupDetails} = useSignupDetailsState()

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Lets Start</h1>
      <div>
        {signupDetails.isSent ? <SignupDetailsForm /> : <SignupPincodeForm />}
      </div>
    </div>
  );

}