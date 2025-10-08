import { RenderAccounts } from './CardRenderAccounts';
import { useAccountsQuery } from '../hook/useAccountsQuery';
import { LoadingScreen } from '@/components/molecules/loadingScreen';

export const CardAccounts = () => {
  const { data: accounts, isLoading, isError } = useAccountsQuery();

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (isError || !accounts) {
    return <div>Error loading accounts.</div>;
  }

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      <RenderAccounts accounts={accounts} />
    </div>
  );
};
