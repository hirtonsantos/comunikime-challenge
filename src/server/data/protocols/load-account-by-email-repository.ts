export interface LoadAccountByEmailRepository {
  loadByEmail: (email: string) => Promise<LoadAccountByEmailRepository.Result | null>
}

export namespace LoadAccountByEmailRepository {
  export interface Result {
    id: number
    name: string
    password: string | null
  }
}
