import { CreditCardsEnum } from "../enums/credit-card.enum";

export interface CreditCard {
  id: string;
  cardType: CreditCardsEnum;
  balance: number;
  cardNumber: string;
  logo: string;
}
