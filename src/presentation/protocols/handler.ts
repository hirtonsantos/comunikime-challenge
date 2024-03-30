import { type Request, type Response } from 'express'

export interface Handler {
  handle: (req: Request, res: Response) => Promise<Response>
}
