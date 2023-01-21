import {
  AddressElement,
  CardElement,
  PaymentElement,
  useStripe,
  useElements
} from '@stripe/react-stripe-js';
import { useState } from 'react';

type PaymentFormProps = {
  label?: string;
  name?: string;
  error?: string | undefined;
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
  }
};

export const PaymentForm = ({
  label,
  name,
  error,
  ...props
}: PaymentFormProps) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);

  const handlePaymentSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const addressElement = elements.getElement('address');

    console.log(addressElement);

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <form
      id='payment-form'
      onSubmit={handlePaymentSubmit}
      className='flex justify-center flex-col items-center mt-8'
    >
      <div className='w-3/4 flex flex-wrap items-center justify-center'>
        <label className='w-full mb-2 text-sm text-gray-500 tracking-wide uppercase'>
          Card number
        </label>
        <CardElement
          id='card-element'
          options={cardStyle}
          className='w-full border p-3 text-gray-500 placeholder:text-gray-400 rounded-md border-gray-300'
        />

        <AddressElement
          id='address-element'
          options={{ mode: 'billing' }}
          className='w-full mt-4'
        />
        <button
          type='submit'
          disabled={!stripe}
          className='p-2 mt-4 rounded text-base border bg-cyan-500 text-white border-sky-600 block w-full font-medium'
        >
          Pay Now
        </button>
      </div>
      {error ? <span role='alert'>{error}</span> : null}
      {loading && (
        <span className='z-10 bg-white p-24 text-center text-lg font-bold absolute left-1/2 top-1/2'>
          Processing...
        </span>
      )}
    </form>
  );
};

export default PaymentForm;
