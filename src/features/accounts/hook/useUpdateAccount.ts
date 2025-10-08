
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
      await queryClient.cancelQueries({ queryKey: ['accounts', id] });

      const previousAccounts = queryClient.getQueryData<Account[]>([
        'accounts',
      ]);
      const previousAccount = queryClient.getQueryData<Account>([
        'accounts',
        id,
      ]);

      queryClient.setQueryData<Account[]>(['accounts'], (old) =>
        old
          ? old.map((account) =>
              account.id === id ? { ...account, balance: newBalance } : account
            )
          : []
      );

      if (previousAccount) {
        queryClient.setQueryData<Account>(['accounts', id], {
          ...previousAccount,
          balance: newBalance,
        });
      }

      return { previousAccounts, previousAccount };
    },

    onError: (_error, variables, context) => {
      if (context?.previousAccounts) {
        queryClient.setQueryData(['accounts'], context.previousAccounts);
      }
      if (context?.previousAccount && variables?.id) {
        queryClient.setQueryData(
          ['accounts', variables.id],
          context.previousAccount
        );
      }
    },

    onSettled: (_data, _error, variables) => {
      queryClient.invalidateQueries({ queryKey: ['accounts'] });
      if (variables?.id) {
        queryClient.invalidateQueries({ queryKey: ['accounts', variables.id] });
      }
    },
  });
};
