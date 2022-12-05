/* eslint-disable @typescript-eslint/no-unused-vars */
import { Controller, HttpResponse } from '@/src/presentation/protocols';
import { injectable } from 'tsyringe';
import { HttpStatusCode } from '@/src/presentation/helpers/enum-helper';
import { httpResponse, serverError } from '@/src/presentation/helpers/http-helper';

@injectable()
export class HealthCheckController implements Controller {
  public async handle(_request: unknown): Promise<HttpResponse> {
    try {
      return httpResponse(HttpStatusCode.OK, { message: 'server online' });
    } catch (error) {
      return serverError(error);
    }
  }
}
