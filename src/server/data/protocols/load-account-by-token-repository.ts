import { UserRole } from "@prisma/client"

export interface LoadAccountByTokenRepository {
  loadByToken: (token: string, role?: UserRole) => Promise<LoadAccountByTokenRepository.Result | null>
}

export namespace LoadAccountByTokenRepository {
  export interface Result {
    id: number
  }
}
