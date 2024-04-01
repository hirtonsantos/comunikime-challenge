import { type ProductModel } from '../models/product'

export interface LoadManyProducts {
  manyProducts: () => Promise<ProductModel[]>
}