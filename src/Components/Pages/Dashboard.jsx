// import React, { useState } from 'react';

// function Dashboard() {
//   const [isPopupVisible, setIsPopupVisible] = useState(false);
//   const [isHardwareFormVisible, setIsHardwareFormVisible] = useState(false);
//   const [registeredHardware, setRegisteredHardware] = useState([]);
//   const [hardwareIdInput, setHardwareIdInput] = useState('');
//   const [deviceNameInput, setDeviceNameInput] = useState('');
//   const [deviceTypeInput, setDeviceTypeInput] = useState('');
  
//   const showDownloadPopup = () => {
//     setIsPopupVisible(true);
//   };
  
//   const closeDownloadPopup = () => {
//     setIsPopupVisible(false);
//   };
  
//   const confirmDownload = () => {
//     // Logic for handling the download
//     alert('Download started!');
//     setIsPopupVisible(false);
//   };

//   const showHardwareForm = () => {
//     setIsHardwareFormVisible(true);
//   };
  
//   const closeHardwareForm = () => {
//     setIsHardwareFormVisible(false);
//     // Reset form fields
//     setHardwareIdInput('');
//     setDeviceNameInput('');
//     setDeviceTypeInput('');
//   };
  
//   const submitHardwareForm = () => {
//     // Form validation
//     if (!hardwareIdInput || !deviceNameInput || !deviceTypeInput) {
//       alert('Please fill in all fields');
//       return;
//     }
    
//     // Create a new hardware entry
//     const newHardware = {
//       id: hardwareIdInput,
//       name: deviceNameInput,
//       type: deviceTypeInput,
//       licenseKey: "XXXX-YYYY-ZZZZ-1234", // Assigning a default license key
//       date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
//     };
    
//     // Add to registered hardware list
//     setRegisteredHardware([...registeredHardware, newHardware]);
    
//     // Close the form and reset fields
//     alert('Hardware registered successfully!');
//     setIsHardwareFormVisible(false);
//     setHardwareIdInput('');
//     setDeviceNameInput('');
//     setDeviceTypeInput('');
//   };

//   // Modal styles - shared by both popups
//   const modalStyles = {
//     position: 'fixed',
//     top: 0,
//     left: 0,
//     width: '100%',
//     height: '100%',
//     backgroundColor: 'rgba(0, 0, 0, 0.7)',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     zIndex: 1000,
//   };

//   const modalContentStyles = {
//     backgroundColor: '#1e1e1e',
//     padding: '30px',
//     borderRadius: '10px',
//     border: '1px solid #333',
//     boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)',
//     maxWidth: '550px',
//     width: '90%',
//     position: 'relative',
//     color: '#fff',
//   };

//   const closeButtonStyles = {
//     position: 'absolute',
//     top: '15px',
//     right: '18px',
//     fontSize: '24px',
//     fontWeight: 'bold',
//     cursor: 'pointer',
//     color: '#999',
//     transition: 'color 0.2s',
//     background: 'none',
//     border: 'none',
//     outline: 'none',
//     padding: '5px',
//     borderRadius: '50%',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     width: '30px',
//     height: '30px',
//   };

//   const systemReqListStyles = {
//     marginTop: '20px',
//     marginBottom: '25px',
//     paddingLeft: '10px',
//     color: '#ccc',
//     listStyleType: 'none',
//   };

//   const listItemStyles = {
//     marginBottom: '16px',
//     lineHeight: '1.6',
//     display: 'flex',
//     alignItems: 'center',
//   };
  
//   const checkmarkStyles = {
//     color: '#8e44ad',
//     marginRight: '10px',
//     fontSize: '16px',
//     fontWeight: 'bold',
//   };

//   const downloadButtonStyles = {
//     background: 'linear-gradient(to right, #8e44ad, #9b59b6)',
//     color: 'white',
//     padding: '12px 30px',
//     border: 'none',
//     borderRadius: '6px',
//     cursor: 'pointer',
//     fontSize: '16px',
//     fontWeight: 'bold',
//     display: 'block',
//     width: '100%',
//     maxWidth: '250px',
//     margin: '25px auto 0',
//     transition: 'all 0.2s ease',
//     boxShadow: '0 4px 12px rgba(142, 68, 173, 0.3)',
//   };

//   const formGroupStyles = {
//     marginBottom: '20px',
//   };
  
//   const inputLabelStyles = {
//     display: 'block',
//     marginBottom: '8px',
//     color: '#ccc',
//     fontWeight: '500',
//   };
  
//   const inputStyles = {
//     width: '100%',
//     padding: '12px',
//     backgroundColor: '#2a2a2a',
//     border: '1px solid #444',
//     borderRadius: '6px',
//     color: 'white',
//     fontSize: '16px',
//   };
  
//   const addHardwareButtonStyles = {
//     display: 'flex',
//     alignItems: 'center',
//     backgroundColor: 'transparent',
//     color: '#9b59b6',
//     border: '2px solid #9b59b6',
//     borderRadius: '6px',
//     padding: '8px 16px',
//     cursor: 'pointer',
//     fontSize: '14px',
//     fontWeight: 'bold',
//     marginLeft: 'auto',
//     marginBottom: '20px',
//     transition: 'all 0.2s ease',
//   };
  
//   const plusIconStyles = {
//     marginRight: '8px',
//     fontSize: '18px',
//     fontWeight: 'bold',
//   };
  
//   const registerHardwareButtonStyles = {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: 'transparent',
//     color: '#9b59b6',
//     border: '2px dashed #9b59b6',
//     borderRadius: '6px',
//     padding: '15px',
//     cursor: 'pointer',
//     width: '100%',
//     fontSize: '16px',
//     transition: 'all 0.2s ease',
//   };

//   return (
//     <div className="dashboard-content-container">
//       {/* Overview Tab (default active) */}
//       <div className="dashboard-tab active" >
//         {/* Stats Section */}
//         <div className="stats-container">
//           <div className="stat-card">
//             <div className="stat-card-header">
//               <span>Active Licenses</span>
//               <span>🔑</span>
//             </div>
//             <div className="stat-card-value">3</div>
//             <div className="stat-card-label">Valid licenses</div>
//           </div>
//           <div className="stat-card">
//             <div className="stat-card-header">
//               <span>Current Plan</span>
//               <span>⭐</span>
//             </div>
//             <div className="stat-card-value">Lifetime</div>
//             <div className="stat-card-label">Never expires</div>
//           </div>
//           <div className="stat-card">
//             <div className="stat-card-header">
//               <span>Support Tickets</span>
//               <span>🎟️</span>
//             </div>
//             <div className="stat-card-value">0</div>
//             <div className="stat-card-label">No pending tickets</div>
//           </div>
//           <div className="stat-card">
//             <div className="stat-card-header">
//               <span>Last Payment</span>
//               <span>💳</span>
//             </div>
//             <div className="stat-card-value">$19</div>
//             <div className="stat-card-label">March 28, 2025</div>
//           </div>
//         </div>
//         {/* Quick Actions */}
//         <h2 className="section-title">Quick Actions</h2>
//         <div className="card-container">
//           <div className="plan-card">
//             <h3 className="plan-name">Generate New Key</h3>
//             <p className="plan-desc">Create a license key for your software</p>
//             <div className="feature-list">
//               <div className="feature-item"><i>✓</i> Hardware ID validation</div>
//               <div className="feature-item"><i>✓</i> Automatic activation</div>
//               <div className="feature-item"><i>✓</i> Secure encryption</div>
//             </div>
//             <button className="btn btn-primary">Generate Key</button>
//           </div>
          
//           {/* Download Software Card with Click Handler */}
//           <div className="plan-card" onClick={showDownloadPopup}>
//             <h3 className="plan-name">Download Software</h3>
//             <p className="plan-desc">Get the latest version of our software</p>
//             <div className="feature-list">
//               <div className="feature-item"><i>✓</i> Latest version (v2.1.3)</div>
//               <div className="feature-item"><i>✓</i> Windows &amp; Mac compatible</div>
//               <div className="feature-item"><i>✓</i> Offline installer</div>
//             </div>
//             <button className="btn btn-primary">Download Now</button>
//           </div>
          
//           <div className="plan-card">
//             <h3 className="plan-name">Need Help?</h3>
//             <p className="plan-desc">Get support from our team</p>
//             <div className="feature-list">
//               <div className="feature-item"><i>✓</i> 24/7 Support</div>
//               <div className="feature-item"><i>✓</i> Priority response</div>
//               <div className="feature-item"><i>✓</i> Dedicated assistance</div>
//             </div>
//             <button className="btn btn-primary">Contact Support</button>
//           </div>
//         </div>
        
//         {/* Recent Licenses with Add Hardware Button */}
//         <div style={{ display: 'flex', alignItems: 'center' }}>
//           <h2 className="section-title">Recent Licenses</h2>
//           <button style={addHardwareButtonStyles} onClick={showHardwareForm}>
//             <span style={plusIconStyles}>+</span> Add Hardware
//           </button>
//         </div>
        
//         {registeredHardware.length > 0 ? (
//           <div className="table-container">
//             <table>
//               <thead>
//                 <tr>
//                   <th>License Key</th>
//                   <th>Hardware ID</th>
//                   <th>Created On</th>
//                   <th>Expires On</th>
//                   <th>Status</th>
//                   <th>Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {registeredHardware.map((hardware, index) => (
//                   <tr key={index}>
//                     <td>{hardware.licenseKey || `New License #${index + 1}`}</td>
//                     <td>{hardware.id}</td>
//                     <td>{hardware.date}</td>
//                     <td>Never</td>
//                     <td><span className="status-badge status-active">Active</span></td>
//                     <td>
//                       <button className="btn">Copy</button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         ) : (
//           <div style={{
//             marginTop: '20px',
//             marginBottom: '40px',
//             padding: '40px 20px',
//             border: '2px dashed #444',
//             borderRadius: '10px',
//             textAlign: 'center',
//             backgroundColor: 'rgba(0, 0, 0, 0.2)'
//           }}>
//             <div style={{
//               fontSize: '40px',
//               color: '#8e44ad',
//               marginBottom: '15px',
//               opacity: '0.7'
//             }}>+</div>
//             <p style={{ 
//               color: '#999', 
//               fontSize: '18px', 
//               marginBottom: '20px' 
//             }}>No hardware registered yet</p>
//             <button 
//               style={{
//                 background: 'linear-gradient(to right, #8e44ad, #9b59b6)',
//                 color: 'white',
//                 padding: '12px 30px',
//                 border: 'none',
//                 borderRadius: '6px',
//                 cursor: 'pointer',
//                 fontSize: '16px',
//                 fontWeight: 'bold',
//                 display: 'inline-block',
//                 transition: 'all 0.2s ease',
//                 boxShadow: '0 4px 12px rgba(142, 68, 173, 0.3)',
//               }} 
//               onClick={showHardwareForm}
//             >
//               Register Hardware
//             </button>
//           </div>
//         )}
//       </div>
      
//       {/* Download Popup Modal with Inline Styles */}
//       {isPopupVisible && (
//         <div style={modalStyles}>
//           <div style={modalContentStyles}>
//             <span 
//               style={closeButtonStyles} 
//               onClick={closeDownloadPopup}
//             >
//               ×
//             </span>
//             <h3 style={{ marginTop: '0', color: '#fff', fontSize: '22px', fontWeight: '600', textAlign: 'center', marginBottom: '25px' }}>System Requirements</h3>
//             <ul style={systemReqListStyles}>
//               <li style={listItemStyles}>
//                 <span style={checkmarkStyles}>✓</span>
//                 <span>Operating System: Windows 10 or later / macOS 11 or later</span>
//               </li>
//               <li style={listItemStyles}>
//                 <span style={checkmarkStyles}>✓</span>
//                 <span>RAM: 8GB minimum (16GB recommended)</span>
//               </li>
//               <li style={listItemStyles}>
//                 <span style={checkmarkStyles}>✓</span>
//                 <span>Storage: 2GB free space</span>
//               </li>
//               <li style={listItemStyles}>
//                 <span style={checkmarkStyles}>✓</span>
//                 <span>Processor: Intel i5 or equivalent</span>
//               </li>
//             </ul>
//             <button 
//               style={downloadButtonStyles}
//               onClick={confirmDownload}
//             >
//               Download
//             </button>
//           </div>
//         </div>
//       )}
      
//       {/* Hardware Registration Form Popup */}
//       {isHardwareFormVisible && (
//         <div style={modalStyles}>
//           <div style={modalContentStyles}>
//             <span 
//               style={closeButtonStyles} 
//               onClick={closeHardwareForm}
//             >
//               ×
//             </span>
//             <h3 style={{ marginTop: '0', color: '#fff', fontSize: '22px', fontWeight: '600', textAlign: 'center', marginBottom: '25px' }}>Register Your Hardware</h3>
            
//             <div style={formGroupStyles}>
//               <label style={inputLabelStyles}>Hardware ID</label>
//               <input 
//                 type="text" 
//                 style={inputStyles} 
//                 placeholder="Enter hardware ID (e.g., HWID-XXXX-XXXX-XXXX)" 
//                 value={hardwareIdInput}
//                 onChange={(e) => setHardwareIdInput(e.target.value)}
//               />
//             </div>
            
//             <div style={formGroupStyles}>
//               <label style={inputLabelStyles}>Device Name</label>
//               <input 
//                 type="text" 
//                 style={inputStyles} 
//                 placeholder="Enter device name (e.g., Work Laptop)" 
//                 value={deviceNameInput}
//                 onChange={(e) => setDeviceNameInput(e.target.value)}
//               />
//             </div>
            
//             <div style={formGroupStyles}>
//               <label style={inputLabelStyles}>Device Type</label>
//               <input 
//                 type="text" 
//                 style={inputStyles} 
//                 placeholder="Enter device type (e.g., Laptop, Desktop)" 
//                 value={deviceTypeInput}
//                 onChange={(e) => setDeviceTypeInput(e.target.value)}
//               />
//             </div>
            
//             <button 
//               style={downloadButtonStyles}
//               onClick={submitHardwareForm}
//             >
//               Register Hardware
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Dashboard;



// import React, { useState } from 'react';

// function Dashboard() {
//   const [isPopupVisible, setIsPopupVisible] = useState(false);
//   const [isHardwareFormVisible, setIsHardwareFormVisible] = useState(false);
//   const [registeredHardware, setRegisteredHardware] = useState([]);
//   const [hardwareIdInput, setHardwareIdInput] = useState('');
//   const [deviceNameInput, setDeviceNameInput] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const showDownloadPopup = () => {
//     console.log('Showing download popup');
//     setIsPopupVisible(true);
//   };

//   const closeDownloadPopup = () => {
//     console.log('Closing download popup');
//     setIsPopupVisible(false);
//   };

