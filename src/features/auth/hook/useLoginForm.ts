import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';

import { LoginSchema, type LoginSchemaType } from '../schema/auth.schema';
import { useAuthStore } from '@/store/AuthStore';
import { useNavigate } from 'react-router-dom';

export const useLoginForm = () => {
  const { login } = useAuthStore();
  const navigate = useNavigate();

  const form = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
  });

  const onSubmit = async (data: LoginSchemaType) => {
    try {
      await login(data.email, data.password);
      navigate('/');
      toast.success('Inicio de sesión exitoso');
      form.reset({ email: '', password: '' });
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(error.message ?? 'Credenciales inválidas');
      } else {
        toast.error('Credenciales inválidas');
      }
    }
  };

  return {
    register: form.register,
    handleSubmit: form.handleSubmit,
    onSubmit,
    formState: form.formState,
    reset: form.reset,
  };
};
