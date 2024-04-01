import express, { type Express } from 'express'
import routers from './router/routers'
import bodyParser from 'body-parser'
import cors from 'cors'
class App {
  public server: Express

  constructor () {
    this.server = express()
    this.cors();
    this.routes()
  }

  cors() {
    this.server.use(
        express.json({
            limit: '50mb',
        })
    );
    this.server.use(
        express.urlencoded({
            limit: '50mb',
            parameterLimit: 100000,
            extended: true,
        })
    );
    this.server.use(cors()); // Enable CORS
    this.server.options('*', cors()); // Enable CORS-Pre-Flight
}

  routes (): void {
    this.server.use(bodyParser.json())
    this.server.use(routers)
  }
}

export default new App().server
