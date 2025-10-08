import { Loader2 } from 'lucide-react';

export const LoadingScreen = ({
  message = 'Cargando...',
}: {
  message?: string;
}) => {
  return (
    <div className='fixed inset-0 flex flex-col items-center justify-center bg-background/80 backdrop-blur-sm z-50'>
      <Loader2 className='w-10 h-10 animate-spin text-primary mb-3' />
      <p className='text-sm text-muted-foreground'>{message}</p>
    </div>
  );
};
