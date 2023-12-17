import { CreditCardsEnum } from "../enums/credit-card.enum";

export interface CreditCard {
  id: CreditCardsEnum;
  balance: number;
  cardNumber: string;
  logo: string;
}
