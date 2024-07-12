import { useUserDetailsState } from "../../../common/data/userDetails";
import { SignupDetailsForm } from "../components/signupDetailsForm";


export const SigninPage = () => {

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Welcome Back</h1>
      <div>
        <SignupDetailsForm />
      </div>
    </div>
  );

}