import { AxiosIntance } from '@/lib/axios-intance';
import type { AxiosError } from 'axios';
import type { Operation } from '../type/operation.type';

export const AddOperation = async (operationData: Operation) => {
  try {
    const response = await AxiosIntance.post(
      `/accounts/${operationData.accountId}/operations/`,
      operationData
    );
    return response.data;
  } catch (e: unknown) {
    const error = e as AxiosError;
    console.error('Error al crear operación :', error.message);
    throw error;
  }
};
