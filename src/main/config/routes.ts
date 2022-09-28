import { Express, Router } from 'express';
import { readdirSync } from 'fs';
import { join } from 'path';

export default (app: Express): void => {
  const router: Router = Router();
  app.use('/boilerplate/api', router);
  readdirSync(join(__dirname, '../routes')).forEach(async (file) => {
    if (!file.endsWith('.map')) {
      (await import(`../routes/${file}`)).default(router);
    }
  });
};