//   const confirmDownload = () => {
//     console.log('Download confirmed');
//     alert('Download started!');
//     setIsPopupVisible(false);
//   };

//   const showHardwareForm = () => {
//     console.log('Showing hardware form');
//     setIsHardwareFormVisible(true);
//   };

//   const closeHardwareForm = () => {
//     console.log('Closing hardware form');
//     setIsHardwareFormVisible(false);
//     // Reset form fields
//     setHardwareIdInput('');
//     setDeviceNameInput('');
//   };

//   // Fetch hardware list when component loads
//   React.useEffect(() => {
//     console.log('Fetching hardware list');
//     fetchHardwareList();
//   }, []);

//   // Function to fetch hardware list from API
//   const fetchHardwareList = async () => {
//     setIsLoading(true);
//     try {
//       console.log('Fetching hardware from server...');
//       // Get auth token from localStorage
//       const authToken = localStorage.getItem('authToken');
//       console.log('Auth token:', authToken);

//       if (!authToken) {
//         setError('Authentication token not found. Please log in again.');
//         setIsLoading(false);
//         return;
//       }

//       const response = await fetch('http://localhost:3000/api/hardware/hardwares-by-user', {
//         headers: {
//           'Authorization': `${authToken}`
//         }
//       });

//       if (!response.ok) {
//         console.error('Failed to fetch hardware:', response.statusText);
//         return;
//       }
      
//       const contentType = response.headers.get('Content-Type');
//       if (!contentType || !contentType.includes('application/json')) {
//         console.error('Expected JSON, but received:', contentType);
//         return;
//       }
      
//       const hardwareData = await response.json();
//       console.log(hardwareData);

//       const data = await response.json();
//       console.log('Fetched hardware list:', data);
      

//       if (response.ok) {
//         setRegisteredHardware(data.hardwareList);
//       } else {
//         setError(data.message || 'Failed to fetch hardware');
//       }
//     } catch (error) {
//       setError('Error connecting to server');
//       console.error('Error fetching hardware:', error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const submitHardwareForm = async () => {
//     console.log('Submitting hardware registration form...');
//     // Form validation
//     if (!hardwareIdInput || !deviceNameInput) {
//       alert('Please fill in all fields');
//       return;
//     }

//     setIsLoading(true);

//     try {
//       // Get auth token from localStorage
//       const authToken = localStorage.getItem('authToken');
//       console.log('Auth token for registration:', authToken);

//       if (!authToken) {
//         alert('Authentication token not found. Please log in again.');
//         setIsLoading(false);
//         return;
//       }

//       // Call API to register hardware
//       const response = await fetch('http://localhost:3000/api/hardware/register', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `${authToken}`
//         },
//         body: JSON.stringify({
//           hardwareId: hardwareIdInput,
//           nickName: deviceNameInput
//         }),
//       });

//       const data = await response.json();
//       console.log('Hardware registration response:', data);

//       if (response.ok) {
//         // Refresh hardware list
//         fetchHardwareList();
//         alert('Hardware registered successfully!');
//         setIsHardwareFormVisible(false);

//         // Reset form fields
//         setHardwareIdInput('');
//         setDeviceNameInput('');
//       } else {
//         alert(data.message || 'Failed to register hardware');
//       }
//     } catch (error) {
//       alert('Error connecting to server');
//       console.error('Error registering hardware:', error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // Modal styles - shared by both popups
//   const modalStyles = {
//     position: 'fixed',
//     top: 0,
//     left: 0,
//     width: '100%',
//     height: '100%',
//     backgroundColor: 'rgba(0, 0, 0, 0.7)',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     zIndex: 1000,
//   };

//   const modalContentStyles = {
//     backgroundColor: '#1e1e1e',
//     padding: '30px',
//     borderRadius: '10px',
//     border: '1px solid #333',
//     boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)',
//     maxWidth: '550px',
//     width: '90%',
//     position: 'relative',
//     color: '#fff',
//   };

//   const closeButtonStyles = {
//     position: 'absolute',
//     top: '15px',
//     right: '18px',
//     fontSize: '24px',
//     fontWeight: 'bold',
//     cursor: 'pointer',
//     color: '#999',
//     transition: 'color 0.2s',
//     background: 'none',
//     border: 'none',
//     outline: 'none',
//     padding: '5px',
//     borderRadius: '50%',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     width: '30px',
//     height: '30px',
//   };

//   const systemReqListStyles = {
//     marginTop: '20px',
//     marginBottom: '25px',
//     paddingLeft: '10px',
//     color: '#ccc',
//     listStyleType: 'none',
//   };

//   const listItemStyles = {
//     marginBottom: '16px',
//     lineHeight: '1.6',
//     display: 'flex',
//     alignItems: 'center',
//   };

//   const checkmarkStyles = {
//     color: '#8e44ad',
//     marginRight: '10px',
//     fontSize: '16px',
//     fontWeight: 'bold',
//   };

//   const formGroupStyles = {
//     marginBottom: '20px',
//   };

//   const inputLabelStyles = {
//     display: 'block',
//     marginBottom: '8px',
//     color: '#ccc',
//     fontWeight: '500',
//   };

//   const inputStyles = {
//     width: '100%',
//     padding: '12px',
//     backgroundColor: '#2a2a2a',
//     border: '1px solid #444',
//     borderRadius: '6px',
//     color: 'white',
//     fontSize: '16px',
//   };

//   const addHardwareButtonStyles = {
//     display: 'flex',
//     alignItems: 'center',
//     backgroundColor: 'transparent',
//     color: '#9b59b6',
//     border: '2px solid #9b59b6',
//     borderRadius: '6px',
//     padding: '8px 16px',
//     cursor: 'pointer',
//     fontSize: '14px',
//     fontWeight: 'bold',
//     marginLeft: 'auto',
//     marginBottom: '20px',
//     transition: 'all 0.2s ease',
//   };

//   const plusIconStyles = {
//     marginRight: '8px',
//     fontSize: '18px',
//     fontWeight: 'bold',
//   };

//   return (
//     <div className="dashboard-content-container">
//       {/* Overview Tab (default active) */}
//       <div className="dashboard-tab active">
//         {/* Stats Section */}
//         <div className="stats-container">
//           <div className="stat-card">
//             <div className="stat-card-header">
//               <span>Active Licenses</span>
//               <span>🔑</span>
//             </div>
//             <div className="stat-card-value">3</div>
//             <div className="stat-card-label">Valid licenses</div>
//           </div>
//           <div className="stat-card">
//             <div className="stat-card-header">
//               <span>Current Plan</span>
//               <span>⭐</span>
//             </div>
//             <div className="stat-card-value">Lifetime</div>
//             <div className="stat-card-label">Never expires</div>
//           </div>
//           <div className="stat-card">
//             <div className="stat-card-header">
//               <span>Support Tickets</span>
//               <span>🎟️</span>
//             </div>
//             <div className="stat-card-value">0</div>
//             <div className="stat-card-label">No pending tickets</div>
//           </div>
//           <div className="stat-card">
//             <div className="stat-card-header">
//               <span>Last Payment</span>
//               <span>💳</span>
//             </div>
//             <div className="stat-card-value">$19</div>
//             <div className="stat-card-label">March 28, 2025</div>
//           </div>
//         </div>

//         {/* Quick Actions */}
//         <h2 className="section-title">Quick Actions</h2>
//         <div className="card-container">
//           <div className="plan-card">
//             <h3 className="plan-name">Generate New Key</h3>
//             <p className="plan-desc">Create a license key for your software</p>
//             <div className="feature-list">
//               <div className="feature-item"><i>✓</i> Hardware ID validation</div>
//               <div className="feature-item"><i>✓</i> Automatic activation</div>
//               <div className="feature-item"><i>✓</i> Secure encryption</div>
//             </div>
//             <button className="btn btn-primary">Generate Key</button>
//           </div>
          
//           {/* Download Software Card with Click Handler */}
//           <div className="plan-card" onClick={showDownloadPopup}>
//             <h3 className="plan-name">Download Software</h3>
//             <p className="plan-desc">Get the latest version of our software</p>
//             <div className="feature-list">
//               <div className="feature-item"><i>✓</i> Latest version (v2.1.3)</div>
//               <div className="feature-item"><i>✓</i> Windows &amp; Mac compatible</div>
//               <div className="feature-item"><i>✓</i> Offline installer</div>
//             </div>
//             <button className="btn btn-primary">Download Now</button>
//           </div>

//           <div className="plan-card">
//             <h3 className="plan-name">Need Help?</h3>
//             <p className="plan-desc">Get support from our team</p>
//             <div className="feature-list">
//               <div className="feature-item"><i>✓</i> 24/7 Support</div>
//               <div className="feature-item"><i>✓</i> Priority response</div>
//               <div className="feature-item"><i>✓</i> Dedicated assistance</div>
//             </div>
//             <button className="btn btn-primary">Contact Support</button>
//           </div>
//         </div>

//         {/* Recent Licenses with Add Hardware Button */}
//         <div style={{ display: 'flex', alignItems: 'center' }}>
//           <h2 className="section-title">Recent Licenses</h2>
//           <button style={addHardwareButtonStyles} onClick={showHardwareForm}>
//             <span style={plusIconStyles}>+</span> Add Hardware
//           </button>
//         </div>

//         {registeredHardware.length > 0 ? (
//           <div className="table-container">
//             <table>
//               <thead>
//                 <tr>
//                   <th>Hardware ID</th>
//                   <th>Nickname</th>
//                   <th>Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {registeredHardware.map((hardware, index) => (
//                   <tr key={hardware._id || index}>
//                     <td>{hardware.hardwareId}</td>
//                     <td>{hardware.nickName}</td>
//                     <td>
//                       <button className="btn">Unlink</button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         ) : (
//           <div style={{
//             marginTop: '20px',
//             marginBottom: '40px',
//             padding: '40px 20px',
//             border: '2px dashed #444',
//             borderRadius: '10px',
//             textAlign: 'center',
//             backgroundColor: 'rgba(0, 0, 0, 0.2)'
//           }}>
//             {isLoading ? (
//               <p style={{ color: '#999', fontSize: '18px' }}>Loading hardware...</p>
//             ) : error ? (
//               <div>
//                 <p style={{ color: '#e74c3c', fontSize: '18px', marginBottom: '15px' }}>{error}</p>
//                 <button 
//                   style={{
//                     background: 'linear-gradient(to right, #8e44ad, #9b59b6)',
//                     color: 'white',
//                     padding: '8px 20px',
//                     border: 'none',
//                     borderRadius: '6px',
//                     cursor: 'pointer',
//                     fontSize: '14px',
//                     fontWeight: 'bold',
//                     display: 'inline-block',
//                   }} 
//                   onClick={fetchHardwareList}
//                 >
//                   Try Again
//                 </button>
//               </div>
//             ) : (
//               <>
//                 <div style={{
//                   fontSize: '40px',
//                   color: '#8e44ad',
//                   marginBottom: '15px',
//                   opacity: '0.7'
//                 }}>+</div>
//                 <p style={{ 
//                   color: '#999', 
//                   fontSize: '18px', 
//                   marginBottom: '20px' 
//                 }}>No hardware registered yet</p>
//                 <button 
//                   style={{
//                     background: 'linear-gradient(to right, #8e44ad, #9b59b6)',
//                     color: 'white',
//                     padding: '12px 30px',
//                     border: 'none',
//                     borderRadius: '6px',
//                     cursor: 'pointer',
//                     fontSize: '16px',
//                     fontWeight: 'bold',
//                     display: 'inline-block',
//                     transition: 'all 0.2s ease',
//                     boxShadow: '0 4px 12px rgba(142, 68, 173, 0.3)',
//                   }} 
//                   onClick={showHardwareForm}
//                 >
//                   Register Hardware
//                 </button>
//               </>
//             )}
//           </div>
//         )}
//       </div>

//       {/* Download Popup Modal with Inline Styles */}
//       {isPopupVisible && (
//         <div style={modalStyles}>
//           <div style={modalContentStyles}>
//             <span 
//               style={closeButtonStyles} 
//               onClick={closeDownloadPopup}
//             >
//               ×
//             </span>
//             <h3 style={{ marginTop: '0', color: '#fff', fontSize: '22px', fontWeight: '600', textAlign: 'center', marginBottom: '25px' }}>System Requirements</h3>
//             <ul style={systemReqListStyles}>
//               <li style={listItemStyles}>
//                 <span style={checkmarkStyles}>✓</span>
//                 <span>Operating System: Windows 10 or later / macOS 11 or later</span>
//               </li>
//               <li style={listItemStyles}>
//                 <span style={checkmarkStyles}>✓</span>
//                 <span>RAM: 8GB minimum (16GB recommended)</span>
//               </li>
//               <li style={listItemStyles}>
//                 <span style={checkmarkStyles}>✓</span>
//                 <span>Storage: 2GB free space</span>
//               </li>
//               <li style={listItemStyles}>
//                 <span style={checkmarkStyles}>✓</span>
//                 <span>Processor: Intel i5 or equivalent</span>
//               </li>
//             </ul>
//             <button 
//               className='btn btn-primary'
//               onClick={confirmDownload}
//             >
//               Download
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Hardware Registration Form Popup */}
//       {isHardwareFormVisible && (
//         <div style={modalStyles}>
//           <div style={modalContentStyles}>
//             <span 
//               style={closeButtonStyles} 
//               onClick={closeHardwareForm}
//             >
//               ×
//             </span>
//             <h3 style={{ marginTop: '0', color: '#fff', fontSize: '22px', fontWeight: '600', textAlign: 'center', marginBottom: '25px' }}>Register Your Hardware</h3>

//             <div style={formGroupStyles}>
//               <label htmlFor="hardwareId" style={inputLabelStyles}>Hardware ID</label>
//               <input 
//                 type="text"
//                 id="hardwareId"
//                 style={inputStyles}
//                 value={hardwareIdInput}
//                 onChange={(e) => setHardwareIdInput(e.target.value)}
//               />
//             </div>

//             <div style={formGroupStyles}>
//               <label htmlFor="deviceName" style={inputLabelStyles}>Device Name</label>
//               <input 
//                 type="text"
//                 id="deviceName"
//                 style={inputStyles}
//                 value={deviceNameInput}
//                 onChange={(e) => setDeviceNameInput(e.target.value)}
//               />
//             </div>

//             <div style={{ display: 'flex', justifyContent: 'center' }}>
//               <button 
//                 style={{
//                   background: 'linear-gradient(to right, #8e44ad, #9b59b6)',
//                   color: 'white',
//                   padding: '12px 20px',
//                   border: 'none',
//                   borderRadius: '6px',
//                   cursor: 'pointer',
//                   fontSize: '16px',
//                   fontWeight: 'bold',
//                   display: 'inline-block',
//                   transition: 'all 0.2s ease',
//                   boxShadow: '0 4px 12px rgba(142, 68, 173, 0.3)',
//                 }}
//                 onClick={submitHardwareForm}
//               >
//                 Register Hardware
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Dashboard;










