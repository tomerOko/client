import { Button, TextField } from "@mui/material";
import { FC } from "react";
import { set, useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { fetchHookFactory } from "../../../common/hooks/fetch/useFetch";
import { useAuthStore } from "../../../common/data/authStore";

const useFetchSignin = fetchHookFactory("LOGIN");

export const SigninForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { set } = useAuthStore();

  const navigate = useNavigate();
  const { fetch: fetchLogin } = useFetchSignin();

  const onSubmit = async (data: any) => {
    const result = await fetchLogin({
      email: data.email,
      loginMethod: "PASSWORD",
      methodSecret: data.password,
    });

    if (!result) {
      // Handle error
      return;
    }
    set({ token: result.token, user: result.user });

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
