import { type Authentication } from '../../../domain/usecases/authentication'
import { InvalidEmailError, MissingParamError } from './errors'
import { badRequestError, internalServerError, ok } from './helpers'
import type { Controller, EmailValidator, HttpRequest, HttpResponse, AddAccount } from './protocols'

export class SignUpController implements Controller {
  constructor (
    private readonly emailValidator: EmailValidator,
    private readonly addAccount: AddAccount,
    private readonly authentication: Authentication
  ) {
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
      const accountCreated = await this.addAccount.add({
        name,
        email,
        password,
        role
      })
      const pass = accountCreated.password as string
      const authenticationModel = await this.authentication.auth({
        email,
        password: pass
      })
      return ok(authenticationModel)
    } catch {
      return internalServerError()
    }
  }
}
