import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  Box,
} from "@mui/material";
import { managedBankAccountsMock } from "../mock/managedBankAccountsMock";
import { BankAccountForm } from "../components/bankAccountForm";

interface BankAccount {
  accountHolderName: string;
  bankName: string;
  accountNumber: string;
  routingNumber: string;
}

export const ManageBankAccountsPage: React.FC = () => {
  const [bankAccounts, setBankAccounts] = useState<BankAccount[]>(
    managedBankAccountsMock
  );
  const [selectedBankAccount, setSelectedBankAccount] =
    useState<BankAccount | null>(null);

  const handleAddUpdateBankAccount = (newBankAccount: BankAccount) => {
    if (selectedBankAccount) {
      setBankAccounts((prevAccounts) =>
        prevAccounts.map((account) =>
          account === selectedBankAccount ? newBankAccount : account
        )
      );
      setSelectedBankAccount(null);
    } else {
      setBankAccounts((prevAccounts) => [...prevAccounts, newBankAccount]);
    }
  };

  const handleDeleteBankAccount = (accountToDelete: BankAccount) => {
    setBankAccounts((prevAccounts) =>
      prevAccounts.filter((account) => account !== accountToDelete)
    );
  };

  return (
    <Box>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setSelectedBankAccount(null)}
        style={{ marginBottom: "20px" }}
      >
        Add New Bank Account
      </Button>
      <BankAccountForm
        onSubmit={handleAddUpdateBankAccount}
        initialValues={selectedBankAccount}
      />
      <Box display="flex" flexDirection="column" gap={2} marginTop={2}>
        {bankAccounts.map((account, index) => (
          <Card key={index}>
            <CardContent>
              <Typography variant="h6">{account.accountHolderName}</Typography>
              <Typography>Bank Name: {account.bankName}</Typography>
              <Typography>Account Number: {account.accountNumber}</Typography>
              <Typography>Routing Number: {account.routingNumber}</Typography>
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                color="primary"
                onClick={() => setSelectedBankAccount(account)}
              >
                Edit
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => handleDeleteBankAccount(account)}
              >
                Delete
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </Box>
  );
};
