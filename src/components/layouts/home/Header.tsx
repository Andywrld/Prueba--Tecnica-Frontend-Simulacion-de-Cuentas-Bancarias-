import { Building2, LogOut } from 'lucide-react';
import { Button } from '@components/atoms/button';
import { useAuthStore } from '@/store/AuthStore';

export const Header = () => {
  const logout = useAuthStore((s) => s.logout);

  return (
    <header className='border-b border-border/50 bg-card/50 backdrop-blur-sm sticky top-0 z-10'>
      <div className='container mx-auto px-4 py-4'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-3'>
            <div className='w-10 h-10 rounded-lg bg-primary flex items-center justify-center'>
              <Building2 className='w-6 h-6 text-primary-foreground' />
            </div>
            <div>
              <h1 className='text-xl font-bold'>BankFlow</h1>
              <p className='text-xs text-muted-foreground'></p>
            </div>
          </div>
          <Button variant='default' size='lg' onClick={() => logout()}>
            <LogOut className='w-5 h-5' />
          </Button>
        </div>
      </div>
    </header>
  );
};
