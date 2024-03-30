import { AddProductData } from '../../../data/usecases/add-product'
import { AddProductCacheDb } from '../../../infra/db/cache-db/product/add-product'

export const makeAddCacheProduct = (): AddProductData => {
  const addProductRepo = new AddProductCacheDb()
  return new AddProductData(addProductRepo)
}
