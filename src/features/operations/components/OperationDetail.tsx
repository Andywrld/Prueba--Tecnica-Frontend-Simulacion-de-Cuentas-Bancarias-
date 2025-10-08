import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useOperationQuery } from '../hook/useOperationQueryById';
import { RenderOperationDetail } from './RenderOperationDetail';
import { DateFilter } from './DateFilter';

import type { AxiosError } from 'axios';
import { ErrorState } from './ErrorState';
import { LoadingScreen } from '@/components/molecules/loadingScreen';
import { filterOperationsByDate } from '../utils/filterOperations';

export const OperationDetail = () => {
  const { id } = useParams();
  const {
    data: operations,
    isLoading,
    isError,
    error,
  } = useOperationQuery(id!);

  const axiosError = error as AxiosError;

  const [dateRange, setDateRange] = useState({
    startDate: '',
    endDate: '',
  });

  if (isLoading) return <LoadingScreen />;

  if (axiosError?.response?.status === 404)
    return (
      <ErrorState
        title='Sin operaciones registradas'
        message='Esta cuenta no tiene movimientos disponibles.'
      />
    );

  if (isError)
    return (
      <ErrorState
        title='Error al cargar'
        message={
          axiosError?.message ?? 'Ocurrió un error al obtener las operaciones.'
        }
      />
    );

  if (!operations || operations.length === 0)
    return (
      <ErrorState
        title='Sin operaciones'
        message='No se encontraron operaciones para esta cuenta.'
      />
    );

  const filteredOperations = filterOperationsByDate(operations, dateRange);

  return (
    <div className='space-y-6'>
      <h2 className='text-lg font-semibold text-foreground'>
        Detalles de la operación
      </h2>

      <DateFilter onFilterChange={setDateRange} />

      {filteredOperations.length > 0 ? (
        <RenderOperationDetail operations={filteredOperations} />
      ) : (
        <ErrorState
          title='Sin resultados'
          message='No se encontraron operaciones en el rango seleccionado.'
        />
      )}
    </div>
  );
};
