export const formatCurrency = (amount: number, currency: string) => {
  try {
    return amount.toLocaleString('en-US', {
      style: 'currency',
      currency: /^[A-Z]{3}$/.test(currency) ? currency : 'USD', 
    });
  } catch {
    return amount.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });
  }
};
