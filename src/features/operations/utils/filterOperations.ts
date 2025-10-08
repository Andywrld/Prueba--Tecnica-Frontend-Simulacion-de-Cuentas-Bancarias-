import type { Operation } from '../type/operation.type';

export interface DateRange {
  startDate: string;
  endDate: string;
}

export const filterOperationsByDate = (
  operations: Operation[],
  dateRange: DateRange
): Operation[] => {
  const { startDate, endDate } = dateRange;

  if (!startDate && !endDate) return operations;

  return operations.filter((op) => {
    const opDate = new Date(op.date);
    const start = startDate ? new Date(startDate) : null;
    const end = endDate ? new Date(endDate) : null;

    if (start && opDate < start) return false;
    if (end && opDate > end) return false;

    return true;
  });
};
