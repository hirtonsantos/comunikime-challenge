import { prismaConnection } from '@/server/infra/db/prisma'
import { AddProductData } from '../../../data/usecases/add-product'
import { ProductRepositoryPrisma } from '@/server/infra/repositories/prisma/product/Product.repository'

export const makeAddCacheProduct = (): AddProductData => {
  const prismaService = prismaConnection
  const addAccountRepo = new ProductRepositoryPrisma(prismaService)
  return new AddProductData(addAccountRepo)
}
