import { Button } from '@/components/atoms/button';
import { Input } from '@/components/atoms/input';
import { Label } from '@/components/atoms/label';
import { useAddAccountForm } from '../hook/useAddAccountForm';

export function AccountForm() {
  const {
    register,
    handleSubmit,
    onSubmit,
    formState: { errors, isSubmitting },
  } = useAddAccountForm();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='space-y-6 mt-4 p-6 border rounded-xl bg-card shadow-sm'
    >
      <div className='space-y-2'>
        <Label htmlFor='holderName'>
          Titular de la cuenta <span className='text-destructive'>*</span>
        </Label>
        <Input
          id='holderName'
          placeholder='Ej: Juan Pérez'
          {...register('holderName')}
        />
        {errors.holderName && (
          <p className='text-sm text-destructive'>
            {errors.holderName.message}
          </p>
        )}
      </div>

      {/* Número de cuenta */}
      <div className='space-y-2'>
        <Label htmlFor='accountNumber'>
          Número de cuenta <span className='text-destructive'>*</span>
        </Label>
        <Input
          id='accountNumber'
          placeholder='Ej: 1234567890'
          {...register('accountNumber')}
        />
        {errors.accountNumber && (
          <p className='text-sm text-destructive'>
            {errors.accountNumber.message}
          </p>
        )}
      </div>

      {/* Tipo y Moneda */}
      <div className='grid grid-cols-2 gap-4'>
        <div className='space-y-2'>
          <Label htmlFor='accountType'>
            Tipo de cuenta <span className='text-destructive'>*</span>
          </Label>
          <select
            id='accountType'
            defaultValue='savings'
            className='w-full h-9 px-3 py-1 rounded-md border border-input bg-transparent text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] outline-none transition-all'
            {...register('accountType')}
          >
            <option value='savings'>Cuenta de Ahorros</option>
            <option value='checking'>Cuenta Corriente</option>
            <option value='business'>Cuenta Empresarial</option>
          </select>
          {errors.accountType && (
            <p className='text-sm text-destructive'>
              {errors.accountType.message}
            </p>
          )}
        </div>

        <div className='space-y-2'>
          <Label htmlFor='currency'>
            Moneda <span className='text-destructive'>*</span>
          </Label>
          <select
            id='currency'
            defaultValue='USD'
            className='w-full h-9 px-3 py-1 rounded-md border border-input bg-transparent text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] outline-none transition-all'
            {...register('currency')}
          >
            <option value='USD'>USD - Dólar Americano</option>
            <option value='EUR'>EUR - Euro</option>
            <option value='MXN'>MXN - Peso Mexicano</option>
          </select>
          {errors.currency && (
            <p className='text-sm text-destructive'>
              {errors.currency.message}
            </p>
          )}
        </div>
      </div>

      <div className='space-y-2'>
        <Label htmlFor='balance'>Balance inicial</Label>
        <Input
          id='balance'
          type='number'
          step='0.01'
          placeholder='0.00'
          {...register('balance',{valueAsNumber:true})}
        />
        {errors.balance && (
          <p className='text-sm text-destructive'>{errors.balance.message}</p>
        )}
      </div>

      {/* Botón */}
      <Button type='submit' className='w-full' disabled={isSubmitting}>
        {isSubmitting ? 'Creando...' : 'Crear Cuenta'}
      </Button>
    </form>
  );
}
