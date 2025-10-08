export type Operation = {
  type: 'credit' | 'debit';
  amount: number;
  date: Date;
  description?: string;
  category: string;
  accountId: string;
};
