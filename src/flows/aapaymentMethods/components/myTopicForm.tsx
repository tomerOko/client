import {
  Box,
  Button,
  DialogActions,
  FormLabel,
  TextField,
} from "@mui/material";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { MyTopic } from "../data/myTopicState";

interface TopicFormProps {
  onClose: () => void;
  initialValues?: MyTopic;
}

export const MyTopicForm: React.FC<TopicFormProps> = ({
  onClose,
  initialValues,
}) => {
  const { control, handleSubmit, reset } = useForm<MyTopic>({
    defaultValues: initialValues || {
      description: "",
      ID: "",
      name: "",
      hourlyRate: 0,
      minimalMinutes: 0,
    },
  });

  const onSubmit = (data: MyTopic) => {
    onClose();
    console.log(data);
    //if (initialValues) {
    //  updateMyTopic(data);
    //} else {
    //  addMyTopic(data);
    //}
  };

  React.useEffect(() => {
    if (initialValues) {
      reset(initialValues);
    }
  }, [initialValues, reset]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormLabel component="legend">Payment Method Type</FormLabel>
      <Controller
        name="type"
        control={control}
        defaultValue="card"
        render={({ field }) => (
          <RadioGroup {...field}>
            <FormControlLabel
              value="card"
              control={<Radio />}
              label="Credit Card"
            />
            <FormControlLabel
              value="paypal"
              control={<Radio />}
              label="PayPal"
            />
          </RadioGroup>
        )}
      />
      {watchType === "card" && (
        <>
          <Controller
            name="cardNumber"
            control={control}
            rules={{ required: "Card number is required" }}
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                label="Card Number"
                type="text"
                fullWidth
                margin="dense"
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
              />
            )}
          />
          <Controller
            name="expiryDate"
            control={control}
            rules={{ required: "Expiry date is required" }}
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                label="Expiry Date"
                type="text"
                fullWidth
                margin="dense"
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
              />
            )}
          />
          <Controller
            name="cvv"
            control={control}
            rules={{ required: "CVV is required" }}
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                label="CVV"
                type="text"
                fullWidth
                margin="dense"
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
              />
            )}
          />
        </>
      )}
      {watchType === "paypal" && (
        <Controller
          name="paypalEmail"
          control={control}
          rules={{ required: "PayPal email is required" }}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              label="PayPal Email"
              type="email"
              fullWidth
              margin="dense"
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
            />
          )}
        />
      )}
      <DialogActions>
        <Button onClick={() => setIsDialogOpen(false)} color="primary">
          Cancel
        </Button>
        <Button type="submit" color="primary">
          Add
        </Button>
      </DialogActions>
    </form>
  );
};

export default MyTopicForm;
