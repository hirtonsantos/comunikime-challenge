import { type AddSellProductRepository } from '../../../../data/protocols/add-sell-product.repository'
import { type AddSellProductModel, type SellProductModel } from '../../../../domain/models/sell_product'

export class SellProductCacheRepository implements AddSellProductRepository {
  async add (sellProduct: AddSellProductModel): Promise<SellProductModel> {
    const sellProductCreated = {
      ...sellProduct,
      id: 456
    }
    return sellProductCreated
  }
}
