import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TransactionHistoryModel } from '../../shared/models/transaction-history.model';

@Component({
  selector: 'app-transaction-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './transaction-history.component.html',
  styleUrl: './transaction-history.component.scss'
})
export class TransactionHistoryComponent {
  transactionHistory: TransactionHistoryModel[] = [
    {
      id: '1',
      balance: 5.42,
      date: 'Jul 3, 2022 09:13',
      title: 'Starbucks',
      logo: 'assets/icons/starbucks.svg'
    },
    {
      id: '2',
      balance: -5.42,
      date: 'Jul 3, 2022 19:13',
      title: 'Starbucks',
      logo: 'assets/icons/starbucks.svg'
    },
    {
      id: '3',
      balance: -5.42,
      date: 'Jul 3, 2022 19:13',
      title: 'Starbucks',
      logo: 'assets/icons/starbucks.svg'
    },
    {
      id: '4',
      balance: -5.42,
      date: 'Jul 3, 2022 19:13',
      title: 'Starbucks',
      logo: 'assets/icons/starbucks.svg'
    }
  ];
}
