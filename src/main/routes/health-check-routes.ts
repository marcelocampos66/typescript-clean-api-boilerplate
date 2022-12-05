import { Router } from 'express';
import { routeAdapter } from '@/src/main/adapters';
import { container } from 'tsyringe';
import { HealthCheckController } from '@/src/presentation/controllers';

const healthCheckController: HealthCheckController = container.resolve(HealthCheckController);

export default (router: Router): void => {
  router.get('/v1/health-check', [
    routeAdapter(healthCheckController),
  ]);
};
