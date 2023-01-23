import {
  AddressElement,
  CardElement,
  PaymentElement,
  useStripe,
  useElements,
  PaymentElementProps
} from '@stripe/react-stripe-js';
import stripeJs from '@stripe/stripe-js';
import { useEffect, useState } from 'react';
import { redirect, useNavigate } from 'react-router-dom';
import Stripe from 'stripe';

type PaymentFormProps = {
  clientSecret: string;
} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const cardStyle = {
  style: {
    base: {
      color: '#32325d',
      fontFamily: 'Arial, sans-serif',
      fontSmoothing: 'antialiased',
      fontSize: '16px',
      '::placeholder': {
        color: '#32325d'
      }
    },
    empty: {
      color: '#aab7c4'
    },
    invalid: {
      fontFamily: 'Arial, sans-serif',
      color: '#fa755a',
      iconColor: '#fa755a'
    }
  },
  hidePostalCode: true,
  hideIcon: true
};

const options = {
  theme: 'none',
  terms: {
    card: 'never'
  }
} as Partial<stripeJs.StripePaymentElementOptions>;

export const PaymentForm = ({ clientSecret }: PaymentFormProps) => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError(null);
      }, 5000);
    }

    return;
  }, [error]);

  const handlePaymentSubmit = async (event: React.FormEvent) => {
    setLoading(true);
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const { setupIntent, error } = await stripe.confirmSetup({
      elements,
      confirmParams: {
        payment_method_data: {
          billing_details: {
            address: {
              city: 'test'
            }
          }
        },
        return_url: 'http://localhost:3000/pay/success'
      },
      redirect: 'if_required'
    });

    // const { setupIntent, error } = test;
    if (error) {
      console.log(error);
      setError(error.message as string);
      setLoading(false);
    } else {
      if (setupIntent && setupIntent.status === 'succeeded') {
        console.log('Payment method successfully added');
        redirect('/pay/success');
      }
    }
    console.log(setupIntent);

    setLoading(false);
    return;
  };

  return (
    <form
      id='payment-form'
      onSubmit={handlePaymentSubmit}
      className='flex justify-center flex-col items-center mt-8'
    >
      <div
        id='payment-element'
        className='w-3/4 flex flex-wrap items-center justify-center'
      >
        <label
          htmlFor='cardnumber'
          className='w-full mb-2 text-sm text-gray-500 tracking-wide uppercase'
        >
          Card number
        </label>
        {/* <CardElement
          id='card-element'
          options={cardStyle}
          className='w-full border p-3 text-gray-500 placeholder:text-gray-400 rounded-md border-gray-300'
        /> */}
        <PaymentElement
          className='w-full p-3 text-gray-500 placeholder:text-gray-400 rounded-md'
          options={options}
        />
        <AddressElement
          id='address-element'
          options={{ mode: 'billing' }}
          className='w-full mt-4'
        />
        {error && (
          <div
            id='error-message'
            className='w-full bg-rose-100 text-rose-700 rounded py-3 text-center mt-4'
          >
            {error}
          </div>
        )}
        <button
          id='submit'
          type='submit'
          // disabled={!stripe}
          className='p-2 mt-4 rounded text-base border bg-cyan-500 text-white border-sky-600 block w-full font-medium'
        >
          Pay Now
        </button>
      </div>
      {loading && (
        <span className='z-10 bg-white p-24 text-center text-lg font-bold absolute left-1/2 top-1/2'>
          Processing...
        </span>
      )}
    </form>
  );
};

export default PaymentForm;
