import 'dotenv/config';
import express, { Express } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import applyRoutes from './routes';
import { contentType, errorMiddleware } from '@/src/main/middlewares';

export class App {
  private app: Express;

  constructor() {
    this.app = express();
    this.applyMiddlewares();
    this.applyRoutes();
    this.handleGenericErrors();
  }

  private applyMiddlewares(): void {
    this.app.use(cors());
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(contentType);
  }

  private applyRoutes(): void {
    applyRoutes(this.app);
  }

  private handleGenericErrors(): void {
    this.app.use(errorMiddleware);
  }

  public getInstance(): Express {
    return this.app;
  }
}
