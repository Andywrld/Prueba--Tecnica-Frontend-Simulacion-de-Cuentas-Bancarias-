'use client';

import { useState } from 'react';
import { Button } from '@/components/atoms/button';
import { ArrowLeft, CreditCard } from 'lucide-react';
import { OperationForm } from '@/features/operations/components/FormAddOperation';
import { useNavigate, useParams } from 'react-router-dom';
import { useAccountsQueryById } from '@/features/accounts/hook/useAccountQueryById';

export const HeaderDashboard = () => {
  const [showForm, setShowForm] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: account, isLoading } = useAccountsQueryById(id!);

  return (
    <header className='border-b border-border/50 bg-card/50 backdrop-blur-sm sticky top-0 z-10'>
      <div className='container mx-auto px-4 py-4'>
        <div className='flex flex-col gap-4 md:flex-row md:items-center md:justify-between'>

          <div className='flex items-center gap-3'>
            <Button
              variant='ghost'
              size='icon'
              onClick={() => navigate(-1)}
              className='text-muted-foreground hover:text-foreground'
            >
              <ArrowLeft className='w-5 h-5' />
            </Button>

            <div className='flex flex-col'>
              <h1 className='text-lg font-semibold flex items-center gap-2'>
                <CreditCard className='w-5 h-5 text-primary' />
                {isLoading ? (
                  <span className='text-muted-foreground animate-pulse'>
                    Cargando cuenta...
                  </span>
                ) : (
                  account?.accountType
                )}
              </h1>
              <p className='text-sm text-muted-foreground'>
                Panel de operaciones
              </p>
            </div>
          </div>


          <Button
            variant='default'
            size='lg'
            onClick={() => setShowForm(!showForm)}
            className='transition-all'
          >
            {showForm ? 'Cerrar' : 'Nueva Operación'}
          </Button>
        </div>

        {showForm && (
          <div className='mt-6 animate-fade-in'>
            <OperationForm />
          </div>
        )}
      </div>
    </header>
  );
};
