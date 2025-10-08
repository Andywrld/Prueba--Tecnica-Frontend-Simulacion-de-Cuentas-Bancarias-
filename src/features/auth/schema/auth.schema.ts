import { z } from 'zod';

export const LoginSchema = z.object({
  email: z
    .email('Introduce un correo válido')
    .nonempty('El correo es requerido'),
  password: z
    .string()
    .nonempty('La contraseña es requerida')
    .min(4, 'Mínimo 4 caracteres'),
});

export type LoginSchemaType = z.infer<typeof LoginSchema>;
