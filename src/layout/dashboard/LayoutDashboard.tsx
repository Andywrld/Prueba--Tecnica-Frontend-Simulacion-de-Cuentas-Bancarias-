import { HeaderDashboard } from '@/components/layouts/dashboard/HeaderDashboard';
import { Outlet } from 'react-router-dom';

export const DashboardLayout = () => {
  return (
    <div className='min-h-dvh flex flex-col'>
      <HeaderDashboard />

      <main className='flex-1 overflow-hidden'>
        <Outlet />
      </main>
    </div>
  );
};
