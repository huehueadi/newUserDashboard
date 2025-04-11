import axios from 'axios';
import React, { useEffect, useState } from 'react';

function LicenseManagement() {
  const [licenses, setLicenses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch licenses from the API
  useEffect(() => {
    const fetchLicenses = async () => {
      try {
        const authToken = localStorage.getItem('authToken'); // Assuming token is stored in localStorage
        if (!authToken) {
          setError('Authentication token not found. Please log in.');
          setLoading(false);
          return;
        }

        const response = await axios.get('https://zencia-finalbackend.vercel.app/api/gateway/get-licenses', {
          headers: {
            'Authorization': `${authToken}`
          }
        });

        setLicenses(response.data.getkeys);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching licenses:', err);
        setError('Failed to fetch license data. Please try again later.');
        setLoading(false);
      }
    };

    fetchLicenses();
  }, []);

  // Format date to "Month Day, Year"
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  };

  // Copy license key to clipboard
  const copyToClipboard = (licenseKey) => {
    navigator.clipboard.writeText(licenseKey)
      .then(() => {
        alert('License key copied to clipboard!');
      })
      .catch((err) => {
        console.error('Failed to copy license key:', err);
        alert('Failed to copy license key.');
      });
  };

  // Determine license status
  const getStatus = (daysLeft, expirationDate) => {
    const today = new Date();
    const expDate = new Date(expirationDate);
    if (parseInt(daysLeft) <= 0 || expDate < today) {
      return { text: 'Expired', class: 'status-expired' };
    }
    return { text: 'Active', class: 'status-active' };
  };

  // Render loading state
  if (loading) {
    return (
        <div className="pricing-container">
            {/* <div className="dashboard-tab">
          <h2 className="section-title">License Management</h2>
          <p style={{ color: '#999', textAlign: 'center', padding: '20px' }}>Loading licenses...</p>
        </div> */}
          <div className="pricing-header">
        <div className="pricing-title-tag">Pricing Plan</div>

        <h1 className="pricing-title">Choose Your Most Suitable Pricing Plan</h1>
        <p style={{ color: '#999', textAlign: 'center', padding: '20px' }}>Loading licenses...</p>
      </div>
      </div>
    );
  }

  // Render error state
  if (error) {
    return (
        <div className="pricing-container">
      
      <div className="pricing-header">
    <div className="pricing-title-tag">Pricing Plan</div>

    <h1 className="pricing-title">Choose Your Most Suitable Pricing Plan</h1>
    <p style={{ color: '#999', textAlign: 'center', padding: '20px' }}>Loading licenses...</p>
  </div>
  </div>
    );
  }

  return (
    <div className="pricing-container">
         <div className="pricing-header">
         <div className="pricing-title-tag">Pricing Plan</div>
         <h1 className="pricing-title">Choose Your Most Suitable Pricing Plan</h1>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>License Key</th>
                <th>Hardware ID</th>
                <th>Plan</th>
                <th>Created On</th>
                <th>Expires On</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {licenses.length > 0 ? (
                licenses.map((license) => {
                  const status = getStatus(license.days_left, license.expiration_date);
                  return (
                    <tr key={license._id}>
                      <td>{license.license_key.substring(0, 12)}...</td> {/* Truncate for display */}
                      <td>{license.hardware_id}</td>
                      <td>{license.plan_id}</td> {/* Replace with plan name if available */}
                      <td>{formatDate(license.createdAt)}</td>
                      <td>{license.expiration_date === 'Never' ? 'Never' : formatDate(license.expiration_date)}</td>
                      <td>
                        <span className={`status-badge ${status.class}`}>
                          {status.text}
                        </span>
                      </td>
                      <td>
                        <button
                          className="btn"
                          onClick={() => copyToClipboard(license.license_key)}
                        >
                          Copy
                        </button>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan="7" style={{ textAlign: 'center', padding: '20px', color: '#999' }}>
                    No licenses available
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

export default LicenseManagement;