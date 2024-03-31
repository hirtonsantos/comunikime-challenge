import { AddAccountData } from '../../../data/usecases/add-account'
import { BcryptAdapter } from '../../../infra/criptography/bcrypt-adapter'
import { AddAccountCacheDb } from '../../../infra/db/cache-db/account/add-account'

export const makeAddCacheAccount = (): AddAccountData => {
  const salt = 12
  const validator = new BcryptAdapter(salt)
  const addAccountRepo = new AddAccountCacheDb()
  return new AddAccountData(validator, addAccountRepo)
}
