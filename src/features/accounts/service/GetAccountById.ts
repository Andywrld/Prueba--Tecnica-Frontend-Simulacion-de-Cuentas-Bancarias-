import { AxiosIntance } from '@/lib/axios-intance';
import type { AxiosError } from 'axios';

export const GetAccountById = async (id: string) => {
  try {
    const response = await AxiosIntance.get(`/accounts/${id}`);
    return response.data;
  } catch (e: unknown) {
    const error = e as AxiosError;
    console.error('Error fetching account by ID:', error.message);
    throw error;
  }
};
