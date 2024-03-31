/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express'
import { adaptRoute } from '../adapters/express-router-adapter'
import { adminAuth } from '../middleware/admin-auth'
import { makeAddSellController } from '../factories/controllers/add-sell-controller-factory'

const sellRouter = Router()

sellRouter.post('/', adminAuth, adaptRoute(makeAddSellController()))

export default sellRouter
