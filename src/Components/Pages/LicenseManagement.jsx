// import axios from 'axios';
// import React, { useEffect, useState } from 'react';

// function LicenseManagement() {
//   const [licenses, setLicenses] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchLicenses = async () => {
//       try {
//         const authToken = localStorage.getItem('authToken'); 
//         if (!authToken) {
//           setError('Authentication token not found. Please log in.');
//           setLoading(false);
//           return;
//         }

//         const response = await axios.get('https://zencia-finalbackend.vercel.app/api/gateway/get-licenses', {
//           headers: {
//             'Authorization': `${authToken}`
//           }
//         });

//         setLicenses(response.data.getkeys);
//         setLoading(false);
//       } catch (err) {
//         console.error('Error fetching licenses:', err);
//         setError('Failed to fetch license data. Please try again later.');
//         setLoading(false);
//       }
//     };

//     fetchLicenses();
//   }, []);

//   const formatDate = (dateString) => {
//     return new Date(dateString).toLocaleDateString('en-US', {
//       month: 'long',
//       day: 'numeric',
//       year: 'numeric',
//     });
//   };

//   const copyToClipboard = (licenseKey) => {
//     navigator.clipboard.writeText(licenseKey)
//       .then(() => {
//         alert('License key copied to clipboard!');
//       })
//       .catch((err) => {
//         console.error('Failed to copy license key:', err);
//         alert('Failed to copy license key.');
//       });
//   };

//   const getStatus = (daysLeft, expirationDate) => {
//     const today = new Date();
//     const expDate = new Date(expirationDate);
//     if (parseInt(daysLeft) <= 0 || expDate < today) {
//       return { text: 'Expired', class: 'status-expired' };
//     }
//     return { text: 'Active', class: 'status-active' };
//   };

//   if (loading) {
//     return (
//         <div className="pricing-container">
//           <div className="pricing-header">
//         <div className="pricing-title-tag">License Managment</div>

//         <h1 className="pricing-title">Manage your license keys</h1>
//         <p style={{ color: '#999', textAlign: 'center', padding: '20px' }}>Loading licenses...</p>
//       </div>
//       </div>
//     );
//   }

//   // Render error state
//   if (error) {
//     return (
//         <div className="pricing-container">
      
//       <div className="pricing-header">
//     <div className="pricing-title-tag">License Management</div>

//     <h1 className="pricing-title">Manage your license keys</h1>
//     <p style={{ color: '#999', textAlign: 'center', padding: '20px' }}>Loading licenses...</p>
//   </div>
//   </div>
//     );
//   }

//   return (
//     <div className="pricing-container">
//           <div className="pricing-header">
//         <div className="pricing-title-tag">License Management</div>
//         <h1 className="pricing-title"> Manage Your License Keys</h1>
//       </div>    
//         <div className="table-container">
//           <table>
//             <thead>
//               <tr>
//                 <th>License Key</th>
//                 <th>Hardware ID</th>
//                 <th>Plan</th>
//                 <th>Created On</th>
//                 <th>Expires On</th>
//                 <th>Status</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {licenses.length > 0 ? (
//                 licenses.map((license) => {
//                   const status = getStatus(license.days_left, license.expiration_date);
//                   return (
//                     <tr key={license._id}>
//                       <td>{license.license_key.substring(0, 12)}...</td> {/* Truncate for display */}
//                       <td>{license.hardware_id}</td>
//                       <td>{license.plan_id}</td> {/* Replace with plan name if available */}
//                       <td>{formatDate(license.createdAt)}</td>
//                       <td>{license.expiration_date === 'Never' ? 'Never' : formatDate(license.expiration_date)}</td>
//                       <td>
//                         <span className={`status-badge ${status.class}`}>
//                           {status.text}
//                         </span>
//                       </td>
//                       <td>
//                         <button
//                           className="btn"
//                           onClick={() => copyToClipboard(license.license_key)}
//                         >
//                           Copy
//                         </button>
//                       </td>
//                     </tr>
//                   );
//                 })
//               ) : (
//                 <tr>
//                   <td colSpan="7" style={{ textAlign: 'center', padding: '20px', color: '#999' }}>
//                     No licenses available
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>
//   );
// }

