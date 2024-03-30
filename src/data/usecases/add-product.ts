import { type ProductModel, type AddProductModel } from '../../domain/models/product'
import { type AddProduct } from '../../domain/usecases/add-product'

import { type AddProductRepository } from '../protocols/add-product.repository'

export class AddProductData implements AddProduct {
  constructor (
    private readonly addProductRepository: AddProductRepository
  ) {}

  async add (productData: AddProductModel): Promise<ProductModel> {
    const product = await this.addProductRepository.add(productData)
    return product
  }
}
