import { AddAccountData } from '../../../data/usecases/add-account'
import { BcryptAdapter } from '../../../infra/criptography/bcrypt-adapter'
import { UserRepositoryPrisma } from '../../../infra/repositories/prisma/user/User.repository'
import { prismaConnection } from '../../../infra/db/prisma/index'

export const makeAddCacheAccount = (): AddAccountData => {
  const salt = 12
  const validator = new BcryptAdapter(salt)
  const prismaService = prismaConnection
  const addAccountRepo = new UserRepositoryPrisma(prismaService)
  return new AddAccountData(validator, addAccountRepo)
}
