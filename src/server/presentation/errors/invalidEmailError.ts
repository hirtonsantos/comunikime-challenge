export class InvalidEmailError extends Error {
  constructor () {
    super('email is invalid')
    this.name = 'InvalidEmailError'
  }
}
