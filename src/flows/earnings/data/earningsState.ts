import { create } from "zustand";

interface Payment {
  id: string;
  amount: number;
  date: string;
  bankAccount: BankAccount;
}

interface BankAccount {
  Id: string;
  suffix: string;
  name: string;
}

export interface Earnings {
  availableBalance: number;
  payments: Payment[];
  bankAccounts: BankAccount[];
}

interface EarningsState {
  earningsDetails: Earnings;
  setEarningsDetails: (earningsDetails: Earnings) => void;
}

export const useEarningsState = create<EarningsState>((set) => ({
  earningsDetails: {
    availableBalance: 0,
    payments: [],
    bankAccounts: [],
  },
  setEarningsDetails: (earningsDetails: Earnings) => set({ earningsDetails }),
}));
