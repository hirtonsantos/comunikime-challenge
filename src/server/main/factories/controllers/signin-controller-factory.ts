import { CreateSessionValidation } from '@/server/infra/validations/auth/create-session.validation'
import { SigninController } from '../../../presentation/controllers/signIn'
import { type Controller } from '../../../presentation/protocols'
import { CreateSessionUseCase } from '@/server/usecases/authentication'
import { UserRepositoryPrisma } from '@/server/infra/repositories/prisma/user/User.repository'
import { prismaConnection } from '@/server/infra/db/prisma'
import { BcryptAdapter } from '@/server/infra/criptography/bcrypt-adapter'
import { JwtAdapter } from '@/server/infra/criptography/jwt-adapter'

export const makeSignInController = (): Controller => {
  const salt = 12

  const prismaService = prismaConnection
  const createSessionValidation: CreateSessionValidation = new CreateSessionValidation()
  const accountRepo = new UserRepositoryPrisma(prismaService)
  const bcryptAdapter = new BcryptAdapter(salt)
  const jwtAdapter = new JwtAdapter('123')
  const createSessionUseCase = new CreateSessionUseCase(createSessionValidation, accountRepo, bcryptAdapter, jwtAdapter)
  const controller = new SigninController(createSessionValidation, accountRepo, bcryptAdapter, jwtAdapter, createSessionUseCase)
  return controller
}
