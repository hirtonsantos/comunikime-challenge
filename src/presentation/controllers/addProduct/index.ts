import { badRequestError, internalServerError, ok } from '../../helpers'
import { InvalidEmailError } from '../signUp/errors'
import type { EmailValidator, Controller, AddProduct, HttpRequest, HttpResponse } from './protocols'

export class AddProductController implements Controller {
  private readonly emailValidator
  private readonly addProduct
  constructor (emailValidator: EmailValidator, addProduct: AddProduct) {
    this.emailValidator = emailValidator
    this.addProduct = addProduct
  }

  async handler (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { suportMailAdress } = httpRequest.body
      const emailIsValid = this.emailValidator.isValid(suportMailAdress)
      if (!emailIsValid) {
        return badRequestError(new InvalidEmailError())
      }
      const product = await this.addProduct.add({
        ...httpRequest.body
      })

      return ok(product)
    } catch (error) {
      return internalServerError()
    }
  }
}
