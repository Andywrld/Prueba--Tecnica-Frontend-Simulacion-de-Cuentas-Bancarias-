import { Card } from '@/components/molecules/card';
import type { Account } from '@/features/accounts/types/account.type';
import { formatCurrency } from '@/utils/format-currency';
import { CreditCard } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CardRenderAccountsProps {
  accounts: Account[];
}

export const RenderAccounts = ({ accounts }: CardRenderAccountsProps) => {
  return (
    <>
      {accounts.map((account, index) => (
        <Link to={`dashboard/accounts/${account.id}`}>
          <Card
            key={account.id}
            className={`border-border/50 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer animate-slide-up stagger-${
              index + 1
            } group`}
          >
            <div className='flex flex-col gap-2 px-6'>
              <div className='flex items-start justify-between'>
                <div className='w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors'>
                  <CreditCard className='w-6 h-6 text-primary' />
                </div>
                <span className='text-xs font-mono text-muted-foreground'>
                  {account.accountNumber}
                </span>
              </div>
              <h3 className='font-semibold mb-1 text-balance'>
                {account.holderName}
              </h3>
              <p className='text-sm text-muted-foreground mb-4'>
                {account.accountType}
              </p>
              <div className='flex items-baseline gap-2'>
                <span className='text-2xl font-bold text-balance'>
                  {formatCurrency(account.balance!, account.currency)}
                </span>
                <span className='text-xs text-muted-foreground'>
                  {account.currency}
                </span>
              </div>
            </div>
          </Card>
        </Link>
      ))}
    </>
  );
};
