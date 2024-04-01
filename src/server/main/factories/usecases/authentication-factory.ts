import { prismaConnection } from '@/server/infra/db/prisma'
import { DbAuthentication } from '../../../data/usecases/db-authentication'
import { type Authentication } from '../../../domain/usecases/authentication'
import { BcryptAdapter } from '../../../infra/criptography/bcrypt-adapter'
import { JwtAdapter } from '../../../infra/criptography/jwt-adapter'
import { UserRepositoryPrisma } from '@/server/infra/repositories/prisma/user/User.repository'

export const makeDbAuthentication = (): Authentication => {
  const salt = 12
  const bcryptAdapter = new BcryptAdapter(salt)
  const jwtAdapter = new JwtAdapter('123')

  const prismaService = prismaConnection
  const addAccountRepo = new UserRepositoryPrisma(prismaService)
  return new DbAuthentication(bcryptAdapter, jwtAdapter, addAccountRepo)
}
