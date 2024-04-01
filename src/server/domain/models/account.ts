import { UserRole } from "@prisma/client"

export interface AccountModel {
  id: number
  name: string
  email: string
  password: string | null
  avatarUrl: string | null
  role: UserRole
}

export interface AddAccountModel {
  name: string
  email: string
  password: string
  role: UserRole
}
