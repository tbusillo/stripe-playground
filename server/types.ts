import Logger from '@teensy/logger';
import { RequestHandler } from 'express';
import Stripe from 'stripe';

export interface Context {
  logger: Logger;
  stripe: Stripe;
  // analytics: AnalyticsEmitter;
  // db: PrismaClient;
  // config: {
  //   env: string | string[];
  //   endpointSecret: string | undefined;
  //   hubspotApiKey?: string;
  // };
}

export type AsyncRouteFactory = (
  context: Context
) => (req: Request, res: Response) => Promise<void>;

export type Route = (context: Context) => RequestHandler;

export type HttpError = Error & { status?: number };
