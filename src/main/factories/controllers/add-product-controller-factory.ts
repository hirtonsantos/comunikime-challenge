import { AddProductController } from '../../../presentation/controllers/addProduct'
import { type Controller } from '../../../presentation/protocols'
import { EmailValidatorAdapter } from '../../../utils/email-validator-adapter'
import { makeAddCacheProduct } from '../usecases/add-product'

export const makeAddProductController = (): Controller => {
  const emailValidator = new EmailValidatorAdapter()
  const controller = new AddProductController(emailValidator, makeAddCacheProduct())
  return controller
}
