import React from 'react';
import { useForm } from 'react-hook-form';

const MyForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("example", { required: true })} />
      {errors.example && <span>This field is required</span>}

      <input type="submit" />
    </form>
  );
};

export default MyForm;

