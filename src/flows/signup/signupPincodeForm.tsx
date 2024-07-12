import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { useSignupEmailState } from './data/signupEmailState';

export const SignupStage1:FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const {setSignupEmail, signupEmail} = useSignupEmailState()


  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("email", { required: true })} />
      {errors.email && <span>This field is required</span>}

      <input type="submit" />
    </form>
  );
};


