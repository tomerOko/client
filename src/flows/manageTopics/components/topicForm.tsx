import React from "react";
import { useForm, Controller } from "react-hook-form";
import { TextField, Button, Box } from "@mui/material";

interface TopicFormProps {
  onSubmit: (data: TopicFormData) => void;
  initialValues: TopicFormData | null | undefined;
}

interface TopicFormData {
  extendedDescription: string;
  hourlyRate: number;
  minimalMinutes: number;
}

export const TopicForm: React.FC<TopicFormProps> = ({
  onSubmit,
  initialValues,
}) => {
  const { control, handleSubmit, reset } = useForm<TopicFormData>({
    defaultValues: initialValues || {
      extendedDescription: "",
      hourlyRate: 0,
      minimalMinutes: 0,
    },
  });

  React.useEffect(() => {
    if (initialValues) {
      reset(initialValues);
    }
  }, [initialValues, reset]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box display="flex" flexDirection="column" gap={2}>
        <Controller
          name="extendedDescription"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Extended Description"
              variant="outlined"
            />
          )}
        />
        <Controller
          name="hourlyRate"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Hourly Rate"
              type="number"
              variant="outlined"
            />
          )}
        />
        <Controller
          name="minimalMinutes"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Minimal Minutes"
              type="number"
              variant="outlined"
            />
          )}
        />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </Box>
    </form>
  );
};

export default TopicForm;
