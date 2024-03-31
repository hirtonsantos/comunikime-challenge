import type { AddSellProductModel, SellProductModel } from '../models/sell_product'

export interface SaveSellProduct {
  save: (sell: AddSellProductModel) => Promise<SellProductModel>
}
