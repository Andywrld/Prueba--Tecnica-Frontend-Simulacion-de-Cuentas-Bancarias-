import { z } from 'zod';

export const SchemaAccount = z.object({
  accountNumber: z.string(),

  holderName: z
    .string()
    .nonempty('El nombre del titular es obligatorio.')
    .min(2, 'El nombre del titular debe tener al menos 2 caracteres.')
    .max(50, 'El nombre del titular no puede exceder los 50 caracteres.'),

  currency: z.string().nonempty('La moneda es obligatoria.'),
  accountType: z.string(),
  balance: z.number().optional(),
});

export type AccountFormData = z.infer<typeof SchemaAccount>;
