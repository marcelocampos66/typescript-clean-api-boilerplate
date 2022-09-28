import { HttpResponse } from '@/src/presentation/protocols/http';
import { HttpStatusCode } from '@/src/presentation/helpers/enum-helper';

type RequestBody = undefined | null | unknown | Error;

export const httpResponse = (statusCode: number, body?: RequestBody): HttpResponse => ({
  statusCode,
  body,
});

export const serverError = (error: Error): HttpResponse => ({
  statusCode: HttpStatusCode.INTERNAL_SERVER_ERROR,
  body: error,
});
