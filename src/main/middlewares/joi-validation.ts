import Joi from 'joi';
import { middlewareAdapter } from '@/src/main/adapters';
import JoiMiddlewareFactory from '@/src/main/factories/middlewares/joi-middleware-factory';

export const joiValidation = (schema: Joi.ObjectSchema | Joi.AlternativesSchema) => (
  middlewareAdapter(JoiMiddlewareFactory.getInstance(schema))
);
