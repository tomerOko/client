import { Button, TextField } from "@mui/material";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useSigninDetailsState } from "../data/signinState";
import { fetchHookFactory } from "../../../common/hooks/fetch/useFetch";

const useFetchSignin = fetchHookFactory("LOGIN");

export const SigninForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { setSigninDetails } = useSigninDetailsState();
  const navigate = useNavigate();
  const { fetch: fetchLogin, error, loading } = useFetchSignin();

  const onSubmit = async (data: any) => {
    const result = await fetchLogin({
      email: data.email,
      loginMethod: "PASSWORD",
      methodSecret: data.password,
    });

    setSigninDetails({
      email: data.email,
      password: data.password,
    });
    await new Promise((resolve) => setTimeout(resolve, 500));
    navigate("/search");
  };

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto" }}>
      <h3>Let's make sure it is you</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          {...register("email", { required: true })}
          label="Email"
          fullWidth
          error={!!errors.email}
          helperText={errors.email ? "Email is required" : ""}
          margin="normal"
        />
        <div style={{ marginTop: "1rem" }}>
          <TextField
            {...register("password", { required: true })}
            label="password"
            fullWidth
            error={!!errors.pincode}
            helperText={errors.pincode ? "password is required" : ""}
            margin="normal"
          />
        </div>

        <Button type="submit" variant="contained" color="primary" fullWidth>
          LogIn
        </Button>
      </form>
    </div>
  );
};
