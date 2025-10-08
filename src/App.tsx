import { RouterProvider } from 'react-router-dom';
import { router } from './routes/routes';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './lib/query-client';
import { Suspense } from 'react';
import { LoadingScreen } from './components/molecules/loadingScreen';
import { Toaster } from 'sonner';

function App() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <Toaster richColors position='top-center' />
      </QueryClientProvider>
    </Suspense>
  );
}

export default App;
