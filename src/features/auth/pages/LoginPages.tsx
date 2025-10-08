import { useLoginForm } from '../hook/useLoginForm';
import { Input } from '@/components/atoms/input';
import { Button } from '@/components/atoms/button';
import { Label } from '@/components/atoms/label';
import { Building2, Mail, Lock } from 'lucide-react';
import { Card } from '@/components/molecules/card';

export const LoginPage = () => {
  const { register, handleSubmit, onSubmit, formState } = useLoginForm();
  const { errors, isSubmitting } = formState;

  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/5 p-4'>
      <div className='w-full max-w-md animate-scale-in'>
        {/* Logo/Brand */}
        <div className='flex items-center justify-center mb-8 gap-3'>
          <div className='w-12 h-12 rounded-xl bg-primary flex items-center justify-center'>
            <Building2 className='w-7 h-7 text-primary-foreground' />
          </div>
          <h1 className='text-3xl font-bold text-balance'>BankFlow</h1>
        </div>

        <Card className='border-border/50 shadow-2xl'>
          <div className='space-y-1'>
            <div className='text-2xl font-bold text-balance'>Bienvenido</div>
            <div className='text-pretty'>
              Ingresa tus credenciales para acceder a tu cuenta
            </div>
          </div>
          <div>
            <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
              <div className='space-y-2'>
                <Label htmlFor='email'>Correo electrónico</Label>
                <div className='relative'>
                  <Mail className='absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground' />
                  <Input
                    id='email'
                    type='email'
                    placeholder='tu@email.com'
                    {...register('email')}
                    className='pl-10'
                    required
                  />
                  {errors.email && (
                    <span className='text-destructive'>
                      {errors.email.message}
                    </span>
                  )}
                </div>
              </div>

              <div className='space-y-2'>
                <Label htmlFor='password'>Contraseña</Label>
                <div className='relative'>
                  <Lock className='absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground' />
                  <Input
                    id='password'
                    type='password'
                    placeholder='••••••••'
                    {...register('password')}
                    className='pl-10'
                    required
                  />
                </div>
              </div>

              <Button
                type='submit'
                className='w-full'
                size='lg'
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Iniciando sesión...' : 'Iniciar sesión'}
              </Button>

              <p className='text-sm text-muted-foreground text-center text-pretty'>
                Demo: usa cualquier email y contraseña
              </p>
            </form>
          </div>
        </Card>
      </div>
    </div>
  );
};
