import { create } from "zustand";
import { ListElementState } from "../../../common/components/list/data";

export interface BankAccount {
  ID: string;
  accountDetails: {
    bankName: string;
    bankCode: string;
    number: string;
    branchCode: string;
  };
  accountHolder: {
    firstName: string;
    lastName: string;
  };
}

interface MyTopicsState {
  myTopics: Array<BankAccount>;
  setMyTopics: (myTopics: Array<BankAccount>) => void;
}

export const useMyTopicsState = create<MyTopicsState>((set) => ({
  myTopics: [],
  setMyTopics: (myTopics) => set({ myTopics }),
}));

export const convertMyTopicsToListDetails = (
  myTopics: Array<BankAccount>
): ListElementState<BankAccount>[] => {
  const data = myTopics.map((bankAccount) => {
    const { ID, accountDetails, accountHolder } = bankAccount;
    const {
      number: accountNumber,
      bankName,
      branchCode,
      bankCode,
    } = accountDetails;
    const { firstName, lastName } = accountHolder;
    const result: ListElementState<BankAccount> = {
      header: `${firstName} ${lastName}| ${bankName} `,
      secondHeader: ` ${bankCode} - ${branchCode} - ${accountNumber}`,
      additionalData: bankAccount,
      description: "",
    };
    return result;
  });
  return data;
};
