import axios from 'axios';
import React, { useEffect, useState } from 'react';

function PaymentHistory() {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch payments from the API
  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const authToken = localStorage.getItem('authToken'); // Assuming token is stored in localStorage
        if (!authToken) {
          setError('Authentication token not found. Please log in.');
          setLoading(false);
          return;
        }

        const response = await axios.get('https://zencia-finalbackend.vercel.app/api/gateway/get-payments', {
          headers: {
            'Authorization': `${authToken}`
          }
        });

        setPayments(response.data.payments);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching payments:', err);
        setError('Failed to fetch payment history. Please try again later.');
        setLoading(false);
      }
    };

    fetchPayments();
  }, []);

  // Format date to "Month Day, Year"
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  };

  // Render loading state
  if (loading) {
    return (
      <div className="pricing-container">
        <div className="dashboard-tab" id="payment-history">
        <div className="pricing-header">
        <div className="pricing-title-tag">Payment History</div>
        <h1 className="pricing-title">All Payments are here</h1>
      </div>      
        </div>
      </div>
    );
  }

  // Render error state
  if (error) {
    return (
      <div className="pricing-container">
        <div className="dashboard-tab" id="payment-history">
        <div className="pricing-header">
        <div className="pricing-title-tag">Payment History</div>
        <h1 className="pricing-title">All Payments are here</h1>
      </div>      
         
        </div>
      </div>
    );
  }

  return (
    <div className="pricing-container">
      <div className="dashboard-tab" id="payment-history">
      <div className="pricing-header">
        <div className="pricing-title-tag">Payment History</div>
        <h1 className="pricing-title">All Payments are here</h1>
      </div>          
      <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Transaction ID</th>
                <th>Date</th>
                <th>Plan</th>
                <th>Amount</th>
                <th>Payment Method</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {payments.length > 0 ? (
                payments.map((payment) => (
                  <tr key={payment._id}>
                    <td>{payment.transactionId}</td>
                    <td>{formatDate(payment.createdAt)}</td>
                    <td>{payment.metadata.planName}</td>
                    <td>${payment.amount / 100}</td> {/* Assuming amount is in cents */}
                    <td>Credit Card</td> {/* API doesn't specify method, defaulting to Credit Card */}
                    <td>
                      <span
                        className={`status-badge ${
                          payment.paymentStatus === 'succeeded' ? 'status-active' : 'status-pending'
                        }`}
                      >
                        {payment.paymentStatus.charAt(0).toUpperCase() + payment.paymentStatus.slice(1)}
                      </span>
                    </td>
                    <td>
                      <button className="btn">Receipt</button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" style={{ textAlign: 'center', padding: '20px', color: '#999' }}>
                    No payment history available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default PaymentHistory;