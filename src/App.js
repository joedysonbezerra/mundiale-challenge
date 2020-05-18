import 'localenv';
import express from 'express';
import 'express-async-errors';
import routes from './routes';
import AppError from './errors/AppError';
import createLog from './util/createLog';

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
    this.exceptionHandler();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }

  exceptionHandler() {
    this.server.use(async (err, request, response, _) => {
      createLog(`[ERROR]: ${JSON.stringify(err)}\n`);

      if (err instanceof AppError) {
        return response.status(err.statusCode).json({
          status: 'error',
          message: err.message,
          error: err.error,
        });
      }
      console.error(err);
      return response.status(500).json({
        status: 'error',
        message: 'Internal server error',
      });
    });
  }
}

export default new App().server;
