import { Button, TextField } from "@mui/material";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { fetchHookFactory } from "../../../common/hooks/fetch/useFetch";
import { useSignupState } from "../data/signupState";
import { FormButton } from "../../../common/styledComponents";

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
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{
        width: "400px",
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        marginTop: "10px",
      }}
    >
      <div style={{ margin: "1rem 0", width: "300px" }}>
        <TextField
          type="email"
          id="email"
          {...register("email", { required: true })}
          variant="outlined"
          fullWidth
          style={{ height: "50px" }}
          placeholder="Email"
          InputLabelProps={{
            shrink: false,
          }}
        />
        {errors.email && (
          <span style={{ color: "red" }}>This field is required</span>
        )}
      </div>

      <FormButton type="submit" color="primary" style={{ width: "200px" }}>
        send me a pincode
      </FormButton>
    </form>
  );
};
