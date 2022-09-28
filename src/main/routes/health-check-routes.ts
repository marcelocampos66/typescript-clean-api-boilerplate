import { Router } from 'express';
import { routeAdapter } from '@/src/main/adapters';
import { healthCheckControllerFactory } from '@/src/main/factories/controllers';

export default (router: Router): void => {
  router.get('/v1/health-check', [
    routeAdapter(healthCheckControllerFactory.getInstance()),
  ]);
};
