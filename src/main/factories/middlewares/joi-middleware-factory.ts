import Joi from 'joi';
import { JoiMiddleware } from '@/src/presentation/middlewares';

class JoiMiddlewareFactory {
  public getInstance(schema: Joi.ObjectSchema | Joi.AlternativesSchema): JoiMiddleware {
    return new JoiMiddleware(schema);
  }
}

export default new JoiMiddlewareFactory();