// export default LicenseManagement;



import axios from 'axios';
import React, { useEffect, useState } from 'react';

function LicenseManagement() {
  const [licenses, setLicenses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLicenses = async () => {
      try {
        const authToken = localStorage.getItem('authToken');
        if (!authToken) {
          setError('Authentication token not found. Please log in.');
          setLoading(false);
          return;
        }

        // Fetch purchased licenses
        const purchasedResponse = await axios.get('https://zencia-finalbackend.vercel.app/api/gateway/get-licenses', {
          headers: { 'Authorization': `${authToken}` },
        });
        console.log('Purchased licenses response:', purchasedResponse.data);
        const purchasedLicenses = purchasedResponse.data.getkeys.map((license) => ({
          ...license,
          license_key: license.license_key || license.licenseKey, // Normalize
          hardware_id: license.hardware_id || license.hardwareId,
          isTrial: false,
        }));

        // Fetch trial licenses
        const trialResponse = await axios.get('https://zencia-finalbackend.vercel.app/api/license/trial', {
          headers: { 'Authorization': `${authToken}` },
        });
        console.log('Trial licenses response:', trialResponse.data);
        const trialLicenses = trialResponse.data.getkeys;

        // Combine and log
        const allLicenses = [...purchasedLicenses, ...trialLicenses];
        console.log('Combined licenses:', allLicenses);
        setLicenses(allLicenses);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching licenses:', err);
        setError('Failed to fetch license data. Please try again later.');
        setLoading(false);
      }
    };

    fetchLicenses();
  }, []);

  const formatDate = (dateString) => {
    if (!dateString || dateString === 'Never') return 'Never';
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  };

  const copyToClipboard = (licenseKey) => {
    navigator.clipboard
      .writeText(licenseKey || 'N/A')
      .then(() => alert('License key copied to clipboard!'))
      .catch((err) => {
        console.error('Failed to copy license key:', err);
        alert('Failed to copy license key.');
      });
  };

  const getStatus = (daysLeft, expirationDate) => {
    const today = new Date();
    const expDate = expirationDate === 'Never' ? null : new Date(expirationDate);
    if (
      !expDate ||
      (daysLeft !== undefined && parseInt(daysLeft) <= 0) ||
      (expDate && expDate < today)
    ) {
      return { text: 'Expired', class: 'status-expired' };
    }
    return { text: 'Active', class: 'status-active' };
  };

  if (loading) {
    return (
      <div className="pricing-container">
        <div className="pricing-header">
          <div className="pricing-title-tag">License Management</div>
          <h1 className="pricing-title">Manage Your License Keys</h1>
          <p style={{ color: '#999', textAlign: 'center', padding: '20px' }}>
            Loading licenses...
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="pricing-container">
        <div className="pricing-header">
          <div className="pricing-title-tag">License Management</div>
          <h1 className="pricing-title">Manage Your License Keys</h1>
          <p style={{ color: '#ff4d4d', textAlign: 'center', padding: '20px' }}>
            {error}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="pricing-container">
      <div className="pricing-header">
        <div className="pricing-title-tag">License Management</div>
        <h1 className="pricing-title">Manage Your License Keys</h1>
      </div>
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
                    <td>
                      {license.license_key
                        ? `${license.license_key.substring(0, 12)}...`
                        : 'N/A'}
                    </td>
                    <td>{license.hardware_id || 'N/A'}</td>
                    <td>{license.plan_id?.name || 'Trial'}</td> {/* Updated to show plan name */}
                    <td>{formatDate(license.createdAt)}</td>
                    <td>{formatDate(license.expiration_date)}</td>
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
                <td
                  colSpan="7" // Updated to match number of columns
                  style={{ textAlign: 'center', padding: '20px', color: '#999' }}
                >
                  No licenses available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default LicenseManagement;