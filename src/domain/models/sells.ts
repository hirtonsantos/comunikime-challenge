export enum SellCurrentStatus {
  REFUNDED = 'REFUNDED',
  PAID = 'PAID',
  EXPIRED = 'EXPIRED',
}

export interface SellModel {
  id: number
  status: SellCurrentStatus
  totalCents: string
  customerId: number
  ownerId: number
}

export interface AddSellModel {
  totalCents: string
  productId: number
  customerId: number
  quantity: number
}
