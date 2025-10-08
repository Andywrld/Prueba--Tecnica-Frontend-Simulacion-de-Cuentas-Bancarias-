import { AxiosIntance } from '@/lib/axios-intance';
import type { AxiosError } from 'axios';
import type { Account } from '../types/account.type';

export const AddAccount = async (accountData: Account) => {
  try {
    const response = await AxiosIntance.post(`/accounts/`, accountData);
    return response.data;
  } catch (e: unknown) {
    const error = e as AxiosError;
    console.error('Erro al crear cuenta :', error.message);
    throw error;
  }
};
