import type { AddSellModel, SellModel } from '../models/sells'

export interface AddSell {
  add: (sell: Omit<AddSellModel, 'customerId'>, customerId: number) => Promise<SellModel>
}
