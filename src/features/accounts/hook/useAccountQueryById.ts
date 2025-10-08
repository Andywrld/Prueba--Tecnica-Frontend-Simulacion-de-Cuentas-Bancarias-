import { useQuery } from '@tanstack/react-query';
import type { Account } from '../types/account.type';
import { GetAccountById } from '../service/GetAccountById';

export const useAccountsQueryById = (id: string) => {
  return useQuery<Account>({
    queryKey: ['accounts', id],
    queryFn: () => GetAccountById(id),
    enabled: !!id,
    staleTime: 1000,
  });
};
