/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express'
import authRouter from './auth-router'
import productRouter from './product-router'
import sellRouter from './sell-router'

const routes = Router()

routes.use('/auth', authRouter)
routes.use('/product', productRouter)
routes.use('/sell', sellRouter)

export default routes
