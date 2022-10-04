/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response, NextFunction } from 'express';
import { ErrorHandler } from '@/src/presentation/errors';

export const errorMiddleware = (err: ErrorHandler, _req: Request, res: Response, _next: NextFunction) => {
  const { status, message } = err;

  return res.status(status).json({ message });
};
