import { createBrowserRouter, Navigate } from 'react-router-dom';
import { Layout } from '@layout/MainLayout';
import { Home } from '@/features/home/page';
import { DashboardLayout } from '@/layout/dashboard/LayoutDashboard';
import { Dashboard } from '@/features/dashboard';
import { RequireAuth } from './RouterGuard';
import { LoginPage } from '@/features/auth/pages/LoginPages';

export const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/',
    element: (
      <RequireAuth>
        <Layout />
      </RequireAuth>
    ),
    children: [{ index: true, element: <Home /> }],
  },
  {
    path: '/dashboard/accounts/:id',
    element: (
      <RequireAuth>
        <DashboardLayout />
      </RequireAuth>
    ),
    children: [{ index: true, element: <Dashboard /> }],
  },
  {
    path: '*',
    element: <Navigate to='/login' replace />,
  },
]);
