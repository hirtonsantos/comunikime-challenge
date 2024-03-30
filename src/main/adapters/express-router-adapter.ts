/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { type Request, type Response } from 'express'
import { type Controller } from '../../presentation/protocols'

interface CustomRequest extends Request {
  accountId?: string
}

export const adaptRoute = (controller: Controller) => {
  return async (req: CustomRequest, res: Response) => {
    const request = {
      body: { ...req.body || {} },
      params: { ...(req.params || {}) },
      accountId: req?.accountId
    }
    console.log({ request })
    const httpResponse = await controller.handler(request)
    if (httpResponse.status >= 200 && httpResponse.status <= 299) {
      res.status(httpResponse.status).json(httpResponse.body)
    } else {
      res.status(httpResponse.status).json({ error: httpResponse.body.message })
    }
  }
}
