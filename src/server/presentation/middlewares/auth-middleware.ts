/* eslint-disable @typescript-eslint/no-namespace */
import { type LoadAccountByToken } from '../../domain/usecases/load-account-by-token'
import { AccessDeniedError } from '../errors/acessDeniedError'
import { forbidden, internalServerError, ok } from '../helpers'
import { type HttpResponse } from '../protocols'
import { type Middleware } from '../protocols/middleware'

export class AuthMiddleware implements Middleware {
  constructor (
    private readonly loadAccountByToken: LoadAccountByToken,
    private readonly role?: string
  ) {}

  async handle (request: AuthMiddleware.Request): Promise<HttpResponse> {
    try {
      const { authorization } = request
      const accessToken = authorization?.split(' ')[1]
      if (accessToken) {
        const account = await this.loadAccountByToken.load(accessToken, this.role)
        if (account) {
          return ok({ accountId: account.id })
        }
      }
      return forbidden(new AccessDeniedError())
    } catch (error) {
      return internalServerError()
    }
  }
}

export namespace AuthMiddleware {
  export interface Request {
    accessToken?: string
    authorization: string
  }
}
