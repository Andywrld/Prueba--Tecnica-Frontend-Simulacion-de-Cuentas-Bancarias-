import { Card } from '@/components/molecules/card';
import type { Operation } from '../type/operation.type';
import { Calendar, TrendingDown, TrendingUp } from 'lucide-react';

interface RenderOperationDetailProps {
  operations: Operation[];
}

export const RenderOperationDetail = ({
  operations,
}: RenderOperationDetailProps) => {
  return (
    <>
      {operations.map((operation, index) => (
        <Card
          key={index}
          className={`border border-border/50 rounded-xl hover:shadow-lg transition-all duration-300 animate-slide-up stagger-${Math.min(
            index + 2,
            4
          )}`}
        >
          <div className='flex items-center justify-between px-6 py-4'>
            {/* Izquierda: Icono + descripción */}
            <div className='flex items-center gap-4 flex-1 min-w-0'>
              <div
                className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                  operation.type === 'credit'
                    ? 'bg-emerald-100 text-emerald-600'
                    : 'bg-red-100 text-red-600'
                }`}
              >
                {operation.type === 'credit' ? (
                  <TrendingUp className='w-6 h-6' />
                ) : (
                  <TrendingDown className='w-6 h-6' />
                )}
              </div>

              <div className='min-w-0'>
                <h3 className='font-semibold text-foreground truncate'>
                  {operation.description}
                </h3>
                <div className='flex items-center gap-2 mt-1'>
                  <p className='text-sm text-muted-foreground flex items-center gap-1'>
                    <Calendar className='w-4 h-4' />
                    {operation.date.toString().slice(0, 10)}
                  </p>
                  <span className='text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground'>
                    {operation.category}
                  </span>
                </div>
              </div>
            </div>

            {/* Derecha: monto */}
            <div className='text-right flex-shrink-0'>
              <p
                className={`text-xl font-bold ${
                  operation.type === 'credit'
                    ? 'text-emerald-600'
                    : 'text-red-600'
                }`}
              >
                {operation.type === 'credit' ? '+' : '-'}$
                {Number(operation.amount).toLocaleString('en-US', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </p>
            </div>
          </div>
        </Card>
      ))}
    </>
  );
};
