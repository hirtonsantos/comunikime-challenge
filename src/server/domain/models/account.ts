export enum AccountRole {
  ADMINISTRATOR = 'ADMINISTRATOR',
  CUSTOMER = 'CUSTOMER'
}

export interface AccountModel {
  id: string
  name: string
  email: string
  password: string
  role: AccountRole
}

export interface AddAccountModel {
  name: string
  email: string
  password: string
  role: AccountRole
}
