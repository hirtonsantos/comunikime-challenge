import { AccessDeniedError } from '../errors/acessDeniedError'
import { InternalServerError } from '../errors/internalServerError'
import { type HttpResponse } from '../protocols/http'

export const badRequestError = (error: Error): HttpResponse => {
  return {
    status: 400,
    body: error
  }
}

export const internalServerError = (): HttpResponse => {
  return {
    status: 500,
    body: new InternalServerError()
  }
}

export const forbidden = (error: Error): HttpResponse => ({
  status: 403,
  body: error
})

export const unauthorized = (): HttpResponse => ({
  status: 403,
  body: new AccessDeniedError()
})

export const ok = (data: any): HttpResponse => {
  return {
    status: 200,
    body: data
  }
}
