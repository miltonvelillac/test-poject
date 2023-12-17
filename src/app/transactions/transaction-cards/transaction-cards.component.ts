import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CreditCardsEnum } from '../../shared/enums/credit-card.enum';
import { CreditCard } from '../../shared/models/credit-card.model';
import { CreditCardsComponent } from '../../shared/components/credit-cards/credit-cards.component';

@Component({
  selector: 'app-transaction-cards',
  standalone: true,
  imports: [CommonModule, CreditCardsComponent],
  templateUrl: './transaction-cards.component.html',
  styleUrl: './transaction-cards.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TransactionCardsComponent {
  creditCards: CreditCard[] = [
    {
      id: '1',
      cardType: CreditCardsEnum.mc,
      balance: 542.25,
      cardNumber: '4587',
      logo: 'assets/icons/master-card.svg'
    },
    {
      id: '2',
      cardType: CreditCardsEnum.vs,
      balance: 999.25,
      cardNumber: '9876',
      logo: 'assets/icons/visa.svg'
    },
    {
      id: '3',
      cardType: CreditCardsEnum.mc,
      balance: 4231.25,
      cardNumber: '3456',
      logo: 'assets/icons/master-card.svg'
    },
  ];

  currentCard = 0;

  showSlide(index: number): void {
    if (index >= 0 && index < this.creditCards.length) {
      this.currentCard = index;
    }
  }

  prevSlide(): void {
    this.showSlide(this.currentCard - 1);
  }

  nextSlide(): void {
    this.showSlide(this.currentCard + 1);
  }
}
