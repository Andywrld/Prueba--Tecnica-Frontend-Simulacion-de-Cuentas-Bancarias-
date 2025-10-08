import { z } from 'zod';

export const SchemaOperations = z.object({
  type: z.enum(['credit', 'debit'], { message: 'Selecciona un tipo válido' }),
  amount: z
    .string()
    .min(1, 'El monto es obligatorio')
    .refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
      message: 'El monto debe ser un número mayor a 0',
    }),
  description: z
    .string()
    .min(1, 'La descripción es obligatoria')
    .max(255, 'La descripción debe tener máximo 255 caracteres'),
  date: z.string().min(1, 'La fecha es obligatoria'),
  category: z.string().min(1, 'Selecciona una categoría'),
});

export type OperationsFormData = z.infer<typeof SchemaOperations>;
