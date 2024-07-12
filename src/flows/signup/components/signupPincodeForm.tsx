import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router';
import { useSignupDetailsState } from '../data/signupState';

export const SignupPincodeForm:FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const {setSignupDetails, signupDetails} = useSignupDetailsState()


  const onSubmit = async (data: any) => {
    console.log(data);
    setSignupDetails({
      isSent: true,
      sentAt: Date.now(),
      email: data.email,
      firstName: signupDetails.firstName,
      lastName: signupDetails.lastName,
      password: signupDetails.password
    })
  };
  
    return (
      <div style={{ maxWidth: '400px', margin: '0 auto' }}>
        <h3>Enter your email to receive a pincode</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">Email:</label>
        <div style={{ margin: '1rem 0' }}>
            <TextField
              type="email"
              id="email"
              {...register("email", { required: true })}
              variant="outlined"
              size="small"
              fullWidth
            />
            {errors.email && <span style={{ color: 'red' }}>This field is required</span>}
          </div>

          <Button type="submit" variant="contained" color="primary" fullWidth>
            send pincode
          </Button>
        </form>
      </div>
    );
  };



