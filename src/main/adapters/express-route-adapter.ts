import { Controller, HttpResponse } from '@/src/presentation/protocols';
import { Request, Response } from 'express';

export const routeAdapter = (controller: Controller) => {
  return async (req: Request, res: Response) => {
    const request = {
      account: req.payload ? req.payload : {},
      path: req.path,
      ...req.body,
      ...req.params,
      ...req.query,
    };
    const httpResponse: HttpResponse = await controller.handle(request);

    if (!httpResponse.body) {
      return res.sendStatus(httpResponse.statusCode);
    }

    if (httpResponse.body && httpResponse.body instanceof Error) {
      return res
        .status(httpResponse.statusCode)
        .json({ message: httpResponse.body.message });
    }

    return res.status(httpResponse.statusCode).json(httpResponse.body);
  };
};
