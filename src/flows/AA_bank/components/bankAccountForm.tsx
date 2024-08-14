import React from "react";
import { useForm, Controller } from "react-hook-form";
import { TextField, Button, Box } from "@mui/material";

interface BankAccountFormProps {
  onSubmit: (data: BankAccountFormData) => void;
  initialValues: BankAccountFormData | null | undefined;
}

interface BankAccountFormData {
  accountHolderName: string;
  bankName: string;
  accountNumber: string;
  routingNumber: string;
}

export const BankAccountForm: React.FC<BankAccountFormProps> = ({
  onSubmit,
  initialValues,
}) => {
  const { control, handleSubmit, reset } = useForm<BankAccountFormData>({
    defaultValues: initialValues || {
      accountHolderName: "",
      bankName: "",
      accountNumber: "",
      routingNumber: "",
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
          name="accountHolderName"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Account Holder Name"
              variant="outlined"
            />
          )}
        />
        <Controller
          name="bankName"
          control={control}
          render={({ field }) => (
            <TextField {...field} label="Bank Name" variant="outlined" />
          )}
        />
        <Controller
          name="accountNumber"
          control={control}
          render={({ field }) => (
            <TextField {...field} label="Account Number" variant="outlined" />
          )}
        />
        <Controller
          name="routingNumber"
          control={control}
          render={({ field }) => (
            <TextField {...field} label="Routing Number" variant="outlined" />
          )}
        />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </Box>
    </form>
  );
};
