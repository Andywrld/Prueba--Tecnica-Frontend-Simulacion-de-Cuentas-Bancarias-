import { AxiosIntance } from '@/lib/axios-intance';
import type { AxiosError } from 'axios';

export const GetOperationAccount = async (accountId: string) => {
  try {
    const response = await AxiosIntance.get(
      `/accounts/${accountId}/operations`
    );
    return response.data;
  } catch (e: unknown) {
    const error = e as AxiosError;
    console.error(
      'Error al obtener las operaciones de la cuenta :',
      error.message
    );
    throw error;
  }
};
