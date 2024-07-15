// src/components/PaymentMethods.tsx

import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, List, ListItem, ListItemText, IconButton, Radio, RadioGroup, FormControlLabel, FormLabel } from '@mui/material';
import { Delete as DeleteIcon } from '@mui/icons-material';
import { paymentMethods as initialPaymentMethods } from './mockData';

interface PaymentMethod {
  id: number;
  name: string;
}

interface FormData {
  type: string;
  cardNumber?: string;
  expiryDate?: string;
  cvv?: string;
  paypalEmail?: string;
}

const PaymentMethods: React.FC = () => {
  const { control, handleSubmit, reset, watch } = useForm<FormData>();
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>(initialPaymentMethods);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const watchType = watch('type');

  const handleDelete = (id: number) => {
    setPaymentMethods(paymentMethods.filter(method => method.id !== id));
  };

  const onSubmit = (data: FormData) => {
    const newMethodName = data.type === 'card' 
      ? `Card **** ${data.cardNumber!.slice(-4)}` 
      : `PayPal ${data.paypalEmail}`;

    setPaymentMethods([...paymentMethods, { id: Date.now(), name: newMethodName }]);
    reset();
    setIsDialogOpen(false);
  };

  return (
    <div>
      <h1>Payment Methods</h1>
      <List>
        {paymentMethods.map((method) => (
          <ListItem key={method.id} secondaryAction={
            <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(method.id)}>
              <DeleteIcon />
            </IconButton>
          }>
            <ListItemText primary={method.name} />
          </ListItem>
        ))}
      </List>
      <Button variant="contained" color="primary" onClick={() => setIsDialogOpen(true)}>
        Add Payment Method
      </Button>
      <Dialog open={isDialogOpen} onClose={() => setIsDialogOpen(false)}>
        <DialogTitle>Add Payment Method</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormLabel component="legend">Payment Method Type</FormLabel>
            <Controller
              name="type"
              control={control}
              defaultValue="card"
              render={({ field }) => (
                <RadioGroup {...field}>
                  <FormControlLabel value="card" control={<Radio />} label="Credit Card" />
                  <FormControlLabel value="paypal" control={<Radio />} label="PayPal" />
                </RadioGroup>
              )}
            />
            {watchType === 'card' && (
              <>
                <Controller
                  name="cardNumber"
                  control={control}
                  rules={{ required: 'Card number is required' }}
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
                  rules={{ required: 'Expiry date is required' }}
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
                  rules={{ required: 'CVV is required' }}
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
            {watchType === 'paypal' && (
              <Controller
                name="paypalEmail"
                control={control}
                rules={{ required: 'PayPal email is required' }}
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
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PaymentMethods;
