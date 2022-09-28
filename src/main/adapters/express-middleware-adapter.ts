import { Request, Response, NextFunction } from 'express';
import { HttpResponse, Middleware } from '@/src/presentation/protocols';
import { HttpStatusCode } from '@/src/presentation/helpers/enum-helper';

export const middlewareAdapter = (middleware: Middleware) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const request = {
      token: req.headers?.['authorization'],
      account: req.payload ? req.payload : {},
      ...(req.headers || {}),
      ...(req.body || {}),
      ...(req.params || {}),
      ...(req.query || {})
    };

    const httpResponse: HttpResponse = await middleware.handle(request);
    if (httpResponse.statusCode === HttpStatusCode.OK) {
      Object.assign(req, httpResponse.body);
      return next();
    }
    const bodyReponse = httpResponse.body as Error;

    return res.status(httpResponse.statusCode).json({ error: bodyReponse.message });
  };
};
