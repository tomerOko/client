import { Button, Checkbox, FormControlLabel, TextField } from "@mui/material";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useSignupState } from "../data/signupState";
import { fetchHookFactory } from "../../../common/hooks/fetch/useFetch";

const useFetchSignup = fetchHookFactory("SIGNUP");

export const SignupDetailsForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { setSignupDetails, signupDetails } = useSignupState();
  const navigate = useNavigate();
  const { fetch: fetchSignup, loading, error } = useFetchSignup();

  const onSubmit = async (data: any) => {
    try {
      const result = await fetchSignup({
        email: signupDetails.email,
        pincode: data.pincode,
        firstName: data.firstName,
        lastName: data.lastName,
        password: data.password,
      });
    } catch (error) {
      console.log(error);
    }

    setSignupDetails({
      ...signupDetails,
      firstName: data.firstName,
      lastName: data.lastName,
      password: data.password,
    });
    await new Promise((resolve) => setTimeout(resolve, 500));
    navigate("/signin");
  };

  return (
    <div style={{ maxWidth: "400px" }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ display: "flex", gap: "1rem" }}>
          <div>
            <TextField
              {...register("firstName", { required: true })}
              id="firstName"
              fullWidth
              error={!!errors.firstName}
              helperText={errors.firstName ? "First Name is required" : ""}
              margin="normal"
              placeholder="First Name"
              InputLabelProps={{
                shrink: false,
              }}
            />
          </div>
          <div>
            <TextField
              {...register("lastName", { required: true })}
              id="lastName"
              fullWidth
              error={!!errors.lastName}
              helperText={errors.lastName ? "Last Name is required" : ""}
              margin="normal"
              placeholder="Last Name"
              InputLabelProps={{
                shrink: false,
              }}
            />
          </div>
        </div>
        <TextField
          {...register("email", { required: false })}
          id="email"
          fullWidth
          disabled
          defaultValue={signupDetails.email}
          margin="normal"
          style={{ display: "none" }}
        />
        <TextField
          {...register("password", { required: true })}
          id="password"
          fullWidth
          error={!!errors.password}
          helperText={errors.password ? "Password is required" : ""}
          margin="normal"
          placeholder="Password"
          InputLabelProps={{
            shrink: false,
          }}
        />
        <TextField
          {...register("pincode", { required: true })}
          id="pincode"
          fullWidth
          error={!!errors.pincode}
          helperText={errors.pincode ? "Pincode is required" : ""}
          margin="normal"
          placeholder="Pincode"
          InputLabelProps={{
            shrink: false,
          }}
        />

        <FormControlLabel
          control={<Checkbox {...register("agreeToTerms")} />}
          label="I agree to the Terms of Service and Privacy Policy."
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          style={{ marginTop: "20px" }}
        >
          Sgin Up
        </Button>
      </form>
    </div>
  );
};