// import React, { useEffect, useState } from 'react';

// function Dashboard() {
//   const [isPopupVisible, setIsPopupVisible] = useState(false);
//   const [isHardwareFormVisible, setIsHardwareFormVisible] = useState(false);
//   const [registeredHardware, setRegisteredHardware] = useState([]);
//   const [hardwareIdInput, setHardwareIdInput] = useState('');
//   const [deviceNameInput, setDeviceNameInput] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const showDownloadPopup = () => {
//     console.log('Showing download popup');
//     setIsPopupVisible(true);
//   };

//   const closeDownloadPopup = () => {
//     console.log('Closing download popup');
//     setIsPopupVisible(false);
//   };

//   const confirmDownload = () => {
//     console.log('Download confirmed');
//     alert('Download started!');
//     setIsPopupVisible(false);
//   };

//   const showHardwareForm = () => {
//     console.log('Showing hardware form');
//     setIsHardwareFormVisible(true);
//   };

//   const closeHardwareForm = () => {
//     console.log('Closing hardware form');
//     setIsHardwareFormVisible(false);
//     // Reset form fields
//     setHardwareIdInput('');
//     setDeviceNameInput('');
//   };

//   // Fetch hardware list when component loads
//   useEffect(() => {
//     console.log('Fetching hardware list');
//     fetchHardwareList();
//   }, []);

//   // Function to fetch hardware list from API
//   const fetchHardwareList = async () => {
//     setIsLoading(true);
//     setError(null);
//     try {
//       console.log('Fetching hardware from server...');
//       // Get auth token from localStorage
//       const authToken = localStorage.getItem('authToken');
//       console.log('Auth token:', authToken);

//       if (!authToken) {
//         setError('Authentication token not found. Please log in again.');
//         setIsLoading(false);
//         return;
//       }

//       const response = await fetch('http://localhost:3000/api/hardware/hardwares-by-user', {
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `${authToken}`
//         }
//       });

//       if (!response.ok) {
//         console.error('Failed to fetch hardware:', response.statusText);
//         setError(`Failed to fetch hardware: ${response.statusText}`);
//         setIsLoading(false);
//         return;
//       }
      
//       const contentType = response.headers.get('Content-Type');
//       if (!contentType || !contentType.includes('application/json')) {
//         console.error('Expected JSON, but received:', contentType);
//         setError(`Expected JSON, but received: ${contentType}`);
//         setIsLoading(false);
//         return;
//       }
      
//       const data = await response.json();
//       console.log('Fetched hardware list:', data);
      
//       if (data.hardwareList) {
//         setRegisteredHardware(data.hardwareList);
//       } else {
//         setError(data.message || 'Failed to fetch hardware');
//       }
//     } catch (error) {
//       setError('Error connecting to server');
//       console.error('Error fetching hardware:', error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const submitHardwareForm = async () => {
//     console.log('Submitting hardware registration form...');
//     // Form validation
//     if (!hardwareIdInput || !deviceNameInput) {
//       alert('Please fill in all fields');
//       return;
//     }

//     setIsLoading(true);

//     try {
//       // Get auth token from localStorage
//       const authToken = localStorage.getItem('authToken');
//       console.log('Auth token for registration:', authToken);

//       if (!authToken) {
//         alert('Authentication token not found. Please log in again.');
//         setIsLoading(false);
//         return;
//       }

//       // Call API to register hardware
//       const response = await fetch('http://localhost:3000/api/hardware/register', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `${authToken}`
//         },
//         body: JSON.stringify({
//           hardwareId: hardwareIdInput,
//           nickName: deviceNameInput
//         }),
//       });

//       const data = await response.json();
//       console.log('Hardware registration response:', data);

//       if (response.ok) {
//         // Refresh hardware list
//         fetchHardwareList();
//         alert('Hardware registered successfully!');
//         setIsHardwareFormVisible(false);

//         // Reset form fields
//         setHardwareIdInput('');
//         setDeviceNameInput('');
//       } else {
//         alert(data.message || 'Failed to register hardware');
//       }
//     } catch (error) {
//       alert('Error connecting to server');
//       console.error('Error registering hardware:', error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // Modal styles - shared by both popups
//   const modalStyles = {
//     position: 'fixed',
//     top: 0,
//     left: 0,
//     width: '100%',
//     height: '100%',
//     backgroundColor: 'rgba(0, 0, 0, 0.7)',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     zIndex: 1000,
//   };

//   const modalContentStyles = {
//     backgroundColor: '#1e1e1e',
//     padding: '30px',
//     borderRadius: '10px',
//     border: '1px solid #333',
//     boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)',
//     maxWidth: '550px',
//     width: '90%',
//     position: 'relative',
//     color: '#fff',
//   };

//   const closeButtonStyles = {
//     position: 'absolute',
//     top: '15px',
//     right: '18px',
//     fontSize: '24px',
//     fontWeight: 'bold',
//     cursor: 'pointer',
//     color: '#999',
//     transition: 'color 0.2s',
//     background: 'none',
//     border: 'none',
//     outline: 'none',
//     padding: '5px',
//     borderRadius: '50%',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     width: '30px',
//     height: '30px',
//   };

//   const systemReqListStyles = {
//     marginTop: '20px',
//     marginBottom: '25px',
//     paddingLeft: '10px',
//     color: '#ccc',
//     listStyleType: 'none',
//   };

//   const listItemStyles = {
//     marginBottom: '16px',
//     lineHeight: '1.6',
//     display: 'flex',
//     alignItems: 'center',
//   };

//   const checkmarkStyles = {
//     color: '#8e44ad',
//     marginRight: '10px',
//     fontSize: '16px',
//     fontWeight: 'bold',
//   };

//   const formGroupStyles = {
//     marginBottom: '20px',
//   };

//   const inputLabelStyles = {
//     display: 'block',
//     marginBottom: '8px',
//     color: '#ccc',
//     fontWeight: '500',
//   };

//   const inputStyles = {
//     width: '100%',
//     padding: '12px',
//     backgroundColor: '#2a2a2a',
//     border: '1px solid #444',
//     borderRadius: '6px',
//     color: 'white',
//     fontSize: '16px',
//   };

//   const addHardwareButtonStyles = {
//     display: 'flex',
//     alignItems: 'center',
//     backgroundColor: 'transparent',
//     color: '#9b59b6',
//     border: '2px solid #9b59b6',
//     borderRadius: '6px',
//     padding: '8px 16px',
//     cursor: 'pointer',
//     fontSize: '14px',
//     fontWeight: 'bold',
//     marginLeft: 'auto',
//     marginBottom: '20px',
//     transition: 'all 0.2s ease',
//   };

//   const plusIconStyles = {
//     marginRight: '8px',
//     fontSize: '18px',
//     fontWeight: 'bold',
//   };

//   // Check if hardware is registered and not empty
//   const hasRegisteredHardware = Array.isArray(registeredHardware) && registeredHardware.length > 0;

//   return (
//     <div className="dashboard-content-container">
//       {/* Overview Tab (default active) */}
//       <div className="dashboard-tab active">
//         {/* Stats Section */}
//         <div className="stats-container">
//           <div className="stat-card">
//             <div className="stat-card-header">
//               <span>Active Licenses</span>
//               <span>🔑</span>
//             </div>
//             <div className="stat-card-value">3</div>
//             <div className="stat-card-label">Valid licenses</div>
//           </div>
//           <div className="stat-card">
//             <div className="stat-card-header">
//               <span>Current Plan</span>
//               <span>⭐</span>
//             </div>
//             <div className="stat-card-value">Lifetime</div>
//             <div className="stat-card-label">Never expires</div>
//           </div>
//           <div className="stat-card">
//             <div className="stat-card-header">
//               <span>Support Tickets</span>
//               <span>🎟️</span>
//             </div>
//             <div className="stat-card-value">0</div>
//             <div className="stat-card-label">No pending tickets</div>
//           </div>
//           <div className="stat-card">
//             <div className="stat-card-header">
//               <span>Last Payment</span>
//               <span>💳</span>
//             </div>
//             <div className="stat-card-value">$19</div>
//             <div className="stat-card-label">March 28, 2025</div>
//           </div>
//         </div>

//         {/* Quick Actions */}
//         <h2 className="section-title">Quick Actions</h2>
//         <div className="card-container">
//           <div className="plan-card">
//             <h3 className="plan-name">Generate New Key</h3>
//             <p className="plan-desc">Create a license key for your software</p>
//             <div className="feature-list">
//               <div className="feature-item"><i>✓</i> Hardware ID validation</div>
//               <div className="feature-item"><i>✓</i> Automatic activation</div>
//               <div className="feature-item"><i>✓</i> Secure encryption</div>
//             </div>
//             <button className="btn btn-primary">Generate Key</button>
//           </div>
          
//           {/* Download Software Card with Click Handler */}
//           <div className="plan-card" onClick={showDownloadPopup}>
//             <h3 className="plan-name">Download Software</h3>
//             <p className="plan-desc">Get the latest version of our software</p>
//             <div className="feature-list">
//               <div className="feature-item"><i>✓</i> Latest version (v2.1.3)</div>
//               <div className="feature-item"><i>✓</i> Windows &amp; Mac compatible</div>
//               <div className="feature-item"><i>✓</i> Offline installer</div>
//             </div>
//             <button className="btn btn-primary">Download Now</button>
//           </div>

//           <div className="plan-card">
//             <h3 className="plan-name">Need Help?</h3>
//             <p className="plan-desc">Get support from our team</p>
//             <div className="feature-list">
//               <div className="feature-item"><i>✓</i> 24/7 Support</div>
//               <div className="feature-item"><i>✓</i> Priority response</div>
//               <div className="feature-item"><i>✓</i> Dedicated assistance</div>
//             </div>
//             <button className="btn btn-primary">Contact Support</button>
//           </div>
//         </div>

//         {/* Recent Licenses with Add Hardware Button */}
//         <div style={{ display: 'flex', alignItems: 'center' }}>
//           <h2 className="section-title">Hardware Devices</h2>
//           <button style={addHardwareButtonStyles} onClick={showHardwareForm}>
//             <span style={plusIconStyles}>+</span> Add Hardware
//           </button>
//         </div>

//         {isLoading ? (
//           <div style={{
//             marginTop: '20px',
//             marginBottom: '40px',
//             padding: '40px 20px',
//             borderRadius: '10px',
//             textAlign: 'center',
//           }}>
//             <p style={{ color: '#999', fontSize: '18px' }}>Loading hardware...</p>
//           </div>
//         ) : error ? (
//           <div style={{
//             marginTop: '20px',
//             marginBottom: '40px',
//             padding: '40px 20px',
//             border: '2px dashed #444',
//             borderRadius: '10px',
//             textAlign: 'center',
//             backgroundColor: 'rgba(0, 0, 0, 0.2)'
//           }}>
//             <p style={{ color: '#e74c3c', fontSize: '18px', marginBottom: '15px' }}>{error}</p>
//             <button 
//               style={{
//                 background: 'linear-gradient(to right, #8e44ad, #9b59b6)',
//                 color: 'white',
//                 padding: '8px 20px',
//                 border: 'none',
//                 borderRadius: '6px',
//                 cursor: 'pointer',
//                 fontSize: '14px',
//                 fontWeight: 'bold',
//                 display: 'inline-block',
//               }} 
//               onClick={fetchHardwareList}
//             >
//               Try Again
//             </button>
//           </div>
//         ) : hasRegisteredHardware ? (
//           <div className="table-container">
//             <table>
//               <thead>
//                 <tr>
//                   <th>Hardware ID</th>
//                   <th>Nickname</th>
//                   <th>Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {registeredHardware.map((hardware, index) => (
//                   <tr key={hardware._id || index}>
//                     <td>{hardware.hardwareId}</td>
//                     <td>{hardware.nickName}</td>
//                     <td>
//                       <button className="btn">Unlink</button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         ) : (
//           <div style={{
//             marginTop: '20px',
//             marginBottom: '40px',
//             padding: '40px 20px',
//             border: '2px dashed #444',
//             borderRadius: '10px',
//             textAlign: 'center',
//             backgroundColor: 'rgba(0, 0, 0, 0.2)'
//           }}>
//             <div style={{
//               fontSize: '40px',
//               color: '#8e44ad',
//               marginBottom: '15px',
//               opacity: '0.7'
//             }}>+</div>
//             <p style={{ 
//               color: '#999', 
//               fontSize: '18px', 
//               marginBottom: '20px' 
//             }}>No hardware registered yet</p>
//             <button 
//               style={{
//                 background: 'linear-gradient(to right, #8e44ad, #9b59b6)',
//                 color: 'white',
//                 padding: '12px 30px',
//                 border: 'none',
//                 borderRadius: '6px',
//                 cursor: 'pointer',
//                 fontSize: '16px',
//                 fontWeight: 'bold',
//                 display: 'inline-block',
//                 transition: 'all 0.2s ease',
//                 boxShadow: '0 4px 12px rgba(142, 68, 173, 0.3)',
//               }} 
//               onClick={showHardwareForm}
//             >
//               Register Hardware
//             </button>
//           </div>
//         )}
//       </div>

//       {/* Download Popup Modal with Inline Styles */}
//       {isPopupVisible && (
//         <div style={modalStyles}>
//           <div style={modalContentStyles}>
//             <span 
//               style={closeButtonStyles} 
//               onClick={closeDownloadPopup}
//             >
//               ×
//             </span>
//             <h3 style={{ marginTop: '0', color: '#fff', fontSize: '22px', fontWeight: '600', textAlign: 'center', marginBottom: '25px' }}>System Requirements</h3>
//             <ul style={systemReqListStyles}>
//               <li style={listItemStyles}>
//                 <span style={checkmarkStyles}>✓</span>
//                 <span>Operating System: Windows 10 or later / macOS 11 or later</span>
//               </li>
//               <li style={listItemStyles}>
//                 <span style={checkmarkStyles}>✓</span>
//                 <span>RAM: 8GB minimum (16GB recommended)</span>
//               </li>
//               <li style={listItemStyles}>
//                 <span style={checkmarkStyles}>✓</span>
//                 <span>Storage: 2GB free space</span>
//               </li>
//               <li style={listItemStyles}>
//                 <span style={checkmarkStyles}>✓</span>
//                 <span>Processor: Intel i5 or equivalent</span>
//               </li>
//             </ul>
//             <button 
//               className='btn btn-primary'
//               onClick={confirmDownload}
//             >
//               Download
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Hardware Registration Form Popup */}
//       {isHardwareFormVisible && (
//         <div style={modalStyles}>
//           <div style={modalContentStyles}>
//             <span 
//               style={closeButtonStyles} 
//               onClick={closeHardwareForm}
//             >
//               ×
//             </span>
//             <h3 style={{ marginTop: '0', color: '#fff', fontSize: '22px', fontWeight: '600', textAlign: 'center', marginBottom: '25px' }}>Register Your Hardware</h3>

