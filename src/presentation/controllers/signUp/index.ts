import { InvalidEmailError, MissingParamError } from './errors'
import { badRequestError, internalServerError, ok } from './helpers'
import type { Controller, EmailValidator, HttpRequest, HttpResponse, AddAccount } from './protocols'

export class SignUpController implements Controller {
  private readonly emailValidator
  private readonly addAccount
  constructor (emailValidator: EmailValidator, addAccount: AddAccount) {
    this.emailValidator = emailValidator
    this.addAccount = addAccount
  }

  async handler (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const requireFields = ['name', 'email', 'password', 'confirmPassword']
      for (const field of requireFields) {
        if (!httpRequest.body[field]) {
          return badRequestError(new MissingParamError(field))
        }
      }
      const { name, email, password, confirmPassword, role } = httpRequest.body
      const emailIsValid = this.emailValidator.isValid(email)
      if (!emailIsValid) {
        return badRequestError(new InvalidEmailError())
      }
      if (password !== confirmPassword) {
        return badRequestError(new MissingParamError('confirmPassword'))
      }
      const account = await this.addAccount.add({
        name,
        email,
        password,
        role
      })
      return ok(account)
    } catch {
      return internalServerError()
    }
  }
}
