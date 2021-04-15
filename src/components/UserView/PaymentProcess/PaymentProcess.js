import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleCardForm from './SimpleCardForm';

const stripePromise = loadStripe('pk_test_51IgakgLCJ468zHJMbh7VpyW0bnV1Apu0HGcEVjKu4mX7jiCXhBpnyo6AkoobI1WIn7rxbaXpx1J9koZHFumhJu9m005fmJOkNi');

const PaymentProcess = () => {
    return (
        <Elements stripe={stripePromise}>
            <SimpleCardForm ></SimpleCardForm>
        </Elements>
    );
};

export default PaymentProcess;

  