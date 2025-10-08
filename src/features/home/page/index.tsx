import { Accounts } from '@/features/accounts/page';
import { TotalBalance } from '../components/TotalBalance';

export const Home = () => {
  return (
    <div className='container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-12'>
      <TotalBalance />
      <Accounts />
    </div>
  );
};
