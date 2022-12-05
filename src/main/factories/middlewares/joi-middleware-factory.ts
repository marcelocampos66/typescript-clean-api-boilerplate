import Joi from 'joi';
import { Factory } from '@/src/presentation/protocols';
import { JoiMiddleware } from '@/src/presentation/middlewares';

class JoiMiddlewareFactory implements Factory {
  public getInstance(schema: Joi.ObjectSchema | Joi.AlternativesSchema): JoiMiddleware {
    return new JoiMiddleware(schema);
  }
}

export default new JoiMiddlewareFactory();
