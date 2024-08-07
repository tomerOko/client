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

  const { fetch: fetchPincode, loading, error } = useFetchPincode();

  const onSubmit = async (data: any) => {
    const { email } = data;
    await fetchPincode({
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
    <div style={{ maxWidth: "400px" }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ margin: "1rem 0", width: "300px" }}>
          <TextField
            type="email"
            id="email"
            {...register("email", { required: true })}
            variant="outlined"
            size="small"
            fullWidth
            placeholder="Email"
            InputLabelProps={{
              shrink: false,
            }}
          />
          {errors.email && (
            <span style={{ color: "red" }}>This field is required</span>
          )}
        </div>

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          style={{ width: "300px" }}
        >
          send me a pincode
        </Button>
      </form>
    </div>
  );
};
