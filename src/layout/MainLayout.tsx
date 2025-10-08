import { Header } from '@/components/layouts/home/Header';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div className='min-h-dvh flex flex-col'>
      <Header />

      <main className='flex-1 overflow-hidden'>
        <Outlet />
      </main>

      <footer>aqui va el footer</footer>
    </div>
  );
};
