import path from 'node:path';
import { fileURLToPath } from 'node:url';
import type { Context } from './types';
import createServer from './server';
import * as dotenv from 'dotenv';
import Stripe from 'stripe';
import Logger from '@teensy/logger';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

dotenv.config({ path: path.join(__dirname, '.env') });

const { STRIPE_WEBHOOK_SECRET, STRIPE_SECRET, STRIPE_PK } = process.env;

if (!STRIPE_WEBHOOK_SECRET || !STRIPE_SECRET || !STRIPE_PK) {
  throw new Error('Environment variable not set');
}

const stripe = new Stripe(STRIPE_SECRET, {
  apiVersion: '2022-11-15'
});

const health = await stripe.customers.list({ limit: 1 });

const logger = new Logger();

logger.info('Stripe health: ', health);

const context: Context = {
  stripe: stripe,
  logger: logger
};

async function main(context: Context): Promise<void> {
  logger.info('main() started');

  try {
    await createServer(context);
  } catch (error) {
    console.error(error);
  }
}

try {
  await main(context);
} catch (err) {
  console.error(err);
}
