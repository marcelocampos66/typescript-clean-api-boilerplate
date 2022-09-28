import { HealthCheckController } from '@/src/presentation/controllers';
import { Factory } from '@/src/presentation/protocols';

class HealthCheckControllerFactory implements Factory {
  public getInstance(): HealthCheckController {
    return new HealthCheckController();
  }
}

export const healthCheckControllerFactory = new HealthCheckControllerFactory();
