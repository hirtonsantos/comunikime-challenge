export class InternalServerError extends Error {
  constructor () {
    super('internal server error')
    this.name = 'internalServerError'
  }
}
