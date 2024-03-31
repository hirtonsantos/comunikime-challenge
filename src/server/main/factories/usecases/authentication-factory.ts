import { DbAuthentication } from '../../../data/usecases/db-authentication'
import { type Authentication } from '../../../domain/usecases/authentication'
import { BcryptAdapter } from '../../../infra/criptography/bcrypt-adapter'
import { JwtAdapter } from '../../../infra/criptography/jwt-adapter'
import { AccountCacheRepository } from '../../../infra/db/cache-db/account/account-cache-db-repository'

export const makeDbAuthentication = (): Authentication => {
  const salt = 12
  const bcryptAdapter = new BcryptAdapter(salt)
  const jwtAdapter = new JwtAdapter('secret')
  const accountCacheRepository = new AccountCacheRepository()
  return new DbAuthentication(bcryptAdapter, jwtAdapter, accountCacheRepository)
}
