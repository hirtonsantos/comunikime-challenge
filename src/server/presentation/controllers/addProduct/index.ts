import { badRequestError, internalServerError, ok } from '../../helpers'
import { InvalidEmailError } from '../signIn/errors'
import type { EmailValidator, Controller, AddProduct, HttpRequest, HttpResponse } from './protocols'

export class AddProductController implements Controller {
  private readonly emailValidator
  private readonly addProduct
  constructor (emailValidator: EmailValidator, addProduct: AddProduct) {
    this.emailValidator = emailValidator
    this.addProduct = addProduct
  }

  async handler (httpRequest: AddProductController.Request): Promise<HttpResponse> {
    try {
      // const { suportMailAdress } = httpRequest.body
      const accountId = Number(httpRequest.accountId)
      /*
      const emailIsValid = this.emailValidator.isValid(suportMailAdress)
      if (!emailIsValid) {
        return badRequestError(new InvalidEmailError())
      }
      */
      const productData = httpRequest.body
      productData.quantity = Number(productData.quantity)
      console.log({productData})
      const product = await this.addProduct.add(productData, accountId)

      return ok(product)
    } catch (error) {
      return internalServerError()
    }
  }
}

export namespace AddProductController {
  export interface Request {
    accountId: number
    body: any
  }
}
