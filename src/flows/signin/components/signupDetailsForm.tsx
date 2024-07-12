import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router';
import { useUserDetailsState } from '../../../common/data/userDetails';
import { useSigninDetailsState } from '../data/signinState';

export const SignupDetailsForm:FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const {setSigninDetails, signinDetails} = useSigninDetailsState()
  const navigate = useNavigate();


  const onSubmit = async (data: any) => {
    console.log(data);
    setSigninDetails({
      email: data.email,
      password: data.password
    })
    await new Promise(resolve => setTimeout(resolve, 500));
    navigate('/Home')
  };

    return (
      <div style={{ maxWidth: '400px', margin: '0 auto' }}>
        <h3>Let's make sure it is</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
        
          <TextField
            {...register("email", { required: true })}
            label="Email"
            fullWidth
            error={!!errors.email}
            helperText={errors.email ? "Email is required" : ""}
            margin="normal"
          />
          <div style={{ marginTop: '1rem' }}>
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



