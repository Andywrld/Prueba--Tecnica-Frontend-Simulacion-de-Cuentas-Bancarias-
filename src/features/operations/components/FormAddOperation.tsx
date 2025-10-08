import { Button } from '@/components/atoms/button';
import { Input } from '@/components/atoms/input';
import { Label } from '@/components/atoms/label';
import { useAddOperationForm } from '../hook/useAddOperationForm';

export function OperationForm() {
  const { register, handleSubmit, onSubmit, formState } = useAddOperationForm();
  const { errors } = formState;

  return (
    <form
      className='space-y-4 mt-4 p-4 border rounded-xl bg-card shadow-sm'
      onSubmit={handleSubmit(onSubmit)}
    >

      <div className='space-y-2'>
        <Label htmlFor='description'>
          Descripción <span className='text-destructive'>*</span>
        </Label>
        <Input
          id='description'
          placeholder='Ej: Pago de servicios'
          {...register('description')}
        />
        {errors.description && (
          <p className='text-xs text-destructive'>
            {errors.description.message}
          </p>
        )}
      </div>

      <div className='grid grid-cols-2 gap-4'>
        <div className='space-y-2'>
          <Label htmlFor='amount'>
            Monto <span className='text-destructive'>*</span>
          </Label>
          <Input
            id='amount'
            type='number'
            step='0.01'
            placeholder='0.00'
            {...register('amount')}
          />
          {errors.amount && (
            <p className='text-xs text-destructive'>{errors.amount.message}</p>
          )}
        </div>

        <div className='space-y-2'>
          <Label htmlFor='type'>
            Tipo <span className='text-destructive'>*</span>
          </Label>
          <select
            id='type'
            defaultValue='debit'
            className='w-full h-9 px-3 py-1 rounded-md border border-input bg-transparent text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] outline-none transition-all'
            {...register('type')}
          >
            <option value='credit'>Crédito (+)</option>
            <option value='debit'>Débito (-)</option>
          </select>
          {errors.type && (
            <p className='text-xs text-destructive'>{errors.type.message}</p>
          )}
        </div>
      </div>

      <div className='grid grid-cols-2 gap-4'>
        <div className='space-y-2'>
          <Label htmlFor='category'>Categoría</Label>
          <select
            id='category'
            defaultValue='general'
            className='w-full h-9 px-3 py-1 rounded-md border border-input bg-transparent text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] outline-none transition-all'
            {...register('category')}
          >
            <option value='general'>Gastos Generales</option>
            <option value='ingreso'>Ingreso</option>
            <option value='servicios'>Inversiones</option>
            <option value='compras'>Compras</option>
          </select>
          {errors.category && (
            <p className='text-xs text-destructive'>
              {errors.category.message}
            </p>
          )}
        </div>

        <div className='space-y-2'>
          <Label htmlFor='date'>
            Fecha <span className='text-destructive'>*</span>
          </Label>
          <Input id='date' type='date' {...register('date')} />
          {errors.date && (
            <p className='text-xs text-destructive'>{errors.date.message}</p>
          )}
        </div>
      </div>

      <Button type='submit' className='w-full'>
        Crear Operación
      </Button>
    </form>
  );
}
