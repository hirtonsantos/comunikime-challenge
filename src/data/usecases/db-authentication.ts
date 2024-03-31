import { type Authentication } from '../../domain/usecases/authentication'
import { type AccountCacheRepository } from '../../infra/db/cache-db/account/account-cache-db-repository'
import type { Encrypter, HashComparer } from '../protocols/cryptography'

export class DbAuthentication implements Authentication {
  constructor (
    private readonly hashComparer: HashComparer,
    private readonly encrypter: Encrypter,
    private readonly accountCacheRepository: AccountCacheRepository
  ) {}

  async auth (authenticationParams: Authentication.Params): Promise<Authentication.Result | null> {
    const account = await this.accountCacheRepository.loadByEmail(authenticationParams.email)
    if (account) {
      const isValid = await this.hashComparer.compare(account.password, authenticationParams.password)
      if (isValid) {
        const accessToken = await this.encrypter.encrypt(account.id)
        await this.accountCacheRepository.updateAccessToken(account.id, accessToken)
        return {
          accessToken,
          name: account.name
        }
      }
    }
    return null
  }
}
