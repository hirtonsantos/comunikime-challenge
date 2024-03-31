import { AddProductData } from '../../../data/usecases/add-product'
import { ProductCacheDb } from '../../../infra/db/cache-db/product/add-product'

export const makeAddCacheProduct = (): AddProductData => {
  const addProductRepo = new ProductCacheDb()
  return new AddProductData(addProductRepo)
}
