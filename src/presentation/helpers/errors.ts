import { type HttpResponse } from '../protocols'
import { internalServerError, unauthorized } from './http'

export const handleErrors = (error: any): HttpResponse => {
  const errorMappings: Record<string, () => HttpResponse> = {
    AccessDeniedError: () => unauthorized()
  }

  const errorName = error.constructor.name
  const errorHandler = errorMappings[errorName]

  if (errorHandler) {
    return errorHandler()
  }

  return internalServerError()
}
