import { AddAccountData } from '../../../data/usecases/add-account'
import { BcryptAdapter } from '../../../infra/criptography/bcrypt-adapter'
import { prismaConnection } from '../../../infra/db/prisma/index'
import { UserRepositoryPrisma } from '../../../infra/repositories/prisma/user/User.repository'

export const makeAddAccount = (): AddAccountData => {
  const salt = 12
  const validator = new BcryptAdapter(salt)
  const prismaService = prismaConnection
  const addAccountRepo = new UserRepositoryPrisma(prismaService)
  return new AddAccountData(validator, addAccountRepo)
}
