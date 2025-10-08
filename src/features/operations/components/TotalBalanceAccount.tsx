import { Button } from '@/components/atoms/button';
import { Card } from '@/components/molecules/card';
import { useAccountsQueryById } from '@/features/accounts/hook/useAccountQueryById';
import { TrendingUp } from 'lucide-react';
import { useParams } from 'react-router-dom';
;

export const TotalBalanceAccount = () => {
  const { id } = useParams();

  const { data, isLoading } = useAccountsQueryById(id!);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Card className='mb-8 border-border/50 shadow-lg animate-slide-up bg-background text-primary-foreground'>
      <div className=' flex justify-between px-4 pt-6'>
        <div className='space-y-4'>
          <p className='text-sm text-foreground mb-1'>Saldo Disponible</p>
          <div className='flex items-center gap-3'>
            <h2 className='text-4xl font-bold text-foreground text-balance'>
              ${data?.balance}
            </h2>
            <Button
              variant='ghost'
              size='icon'
              className='text-foreground hover:bg-primary-foreground/20'
            ></Button>
          </div>

          <p className='text-sm text-foreground  font-medium'>
            {data?.accountType}
          </p>
        </div>
        <div className='flex flex-col gap-2'>
          <div className='w-12 h-12 rounded-full px-2 bg-primary-foreground/20 flex items-center justify-center'>
            <TrendingUp className='w-6 h-6' />
          </div>
        </div>
        <div className='text-right'>
          <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2'>
            <TrendingUp className='w-4 h-4' />
            Activa
          </div>
        </div>
      </div>
    </Card>
  );
};
