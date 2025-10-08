
import { AlertTriangle } from 'lucide-react';

interface ErrorStateProps {
  title?: string;
  message?: string;
}

export const ErrorState = ({
  title = 'Sin resultados',
  message = 'No se encontraron operaciones registradas.',
}: ErrorStateProps) => {
  return (
    <div className='flex flex-col items-center justify-center p-8 text-center bg-muted/20 rounded-xl border border-border/50 shadow-sm animate-fade-in'>
      <AlertTriangle className='w-10 h-10 text-destructive mb-3' />
      <h2 className='text-lg font-semibold text-foreground'>{title}</h2>
      <p className='text-sm text-muted-foreground mt-1'>{message}</p>
    </div>
  );
};
