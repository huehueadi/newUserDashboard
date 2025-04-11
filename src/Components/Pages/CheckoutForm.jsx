import {
  PaymentElement,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js';
import React, { useState } from 'react';

const CheckoutForm = ({ paymentIntentId }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    console.log('Submitting payment for paymentIntentId:', paymentIntentId);

    if (!stripe || !elements) {
      console.error('Stripe or Elements not loaded');
      setErrorMessage('Payment system not ready. Please try again.');
      setIsLoading(false);
      return;
    }

    try {
      const { error, paymentIntent } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `https://edge.zencia.ai/success?paymentIntentId=${paymentIntentId}`, // Updated to /success
        },
      });

      if (error) {
        console.error('Payment error:', error);
        setErrorMessage(error.message);
      } else if (paymentIntent.status === 'succeeded') {
        console.log('Payment succeeded:', paymentIntent);
        window.location.href = `https://edge.zencia.ai/success?paymentIntentId=${paymentIntentId}`; // Updated to /success
      } else {
        console.log('Unexpected payment status:', paymentIntent.status);
        setErrorMessage(`Payment status: ${paymentIntent.status}. Please try again.`);
      }
    } catch (error) {
      console.error('Error in confirmPayment:', error);
      setErrorMessage('Payment processing failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <button
        disabled={isLoading || !stripe || !elements}
        className="pay-button"
      >
        {isLoading ? 'Processing...' : 'Pay Now'}
      </button>
      {errorMessage && <div className="error">{errorMessage}</div>}
    </form>
  );
};

export default CheckoutForm;