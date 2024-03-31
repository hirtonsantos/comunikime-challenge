import { AddSellData } from '../../../data/usecases/add-sell'
import { SaveSellProductData } from '../../../data/usecases/save-sell-product'
import { AccountCacheRepository } from '../../../infra/db/cache-db/account/account-cache-db-repository'
import { ProductCacheDb } from '../../../infra/db/cache-db/product/add-product'
import { SellProductCacheRepository } from '../../../infra/db/cache-db/sell-product/sell-product-cache-db-repository'
import { SellCacheRepository } from '../../../infra/db/cache-db/sell/sell-cache-db-repository'
import { AddSellController } from '../../../presentation/controllers/addSell'
import { type Controller } from '../../../presentation/protocols'

export const makeAddSellController = (): Controller => {
  const sellRepository = new SellCacheRepository()
  const loadAccountByProductIdRepository = new AccountCacheRepository()
  const loadProductByIdRepository = new ProductCacheDb()
  const addSell = new AddSellData(sellRepository, loadAccountByProductIdRepository, loadProductByIdRepository)

  const sellProductRepo = new SellProductCacheRepository()
  const addSellProduct = new SaveSellProductData(sellProductRepo, loadAccountByProductIdRepository)
  const controller = new AddSellController(addSell, addSellProduct)
  return controller
}
