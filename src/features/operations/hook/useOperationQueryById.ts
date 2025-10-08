import { useQuery } from '@tanstack/react-query';
import type { Operation } from '../type/operation.type';
import { GetOperationAccount } from '../service/GetOperataionAccount';
import type { AxiosError } from 'axios';

export const useOperationQuery = (accountId: string) => {
  return useQuery<Operation[], AxiosError>({
    queryKey: ['operations', accountId],
    queryFn: () => GetOperationAccount(accountId),
    enabled: !!accountId,
    retry: false,
  });
};