//             <div style={formGroupStyles}>
//               <label htmlFor="hardwareId" style={inputLabelStyles}>Hardware ID</label>
//               <input 
//                 type="text"
//                 id="hardwareId"
//                 style={inputStyles}
//                 placeholder="Enter hardware ID (e.g., 1234567890)"
//                 value={hardwareIdInput}
//                 onChange={(e) => setHardwareIdInput(e.target.value)}
//               />
//             </div>

//             <div style={formGroupStyles}>
//               <label htmlFor="deviceName" style={inputLabelStyles}>Device Name</label>
//               <input 
//                 type="text"
//                 id="deviceName"
//                 style={inputStyles}
//                 placeholder="Enter device nickname (e.g., Work Laptop)"
//                 value={deviceNameInput}
//                 onChange={(e) => setDeviceNameInput(e.target.value)}
//               />
//             </div>

//             <div style={{ display: 'flex', justifyContent: 'center' }}>
//               <button 
//                 style={{
//                   background: 'linear-gradient(to right, #8e44ad, #9b59b6)',
//                   color: 'white',
//                   padding: '12px 20px',
//                   border: 'none',
//                   borderRadius: '6px',
//                   cursor: 'pointer',
//                   fontSize: '16px',
//                   fontWeight: 'bold',
//                   display: 'inline-block',
//                   transition: 'all 0.2s ease',
//                   boxShadow: '0 4px 12px rgba(142, 68, 173, 0.3)',
//                 }}
//                 onClick={submitHardwareForm}
//                 disabled={isLoading}
//               >
//                 {isLoading ? 'Registering...' : 'Register Hardware'}
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Dashboard;









// import axios from 'axios';
// import React, { useEffect, useState } from 'react';

// function Dashboard() {
//   const [isPopupVisible, setIsPopupVisible] = useState(false);
//   const [isHardwareFormVisible, setIsHardwareFormVisible] = useState(false);
//   const [registeredHardware, setRegisteredHardware] = useState([]);
//   const [hardwareIdInput, setHardwareIdInput] = useState('');
//   const [deviceNameInput, setDeviceNameInput] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const showDownloadPopup = () => {
//     setIsPopupVisible(true);
//   };

//   const closeDownloadPopup = () => {
//     setIsPopupVisible(false);
//   };

//   const confirmDownload = () => {
//     alert('Download started!');
//     setIsPopupVisible(false);
//   };

//   const showHardwareForm = () => {
//     setIsHardwareFormVisible(true);
//   };

//   const closeHardwareForm = () => {
//     setIsHardwareFormVisible(false);
//     // Reset form fields
//     setHardwareIdInput('');
//     setDeviceNameInput('');
//   };

//   // Fetch hardware list when component loads
//   useEffect(() => {
//     fetchHardwareList();
//   }, []);

//   // Helper function to safely parse JSON
//   const safelyParseJSON = async (response) => {
//     const text = await response.text();
//     try {
//       // Check if the response starts with HTML
//       if (text.trim().startsWith('<!DOCTYPE') || text.trim().startsWith('<html')) {
//         console.error('Received HTML instead of JSON:', text.substring(0, 100) + '...');
//         throw new Error('Server returned HTML instead of JSON. You might need to login again.');
//       }
//       return JSON.parse(text);
//     } catch (error) {
//       console.error('Error parsing JSON response:', error);
//       throw new Error('Invalid server response. Please try again later.');
//     }
//   };

//   // Function to fetch hardware list from API
//   const fetchHardwareList = async () => {
//     setIsLoading(true);
//     setError(null);
  
//     try {
//       // Get auth token
//       const authToken = localStorage.getItem('authToken');
//       console.log('Retrieved authToken from localStorage:', authToken);
  
//       if (!authToken) {
//         console.log('No authToken found');
//         setError('Authentication token not found. Please log in again.');
//         setIsLoading(false);
//         window.location.href = '/login';
//         return;
//       }
  
//       console.log('Fetching hardware with token:', authToken);
  
//       // Make the API request with Axios
//       const response = await axios.get('http://localhost:3000/api/hardware/hardwares-by-user', {
//         headers: {
//           'Authorization': `${authToken}` // Adjust to `Bearer ${authToken}` if required by your API
//         }
//       });
  
//       // Log response details
//       console.log('Response status:', response.status);
//       console.log('Response headers:', response.headers);
//       console.log('Response data:', response.data);
  
//       // Axios automatically parses JSON, so no need for safelyParseJSON
//       const data = response.data;
  
//       if (response.status === 404) {
//         console.log(' - No hardware found for this user');
//         setRegisteredHardware([]);
//       } else {
//         console.log('Setting registered hardware:', data.hardwareList);
//         setRegisteredHardware(data.hardwareList || []);
//       }
//     } catch (error) {
//       console.error('Error fetching hardware:', error);
  
//       // Handle specific error cases
//       if (error.response) {
//         // The request was made and the server responded with a status code
//         // that falls out of the range of 2xx
//         console.log('Error response status:', error.response.status);
//         console.log('Error response data:', error.response.data);
  
//         if (error.response.status === 401) {
//           console.log('Received 401 - Session expired');
//           setError('Session expired. Please log in again.');
//           localStorage.removeItem('authToken');
//           window.location.href = '/login';
//           return;
//         }
  
//         if (error.response.status === 404) {
//           console.log('Received 404 - No hardware found');
//           setRegisteredHardware([]);
//         } else {
//           setError(error.response.data?.message || `API error: ${error.response.status}`);
//         }
//       } else if (error.request) {
//         // The request was made but no response was received
//         console.log('No response received:', error.request);
//         setError('No response from server. Please check your connection.');
//       } else {
//         // Something happened in setting up the request
//         console.log('Request setup error:', error.message);
//         setError('Error connecting to server');
//       }
//     } finally {
//       console.log('Fetch completed, setting isLoading to false');
//       setIsLoading(false);
//     }
//   };
//   const submitHardwareForm = async () => {
//     // Form validation
//     if (!hardwareIdInput || !deviceNameInput) {
//       alert('Please fill in all fields');
//       return;
//     }

//     setIsLoading(true);

//     try {
//       // Get auth token from localStorage
//       const authToken = localStorage.getItem('authToken');

//       if (!authToken) {
//         alert('Authentication token not found. Please log in again.');
//         setIsLoading(false);
//         return;
//       }

//       console.log('Registering hardware with token:', authToken);
//       console.log('Hardware data:', { hardwareId: hardwareIdInput, nickName: deviceNameInput });

//       // Call API to register hardware
//       const response = await fetch('http://localhost:3000/api/hardware/register', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `${authToken}`
//         },
//         body: JSON.stringify({
//           hardwareId: hardwareIdInput,
//           nickName: deviceNameInput
//         }),
//       });

//       console.log('Registration response status:', response.status);
      
//       // Use the safe parsing function
//       const data = await safelyParseJSON(response);
//       console.log('Registration response data:', data);

//       if (response.ok) {
//         // Refresh hardware list
//         alert('Hardware registered successfully!');
//         setIsHardwareFormVisible(false);
        
//         // Reset form fields
//         setHardwareIdInput('');
//         setDeviceNameInput('');
        
//         // Fetch the updated list after a short delay to allow backend processing
//         setTimeout(() => fetchHardwareList(), 500);
//       } else {
//         alert(data.message || 'Failed to register hardware');
//       }
//     } catch (error) {
//       console.error('Error registering hardware:', error);
//       alert(error.message || 'Error connecting to server');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // Modal styles - shared by both popups
//   const modalStyles = {
//     position: 'fixed',
//     top: 0,
//     left: 0,
//     width: '100%',
//     height: '100%',
//     backgroundColor: 'rgba(0, 0, 0, 0.7)',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     zIndex: 1000,
//   };

//   const modalContentStyles = {
//     backgroundColor: '#1e1e1e',
//     padding: '30px',
//     borderRadius: '10px',
//     border: '1px solid #333',
//     boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)',
//     maxWidth: '550px',
//     width: '90%',
//     position: 'relative',
//     color: '#fff',
//   };

//   const closeButtonStyles = {
//     position: 'absolute',
//     top: '15px',
//     right: '18px',
//     fontSize: '24px',
//     fontWeight: 'bold',
//     cursor: 'pointer',
//     color: '#999',
//     transition: 'color 0.2s',
//     background: 'none',
//     border: 'none',
//     outline: 'none',
//     padding: '5px',
//     borderRadius: '50%',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     width: '30px',
//     height: '30px',
//   };

//   const systemReqListStyles = {
//     marginTop: '20px',
//     marginBottom: '25px',
//     paddingLeft: '10px',
//     color: '#ccc',
//     listStyleType: 'none',
//   };

//   const listItemStyles = {
//     marginBottom: '16px',
//     lineHeight: '1.6',
//     display: 'flex',
//     alignItems: 'center',
//   };

//   const checkmarkStyles = {
//     color: '#8e44ad',
//     marginRight: '10px',
//     fontSize: '16px',
//     fontWeight: 'bold',
//   };

//   const formGroupStyles = {
//     marginBottom: '20px',
//   };

//   const inputLabelStyles = {
//     display: 'block',
//     marginBottom: '8px',
//     color: '#ccc',
//     fontWeight: '500',
//   };

//   const inputStyles = {
//     width: '100%',
//     padding: '12px',
//     backgroundColor: '#2a2a2a',
//     border: '1px solid #444',
//     borderRadius: '6px',
//     color: 'white',
//     fontSize: '16px',
//   };

//   const addHardwareButtonStyles = {
//     display: 'flex',
//     alignItems: 'center',
//     backgroundColor: 'transparent',
//     color: '#9b59b6',
//     border: '2px solid #9b59b6',
//     borderRadius: '6px',
//     padding: '8px 16px',
//     cursor: 'pointer',
//     fontSize: '14px',
//     fontWeight: 'bold',
//     marginLeft: 'auto',
//     marginBottom: '20px',
//     transition: 'all 0.2s ease',
//   };

//   const plusIconStyles = {
//     marginRight: '8px',
//     fontSize: '18px',
//     fontWeight: 'bold',
//   };

//   // Check if hardware is registered and not empty
//   const hasRegisteredHardware = Array.isArray(registeredHardware) && registeredHardware.length > 0;



//   // For testing: Use mock data if API fails (comment out in production)
//   // const displayHardware = hasRegisteredHardware ? registeredHardware : [];
//   const displayHardware = hasRegisteredHardware ? registeredHardware : [];

//   return (
//     <div className="dashboard-content-container">
//       {/* Overview Tab (default active) */}
//       <div className="dashboard-tab active">
//         {/* Stats Section */}
//         <div className="stats-container">
//           <div className="stat-card">
//             <div className="stat-card-header">
//               <span>Active Licenses</span>
//               <span>🔑</span>
//             </div>
//             <div className="stat-card-value">3</div>
//             <div className="stat-card-label">Valid licenses</div>
//           </div>
//           <div className="stat-card">
//             <div className="stat-card-header">
//               <span>Current Plan</span>
//               <span>⭐</span>
//             </div>
//             <div className="stat-card-value">Lifetime</div>
//             <div className="stat-card-label">Never expires</div>
//           </div>
//           <div className="stat-card">
//             <div className="stat-card-header">
//               <span>Support Tickets</span>
//               <span>🎟️</span>
//             </div>
//             <div className="stat-card-value">0</div>
//             <div className="stat-card-label">No pending tickets</div>
//           </div>
//           <div className="stat-card">
//             <div className="stat-card-header">
//               <span>Last Payment</span>
//               <span>💳</span>
//             </div>
//             <div className="stat-card-value">$19</div>
//             <div className="stat-card-label">March 28, 2025</div>
//           </div>
//         </div>

//         {/* Quick Actions */}
//         <h2 className="section-title">Quick Actions</h2>
//         <div className="card-container">
//           <div className="plan-card">
//             <h3 className="plan-name">Generate New Key</h3>
//             <p className="plan-desc">Create a license key for your software</p>
//             <div className="feature-list">
//               <div className="feature-item"><i>✓</i> Hardware ID validation</div>
//               <div className="feature-item"><i>✓</i> Automatic activation</div>
//               <div className="feature-item"><i>✓</i> Secure encryption</div>
//             </div>
//             <button className="btn btn-primary">Generate Key</button>
//           </div>
          
//           {/* Download Software Card with Click Handler */}
//           <div className="plan-card" onClick={showDownloadPopup}>
//             <h3 className="plan-name">Download Software</h3>
//             <p className="plan-desc">Get the latest version of our software</p>
//             <div className="feature-list">
//               <div className="feature-item"><i>✓</i> Latest version (v2.1.3)</div>
//               <div className="feature-item"><i>✓</i> Windows &amp; Mac compatible</div>
//               <div className="feature-item"><i>✓</i> Offline installer</div>
//             </div>
//             <button className="btn btn-primary">Download Now</button>
//           </div>

//           <div className="plan-card">
//             <h3 className="plan-name">Need Help?</h3>
//             <p className="plan-desc">Get support from our team</p>
//             <div className="feature-list">
//               <div className="feature-item"><i>✓</i> 24/7 Support</div>
//               <div className="feature-item"><i>✓</i> Priority response</div>
//               <div className="feature-item"><i>✓</i> Dedicated assistance</div>
//             </div>
//             <button className="btn btn-primary">Contact Support</button>
//           </div>
//         </div>

//         {/* Recent Licenses with Add Hardware Button */}
//         <div style={{ display: 'flex', alignItems: 'center' }}>
//           <h2 className="section-title">Hardware Devices</h2>
//           <button style={addHardwareButtonStyles} onClick={showHardwareForm}>
//             <span style={plusIconStyles}>+</span> Add Hardware
//           </button>
//         </div>

