import { Express } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { contentType } from '@/src/main/middlewares';

export default (app: Express) => {
  app.use(cors());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(contentType);
};
