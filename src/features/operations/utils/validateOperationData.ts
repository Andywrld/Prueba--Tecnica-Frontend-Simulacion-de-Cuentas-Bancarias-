import { toast } from "sonner";
import type { OperationsFormData } from "../schema/schema.operations";
import type { Account } from "@/features/accounts/types/account.type";

export const validateOperationData = (
  account: Account | undefined,
  data: OperationsFormData
): boolean => {
  if (!account) {
    toast.error('Cuenta no encontrada.');
    return false;
  }

  const amount = Number(data.amount);
  if (isNaN(amount) || amount <= 0) {
    toast.error('El monto debe ser mayor a 0.');
    return false;
  }

  return true;
};
