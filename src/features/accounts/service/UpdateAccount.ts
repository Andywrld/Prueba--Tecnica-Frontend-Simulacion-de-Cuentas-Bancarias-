// src/features/accounts/service/UpdateBalanceAccount.ts
import { AxiosIntance } from '@/lib/axios-intance';
import type { AxiosError } from 'axios';

export const UpdateBalanceAccount = async (
  id: string,
  dataUpdate: { balance: number }
) => {
  try {
    const response = await AxiosIntance.put(`/accounts/${id}`, dataUpdate);
    return response.data;
  } catch (e: unknown) {
    const error = e as AxiosError;
    throw error;
  }
};
