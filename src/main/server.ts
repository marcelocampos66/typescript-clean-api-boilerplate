import 'module-alias/register';
import 'reflect-metadata';
import 'dotenv/config';
import '@/src/main/container';
import { App } from './config/app';
import env from '@/src/main/config/env';

const PORT: number = env.PORT;
const app: App = new App();

(async () => {
  const server = app.getInstance();
  server.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
  });
})();
