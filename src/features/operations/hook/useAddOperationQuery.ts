import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { AddOperation } from '../service/AddOperation';
import type { Operation } from '../type/operation.type';
import type { AddOperationContext } from '../type/operationContext.type';

export function useAddOperation() {
  const queryClient = useQueryClient();

  return useMutation<Operation, AxiosError, Operation, AddOperationContext>({
    mutationFn: (newOperation) =>
      AddOperation(newOperation).then((res) => res.data),

    onMutate: async (newOperation) => {
      await queryClient.cancelQueries({ queryKey: ['operations'] });

      const previousOperations = queryClient.getQueryData<Operation[]>([
        'operations',
      ]);

      queryClient.setQueryData<Operation[]>(['operations'], (old) => [
        ...(old ?? []),
        { ...newOperation },
      ]);

      return { previousOperations };
    },

    onError: (_err, _newOperation, context) => {
      if (context?.previousOperations) {
        queryClient.setQueryData(['operations'], context.previousOperations);
      }
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['operations'] });
    },
  });
}
