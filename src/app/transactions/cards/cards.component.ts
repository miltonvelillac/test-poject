import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CreditCardsEnum } from '../../shared/enums/credit-card.enum';
import { CreditCard } from '../../shared/models/credit-card.model';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent {
  @Input() creditCard: CreditCard | undefined;

  getCardClass(cardId: CreditCardsEnum | undefined): string {
    switch (cardId) {
      case CreditCardsEnum.am:
        return 'american-express';
      case CreditCardsEnum.mc:
        return 'master-card';
      case CreditCardsEnum.vs:
        return 'visa';
    
      default:
        return '';
    }
  }
}
