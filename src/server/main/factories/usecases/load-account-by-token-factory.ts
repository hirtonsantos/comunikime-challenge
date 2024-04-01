/* eslint-disable @typescript-eslint/no-floating-promises */
import { prismaConnection } from '@/server/infra/db/prisma'
import { DbLoadAccountByToken } from '../../../data/usecases/db-load-account-by-token'
import { type LoadAccountByToken } from '../../../domain/usecases/load-account-by-token'
import { JwtAdapter } from '../../../infra/criptography/jwt-adapter'
import { UserRepositoryPrisma } from '@/server/infra/repositories/prisma/user/User.repository'

export const makeDbLoadAccountByToken = (): LoadAccountByToken => {
  const jwtAdapter = new JwtAdapter('123')

  const prismaService = prismaConnection
  const addAccountRepo = new UserRepositoryPrisma(prismaService)
  return new DbLoadAccountByToken(jwtAdapter, addAccountRepo)
}
