import express, { Application, Request, Response, Router } from 'express';
import cors from 'cors';
import { Context } from './types';
import paymentIntentHandler from './routes/payment-intents';
import routes from './routes';

const createServer = (context: Context): express.Application => {
  console.log('createServer() started');

  const app: Application = express();
  const routes: Application = express();

  const allowedOrigins = ['http://localhost:5173'];

  const options: cors.CorsOptions = {
    origin: allowedOrigins
  };

  app.use(cors(options));
  app.use('/api', routes);

  routes.post('/secret', paymentIntentHandler(context));

  app.get('/api', (_req: Request, res: Response) => {
    res.json({ message: 'Hello from server!' });
  });

  app.get('/api/healthcheck', async (_req: Request, res: Response) => {
    const health = await context?.stripe.customers.list({ limit: 1 });
    res.json(health);
  });

  app.post(
    '/secrets',
    express.raw({ type: 'application/json' }),
    paymentIntentHandler(context)
  );

  app.set('context', context);

  app.listen(5174, () => {
    console.log('Server running at http://localhost:5174');
  });

  return app;
};

export default createServer;
