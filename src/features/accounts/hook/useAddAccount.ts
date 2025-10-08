import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import type { Account } from '../types/account.type';
import { AddAccount } from '../service/AddAcccount';
import type { AddAccountContext } from '../types/accountContext.type';

export function useAddAccount() {
  const queryClient = useQueryClient();

  return useMutation<Account, AxiosError, Account, AddAccountContext>({
    mutationFn: (newOperation) =>
      AddAccount(newOperation).then((res) => res.data),

    onMutate: async (newOperation) => {
      await queryClient.cancelQueries({ queryKey: ['accounts'] });

      const previousOperations = queryClient.getQueryData<Account[]>([
        'accounts',
      ]);

      queryClient.setQueryData<Account[]>(['accounts'], (old) => [
        ...(old ?? []),
        { ...newOperation },
      ]);

      return { previousOperations };
    },

    onError: (_err, _newOperation, context) => {
      if (context?.previousOperations) {
        queryClient.setQueryData(['accounts'], context.previousOperations);
      }
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['account'] });
    },
  });
}
