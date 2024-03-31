import type { AddSellProductModel, SellProductModel } from '../../domain/models/sell_product'

export interface AddSellProductRepository {
  add: (sellProduct: AddSellProductModel) => Promise<SellProductModel>
}
