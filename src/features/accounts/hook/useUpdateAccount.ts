// src/features/accounts/hook/useUpdateBalance.ts
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { UpdateBalanceAccount } from '../service/UpdateAccount';

export const useUpdateBalance = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, newBalance }: { id: string; newBalance: number }) =>
      UpdateBalanceAccount(id, { balance: newBalance }),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['account'] });
    },
  });
};
