import { SellCurrentStatus } from "@prisma/client"


export interface SellModel {
  id: number
  status: SellCurrentStatus | null
  totalCents: string
  customerId: number
}

export interface AddSellModel {
  totalCents: string
  productId: number
  customerId: number
  quantity: number
}
