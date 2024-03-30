/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express'
import memberAreaRouter from './auth-router'

const routes = Router()

routes.use('/auth', memberAreaRouter)

export default routes
