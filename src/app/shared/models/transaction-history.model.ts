export interface TransactionListModel {
  id: string;
  balance: number;
  date: string;
  logo: string;
  title: string;
}

export interface TransactionHistoryModel {
  id: string;
  title: string;
  transactionList: TransactionListModel[];
}