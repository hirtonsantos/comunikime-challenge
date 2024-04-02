import { prismaConnection } from '@/server/infra/db/prisma'
import { UserRepositoryPrisma } from '@/server/infra/repositories/prisma/user/User.repository'
import { SignUpController } from '@/server/presentation/controllers/signUp'
import { type Controller } from '../../../presentation/protocols'
import { EmailValidatorAdapter } from '../../../utils/email-validator-adapter'
import { makeAddAccount } from '../usecases/add-account'
import { makeDbAuthentication } from '../usecases/authentication-factory'

export const makeSignUpController = (): Controller => {
  const emailValidator = new EmailValidatorAdapter()
  const prismaService = prismaConnection
  const loadAccountByEmail = new UserRepositoryPrisma(prismaService)
  const controller = new SignUpController(emailValidator, makeAddAccount(), loadAccountByEmail, makeDbAuthentication())
  return controller
}
