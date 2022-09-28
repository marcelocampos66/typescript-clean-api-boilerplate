import 'dotenv/config';
import express, { Express } from 'express';
import applyMiddlewares from './middlewares';
import applyRoutes from './routes';

export class App {
  private app: Express;

  constructor() {
    this.app = express();
    this.applyMiddlewares();
    this.applyRoutes();
  }

  private applyMiddlewares(): void {
    applyMiddlewares(this.app);
  }

  private applyRoutes(): void {
    applyRoutes(this.app);
  }

  public getInstance(): Express {
    return this.app;
  }
}
