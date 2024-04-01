import { SellRepositoryPrisma } from '@/server/infra/repositories/prisma/sell/Sell.repository'
import { AddSellData } from '../../../data/usecases/add-sell'
import { AddSellController } from '../../../presentation/controllers/addSell'
import { type Controller } from '../../../presentation/protocols'
import { prismaConnection } from '@/server/infra/db/prisma'
import { UserRepositoryPrisma } from '@/server/infra/repositories/prisma/user/User.repository'

export const makeAddSellController = (): Controller => {
  const prismaService = prismaConnection

  const sellRepository = new SellRepositoryPrisma(prismaService)
  const loadAccountByProductIdRepository = new UserRepositoryPrisma(prismaConnection)

  const addSell = new AddSellData(sellRepository, loadAccountByProductIdRepository)

  const controller = new AddSellController(addSell)
  return controller
}
