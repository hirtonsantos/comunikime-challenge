import express, { type Express } from 'express'
import routers from './router/routers'
import bodyParser from 'body-parser'

class App {
  public server: Express

  constructor () {
    this.server = express()
    this.routes()
  }

  routes (): void {
    this.server.use(bodyParser.json())
    this.server.use(routers)
  }
}

export default new App().server
