import { LoadAccountByEmailRepository } from '@/server/data/protocols/load-account-by-email-repository'
import { type Authentication } from '../../../domain/usecases/authentication'
import { InvalidEmailError, MissingParamError } from './errors'
import { badRequestError, internalServerError, ok } from './helpers'
import type { AddAccount, Controller, EmailValidator, HttpRequest, HttpResponse } from './protocols'

export class SignUpController implements Controller {
  constructor (
    private readonly emailValidator: EmailValidator,
    private readonly addAccount: AddAccount,
    private readonly loadAccountRepo: LoadAccountByEmailRepository,
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
      const accountExists = await this.loadAccountRepo.loadByEmail(email)
      if (!emailIsValid || accountExists) {
        return badRequestError(new InvalidEmailError())
      }
      if (password !== confirmPassword) {
        return badRequestError(new MissingParamError('confirmPassword'))
      }
      await this.addAccount.add({
        name,
        email,
        password,
        role
      })
      const authenticationModel = await this.authentication.auth({
        email,
        password: password
      })
      return ok(authenticationModel)
    } catch {
      return internalServerError()
    }
  }
}