//         {isLoading ? (
//           <div style={{
//             marginTop: '20px',
//             marginBottom: '40px',
//             padding: '40px 20px',
//             borderRadius: '10px',
//             textAlign: 'center',
//           }}>
//             <p style={{ color: '#999', fontSize: '18px' }}>Loading hardware...</p>
//           </div>
//         ) : error ? (
//           <div style={{
//             marginTop: '20px',
//             marginBottom: '40px',
//             padding: '40px 20px',
//             border: '2px dashed #444',
//             borderRadius: '10px',
//             textAlign: 'center',
//             backgroundColor: 'rgba(0, 0, 0, 0.2)'
//           }}>
//             <p style={{ color: '#e74c3c', fontSize: '18px', marginBottom: '15px' }}>{error}</p>
//             <button 
//               style={{
//                 background: 'linear-gradient(to right, #8e44ad, #9b59b6)',
//                 color: 'white',
//                 padding: '8px 20px',
//                 border: 'none',
//                 borderRadius: '6px',
//                 cursor: 'pointer',
//                 fontSize: '14px',
//                 fontWeight: 'bold',
//                 display: 'inline-block',
//               }} 
//               onClick={fetchHardwareList}
//             >
//               Try Again
//             </button>
//           </div>
//         ) : displayHardware.length > 0 ? (
//           <div className="table-container">
//             <table>
//               <thead>
//                 <tr>
//                   <th>Hardware ID</th>
//                   <th>Nickname</th>
//                   <th>Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {displayHardware.map((hardware, index) => (
//                   <tr key={hardware._id || index}>
//                     <td>{hardware.hardwareId}</td>
//                     <td>{hardware.nickName}</td>
//                     <td>
//                       <button className="btn">Unlink</button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         ) : (
//           <div style={{
//             marginTop: '20px',
//             marginBottom: '40px',
//             padding: '40px 20px',
//             border: '2px dashed #444',
//             borderRadius: '10px',
//             textAlign: 'center',
//             backgroundColor: 'rgba(0, 0, 0, 0.2)'
//           }}>
//             <div style={{
//               fontSize: '40px',
//               color: '#8e44ad',
//               marginBottom: '15px',
//               opacity: '0.7'
//             }}>+</div>
//             <p style={{ 
//               color: '#999', 
//               fontSize: '18px', 
//               marginBottom: '20px' 
//             }}>No hardware registered yet</p>
//             <button 
//               style={{
//                 background: 'linear-gradient(to right, #8e44ad, #9b59b6)',
//                 color: 'white',
//                 padding: '12px 30px',
//                 border: 'none',
//                 borderRadius: '6px',
//                 cursor: 'pointer',
//                 fontSize: '16px',
//                 fontWeight: 'bold',
//                 display: 'inline-block',
//                 transition: 'all 0.2s ease',
//                 boxShadow: '0 4px 12px rgba(142, 68, 173, 0.3)',
//               }} 
//               onClick={showHardwareForm}
//             >
//               Register Hardware
//             </button>
//           </div>
//         )}
//       </div>

//       {/* Download Popup Modal with Inline Styles */}
//       {isPopupVisible && (
//         <div style={modalStyles}>
//           <div style={modalContentStyles}>
//             <span 
//               style={closeButtonStyles} 
//               onClick={closeDownloadPopup}
//             >
//               ×
//             </span>
//             <h3 style={{ marginTop: '0', color: '#fff', fontSize: '22px', fontWeight: '600', textAlign: 'center', marginBottom: '25px' }}>System Requirements</h3>
//             <ul style={systemReqListStyles}>
//               <li style={listItemStyles}>
//                 <span style={checkmarkStyles}>✓</span>
//                 <span>Operating System: Windows 10 or later / macOS 11 or later</span>
//               </li>
//               <li style={listItemStyles}>
//                 <span style={checkmarkStyles}>✓</span>
//                 <span>RAM: 8GB minimum (16GB recommended)</span>
//               </li>
//               <li style={listItemStyles}>
//                 <span style={checkmarkStyles}>✓</span>
//                 <span>Storage: 2GB free space</span>
//               </li>
//               <li style={listItemStyles}>
//                 <span style={checkmarkStyles}>✓</span>
//                 <span>Processor: Intel i5 or equivalent</span>
//               </li>
//             </ul>
//             <button 
//               className='btn btn-primary1'
//               onClick={confirmDownload}
//             >
//               Download
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Hardware Registration Form Popup */}
//       {isHardwareFormVisible && (
//         <div style={modalStyles}>
//           <div style={modalContentStyles}>
//             <span 
//               style={closeButtonStyles} 
//               onClick={closeHardwareForm}
//             >
//               ×
//             </span>
//             <h3 style={{ marginTop: '0', color: '#fff', fontSize: '22px', fontWeight: '600', textAlign: 'center', marginBottom: '25px' }}>Register Your Hardware</h3>

//             <div style={formGroupStyles}>
//               <label htmlFor="hardwareId" style={inputLabelStyles}>Hardware ID</label>
//               <input 
//                 type="text"
//                 id="hardwareId"
//                 style={inputStyles}
//                 placeholder="Enter hardware ID (e.g., 1234567890)"
//                 value={hardwareIdInput}
//                 onChange={(e) => setHardwareIdInput(e.target.value)}
//               />
//             </div>

//             <div style={formGroupStyles}>
//               <label htmlFor="deviceName" style={inputLabelStyles}>Device Name</label>
//               <input 
//                 type="text"
//                 id="deviceName"
//                 style={inputStyles}
//                 placeholder="Enter device nickname (e.g., Work Laptop)"
//                 value={deviceNameInput}
//                 onChange={(e) => setDeviceNameInput(e.target.value)}
//               />
//             </div>

//             <div style={{ display: 'flex', justifyContent: 'center' }}>
//               <button 
//                className='btn btn-primary1'
//                 onClick={submitHardwareForm}
//                 disabled={isLoading}
//               >
//                 {isLoading ? 'Registering...' : 'Register Hardware'}
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Dashboard;




// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // Added for navigation

// function Dashboard() {
//   const [isPopupVisible, setIsPopupVisible] = useState(false);
//   const [isHardwareFormVisible, setIsHardwareFormVisible] = useState(false);
//   const [registeredHardware, setRegisteredHardware] = useState([]);
//   const [hardwareIdInput, setHardwareIdInput] = useState('');
//   const [deviceNameInput, setDeviceNameInput] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const navigate = useNavigate(); // Initialize navigation

//   const showDownloadPopup = () => {
//     setIsPopupVisible(true);
//   };

//   const closeDownloadPopup = () => {
//     setIsPopupVisible(false);
//   };

//   const confirmDownload = () => {
//     alert('Download started!');
//     setIsPopupVisible(false);
//   };

//   const showHardwareForm = () => {
//     setIsHardwareFormVisible(true);
//   };

//   const closeHardwareForm = () => {
//     setIsHardwareFormVisible(false);
//     // Reset form fields
//     setHardwareIdInput('');
//     setDeviceNameInput('');
//   };

//   // Fetch hardware list when component loads
//   useEffect(() => {
//     fetchHardwareList();
//   }, []);

//   // Helper function to safely parse JSON
//   const safelyParseJSON = async (response) => {
//     const text = await response.text();
//     try {
//       // Check if the response starts with HTML
//       if (text.trim().startsWith('<!DOCTYPE') || text.trim().startsWith('<html')) {
//         console.error('Received HTML instead of JSON:', text.substring(0, 100) + '...');
//         throw new Error('Server returned HTML instead of JSON. You might need to login again.');
//       }
//       return JSON.parse(text);
//     } catch (error) {
//       console.error('Error parsing JSON response:', error);
//       throw new Error('Invalid server response. Please try again later.');
//     }
//   };

//   // Function to fetch hardware list from API
//   const fetchHardwareList = async () => {
//     setIsLoading(true);
//     setError(null);
  
//     try {
//       // Get auth token
//       const authToken = localStorage.getItem('authToken');
//       console.log('Retrieved authToken from localStorage:', authToken);
  
//       if (!authToken) {
//         console.log('No authToken found');
//         setError('Authentication token not found. Please log in again.');
//         setIsLoading(false);
//         window.location.href = '/login';
//         return;
//       }
  
//       console.log('Fetching hardware with token:', authToken);
  
//       // Make the API request with Axios
//       const response = await axios.get('http://localhost:3000/api/hardware/hardwares-by-user', {
//         headers: {
//           'Authorization': `${authToken}` // Adjust to `Bearer ${authToken}` if required by your API
//         }
//       });
  
//       // Log response details
//       console.log('Response status:', response.status);
//       console.log('Response headers:', response.headers);
//       console.log('Response data:', response.data);
  
//       // Axios automatically parses JSON, so no need for safelyParseJSON
//       const data = response.data;
  
//       if (response.status === 404) {
//         console.log(' - No hardware found for this user');
//         setRegisteredHardware([]);
//       } else {
//         console.log('Setting registered hardware:', data.hardwareList);
//         setRegisteredHardware(data.hardwareList || []);
//       }
//     } catch (error) {
//       console.error('Error fetching hardware:', error);
  
//       // Handle specific error cases
//       if (error.response) {
//         // The request was made and the server responded with a status code
//         // that falls out of the range of 2xx
//         console.log('Error response status:', error.response.status);
//         console.log('Error response data:', error.response.data);
  
//         if (error.response.status === 401) {
//           console.log('Received 401 - Session expired');
//           setError('Session expired. Please log in again.');
//           localStorage.removeItem('authToken');
//           window.location.href = '/login';
//           return;
//         }
  
//         if (error.response.status === 404) {
//           console.log('Received 404 - No hardware found');
//           setRegisteredHardware([]);
//         } else {
//           setError(error.response.data?.message || `API error: ${error.response.status}`);
//         }
//       } else if (error.request) {
//         // The request was made but no response was received
//         console.log('No response received:', error.request);
//         setError('No response from server. Please check your connection.');
//       } else {
//         // Something happened in setting up the request
//         console.log('Request setup error:', error.message);
//         setError('Error connecting to server');
//       }
//     } finally {
//       console.log('Fetch completed, setting isLoading to false');
//       setIsLoading(false);
//     }
//   };

//   const submitHardwareForm = async () => {
//     // Form validation
//     if (!hardwareIdInput || !deviceNameInput) {
//       alert('Please fill in all fields');
//       return;
//     }

//     setIsLoading(true);

//     try {
//       // Get auth token from localStorage
//       const authToken = localStorage.getItem('authToken');

//       if (!authToken) {
//         alert('Authentication token not found. Please log in again.');
//         setIsLoading(false);
//         return;
//       }

//       console.log('Registering hardware with token:', authToken);
//       console.log('Hardware data:', { hardwareId: hardwareIdInput, nickName: deviceNameInput });

//       // Call API to register hardware
//       const response = await fetch('http://localhost:3000/api/hardware/register', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `${authToken}`
//         },
//         body: JSON.stringify({
//           hardwareId: hardwareIdInput,
//           nickName: deviceNameInput
//         }),
//       });

//       console.log('Registration response status:', response.status);
      
//       // Use the safe parsing function
//       const data = await safelyParseJSON(response);
//       console.log('Registration response data:', data);

//       if (response.ok) {
//         // Refresh hardware list
//         alert('Hardware registered successfully!');
//         setIsHardwareFormVisible(false);
        
//         // Reset form fields
//         setHardwareIdInput('');
//         setDeviceNameInput('');
        
//         // Fetch the updated list after a short delay to allow backend processing
//         setTimeout(() => fetchHardwareList(), 500);
//       } else {
//         alert(data.message || 'Failed to register hardware');
//       }
//     } catch (error) {
//       console.error('Error registering hardware:', error);
//       alert(error.message || 'Error connecting to server');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // Modal styles - shared by both popups
//   const modalStyles = {
//     position: 'fixed',
//     top: 0,
//     left: 0,
//     width: '100%',
//     height: '100%',
//     backgroundColor: 'rgba(0, 0, 0, 0.7)',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     zIndex: 1000,
//   };

//   const modalContentStyles = {
//     backgroundColor: '#1e1e1e',
//     padding: '30px',
//     borderRadius: '10px',
//     border: '1px solid #333',
//     boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)',
//     maxWidth: '550px',
//     width: '90%',
//     position: 'relative',
//     color: '#fff',
//   };

//   const closeButtonStyles = {
//     position: 'absolute',
//     top: '15px',
//     right: '18px',
//     fontSize: '24px',
//     fontWeight: 'bold',
//     cursor: 'pointer',
//     color: '#999',
//     transition: 'color 0.2s',
//     background: 'none',
//     border: 'none',
//     outline: 'none',
//     padding: '5px',
//     borderRadius: '50%',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     width: '30px',
//     height: '30px',
//   };

//   const systemReqListStyles = {
//     marginTop: '20px',
//     marginBottom: '25px',
//     paddingLeft: '10px',
//     color: '#ccc',
//     listStyleType: 'none',
//   };

//   const listItemStyles = {
//     marginBottom: '16px',
//     lineHeight: '1.6',
//     display: 'flex',
//     alignItems: 'center',
//   };

//   const checkmarkStyles = {
//     color: '#8e44ad',
//     marginRight: '10px',
//     fontSize: '16px',
//     fontWeight: 'bold',
//   };

//   const formGroupStyles = {
//     marginBottom: '20px',
//   };

//   const inputLabelStyles = {
//     display: 'block',
//     marginBottom: '8px',
//     color: '#ccc',
//     fontWeight: '500',
//   };

//   const inputStyles = {
//     width: '100%',
//     padding: '12px',
//     backgroundColor: '#2a2a2a',
//     border: '1px solid #444',
//     borderRadius: '6px',
//     color: 'white',
//     fontSize: '16px',
//   };

//   const addHardwareButtonStyles = {
//     display: 'flex',
//     alignItems: 'center',
//     backgroundColor: 'transparent',
//     color: '#9b59b6',
//     border: '2px solid #9b59b6',
//     borderRadius: '6px',
//     padding: '8px 16px',
//     cursor: 'pointer',
//     fontSize: '14px',
//     fontWeight: 'bold',
//     marginLeft: 'auto',
//     marginBottom: '20px',
//     transition: 'all 0.2s ease',
//   };

//   const plusIconStyles = {
//     marginRight: '8px',
//     fontSize: '18px',
//     fontWeight: 'bold',
//   };

//   // Check if hardware is registered and not empty
//   const hasRegisteredHardware = Array.isArray(registeredHardware) && registeredHardware.length > 0;

//   // For testing: Use mock data if API fails (comment out in production)
//   // const displayHardware = hasRegisteredHardware ? registeredHardware : [];
//   const displayHardware = hasRegisteredHardware ? registeredHardware : [];

//   return (
//     <div className="dashboard-content-container">
//       {/* Overview Tab (default active) */}
//       <div className="dashboard-tab active">
//         {/* Stats Section */}
//         <div className="stats-container">
//           <div className="stat-card">
//             <div className="stat-card-header">
//               <span>Active Licenses</span>
//               <span>🔑</span>
//             </div>
//             <div className="stat-card-value">3</div>
//             <div className="stat-card-label">Valid licenses</div>
//           </div>
//           <div className="stat-card">
//             <div className="stat-card-header">
//               <span>Current Plan</span>
//               <span>⭐</span>
//             </div>
//             <div className="stat-card-value">Lifetime</div>
//             <div className="stat-card-label">Never expires</div>
//           </div>
//           <div className="stat-card">
//             <div className="stat-card-header">
//               <span>Support Tickets</span>
//               <span>🎟️</span>
//             </div>
//             <div className="stat-card-value">0</div>
//             <div className="stat-card-label">No pending tickets</div>
//           </div>
//           <div className="stat-card">
//             <div className="stat-card-header">
//               <span>Last Payment</span>
//               <span>💳</span>
//             </div>
//             <div className="stat-card-value">$19</div>
//             <div className="stat-card-label">March 28, 2025</div>
//           </div>
//         </div>

