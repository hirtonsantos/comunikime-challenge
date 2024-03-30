import { type AddProductRepository } from '../../../../data/protocols/add-product.repository'
import { ProductStatus, type AddProductModel, type ProductModel } from '../../../../domain/models/product'

export class AddProductCacheDb implements AddProductRepository {
  async add (product: AddProductModel): Promise <ProductModel> {
    const productCreated: ProductModel = {
      ...product,
      status: ProductStatus.APPROVED,
      id: 'product_reference_987'
    }

    return await Promise.resolve(productCreated)
  }
}
