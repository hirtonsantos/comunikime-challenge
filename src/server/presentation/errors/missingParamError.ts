export class MissingParamError extends Error {
  constructor (field: string) {
    super(`missing param ${field}`)
  }
}