//         {/* Quick Actions */}
//         <h2 className="section-title">Quick Actions</h2>
//         <div className="card-container">
//           <div className="plan-card">
//             <h3 className="plan-name">Generate New Key</h3>
//             <p className="plan-desc">Create a license key for your software</p>
//             <div className="feature-list">
//               <div className="feature-item"><i>✓</i> Hardware ID validation</div>
//               <div className="feature-item"><i>✓</i> Automatic activation</div>
//               <div className="feature-item"><i>✓</i> Secure encryption</div>
//             </div>
//             <button className="btn btn-primary">Generate Key</button>
//           </div>
          
//           {/* Download Software Card with Click Handler */}
//           <div className="plan-card" onClick={showDownloadPopup}>
//             <h3 className="plan-name">Download Software</h3>
//             <p className="plan-desc">Get the latest version of our software</p>
//             <div className="feature-list">
//               <div className="feature-item"><i>✓</i> Latest version (v2.1.3)</div>
//               <div className="feature-item"><i>✓</i> Windows & Mac compatible</div>
//               <div className="feature-item"><i>✓</i> Offline installer</div>
//             </div>
//             <button className="btn btn-primary">Download Now</button>
//           </div>

//           <div className="plan-card">
//             <h3 className="plan-name">Need Help?</h3>
//             <p className="plan-desc">Get support from our team</p>
//             <div className="feature-list">
//               <div className="feature-item"><i>✓</i> 24/7 Support</div>
//               <div className="feature-item"><i>✓</i> Priority response</div>
//               <div className="feature-item"><i>✓</i> Dedicated assistance</div>
//             </div>
//             <button className="btn btn-primary">Contact Support</button>
//           </div>
//         </div>

//         {/* Recent Licenses with Add Hardware Button */}
//         <div style={{ display: 'flex', alignItems: 'center' }}>
//           <h2 className="section-title">Hardware Devices</h2>
//           <button style={addHardwareButtonStyles} onClick={showHardwareForm}>
//             <span style={plusIconStyles}>+</span> Add Hardware
//           </button>
//         </div>

//         {isLoading ? (
//           <div style={{
//             marginTop: '20px',
//             marginBottom: '40px',
//             padding: '40px 20px',
//             borderRadius: '10px',
//             textAlign: 'center',
//           }}>
//             <p style={{ color: '#999', fontSize: '18px' }}>Loading hardware...</p>
//           </div>
//         ) : error ? (
//           <div style={{
//             marginTop: '20px',
//             marginBottom: '40px',
//             padding: '40px 20px',
//             border: '2px dashed #444',
//             borderRadius: '10px',
//             textAlign: 'center',
//             backgroundColor: 'rgba(0, 0, 0, 0.2)'
//           }}>
//             <p style={{ color: '#e74c3c', fontSize: '18px', marginBottom: '15px' }}>{error}</p>
//             <button 
//               style={{
//                 background: 'linear-gradient(to right, #8e44ad, #9b59b6)',
//                 color: 'white',
//                 padding: '8px 20px',
//                 border: 'none',
//                 borderRadius: '6px',
//                 cursor: 'pointer',
//                 fontSize: '14px',
//                 fontWeight: 'bold',
//                 display: 'inline-block',
//               }} 
//               onClick={fetchHardwareList}
//             >
//               Try Again
//             </button>
//           </div>
//         ) : displayHardware.length > 0 ? (
//           <div className="table-container">
//             <table>
//               <thead>
//                 <tr>
//                   <th>Hardware ID</th>
//                   <th>Nickname</th>
//                   <th>Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {displayHardware.map((hardware, index) => (
//                   <tr key={hardware._id || index}>
//                     <td>{hardware.hardwareId}</td>
//                     <td>{hardware.nickName}</td>
//                     <td>
//                       <button 
//                         className="btn btn-primary"
//                         onClick={() => navigate('/plans')} // Only change: "Unlink" to "Buy Plan" with navigation
//                       >
//                         Buy Plan
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         ) : (
//           <div style={{
//             marginTop: '20px',
//             marginBottom: '40px',
//             padding: '40px 20px',
//             border: '2px dashed #444',
//             borderRadius: '10px',
//             textAlign: 'center',
//             backgroundColor: 'rgba(0, 0, 0, 0.2)'
//           }}>
//             <div style={{
//               fontSize: '40px',
//               color: '#8e44ad',
//               marginBottom: '15px',
//               opacity: '0.7'
//             }}>+</div>
//             <p style={{ 
//               color: '#999', 
//               fontSize: '18px', 
//               marginBottom: '20px' 
//             }}>No hardware registered yet</p>
//             <button 
//               style={{
//                 background: 'linear-gradient(to right, #8e44ad, #9b59b6)',
//                 color: 'white',
//                 padding: '12px 30px',
//                 border: 'none',
//                 borderRadius: '6px',
//                 cursor: 'pointer',
//                 fontSize: '16px',
//                 fontWeight: 'bold',
//                 display: 'inline-block',
//                 transition: 'all 0.2s ease',
//                 boxShadow: '0 4px 12px rgba(142, 68, 173, 0.3)',
//               }} 
//               onClick={showHardwareForm}
//             >
//               Register Hardware
//             </button>
//           </div>
//         )}
//       </div>

//       {/* Download Popup Modal with Inline Styles */}
//       {isPopupVisible && (
//         <div style={modalStyles}>
//           <div style={modalContentStyles}>
//             <span 
//               style={closeButtonStyles} 
//               onClick={closeDownloadPopup}
//             >
//               ×
//             </span>
//             <h3 style={{ marginTop: '0', color: '#fff', fontSize: '22px', fontWeight: '600', textAlign: 'center', marginBottom: '25px' }}>System Requirements</h3>
//             <ul style={systemReqListStyles}>
//               <li style={listItemStyles}>
//                 <span style={checkmarkStyles}>✓</span>
//                 <span>Operating System: Windows 10 or later / macOS 11 or later</span>
//               </li>
//               <li style={listItemStyles}>
//                 <span style={checkmarkStyles}>✓</span>
//                 <span>RAM: 8GB minimum (16GB recommended)</span>
//               </li>
//               <li style={listItemStyles}>
//                 <span style={checkmarkStyles}>✓</span>
//                 <span>Storage: 2GB free space</span>
//               </li>
//               <li style={listItemStyles}>
//                 <span style={checkmarkStyles}>✓</span>
//                 <span>Processor: Intel i5 or equivalent</span>
//               </li>
//             </ul>
//             <button 
//               className='btn btn-primary1'
//               onClick={confirmDownload}
//             >
//               Download
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Hardware Registration Form Popup */}
//       {isHardwareFormVisible && (
//         <div style={modalStyles}>
//           <div style={modalContentStyles}>
//             <span 
//               style={closeButtonStyles} 
//               onClick={closeHardwareForm}
//             >
//               ×
//             </span>
//             <h3 style={{ marginTop: '0', color: '#fff', fontSize: '22px', fontWeight: '600', textAlign: 'center', marginBottom: '25px' }}>Register Your Hardware</h3>

//             <div style={formGroupStyles}>
//               <label htmlFor="hardwareId" style={inputLabelStyles}>Hardware ID</label>
//               <input 
//                 type="text"
//                 id="hardwareId"
//                 style={inputStyles}
//                 placeholder="Enter hardware ID (e.g., 1234567890)"
//                 value={hardwareIdInput}
//                 onChange={(e) => setHardwareIdInput(e.target.value)}
//               />
//             </div>

//             <div style={formGroupStyles}>
//               <label htmlFor="deviceName" style={inputLabelStyles}>Device Name</label>
//               <input 
//                 type="text"
//                 id="deviceName"
//                 style={inputStyles}
//                 placeholder="Enter device nickname (e.g., Work Laptop)"
//                 value={deviceNameInput}
//                 onChange={(e) => setDeviceNameInput(e.target.value)}
//               />
//             </div>

//             <div style={{ display: 'flex', justifyContent: 'center' }}>
//               <button 
//                className='btn btn-primary1'
//                 onClick={submitHardwareForm}
//                 disabled={isLoading}
//               >
//                 {isLoading ? 'Registering...' : 'Register Hardware'}
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Dashboard;





// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function Dashboard() {
//   const [isPopupVisible, setIsPopupVisible] = useState(false);
//   const [isHardwareFormVisible, setIsHardwareFormVisible] = useState(false);
//   const [registeredHardware, setRegisteredHardware] = useState([]);
//   const [hardwareIdInput, setHardwareIdInput] = useState('');
//   const [deviceNameInput, setDeviceNameInput] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [overviewData, setOverviewData] = useState(null); // New state for overview data

//   const navigate = useNavigate();

//   const showDownloadPopup = () => {
//     setIsPopupVisible(true);
//   };

//   const closeDownloadPopup = () => {
//     setIsPopupVisible(false);
//   };

//   const windowsDownloadUrl =
//   'https://download1339.mediafire.com/t9wkidyqvb6gbspE0H6f0Co1Pm44yjwEMXjEUD67KJewQVCHUVvG4QIudwZggLj-HUyUVDzkGC2PtsfgZftjTu6P7f0-G53_vATGYjt3pDVT4PZ5vXIUyFlw-KsNhqiJuV5HLIneTTIfLSJiOgTjQlwYuE79sbbll2ZiOrfL8An5Xw/j5p8pjyks0a8vae/ZENCIA+1.07.zip';


//   const confirmDownload = () => {
//     alert('Download started!');
//   };

//   setIsPopupVisible(false);


//   const showHardwareForm = () => {
//     setIsHardwareFormVisible(true);
//   };

//   const closeHardwareForm = () => {
//     setIsHardwareFormVisible(false);
//     setHardwareIdInput('');
//     setDeviceNameInput('');
//   };

//   useEffect(() => {
//     fetchHardwareList();
//     fetchOverviewData(); 
//   }, []);

//   const safelyParseJSON = async (response) => {
//     const text = await response.text();
//     try {
//       if (text.trim().startsWith('<!DOCTYPE') || text.trim().startsWith('<html')) {
//         console.error('Received HTML instead of JSON:', text.substring(0, 100) + '...');
//         throw new Error('Server returned HTML instead of JSON. You might need to login again.');
//       }
//       return JSON.parse(text);
//     } catch (error) {
//       console.error('Error parsing JSON response:', error);
//       throw new Error('Invalid server response. Please try again later.');
//     }
//   };

//   // Function to fetch hardware list from API
//   const fetchHardwareList = async () => {
//     setIsLoading(true);
//     setError(null);
  
//     try {
//       const authToken = localStorage.getItem('authToken');
//       console.log('Retrieved authToken from localStorage:', authToken);
  
//       if (!authToken) {
//         console.log('No authToken found');
//         setError('Authentication token not found. Please log in again.');
//         setIsLoading(false);
//         window.location.href = '/login';
//         return;
//       }
  
//       console.log('Fetching hardware with token:', authToken);
  
//       const response = await axios.get('https://zencia-finalbackend.vercel.app/api/hardware/hardwares-by-user', {
//         headers: {
//           'Authorization': `${authToken}`
//         }
//       });
  
//       console.log('Response status:', response.status);
//       console.log('Response headers:', response.headers);
//       console.log('Response data:', response.data);
  
//       const data = response.data;
  
//       if (response.status === 404) {
//         console.log(' - No hardware found for this user');
//         setRegisteredHardware([]);
//       } else {
//         console.log('Setting registered hardware:', data.hardwareList);
//         setRegisteredHardware(data.hardwareList || []);
//       }
//     } catch (error) {
//       console.error('Error fetching hardware:', error);
  
//       if (error.response) {
//         console.log('Error response status:', error.response.status);
//         console.log('Error response data:', error.response.data);
  
//         if (error.response.status === 401) {
//           console.log('Received 401 - Session expired');
//           setError('Session expired. Please log in again.');
//           localStorage.removeItem('authToken');
//           window.location.href = '/login';
//           return;
//         }
  
//         if (error.response.status === 404) {
//           console.log('Received 404 - No hardware found');
//           setRegisteredHardware([]);
//         } else {
//           setError(error.response.data?.message || `API error: ${error.response.status}`);
//         }
//       } else if (error.request) {
//         console.log('No response received:', error.request);
//         setError('No response from server. Please check your connection.');
//       } else {
//         console.log('Request setup error:', error.message);
//         setError('Error connecting to server');
//       }
//     } finally {
//       console.log('Fetch completed, setting isLoading to false');
//       setIsLoading(false);
//     }
//   };

//   // Function to fetch overview data from API
//   const fetchOverviewData = async () => {
//     try {
//       const authToken = localStorage.getItem('authToken');
//       if (!authToken) {
//         console.log('No authToken found for overview');
//         return;
//       }

//       const response = await axios.get('https://zencia-finalbackend.vercel.app/api/hardware/overview', {
//         headers: {
//           'Authorization': `${authToken}`
//         }
//       });

//       console.log('Overview response data:', response.data);
//       setOverviewData(response.data.data); // Store the data portion of the response
//     } catch (error) {
//       console.error('Error fetching overview data:', error);
//       if (error.response?.status === 401) {
//         localStorage.removeItem('authToken');
//         window.location.href = '/auth/login';
//       }
//       // Don’t set error state here to avoid affecting hardware list UI
//     }
//   };

//   const submitHardwareForm = async () => {
//     if (!hardwareIdInput || !deviceNameInput) {
//       alert('Please fill in all fields');
//       return;
//     }

//     setIsLoading(true);

//     try {
//       const authToken = localStorage.getItem('authToken');

//       if (!authToken) {
//         alert('Authentication token not found. Please log in again.');
//         setIsLoading(false);
//         return;
//       }

//       console.log('Registering hardware with token:', authToken);
//       console.log('Hardware data:', { hardwareId: hardwareIdInput, nickName: deviceNameInput });

//       const response = await fetch('https://zencia-finalbackend.vercel.app/api/hardware/register', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `${authToken}`
//         },
//         body: JSON.stringify({
//           hardwareId: hardwareIdInput,
//           nickName: deviceNameInput
//         }),
//       });

//       console.log('Registration response status:', response.status);
      
//       const data = await safelyParseJSON(response);
//       console.log('Registration response data:', data);

//       if (response.ok) {
//         alert('Hardware registered successfully!');
//         setIsHardwareFormVisible(false);
        
//         setHardwareIdInput('');
//         setDeviceNameInput('');
        
