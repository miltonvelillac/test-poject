import { Component } from '@angular/core';
import { CardsComponent } from './cards/cards.component';

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [CardsComponent],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.scss'
})
export class TransactionsComponent {

}
