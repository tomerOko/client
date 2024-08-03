import { Button, TextField } from "@mui/material";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { fetchHookFactory } from "../../../common/hooks/fetch/useFetch";
import { useSignupState } from "../data/signupState";

const useFetchPincode = fetchHookFactory("SEND_PINCODE");

export const SignupPincodeForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { setSignupDetails, signupDetails } = useSignupState();

  const { fetch: fetchUser, loading, error } = useFetchPincode();

  const onSubmit = async (data: any) => {
    const { email } = data;
    await fetchUser({
      email,
    });
    setSignupDetails({
      isSent: true,
      sentAt: Date.now(),
      email,
      firstName: signupDetails.firstName,
      lastName: signupDetails.lastName,
      password: signupDetails.password,
    });
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto" }}>
      <h3>Enter your email to receive a pincode</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">Email:</label>
        <div style={{ margin: "1rem 0" }}>
          <TextField
            type="email"
            id="email"
            {...register("email", { required: true })}
            variant="outlined"
            size="small"
            fullWidth
          />
          {errors.email && (
            <span style={{ color: "red" }}>This field is required</span>
          )}
        </div>

        <Button type="submit" variant="contained" color="primary" fullWidth>
          send pincode
        </Button>
      </form>
    </div>
  );
};
