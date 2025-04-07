// import React, { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';

// function Success() {
//   const [license, setLicense] = useState(null);
//   const [error, setError] = useState(null);
//   const location = useLocation();

//   useEffect(() => {
//     const fetchLicense = async () => {
//       const params = new URLSearchParams(location.search);
//       const paymentIntentId = params.get('paymentIntentId');

//       if (!paymentIntentId) {
//         setError('Missing paymentIntentId');
//         return;
//       }

//       const authToken = localStorage.getItem('authToken');
//       if (!authToken) {
//         setError('No authentication token found. Please log in.');
//         return;
//       }

//       try {
//         const response = await fetch(
//           `http://localhost:3000/api/gateway/payment-success?paymentIntentId=${paymentIntentId}`,
          
//           {         
            
//             method: 'GET',

//             headers: {
//               'Authorization': `${authToken}`,
//             },
//           }
//         );

//         if (!response.ok) {
//           const errorData = await response.json();
//           throw new Error(`Failed to fetch license: ${errorData.message}`);
//         }

//         const data = await response.json();
//         setLicense(data.license);
//       } catch (err) {
//         console.error('Error fetching license:', err);
//         setError(err.message);
//       }
//     };

//     fetchLicense();
//   }, [location]);

//   return (
//     <div classname="dashboard-content-container">
//           <div className="dashboard-tab" id="contact-us">
//           <div className="key-generator">


//     <div className="success-page">
//       <h2>Payment Successful</h2>
//       {error ? (
//         <p className="error">{error}</p>
//       ) : license ? (
//         <div>
//           <p>Your license has been generated!</p>
//           <p><strong>License Key:</strong> {license.licenseKey}</p>
//           <p><strong>Hardware ID:</strong> {license.hardware_id}</p>
//           <p><strong>Plan:</strong> {license.plan_name}</p>
//           <p><strong>Expires:</strong> {license.expiration_date}</p>
//         </div>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//     </div>
//     </div>
//     </div>
//   );
// }

// export default Success;


import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './success.css'; // Import the CSS file

function Success() {
  const [license, setLicense] = useState(null);
  const [error, setError] = useState(null);
  const [copied, setCopied] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const fetchLicense = async () => {
      const params = new URLSearchParams(location.search);
      const paymentIntentId = params.get('paymentIntentId');

      if (!paymentIntentId) {
        setError('Missing paymentIntentId');
        return;
      }

      const authToken = localStorage.getItem('authToken');
      if (!authToken) {
        setError('No authentication token found. Please log in.');
        return;
      }

      try {
        const response = await fetch(
          `https://zencia-finalbackend.vercel.app/api/gateway/payment-success?paymentIntentId=${paymentIntentId}`,
          {         
            method: 'GET',
            headers: {
              'Authorization': `${authToken}`,
            },
          }
        );

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(`Failed to fetch license: ${errorData.message}`);
        }

        const data = await response.json();
        setLicense(data.license);
      } catch (err) {
        console.error('Error fetching license:', err);
        setError(err.message);
      }
    };

    fetchLicense();
  }, [location]);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(err => {
        console.error('Could not copy text: ', err);
      });
  };

  return (
    <div className="dashboard-content-container">
      <div className="dashboard-tab" id="payment-success">
        <div className="payment-success-container">
          <div className="success-card">
            <div className="success-icon">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="#4CAF50" strokeWidth="2"/>
                <path d="M8 12L11 15L16 9" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h2 className="success-title">Payment Successful</h2>
            {error ? (
              <div className="error-message">
                <p>{error}</p>
              </div>
            ) : license ? (
              <div className="license-details">
                <p className="success-subtitle">Your license has been generated!</p>
            
                
                <div className="license-field">
                  <label>Hardware ID:</label>
                  <div className="license-value">{license.hardware_id}</div>
                </div>
                
                <div className="license-field">
                  <label>Plan:</label>
                  <div className="license-value plan-value">{license.plan_name}</div>
                </div>
                
                <div className="license-field">
                  <label>Expires:</label>
                  <div className="license-value">{license.expiration_date}</div>
                </div>

                    
                <div className="license-field">
                  <label>License Key:</label>
                  <div className="license-value-container">
                    <div className="license-value ">{license.licenseKey}</div>
                  
                  </div>
                </div>
                
                <div className="action-buttons">
                <button 
                      className="btn btn-primary" 
                      onClick={() => copyToClipboard(license.licenseKey)}
                    >
                      {copied ? 'Copied!' : 'Copy'}
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="9" y="9" width="13" height="13" rx="2" stroke="currentColor" strokeWidth="2"/>
                        <path d="M5 15H4C2.89543 15 2 14.1046 2 13V4C2 2.89543 2.89543 2 4 2H13C14.1046 2 15 2.89543 15 4V5" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                    </button>
                </div>
              </div>
            ) : (
              <div className="loading">
                <div className="spinner"></div>
                <p>Loading license information...</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Success;