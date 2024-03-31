/* eslint-disable @typescript-eslint/no-floating-promises */
import { DbLoadAccountByToken } from '../../../data/usecases/db-load-account-by-token'
import { type LoadAccountByToken } from '../../../domain/usecases/load-account-by-token'
import { JwtAdapter } from '../../../infra/criptography/jwt-adapter'
import { LoadAccountByTokenCacheDb } from '../../../infra/db/cache-db/account/load-account-by-token'

export const makeDbLoadAccountByToken = (): LoadAccountByToken => {
  const jwtAdapter = new JwtAdapter('secret')
  const accountMongoRepository = new LoadAccountByTokenCacheDb()
  return new DbLoadAccountByToken(jwtAdapter, accountMongoRepository)
}
