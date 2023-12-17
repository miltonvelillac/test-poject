import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CreditCardsEnum } from '../../enums/credit-card.enum';
import { CreditCard } from '../../models/credit-card.model';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './credit-cards.component.html',
  styleUrl: './credit-cards.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreditCardsComponent {
  @Input() creditCard: CreditCard | undefined;

  getCardClass(cardType: CreditCardsEnum | undefined): string {
    switch (cardType) {
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
