import { NextFunction, Request, Response } from 'express';
import { Route, HttpError } from '../types';

export const secret: Route = (context) => {
  const { stripe, logger: ctxLogger } = context;
  const logger = ctxLogger.createChild('payment_intent.create.secret');

  const handleRequest = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    logger.info('handling request');
    try {
      const setupIntent = await stripe.setupIntents.create({
        payment_method_types: ['card']
      });
      console.log({ setupIntent });
      logger.info('responding with client_secret');

      res.json({
        client_secret: setupIntent.client_secret
      });
    } catch (err) {
      next(err);
    }
  };

  return (req, res, next) => {
    handleRequest(req, res, next).catch((error: HttpError) => {
      logger.error('Request error', {
        error: error.message,
        stack: error.stack
      });
      next(error);
    });
  };
};

export default secret;
