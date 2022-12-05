import { container } from 'tsyringe';
import { HealthCheckController } from '@/src/presentation/controllers';

// health-check
container.register<HealthCheckController>('HealthCheckController', HealthCheckController);
