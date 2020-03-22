export interface Business {
  id: number;
  name: string;
  url: string;
  photoUrl: string;
  city: string;
  category: string;
  hours: string;
  hasGiftCards: boolean;
  giftCardUrl: string;
  hasRemoteOrders: boolean;
  orderPn: number;
  orderUrl: string;
  otherInformation: string;
}
