import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TransactionActionsComponent } from './transaction-actions/transaction-actions.component';
import { TransactionCardsComponent } from './transaction-cards/transaction-cards.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [TransactionCardsComponent, TransactionActionsComponent, TransactionHistoryComponent],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TransactionsComponent {

}
