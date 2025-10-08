import { useQuery } from '@tanstack/react-query';
import { GetAllAccount } from '../service/GetAccount';
import type { Account } from '../types/account.type';

export const useAccountsQuery = () => {
  return useQuery<Account[]>({
    queryKey: ['accounts'],
    queryFn: GetAllAccount,
  });
};
