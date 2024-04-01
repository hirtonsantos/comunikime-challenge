import { UserRole } from "@prisma/client"

export interface LoadAccountByEmailRepository {
  loadByEmail: (email: string) => Promise<LoadAccountByEmailRepository.Result | null>
}

export namespace LoadAccountByEmailRepository {
  export interface Result {
    id: number
    name: string
    email: string
    avatarUrl: string | null
    role: UserRole
    password?: string | null
  }
}
