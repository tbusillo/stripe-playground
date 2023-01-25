import PaymentForm from '@components/PaymentForm/PaymentForm';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Stripe from 'stripe';

const stripePromise = loadStripe(
  'pk_test_51LEmFCICpyDibVywCDi4M1pfOnRaU7pEjMR9ksWlU4aX2pGug0pGW89lHcyXgHqpjfrRPNKKcnA709TPuZspibJ100ZfPEDDua',
  {
    apiVersion: '2022-11-15'
  }
);

const AddMethod = () => {
  const [mounted, setMounted] = useState(false);
  const [clientSecret, setClientSecret] =
    useState<Stripe.PaymentIntent['client_secret']>(null);

  useEffect(() => {
    console.info('Pay container is mounted');
    if (clientSecret || !mounted) {
      console.debug('Pay container is mounted');
      setMounted(true);
      return;
    }

    const fetchClientSecret = async (): Promise<void> => {
      const response = await fetch('http://localhost:5174/api/secret', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const res = await response.json();
      console.log(res);

      if (res.client_secret) {
        setClientSecret(res.client_secret);
      }
    };
    fetchClientSecret();
  }, [mounted]);

  if (!clientSecret) {
    return <div>Loading...</div>;
  }

  return (
    <div className='h-screen px-12 bg-white py-6 px-8'>
      <h1 className='text-xl font-semibold'>Payment</h1>
      <Elements stripe={stripePromise} options={{ clientSecret: clientSecret }}>
        <PaymentForm clientSecret={clientSecret} />
      </Elements>
      <h2 className='text-lg font-semibold my-4'>Debugging</h2>
      <p>
        <strong>Client secret:</strong>{' '}
        {clientSecret ? clientSecret : 'No secret yet'}
      </p>
    </div>
  );
};

export default AddMethod;
