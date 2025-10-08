import type { Account } from './account.type';

export type AddAccountContext = {
  previousOperations?: Account[];
};
