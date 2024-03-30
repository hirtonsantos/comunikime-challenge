import { type HttpResponse, type HttpRequest } from './http'

export interface Controller {
  handler: (httpRequest: HttpRequest) => Promise<HttpResponse>
}
