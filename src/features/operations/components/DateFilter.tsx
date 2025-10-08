import { useState } from 'react';
import { Input } from '@/components/atoms/input';
import { Button } from '@/components/atoms/button';

interface DateFilterProps {
  onFilterChange: (range: { startDate: string; endDate: string }) => void;
}

export const DateFilter = ({ onFilterChange }: DateFilterProps) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleFilter = () => {
    onFilterChange({ startDate, endDate });
  };

  const handleClear = () => {
    setStartDate('');
    setEndDate('');
    onFilterChange({ startDate: '', endDate: '' });
  };

  return (
    <div className='flex flex-wrap items-end gap-4 border p-4 rounded-md bg-card/30'>
      <div>
        <label className='block text-sm text-muted-foreground mb-1'>
          Fecha inicio
        </label>
        <Input
          type='date'
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </div>

      <div>
        <label className='block text-sm text-muted-foreground mb-1'>
          Fecha fin
        </label>
        <Input
          type='date'
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </div>

      <Button onClick={handleFilter}>Aplicar filtro</Button>
      <Button variant='secondary' onClick={handleClear}>
        Limpiar
      </Button>
    </div>
  );
};
