import express, { Application, Request, Response } from 'express';
import { Context } from './types';

const createServer = async (
  context?: Context
): Promise<express.Application> => {
  console.log('createServer() started');

  const app: Application = express();

  app.get('/api', (_req: Request, res: Response) => {
    res.json({ message: 'Hello from server!' });
  });

  app.get('/api/stripe-health', async (_req: Request, res: Response) => {
    const health = await context?.stripe.customers.list({ limit: 1 });
    res.json(health);
  });

  app.listen(5173, () => {
    console.log('Server running at http://localhost:5173');
  });

  return app;
};

export default createServer;
