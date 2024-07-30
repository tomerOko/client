import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { useEarningsState } from "../data/earningsState";
import { mockEarnings } from "../mock/mockEarnings";

export const EarningsPage: React.FC = () => {
  const { register, handleSubmit, watch, reset } = useForm<{
    withdrawAmount: number;
    bankAccountId: string;
  }>();
  const [showBankAccounts, setShowBankAccounts] = useState(false);
  const { earningsDetails, setEarningsDetails } = useEarningsState();
  const { availableBalance, payments, bankAccounts } = earningsDetails;

  useEffect(() => {
    setEarningsDetails(mockEarnings);
  }, [setEarningsDetails]);

  const handleWithdraw = async (data: {
    withdrawAmount: number;
    bankAccountId: string;
  }) => {
    // Withdraw amount from the bank account
    reset();
    setShowBankAccounts(false);
  };

  const withdrawAmount = watch("withdrawAmount");

  return (
    <Container maxWidth="sm">
      <Box mt={4}>
        <Typography variant="h4" gutterBottom>
          Payments Page
        </Typography>
        <Card>
          <CardContent>
            <Typography variant="h6">Available Balance:</Typography>
            <Typography variant="h4" color="primary">
              ${availableBalance.toFixed(2)}
            </Typography>
            <form onSubmit={handleSubmit(() => setShowBankAccounts(true))}>
              <TextField
                label="Withdraw Amount"
                type="number"
                fullWidth
                {...register("withdrawAmount", { required: true })}
                margin="normal"
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Withdraw
              </Button>
            </form>
            {showBankAccounts && withdrawAmount > 0 && (
              <form onSubmit={handleSubmit(handleWithdraw)}>
                <FormControl fullWidth margin="normal">
                  <InputLabel>Bank Account</InputLabel>
                  <Select {...register("bankAccountId", { required: true })}>
                    {bankAccounts.map((account) => (
                      <MenuItem key={account.Id} value={account.Id}>
                        {account.name}: ****{account.suffix}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Confirm Withdrawal
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
        <Box mt={4}>
          <Typography variant="h5" gutterBottom>
            Past Payments
          </Typography>
          <List>
            {payments.map((payment) => (
              <ListItem key={payment.id}>
                <ListItemText
                  primary={`Amount: $${payment.amount.toFixed(2)}`}
                  secondary={`Date: ${new Date(
                    payment.date
                  ).toLocaleDateString()} |${
                    payment.bankAccount.name
                  } Bank Account: ****${payment.bankAccount.suffix}`}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Container>
  );
};
