import { Card } from '@/components/molecules/card';
import { useAccountsQuery } from '@/features/accounts/hook/useAccountsQuery';
import { TrendingUp } from 'lucide-react';

export const TotalBalance = () => {
  const { data: accounts, isLoading, isError } = useAccountsQuery();

  const totalBalance = Array.isArray(accounts)
    ? accounts.reduce((acc, curr) => acc + (curr.balance || 0), 0)
    : 0;

  if (isLoading) {
    return <p>Cargando balance...</p>;
  }

  if (isError) {
    return <p>Error al cargar las cuentas.</p>;
  }

  return (
    <Card className='mb-8 border-border/50 shadow-lg animate-slide-up bg-gradient-to-br from-black to-black/50 text-primary-foreground'>
      <div className='flex justify-between px-4 pt-6'>
        <div className='space-y-4'>
          <p className='text-sm opacity-90 mb-1'>Balance Total</p>
          <div className='flex items-center gap-3'>
            <h2 className='text-4xl font-bold text-balance'>${totalBalance}</h2>
          </div>

          <p className='text-sm font-medium'>
            Total de cuentas {Array.isArray(accounts) ? accounts.length : 0}
          </p>
        </div>
        <div className='flex flex-col gap-2'>
          <div className='w-12 h-12 rounded-full px-2 bg-primary-foreground/20 flex items-center justify-center'>
            <TrendingUp className='w-6 h-6' />
          </div>
        </div>
      </div>
    </Card>
  );
};
