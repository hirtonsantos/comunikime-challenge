import { type Authentication } from '../../domain/usecases/authentication'
import type { Encrypter, HashComparer } from '../protocols/cryptography'
import { LoadAccountByEmailRepository } from '../protocols/load-account-by-email-repository'
import { UpdateAccessTokenRepository } from '../protocols/update-access-token-repository'

export class DbAuthentication implements Authentication {
  constructor (
    private readonly hashComparer: HashComparer,
    private readonly encrypter: Encrypter,
    private readonly accountRepository: LoadAccountByEmailRepository & UpdateAccessTokenRepository
  ) {}

  async auth (authenticationParams: Authentication.Params): Promise<Authentication.Result | null> {
    const account = await this.accountRepository.loadByEmail(authenticationParams.email)
    if (account) {
      const pass = account.password as string
      const isValid = await this.hashComparer.compare(pass, authenticationParams.password)
      if (isValid) {
        const accessToken = await this.encrypter.encrypt(pass)
        await this.accountRepository.updateAccessToken(account.id, accessToken)
        return {
          accessToken,
          name: account.name
        }
      }
    }
    return null
  }
}
