import 'module-alias/register';
import "reflect-metadata";
import 'dotenv/config';
import '@/src/main/container';
import { App } from './config/app';

const PORT: number = Number(process.env.PORT) || 8080;
const app: App = new App();

(async () => {
  const server = app.getInstance();
  server.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
  });
})();