//         setTimeout(() => fetchHardwareList(), 500);
//       } else {
//         alert(data.message || 'Failed to register hardware');
//       }
//     } catch (error) {
//       console.error('Error registering hardware:', error);
//       alert(error.message || 'Error connecting to server');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // Modal styles - unchanged
//   const modalStyles = {
//     position: 'fixed',
//     top: 0,
//     left: 0,
//     width: '100%',
//     height: '100%',
//     backgroundColor: 'rgba(0, 0, 0, 0.7)',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     zIndex: 1000,
//   };

//   const modalContentStyles = {
//     backgroundColor: '#1e1e1e',
//     padding: '30px',
//     borderRadius: '10px',
//     border: '1px solid #333',
//     boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)',
//     maxWidth: '550px',
//     width: '90%',
//     position: 'relative',
//     color: '#fff',
//   };

//   const closeButtonStyles = {
//     position: 'absolute',
//     top: '15px',
//     right: '18px',
//     fontSize: '24px',
//     fontWeight: 'bold',
//     cursor: 'pointer',
//     color: '#999',
//     transition: 'color 0.2s',
//     background: 'none',
//     border: 'none',
//     outline: 'none',
//     padding: '5px',
//     borderRadius: '50%',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     width: '30px',
//     height: '30px',
//   };

//   const systemReqListStyles = {
//     marginTop: '20px',
//     marginBottom: '25px',
//     paddingLeft: '10px',
//     color: '#ccc',
//     listStyleType: 'none',
//   };

//   const listItemStyles = {
//     marginBottom: '16px',
//     lineHeight: '1.6',
//     display: 'flex',
//     alignItems: 'center',
//   };

//   const checkmarkStyles = {
//     color: '#8e44ad',
//     marginRight: '10px',
//     fontSize: '16px',
//     fontWeight: 'bold',
//   };

//   const formGroupStyles = {
//     marginBottom: '20px',
//   };

//   const inputLabelStyles = {
//     display: 'block',
//     marginBottom: '8px',
//     color: '#ccc',
//     fontWeight: '500',
//   };

//   const inputStyles = {
//     width: '100%',
//     padding: '12px',
//     backgroundColor: '#2a2a2a',
//     border: '1px solid #444',
//     borderRadius: '6px',
//     color: 'white',
//     fontSize: '16px',
//   };

//   const addHardwareButtonStyles = {
//     display: 'flex',
//     alignItems: 'center',
//     backgroundColor: 'transparent',
//     color: '#9b59b6',
//     border: '2px solid #9b59b6',
//     borderRadius: '6px',
//     padding: '8px 16px',
//     cursor: 'pointer',
//   fontSize: '14px',
//     fontWeight: 'bold',
//     marginLeft: 'auto',
//     marginBottom: '20px',
//     transition: 'all 0.2s ease',
//   };

//   const plusIconStyles = {
//     marginRight: '8px',
//     fontSize: '18px',
//     fontWeight: 'bold',
//   };

//   const hasRegisteredHardware = Array.isArray(registeredHardware) && registeredHardware.length > 0;
//   const displayHardware = hasRegisteredHardware ? registeredHardware : [];

//   return (
//     <div className="dashboard-content-container">
//       <div className="dashboard-tab active">
//         {/* Stats Section with Dynamic Data */}
//         <div className="stats-container">
//           <div className="stat-card">
//             <div className="stat-card-header">
//               <span>Active Licenses</span>
//               <span>🔑</span>
//             </div>
//             <div className="stat-card-value">{overviewData?.activeLicenses ?? 'Loading...'}</div>
//             <div className="stat-card-label">Valid licenses</div>
//           </div>
//           <div className="stat-card">
//             <div className="stat-card-header">
//               <span>Current Plan</span>
//               <span>⭐</span>
//             </div>
//             <div className="stat-card-value">
//   {overviewData?.currentPlan ?? '0'}
// </div>

// <div className="stat-card-label">
//  Plan Subscription
// </div>


//           </div>
//           <div className="stat-card">
//             <div className="stat-card-header">
//               <span>Support Tickets</span>
//               <span>🎟️</span>
//             </div>
//             <div className="stat-card-value">{overviewData?.supportTickets ?? 'Loading...'}</div>
//             <div className="stat-card-label">{overviewData?.supportTickets === 0 ? 'No pending tickets' : 'Pending tickets'}</div>
//           </div>
//           <div className="stat-card">
//             <div className="stat-card-header">
//               <span>Last Payment</span>
//               <span>💳</span>
//             </div>
//             <div className="stat-card-value">
//   {overviewData?.lastPayment ? 
//     `$${overviewData.lastPayment.amount}` : 
//     '$0'}
// </div>
// <div className="stat-card-label">
//   {overviewData?.lastPayment ? '' : 'No payment found'}
// </div>


//             <div className="stat-card-label">
//               {overviewData?.lastPayment
//                 ? new Date(overviewData.lastPayment.date).toLocaleDateString('en-US', {
//                     month: 'long',
//                     day: 'numeric',
//                     year: 'numeric',
//                   })
//                 : ''}
//             </div>
//           </div>
//         </div>

//         {/* Quick Actions - Unchanged */}
//         <h2 className="section-title">Quick Actions</h2>
//         <div className="card-container">
//           <div className="plan-card">
//             <h3 className="plan-name"> Available Plans</h3>
//             <p className="plan-desc">Select your Plans as per your need</p>
//             <div className="feature-list">
//               <div className="feature-item"><i>✓</i> Trail</div>
//               <div className="feature-item"><i>✓</i> Custom</div>
//               <div className="feature-item"><i>✓</i> Premium</div>
//             </div>
//             <button className="btn btn-primary">Select Plan</button>
//           </div>

//           <div className="plan-card" onClick={showDownloadPopup}>
//             <h3 className="plan-name">Download Software</h3>
//             <p className="plan-desc">Get the latest version of our software</p>
//             <div className="feature-list">
//               <div className="feature-item"><i>✓</i> Latest version (v2.1.3)</div>
//               <div className="feature-item"><i>✓</i> Windows & Mac compatible</div>
//               <div className="feature-item"><i>✓</i> Offline installer</div>
//             </div>
//             <button className="btn btn-primary">Download Now</button>
//           </div>

//           <div className="plan-card">
//             <h3 className="plan-name">Need Help?</h3>
//             <p className="plan-desc">Get support from our team</p>
//             <div className="feature-list">
//               <div className="feature-item"><i>✓</i> 24/7 Support</div>
//               <div className="feature-item"><i>✓</i> Priority response</div>
//               <div className="feature-item"><i>✓</i> Dedicated assistance</div>
//             </div>
//             <button className="btn btn-primary">Contact Support</button>
//           </div>
//         </div>

//         {/* Recent Licenses with Add Hardware Button - Unchanged */}
//         <div style={{ display: 'flex', alignItems: 'center' }}>
//           <h2 className="section-title">Hardware Devices</h2>
//           <button style={addHardwareButtonStyles} onClick={showHardwareForm}>
//             <span style={plusIconStyles}>+</span> Add Hardware
//           </button>
//         </div>

//         {isLoading ? (
//           <div style={{
//             marginTop: '20px',
//             marginBottom: '40px',
//             padding: '40px 20px',
//             borderRadius: '10px',
//             textAlign: 'center',
//           }}>
//             <p style={{ color: '#999', fontSize: '18px' }}>Loading hardware...</p>
//           </div>
//         ) : error ? (
//           <div style={{
//             marginTop: '20px',
//             marginBottom: '40px',
//             padding: '40px 20px',
//             border: '2px dashed #444',
//             borderRadius: '10px',
//             textAlign: 'center',
//             backgroundColor: 'rgba(0, 0, 0, 0.2)'
//           }}>
//             <p style={{ color: '#e74c3c', fontSize: '18px', marginBottom: '15px' }}>{error}</p>
//             <button 
//               style={{
//                 background: 'linear-gradient(to right, #8e44ad, #9b59b6)',
//                 color: 'white',
//                 padding: '8px 20px',
//                 border: 'none',
//                 borderRadius: '6px',
//                 cursor: 'pointer',
//                 fontSize: '14px',
//                 fontWeight: 'bold',
//                 display: 'inline-block',
//               }} 
//               onClick={fetchHardwareList}
//             >
//               Try Again
//             </button>
//           </div>
//         ) : displayHardware.length > 0 ? (
//           <div className="table-container">
//             <table>
//               <thead>
//                 <tr>
//                   <th>Hardware ID</th>
//                   <th>Nickname</th>
//                   <th>Date</th>
//                   <th>Actions</th>

//                 </tr>
//               </thead>
//               <tbody>
//                 {displayHardware.map((hardware, index) => (
//                   <tr key={hardware._id || index}>
//                     <td>{hardware.hardwareId}</td>
//                     <td>{hardware.nickName}</td>
//                     <td>{hardware.createdAt}</td>


//                     <td>
//                       <button 
//                         className="btn btn-primary"
//                         onClick={() => navigate('/plans')}
//                       >
//                         Generate License
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         ) : (
//           <div style={{
//             marginTop: '20px',
//             marginBottom: '40px',
//             padding: '40px 20px',
//             border: '2px dashed #444',
//             borderRadius: '10px',
//             textAlign: 'center',
//             backgroundColor: 'rgba(0, 0, 0, 0.2)'
//           }}>
//             <div style={{
//               fontSize: '40px',
//               color: '#8e44ad',
//               marginBottom: '15px',
//               opacity: '0.7'
//             }}>+</div>
//             <p style={{ 
//               color: '#999', 
//               fontSize: '18px', 
//               marginBottom: '20px' 
//             }}>No hardware registered yet</p>
//             <button 
//               style={{
//                 background: 'linear-gradient(to right, #8e44ad, #9b59b6)',
//                 color: 'white',
//                 padding: '12px 30px',
//                 border: 'none',
//                 borderRadius: '6px',
//                 cursor: 'pointer',
//                 fontSize: '16px',
//                 fontWeight: 'bold',
//                 display: 'inline-block',
//                 transition: 'all 0.2s ease',
//                 boxShadow: '0 4px 12px rgba(142, 68, 173, 0.3)',
//               }} 
//               onClick={showHardwareForm}
//             >
//               Register Hardware
//             </button>
//           </div>
//         )}
//       </div>

//       {/* Download Popup Modal - Unchanged */}
//       {isPopupVisible && (
//         <div style={modalStyles}>
//           <div style={modalContentStyles}>
//             <span 
//               style={closeButtonStyles} 
//               onClick={closeDownloadPopup}
//             >
//               ×
//             </span>
//             <h3 style={{ marginTop: '0', color: '#fff', fontSize: '22px', fontWeight: '600',  marginBottom: '25px' }}>Minimum System Requirements</h3>
//             <ul style={systemReqListStyles}>
//               <li style={listItemStyles}>
//                 <span style={checkmarkStyles}>✓</span>
//                 <span>Operating System: Windows 10 or later </span>
//               </li>
//               <li style={listItemStyles}>
//                 <span style={checkmarkStyles}>✓</span>
//                 <span>RAM: 8GB minimum (16GB recommended)</span>
//               </li>
             
//               <li style={listItemStyles}>
//                 <span style={checkmarkStyles}>✓</span>
//                 <span>Storage: 512GB SSD</span>
//               </li>
//               <li style={listItemStyles}>
//                 <span style={checkmarkStyles}>✓</span>
//                 <span>GPU: RTX 3060 or greater</span>
//               </li>
            
//               <li style={listItemStyles}>
//                 <span style={checkmarkStyles}>✓</span>
//                 <span>CPU: Intel i5 14th Gen / AMD Ryzen 5 7000 Series or greater</span>
//               </li>
//             </ul>
//             <button 

//                         href={windowsDownloadUrl}

//               className='btn btn-primary1'
//               onClick={confirmDownload}
//             >
//               Download
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Hardware Registration Form Popup - Unchanged */}
//       {isHardwareFormVisible && (
//         <div style={modalStyles}>
//           <div style={modalContentStyles}>
//             <span 
//               style={closeButtonStyles} 
//               onClick={closeHardwareForm}
//             >
//               ×
//             </span>
//             <h3 style={{ marginTop: '0', color: '#fff', fontSize: '22px', fontWeight: '600', textAlign: 'center', marginBottom: '25px' }}>Register Your Hardware</h3>

//             <div style={formGroupStyles}>
//               <label htmlFor="hardwareId" style={inputLabelStyles}>Hardware ID</label>
//               <input 
//                 type="text"
//                 id="hardwareId"
//                 style={inputStyles}
//                 placeholder="Enter hardware ID (e.g., 1234567890)"
//                 value={hardwareIdInput}
//                 onChange={(e) => setHardwareIdInput(e.target.value)}
//               />
//             </div>

//             <div style={formGroupStyles}>
//               <label htmlFor="deviceName" style={inputLabelStyles}>Device Name</label>
//               <input 
//                 type="text"
//                 id="deviceName"
//                 style={inputStyles}
//                 placeholder="Enter device nickname (e.g., Work Laptop)"
//                 value={deviceNameInput}
//                 onChange={(e) => setDeviceNameInput(e.target.value)}
//               />
//             </div>

//             <div style={{ display: 'flex', justifyContent: 'center' }}>
//               <button 
//                 className='btn btn-primary1'
//                 onClick={submitHardwareForm}
//                 disabled={isLoading}
//               >
//                 {isLoading ? 'Registering...' : 'Register Hardware'}
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Dashboard;




