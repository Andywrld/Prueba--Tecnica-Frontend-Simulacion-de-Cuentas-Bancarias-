import { Button } from '@/components/atoms/button';
import { CardAccounts } from '../components/CardAccounts';
import { useState } from 'react';

import { AccountForm } from '../components/FormAddAccount';

export const Accounts = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <div className='mb-6 flex items-center justify-between'>
        <h2 className='text-2xl font-bold text-balance'>Mis Cuentas</h2>
        <Button
          variant='default'
          size='lg'
          onClick={() => setShowForm(!showForm)}
          className='transition-all'
        >
          {showForm ? 'Cerrar' : 'Nueva Cuenta'}
        </Button>
      </div>
      {showForm && (
        <div className='mt-6 animate-fade-in'>
          <AccountForm />
        </div>
      )}

      <CardAccounts />
    </>
  );
};
