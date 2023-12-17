import { Component } from '@angular/core';
import { CardsComponent } from './cards/cards.component';
import { TransactionActionsComponent } from './transaction-actions/transaction-actions.component';

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [CardsComponent, TransactionActionsComponent],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.scss'
})
export class TransactionsComponent {

}
