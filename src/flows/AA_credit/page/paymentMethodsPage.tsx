// src/components/PaymentMethods.tsx

import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
} from "@mui/material";
import { Delete as DeleteIcon } from "@mui/icons-material";
import { paymentMethods as initialPaymentMethods } from "./mockData";

interface PaymentMethod {
  ID: string;
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
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>(
    initialPaymentMethods
  );
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const watchType = watch("type");

  const handleDelete = (ID: string) => {
    setPaymentMethods(paymentMethods.filter((method) => method.ID !== ID));
  };

  const onSubmit = (data: FormData) => {
    const newMethodName =
      data.type === "card"
        ? `Card **** ${data.cardNumber!.slice(-4)}`
        : `PayPal ${data.paypalEmail}`;

    setPaymentMethods([
      ...paymentMethods,
      { ID: `${Date.now()}`, name: newMethodName },
    ]);
    reset();
    setIsDialogOpen(false);
  };

  return (
    <div>
      <h1>Payment Methods</h1>
      <List>
        {paymentMethods.map((method) => (
          <ListItem
            key={method.ID}
            secondaryAction={
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => handleDelete(method.ID)}
              >
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemText primary={method.name} />
          </ListItem>
        ))}
      </List>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setIsDialogOpen(true)}
      >
        Add Payment Method
      </Button>
      <Dialog open={isDialogOpen} onClose={() => setIsDialogOpen(false)}>
        <DialogTitle>Add Payment Method</DialogTitle>
        <DialogContent></DialogContent>
      </Dialog>
    </div>
  );
};

export default PaymentMethods;
