import { SigninForm } from "../components/signinForm";
import { DemoApp } from "../../../common/components/fullCalendar/demo-app";

export const SigninPage = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Welcome Back</h1>
      <div>
        <SigninForm />
        <DemoApp />
      </div>
    </div>
  );
};
