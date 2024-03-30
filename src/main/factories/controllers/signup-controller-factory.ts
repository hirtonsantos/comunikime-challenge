import { SignUpController } from '../../../presentation/controllers/signUp'
import { type Controller } from '../../../presentation/protocols'
import { EmailValidatorAdapter } from '../../../utils/email-validator-adapter'
import { makeAddCacheAccount } from '../usecases/add-account'

export const makeSignUpController = (): Controller => {
  const emailValidator = new EmailValidatorAdapter()
  const controller = new SignUpController(emailValidator, makeAddCacheAccount())
  return controller
}