import { type LoadAccountByToken } from '../../domain/usecases/load-account-by-token'
import { type JwtAdapter } from '../../infra/criptography/jwt-adapter'
import { type LoadAccountByTokenRepository } from '../protocols/load-account-by-token-repository'

export class DbLoadAccountByToken implements LoadAccountByToken {
  constructor (
    private readonly decrypter: JwtAdapter,
    private readonly loadAccountByTokenRepository: LoadAccountByTokenRepository
  ) {}

  async load (accessToken: string, role?: string): Promise<LoadAccountByToken.Result | null> {
    let token: string

    try {
      token = await this.decrypter.decrypt(accessToken)
    } catch (error) {
      return null
    }
    if (token) {
      const account = await this.loadAccountByTokenRepository.loadByToken(accessToken)
      if (account) {
        return account
      }
    }
    return null
  }
}
