export interface EmailValidator {
  isValid: (email: string) => boolean
}

export interface InvalidEmailErrorProtocol {
  status: number
  body: any
}
