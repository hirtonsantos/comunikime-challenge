import { AuthMiddleware } from '../../../presentation/middlewares/auth-middleware'
import { type Middleware } from '../../../presentation/protocols/middleware'
import { makeDbLoadAccountByToken } from '../usecases/load-account-by-token-factory'

export const makeAuthMiddleware = (role?: string): Middleware => {
  return new AuthMiddleware(makeDbLoadAccountByToken(), role)
}
