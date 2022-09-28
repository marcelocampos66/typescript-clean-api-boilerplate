import { HttpResponse } from '@/src/presentation/protocols';

export interface Middleware<T = unknown> {
  handle: (httpRequest: T) => Promise<HttpResponse>
}
