import type { Account } from "@/features/accounts/types/account.type";
import { toast } from "sonner";
import type { OperationsFormData } from "../schema/schema.operations";

export const calculateNewBalance = (
  account: Account,
  data: OperationsFormData
): number | null => {
  const amount = Number(data.amount);
  let newBalance = account.balance ?? 0;

  if (data.type === 'credit') {
    newBalance += amount;
  } else if (data.type === 'debit') {
    newBalance -= amount;
    if (newBalance < 0) {
      toast.error('Fondos insuficientes para realizar la operación.');
      return null;
    }
  }

  return newBalance;
};
