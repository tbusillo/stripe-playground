import PaymentForm from '@components/PaymentForm/PaymentForm';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { Header } from '@components';

const stripePromise = loadStripe(
  'pk_test_51LEmFCICpyDibVywCDi4M1pfOnRaU7pEjMR9ksWlU4aX2pGug0pGW89lHcyXgHqpjfrRPNKKcnA709TPuZspibJ100ZfPEDDua'
);

const options = {
  clientSecret: ''
};

const Pay = () => {
  return (
    <div className='h-screen px-12 bg-white py-6 px-8'>
      <h1 className='text-xl font-semibold'>Payment</h1>
      <Elements stripe={stripePromise}>
        <PaymentForm />
      </Elements>
    </div>
  );
};

export default Pay;
