import { type LoadAccountByTokenRepository } from '../../../../data/protocols/load-account-by-token-repository'

export class LoadAccountByTokenCacheDb implements LoadAccountByTokenRepository {
  async loadByToken (token: string, role?: string | undefined): Promise<LoadAccountByTokenRepository.Result> {
    return {
      id: '546'
    }
  }
}
