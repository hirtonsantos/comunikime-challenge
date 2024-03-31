import { type AddSellProductModel, type SellProductModel } from '../../domain/models/sell_product'
import { type SaveSellProduct } from '../../domain/usecases/save-sell-product'
import { type AddSellProductRepository } from '../protocols/add-sell-product.repository'
import type { LoadAccountByProductIdRepository } from '../protocols/load-account-by-product-id-repository'

export class SaveSellProductData implements SaveSellProduct {
  constructor (
    private readonly saveSellProductRepository: AddSellProductRepository,
    private readonly loadAccountByProductIdRepository: LoadAccountByProductIdRepository
  ) {}

  async save (sellProduct: AddSellProductModel): Promise<SellProductModel> {
    const sellProductCreated = await this.saveSellProductRepository.add(sellProduct)
    return sellProductCreated
  }
}