import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isHardwareFormVisible, setIsHardwareFormVisible] = useState(false);
  const [registeredHardware, setRegisteredHardware] = useState([]);
  const [hardwareIdInput, setHardwareIdInput] = useState('');
  const [deviceNameInput, setDeviceNameInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [overviewData, setOverviewData] = useState(null);

  const navigate = useNavigate();

  const showDownloadPopup = () => {
    setIsPopupVisible(true);
  };

  const closeDownloadPopup = () => {
    setIsPopupVisible(false);
  };

  const windowsDownloadUrl =
    'https://download1339.mediafire.com/oog2fldbe4ygoq2LropPiTz1adniPUUnT4_gew80N8lFjHi1SbJ2MhFkh1q4hR3QjVlqg_riGIAIAUUfTihNkDcLPAPbrzuEI7vy_cdG7NYhooT-lrWLQv4BLuEhj1rbUDXnhz-Un2twD52PuygFznoLojwpjbMjz_A2EuswFqoYKKA/j5p8pjyks0a8vae/ZENCIA+1.07.zip';

  // Removed confirmDownload function since we want direct download

  const showHardwareForm = () => {
    setIsHardwareFormVisible(true);
  };

  const closeHardwareForm = () => {
    setIsHardwareFormVisible(false);
    setHardwareIdInput('');
    setDeviceNameInput('');
  };

  useEffect(() => {
    fetchHardwareList();
    fetchOverviewData(); 
  }, []);

  const safelyParseJSON = async (response) => {
    const text = await response.text();
    try {
      if (text.trim().startsWith('<!DOCTYPE') || text.trim().startsWith('<html')) {
        console.error('Received HTML instead of JSON:', text.substring(0, 100) + '...');
        throw new Error('Server returned HTML instead of JSON. You might need to login again.');
      }
      return JSON.parse(text);
    } catch (error) {
      console.error('Error parsing JSON response:', error);
      throw new Error('Invalid server response. Please try again later.');
    }
  };

  const fetchHardwareList = async () => {
    setIsLoading(true);
    setError(null);
  
    try {
      const authToken = localStorage.getItem('authToken');
      console.log('Retrieved authToken from localStorage:', authToken);
  
      if (!authToken) {
        console.log('No authToken found');
        setError('Authentication token not found. Please log in again.');
        setIsLoading(false);
        window.location.href = '/login';
        return;
      }
  
      console.log('Fetching hardware with token:', authToken);
  
      const response = await axios.get('https://zencia-finalbackend.vercel.app/api/hardware/hardwares-by-user', {
        headers: {
          'Authorization': `${authToken}`
        }
      });
  
      console.log('Response status:', response.status);
      console.log('Response headers:', response.headers);
      console.log('Response data:', response.data);
  
      const data = response.data;
  
      if (response.status === 404) {
        console.log(' - No hardware found for this user');
        setRegisteredHardware([]);
      } else {
        console.log('Setting registered hardware:', data.hardwareList);
        setRegisteredHardware(data.hardwareList || []);
      }
    } catch (error) {
      console.error('Error fetching hardware:', error);
  
      if (error.response) {
        console.log('Error response status:', error.response.status);
        console.log('Error response data:', error.response.data);
  
        if (error.response.status === 401) {
          console.log('Received 401 - Session expired');
          setError('Session expired. Please log in again.');
          localStorage.removeItem('authToken');
          window.location.href = '/login';
          return;
        }
  
        if (error.response.status === 404) {
          console.log('Received 404 - No hardware found');
          setRegisteredHardware([]);
        } else {
          setError(error.response.data?.message || `API error: ${error.response.status}`);
        }
      } else if (error.request) {
        console.log('No response received:', error.request);
        setError('No response from server. Please check your connection.');
      } else {
        console.log('Request setup error:', error.message);
        setError('Error connecting to server');
      }
    } finally {
      console.log('Fetch completed, setting isLoading to false');
      setIsLoading(false);
    }
  };

  const fetchOverviewData = async () => {
    try {
      const authToken = localStorage.getItem('authToken');
      if (!authToken) {
        console.log('No authToken found for overview');
        return;
      }

      const response = await axios.get('https://zencia-finalbackend.vercel.app/api/hardware/overview', {
        headers: {
          'Authorization': `${authToken}`
        }
      });

      console.log('Overview response data:', response.data);
      setOverviewData(response.data.data);
    } catch (error) {
      console.error('Error fetching overview data:', error);
      if (error.response?.status === 401) {
        localStorage.removeItem('authToken');
        window.location.href = '/auth/login';
      }
    }
  };

  const submitHardwareForm = async () => {
    if (!hardwareIdInput || !deviceNameInput) {
      alert('Please fill in all fields');
      return;
    }

    setIsLoading(true);

    try {
      const authToken = localStorage.getItem('authToken');

      if (!authToken) {
        alert('Authentication token not found. Please log in again.');
        setIsLoading(false);
        return;
      }

      console.log('Registering hardware with token:', authToken);
      console.log('Hardware data:', { hardwareId: hardwareIdInput, nickName: deviceNameInput });

      const response = await fetch('https://zencia-finalbackend.vercel.app/api/hardware/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${authToken}`
        },
        body: JSON.stringify({
          hardwareId: hardwareIdInput,
          nickName: deviceNameInput
        }),
      });

      console.log('Registration response status:', response.status);
      
      const data = await safelyParseJSON(response);
      console.log('Registration response data:', data);

      if (response.ok) {
        alert('Hardware registered successfully!');
        setIsHardwareFormVisible(false);
        
        setHardwareIdInput('');
        setDeviceNameInput('');
        
        setTimeout(() => fetchHardwareList(), 500);
      } else {
        alert(data.message || 'Failed to register hardware');
      }
    } catch (error) {
      console.error('Error registering hardware:', error);
      alert(error.message || 'Error connecting to server');
    } finally {
      setIsLoading(false);
    }
  };

  const modalStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  };

  const modalContentStyles = {
    backgroundColor: '#1e1e1e',
    padding: '30px',
    borderRadius: '10px',
    border: '1px solid #333',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)',
    maxWidth: '550px',
    width: '90%',
    position: 'relative',
    color: '#fff',
  };

  const closeButtonStyles = {
    position: 'absolute',
    top: '15px',
    right: '18px',
    fontSize: '24px',
    fontWeight: 'bold',
    cursor: 'pointer',
    color: '#999',
    transition: 'color 0.2s',
    background: 'none',
    border: 'none',
    outline: 'none',
    padding: '5px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '30px',
    height: '30px',
  };

  const systemReqListStyles = {
    marginTop: '20px',
    marginBottom: '25px',
    paddingLeft: '10px',
    color: '#ccc',
    listStyleType: 'none',
  };

  const listItemStyles = {
    marginBottom: '16px',
    lineHeight: '1.6',
    display: 'flex',
    alignItems: 'center',
  };

  const checkmarkStyles = {
    color: '#8e44ad',
    marginRight: '10px',
    fontSize: '16px',
    fontWeight: 'bold',
  };

  const formGroupStyles = {
    marginBottom: '20px',
  };

  const inputLabelStyles = {
    display: 'block',
    marginBottom: '8px',
    color: '#ccc',
    fontWeight: '500',
  };

  const inputStyles = {
    width: '100%',
    padding: '12px',
    backgroundColor: '#2a2a2a',
    border: '1px solid #444',
    borderRadius: '6px',
    color: 'white',
    fontSize: '16px',
  };

  const addHardwareButtonStyles = {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'transparent',
    color: '#9b59b6',
    border: '2px solid #9b59b6',
    borderRadius: '6px',
    padding: '8px 16px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: 'bold',
    marginLeft: 'auto',
    marginBottom: '20px',
    transition: 'all 0.2s ease',
  };

  const plusIconStyles = {
    marginRight: '8px',
    fontSize: '18px',
    fontWeight: 'bold',
  };

  const hasRegisteredHardware = Array.isArray(registeredHardware) && registeredHardware.length > 0;
  const displayHardware = hasRegisteredHardware ? registeredHardware : [];

  return (
    <div className="dashboard-content-container">
      <div className="dashboard-tab active">
        <div className="stats-container">
          <div className="stat-card">
            <div className="stat-card-header">
              <span>Active Licenses</span>
              <span>🔑</span>
            </div>
            <div className="stat-card-value">{overviewData?.activeLicenses ?? 'Loading...'}</div>
            <div className="stat-card-label">Valid licenses</div>
          </div>
          <div className="stat-card">
            <div className="stat-card-header">
              <span>Current Plan</span>
              <span>⭐</span>
            </div>
            <div className="stat-card-value">{overviewData?.currentPlan ?? '0'}</div>
            <div className="stat-card-label">Plan Subscription</div>
          </div>
          <div className="stat-card">
            <div className="stat-card-header">
              <span>Support Tickets</span>
              <span>🎟️</span>
            </div>
            <div className="stat-card-value">{overviewData?.supportTickets ?? 'Loading...'}</div>
            <div className="stat-card-label">{overviewData?.supportTickets === 0 ? 'No pending tickets' : 'Pending tickets'}</div>
          </div>
          <div className="stat-card">
            <div className="stat-card-header">
              <span>Last Payment</span>
              <span>💳</span>
            </div>
            <div className="stat-card-value">
              {overviewData?.lastPayment ? `$${overviewData.lastPayment.amount}` : '$0'}
            </div>
            <div className="stat-card-label">
              {overviewData?.lastPayment
                ? new Date(overviewData.lastPayment.date).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })
                : 'No payment found'}
            </div>
          </div>
        </div>

        <h2 className="section-title">Quick Actions</h2>
        <div className="card-container">
          <div className="plan-card">
            <h3 className="plan-name"> Available Plans</h3>
            <p className="plan-desc">Select your Plans as per your need</p>
            <div className="feature-list">
              <div className="feature-item"><i>✓</i> Trial</div>
              <div className="feature-item"><i>✓</i> Custom</div>
              <div className="feature-item"><i>✓</i> Premium</div>
            </div>
            <button 
  className="btn btn-primary" 
  onClick={() => navigate('/plans')}
>
  Select Plan
</button>
          </div>

          <div className="plan-card" onClick={showDownloadPopup}>
            <h3 className="plan-name">Download Software</h3>
            <p className="plan-desc">Get the latest version of our software</p>
            <div className="feature-list">
              <div className="feature-item"><i>✓</i> Latest version (v2.1.3)</div>
              <div className="feature-item"><i>✓</i> Windows & Mac compatible</div>
              <div className="feature-item"><i>✓</i> Offline installer</div>
            </div>
            <button className="btn btn-primary">Download Now</button>
          </div>

          <div className="plan-card">
            <h3 className="plan-name">Need Help?</h3>
            <p className="plan-desc">Get support from our team</p>
            <div className="feature-list">
              <div className="feature-item"><i>✓</i> 24/7 Support</div>
              <div className="feature-item"><i>✓</i> Priority response</div>
              <div className="feature-item"><i>✓</i> Dedicated assistance</div>
            </div>
            <button 
  className="btn btn-primary" 
  onClick={() => navigate('/contact-us')}
>
  Contact Support
</button>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center' }}>
          <h2 className="section-title">Hardware Devices</h2>
          <button style={addHardwareButtonStyles} onClick={showHardwareForm}>
            <span style={plusIconStyles}>+</span> Add Hardware
          </button>
        </div>

        {isLoading ? (
          <div style={{
            marginTop: '20px',
            marginBottom: '40px',
            padding: '40px 20px',
            borderRadius: '10px',
            textAlign: 'center',
          }}>
            <p style={{ color: '#999', fontSize: '18px' }}>Loading hardware...</p>
          </div>
        ) : error ? (
          <div style={{
            marginTop: '20px',
            marginBottom: '40px',
            padding: '40px 20px',
            border: '2px dashed #444',
            borderRadius: '10px',
            textAlign: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.2)'
          }}>
            <p style={{ color: '#e74c3c', fontSize: '18px', marginBottom: '15px' }}>{error}</p>
            <button 
              style={{
                background: 'linear-gradient(to right, #8e44ad, #9b59b6)',
                color: 'white',
                padding: '8px 20px',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: 'bold',
                display: 'inline-block',
              }} 
              onClick={fetchHardwareList}
            >
              Try Again
            </button>
          </div>
        ) : displayHardware.length > 0 ? (
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Hardware ID</th>
                  <th>Nickname</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {displayHardware.map((hardware, index) => (
                  <tr key={hardware._id || index}>
                    <td>{hardware.hardwareId}</td>
                    <td>{hardware.nickName}</td>
                    <td>{hardware.createdAt}</td>
                    <td>
                      <button 
                        className="btn btn-primary"
                        onClick={() => navigate('/plans')}
                      >
                        Generate License
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div style={{
            marginTop: '20px',
            marginBottom: '40px',
            padding: '40px 20px',
            border: '2px dashed #444',
            borderRadius: '10px',
            textAlign: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.2)'
          }}>
            <div style={{
              fontSize: '40px',
              color: '#8e44ad',
              marginBottom: '15px',
              opacity: '0.7'
            }}>+</div>
            <p style={{ 
              color: '#999', 
              fontSize: '18px', 
              marginBottom: '20px' 
            }}>No hardware registered yet</p>
            <button 
              style={{
                background: 'linear-gradient(to right, #8e44ad, #9b59b6)',
                color: 'white',
                padding: '12px 30px',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '16px',
                fontWeight: 'bold',
                display: 'inline-block',
                transition: 'all 0.2s ease',
                boxShadow: '0 4px 12px rgba(142, 68, 173, 0.3)',
              }} 
              onClick={showHardwareForm}
            >
              Register Hardware
            </button>
          </div>
        )}
      </div>

      {isPopupVisible && (
        <div style={modalStyles}>
          <div style={modalContentStyles}>
            <span 
              style={closeButtonStyles} 
              onClick={closeDownloadPopup}
            >
              ×
            </span>
            <h3 style={{ marginTop: '0', color: '#fff', fontSize: '22px', fontWeight: '600',  marginBottom: '25px' }}>Minimum System Requirements</h3>
            <ul style={systemReqListStyles}>
              <li style={listItemStyles}>
                <span style={checkmarkStyles}>✓</span>
                <span>Operating System: Windows 10 or later </span>
              </li>
              <li style={listItemStyles}>
                <span style={checkmarkStyles}>✓</span>
                <span>RAM: 8GB minimum (16GB recommended)</span>
              </li>
              <li style={listItemStyles}>
                <span style={checkmarkStyles}>✓</span>
                <span>Storage: 512GB SSD</span>
              </li>
              <li style={listItemStyles}>
                <span style={checkmarkStyles}>✓</span>
                <span>GPU: RTX 3060 or greater</span>
              </li>
              <li style={listItemStyles}>
                <span style={checkmarkStyles}>✓</span>
                <span>CPU: Intel i5 14th Gen / AMD Ryzen 5 7000 Series or greater</span>
              </li>
            </ul>
            <a 
              href={windowsDownloadUrl}
              download
              className='btn btn-primary1'
            >
              Download
            </a>
          </div>
        </div>
      )}

      {isHardwareFormVisible && (
        <div style={modalStyles}>
          <div style={modalContentStyles}>
            <span 
              style={closeButtonStyles} 
              onClick={closeHardwareForm}
            >
              ×
            </span>
            <h3 style={{ marginTop: '0', color: '#fff', fontSize: '22px', fontWeight: '600', textAlign: 'center', marginBottom: '25px' }}>Register Your Hardware</h3>

            <div style={formGroupStyles}>
              <label htmlFor="hardwareId" style={inputLabelStyles}>Hardware ID</label>
              <input 
                type="text"
                id="hardwareId"
                style={inputStyles}
                placeholder="Enter hardware ID (e.g., 1234567890)"
                value={hardwareIdInput}
                onChange={(e) => setHardwareIdInput(e.target.value)}
              />
            </div>

            <div style={formGroupStyles}>
              <label htmlFor="deviceName" style={inputLabelStyles}>Device Name</label>
              <input 
                type="text"
                id="deviceName"
                style={inputStyles}
                placeholder="Enter device nickname (e.g., Work Laptop)"
                value={deviceNameInput}
                onChange={(e) => setDeviceNameInput(e.target.value)}
              />
            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <button 
                className='btn btn-primary1'
                onClick={submitHardwareForm}
                disabled={isLoading}
              >
                {isLoading ? 'Registering...' : 'Register Hardware'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;