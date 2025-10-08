import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  SchemaOperations,
  type OperationsFormData,
} from '../schema/schema.operations';
import { useAddOperation } from './useAddOperationQuery';
import { useUpdateBalance } from '@/features/accounts/hook/useUpdateAccount';
import { useAccountsQuery } from '@/features/accounts/hook/useAccountsQuery';
import { useParams } from 'react-router-dom';
import { toast } from 'sonner';
import { validateOperationData } from '../utils/validateOperationData';
import { calculateNewBalance } from '../utils/calculateNewBalance';
import type { AxiosError } from 'axios';

export const useAddOperationForm = () => {
  const { mutateAsync: addOperation } = useAddOperation();
  const { mutateAsync: updateBalance } = useUpdateBalance();
  const { data: accounts } = useAccountsQuery();
  const { id } = useParams<{ id: string }>();

  const form = useForm<OperationsFormData>({
    resolver: zodResolver(SchemaOperations),
  });

  const onSubmit = async (data: OperationsFormData) => {
    try {
      const account = accounts?.find((acc) => acc.id === id);

      console.log(account);

      if (!validateOperationData(account, data)) return;

      const newBalance = calculateNewBalance(account!, data);
      if (newBalance === null) return;

      const payload = {
        ...data,
        amount: Number(data.amount),
        date: new Date(data.date),
        accountId: id!,
      };

      await addOperation(payload);

      await updateBalance({
        id: id!,
        newBalance,
      });

      toast.success('Operación registrada correctamente ');
      form.reset();
    } catch (e: unknown) {
      const error = e as AxiosError;
      console.log(error);
    }
  };

  return {
    register: form.register,
    handleSubmit: form.handleSubmit,
    onSubmit,
    formState: form.formState,
    reset: form.reset,
  };
};
