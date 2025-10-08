import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { SchemaAccount, type AccountFormData } from '../schema/schema.accounts';
import { useAddAccount } from './useAddAccount';

export const useAddAccountForm = () => {
  const { mutateAsync } = useAddAccount();

  const form = useForm<AccountFormData>({
    resolver: zodResolver(SchemaAccount),
  });

  const onSubmit = async (data: AccountFormData) => {
    try {
      await mutateAsync({
        ...data,
      });
      toast.success('Cuenta creada con exito');
      form.reset();
    } catch (error) {
      console.error('Error submitting form:', error);
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
