// src/features/accounts/hook/useUpdateBalance.ts
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { UpdateBalanceAccount } from '../service/UpdateAccount';
import type { Account } from '../types/account.type';

export const useUpdateBalance = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, newBalance }: { id: string; newBalance: number }) =>
      UpdateBalanceAccount(id, { balance: newBalance }),

    onMutate: async ({ id, newBalance }) => {
      await queryClient.cancelQueries({ queryKey: ['accounts'] });

      const previousAccounts = queryClient.getQueryData<Account[]>([
        'accounts',
      ]);

      queryClient.setQueryData<Account[]>(['accounts'], (old) =>
        old
          ? old.map((account) =>
              account.id === id ? { ...account, balance: newBalance } : account
            )
          : []
      );

      return { previousAccounts };
    },

    onError: (_error, _variables, context) => {
      if (context?.previousAccounts) {
        queryClient.setQueryData(['accounts'], context.previousAccounts);
      }
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['accounts'] });
    },
  });
};
