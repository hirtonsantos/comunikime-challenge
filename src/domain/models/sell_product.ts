export interface SellProductModel {
  id: number
  valueCents: string
  quantity: number
  sellId: number
  productId: number
}

export interface AddSellProductModel {
  valueCents: string
  quantity: number
  sellId: number
  productId: number
}
