import { AxiosIntance } from '@/lib/axios-intance';
import type { AxiosError } from 'axios';

export const GetAllAccount = async () => {
  try {
    const response = await AxiosIntance.get(`/accounts/`);
    return response.data;
  } catch (e: unknown) {
    const error = e as AxiosError;
    console.error('Erro al obtener todas las cuentas :', error.message);
    throw error;
  }
};
