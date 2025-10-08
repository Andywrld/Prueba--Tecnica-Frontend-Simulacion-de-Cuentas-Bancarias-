import { LoadingScreen } from '@/components/molecules/loadingScreen';
import { useAccountsQuery } from '../hook/useAccountsQuery';
import { RenderAccounts } from './CardRenderAccounts';

export const CardAccounts = () => {
  const { data: accounts, isLoading, isError } = useAccountsQuery();

  if (isLoading) return <LoadingScreen />;
  if (isError) return <div>Error al cargar las cuentas.</div>;


  const safeAccounts = Array.isArray(accounts) ? accounts : [];

  if (!safeAccounts.length) {
    return <div>No hay cuentas disponibles.</div>;
  }

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      <RenderAccounts accounts={safeAccounts} />
    </div>
  );
};
