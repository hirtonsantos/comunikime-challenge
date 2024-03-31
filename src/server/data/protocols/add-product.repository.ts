import { type AddProductModel, type ProductModel } from '../../domain/models/product'

export interface AddProductRepository {
  add: (product: AddProductModel) => Promise<ProductModel>
}
