/* eslint-disable @typescript-eslint/no-namespace */
import Joi from 'joi';
import { Middleware, HttpResponse } from '@/src/presentation/protocols';
import { HttpStatusCode } from '@/src/presentation/helpers/enum-helper';
import { httpResponse } from '@/src/presentation/helpers/http-helper';

export class JoiMiddleware implements Middleware {
  private readonly schema: Joi.ObjectSchema | Joi.AlternativesSchema;

  constructor(schema: Joi.ObjectSchema | Joi.AlternativesSchema) {
    this.schema = schema;
  }

  async handle(request: JoiMiddleware.Request): Promise<HttpResponse> {
    try {
      const { error } = this.schema.validate(request, { abortEarly: false, allowUnknown: true });
      if (error) {
        throw error;
      }
      return httpResponse(HttpStatusCode.OK);
    } catch (error) {
      return httpResponse(HttpStatusCode.UNPROCESSABLE_ENTITY, error);
    }
  }
}

export namespace JoiMiddleware {
  export type Request = {
    [key: string]: unknown
  };
}
