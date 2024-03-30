/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express'
import { adaptRoute } from '../adapters/express-router-adapter'
import { makeSignUpController } from '../factories/controllers/signup-controller-factory'

const memberAreaRouter = Router()

memberAreaRouter.post('/signup', adaptRoute(makeSignUpController()))

export default memberAreaRouter
