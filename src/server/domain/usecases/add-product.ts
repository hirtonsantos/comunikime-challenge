import { type AddProductModel, type ProductModel } from '../models/product'

export interface AddProduct {
  add: (account: AddProductModel) => Promise<ProductModel>
}
