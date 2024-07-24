import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button, TextField, Typography } from "@mui/material";
import { useFetch } from "../common/hooks/useFetch";
import { useSocket } from "../common/hooks/useSocket";

const Home: React.FC = () => {
  //   // Example usage of the useFetch hook
  //   const { data, loading, error } = useFetch('/api/data');

  //   // Example usage of the useSocket hook
  //   const socket = useSocket('http://localhost:4000');

  //   useEffect(() => {
  //     if (socket) {
  //       socket.on('message', (message: string) => {
  //         console.log('Received message:', message);
  //       });
  //     }

  //     return () => {
  //       if (socket) {
  //         socket.off('message');
  //       }
  //     };
  //   }, [socket]);

  // Form handling with React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log("Form Data:", data);
    // if (socket) {
    //   socket.emit('message', data.message);
    // }
  };

  //   if (loading) return <div>Loading...</div>;
  //   if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <Typography variant="h4" component="h1" gutterBottom>
        Home Page
      </Typography>

      <Typography variant="h6" component="h2">
        Fetched Data:
      </Typography>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}

      <Typography variant="h6" component="h2">
        Send a Message
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="Message"
          variant="outlined"
          {...register("message", { required: true })}
        />
        {errors.message && <span>This field is required</span>}

        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Home;
