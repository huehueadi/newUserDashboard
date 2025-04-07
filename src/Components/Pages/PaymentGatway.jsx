



// import { Elements } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';
// import React, { useEffect, useState } from 'react';
// import '../../App.css';
// import CheckoutForm from './CheckoutForm';

// // Initialize Stripe with your test publishable key
// const stripePromise = loadStripe('pk_test_51R7tYiCtcBmDVgRVh5Pr7BOILGkg9WN9Obj2270YtBc6JjTLrNNkJyfKVs6aVGS57vOkVbrD7yqWePPKnSTBdap300EQjjde6y');

// function PaymentGateway() {
//   const [clientSecret, setClientSecret] = useState('');
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [amount] = useState(1000); // Hardcoded amount in cents ($10.00)

//   const planId = "trial"; // Statically set planId to "trial"

//   const createPaymentIntent = async () => {
//     try {
//       setLoading(true);
//       console.log('Creating PaymentIntent with amount:', amount);
      
//       // Adjust URL to match previous backend setup on port 4000
//       const response = await fetch('http://localhost:3000/api/gateway/payment-gateway', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ planId}),
//       });
      
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
      
//       const data = await response.json();
//       console.log('Received response from backend:', data);
      
//       if (data.clientSecret) {
//         setClientSecret(data.clientSecret);
//         setError(null);
//       } else {
//         throw new Error('Failed to receive client secret from backend');
//       }
//     } catch (error) {
//       console.error('Error creating PaymentIntent:', error);
//       setError(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };
    
//   useEffect(() => {
//     createPaymentIntent();
//   }, []);
    
//   const options = {
//     clientSecret,
//   };

//   return (
//     <div className="dashboard-section">
//       <div className="dashboard-header">
//         <h2 className="section-title">
//           <i className="far fa-star"></i>
//           Start Your Premium Trial
//         </h2>
       
//       </div>

//       <div className="payment-container">
//         <div className="payment-card">
//           <div className="payment-card-header">
//             <h3 className="payment-title">Complete Your Payment</h3>
//             <div className="payment-amount">
//               <span className="currency">$</span>
//               <span className="price">{(amount / 100).toFixed(2)}</span>
//               <span className="billing-cycle">/ month after trial</span>
//             </div>
//           </div>

//           <div className="payment-card-body">
//             {error && (
//               <div className="payment-error">
//                 <i className="fas fa-exclamation-circle"></i>
//                 <span>{error}</span>
//               </div>
//             )}
            
//             {loading ? (
//               <div className="payment-loading">
//                 <div className="spinner"></div>
//                 <p>Preparing secure payment form...</p>
//               </div>
//             ) : clientSecret ? (
//               <Elements stripe={stripePromise} options={options}>
//                 <CheckoutForm />
//               </Elements>
//             ) : null}
//           </div>

//           <div className="payment-card-footer">
//             <div className="secure-payment">
//               <i className="fas fa-lock"></i>
//               <span>Secure Payment</span>
//             </div>
//             <p className="terms-notice">
//               By proceeding, you agree to our Terms of Service and Privacy Policy. You can cancel anytime during the trial period.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default PaymentGateway;




import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../../App.css';
import CheckoutForm from './CheckoutForm';

// Initialize Stripe with your test publishable key
const stripePromise = loadStripe('pk_test_51R7tYiCtcBmDVgRVh5Pr7BOILGkg9WN9Obj2270YtBc6JjTLrNNkJyfKVs6aVGS57vOkVbrD7yqWePPKnSTBdap300EQjjde6y');

function PaymentGateway() {
  const [clientSecret, setClientSecret] = useState('');
  const [paymentIntentId, setPaymentIntentId] = useState('');
  const [amount, setAmount] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const planId = queryParams.get('planId');
  const hardwareId = queryParams.get('hardwareId');

  const createPaymentIntent = async () => {
    if (!planId || !hardwareId) {
      setError('Missing planId or hardwareId in URL');
      setLoading(false);
      return;
    }

    // Retrieve authToken from localStorage
    const token = localStorage.getItem('authToken');
    if (!token) {
      setError('No authentication token found. Please log in.');
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      console.log('Creating PaymentIntent with planId:', planId, 'hardwareId:', hardwareId);

      const response = await fetch('https://zencia-finalbackend.vercel.app/api/gateway/payment-gateway', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${token}`, // Add Bearer token
        },
        body: JSON.stringify({ planId, hardwareId }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`HTTP error! status: ${response.status} - ${errorData.message || 'Forbidden'}`);
      }

      const data = await response.json();
      console.log('Received response from backend:', data);

      if (data.clientSecret && data.paymentIntentId) {
        setClientSecret(data.clientSecret);
        setPaymentIntentId(data.paymentIntentId);
        setAmount(data.amount);
        setError(null);
      } else {
        setError(data.message || 'Something went Wrong');
      }
    } catch (error) {
      console.error('Error creating PaymentIntent:', error.message);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    createPaymentIntent();
  }, [location.search]);

  const options = {
    clientSecret,
  };

  return (
    <div className="dashboard-section">
      <div className="dashboard-header">
        <h2 className="section-title">
          <i className="far fa-star"></i>
          Start Your Premium Trial
        </h2>
      </div>

      <div className="payment-container">
        <div className="payment-card">
          <div className="payment-card-header">
            <h3 className="payment-title">Complete Your Payment</h3>
            <div className="payment-amount">
              <span className="currency">$</span>
              <span className="price">
                {amount !== null ? (amount / 100).toFixed(2) : 'Loading...'}
              </span>
              <span className="billing-cycle">/ month after trial</span>
            </div>
          </div>

          <div className="payment-card-body">
            {error && (
              <div className="payment-error">
                <i className="fas fa-exclamation-circle"></i>
                <span>{error}</span>
              </div>
            )}

            {loading ? (
              <div className="payment-loading">
                <div className="spinner"></div>
                <p>Preparing secure payment form...</p>
              </div>
            ) : clientSecret ? (
              <Elements stripe={stripePromise} options={options}>
                <CheckoutForm paymentIntentId={paymentIntentId} />
              </Elements>
            ) : null}
          </div>

          <div className="payment-card-footer">
            <div className="secure-payment">
              <i className="fas fa-lock"></i>
              <span>Secure Payment</span>
            </div>
            <p className="terms-notice">
              By proceeding, you agree to our Terms of Service and Privacy Policy. You can cancel anytime during the trial period.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentGateway;