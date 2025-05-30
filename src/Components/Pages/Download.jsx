// import axios from 'axios';
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Downloads.css';

// const Downloads = () => {
//   const [isUnderstandChecked, setIsUnderstandChecked] = useState(false);
//   const [selectedOS, setSelectedOS] = useState('windows');
//   const navigate = useNavigate();

//   // Handle download
//   const handleDownload = async () => {
//     if (isUnderstandChecked) {
//       // Trigger file download
//       const downloadLink = '/downloads/zencia-windows.exe';
//       const link = document.createElement('a');
//       link.href = downloadLink;
//       link.download = 'zencia-windows-installer';
//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link);

//       // Call isDownloaded endpoint
//       try {
//         const token = localStorage.getItem('token');
//         if (!token) {
//           console.warn('No token found, skipping isDownloaded call');
//           return;
//         }
//         const response = await axios.put(
//           '`http://localhost:3000/api/download', // Updated to match backend route
//           {},
//           {
//             headers: {
//               Authorization: `${token}`,
//             },
//           }
//         );
//         console.log('Download status updated:', response.data);
//       } catch (error) {
//         console.error('Error updating download status:', error.response?.data || error.message);
//         alert('Download started, but status update failed. Please try again later.');
//       }
//     }
//   };

//   // Navigate to plans page for license key generation
//   const handleGenerateLicense = () => {
//     navigate('/plans');
//   };

//   return (
//     <div className="downloads-container">
//       <div className="downloads-header">
//         <div className="downloads-title-tag">Download Center</div>
//         <h1 className="downloads-title">Zencia Edge: Your Secure AI Companion</h1>
//         <p className="downloads-subtitle">
//           Unlock the power of local, private AI with complete data control and offline capabilities.
//           Zencia Edge provides a secure, intelligent assistant that works entirely on your local machine,
//           ensuring your data remains private and protected.
//         </p>
//       </div>

//       <div className="os-selection">
//         <button
//           className={`os-button ${selectedOS === 'windows' ? 'active' : ''}`}
//           onClick={() => setSelectedOS('windows')}
//         >
//           Windows
//         </button>
//         <button
//           className={`os-button ${selectedOS === 'mac' ? 'active' : ''}`}
//           onClick={() => setSelectedOS('mac')}
//         >
//           MacOS (Coming Soon)
//         </button>
//         <button
//           className={`os-button ${selectedOS === 'linux' ? 'active' : ''}`}
//           onClick={() => setSelectedOS('linux')}
//         >
//           Linux (Coming Soon)
//         </button>
//       </div>

//       <div className="downloads-cards-container">
//         <div className="downloads-card">
//           <div className="step-header">
//             <span className="step-number">01</span>
//             <h2>Software Requirements</h2>
//           </div>
//           <div className="step-content">
//             <ul className="requirements-list">
//               <li>
//                 <span className="requirement-icon">✓</span>
//                 Windows 10 or Windows 11 (64-bit)
//               </li>
//               <li>
//                 <span className="requirement-icon">✓</span>
//                 Minimum 8GB RAM recommended
//               </li>
//               <li>
//                 <span className="requirement-icon">✓</span>
//                 At least 10GB free disk space
//               </li>
//               <li>
//                 <span className="requirement-icon">✓</span>
//                 Stable internet connection for initial setup
//               </li>
//               <li>
//                 <span className="requirement-icon">✓</span>
//                 Administrator rights for installation
//               </li>
//             </ul>
//           </div>
//         </div>

//         <div className="downloads-card">
//           <div className="step-header">
//             <span className="step-number">02</span>
//             <h2>Installation Process</h2>
//           </div>
//           <div className="step-content">
//             <ul className="requirements-list">
//               <li>
//                 <span className="requirement-icon">1.</span>
//                 Download the Windows installer
//               </li>
//               <li>
//                 <span className="requirement-icon">2.</span>
//                 Run the downloaded .exe file
//               </li>
//               <li>
//                 <span className="requirement-icon">3.</span>
//                 Follow on-screen installation wizard
//               </li>
//               <li>
//                 <span className="requirement-icon">4.</span>
//                 Complete the installation process
//               </li>
//               <li>
//                 <span className="requirement-icon">5.</span>
//                 Launch Zencia Edge after installation
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>

//       <div className="download-action-container">
//         <div className="checkbox-container">
//           <input
//             type="checkbox"
//             id="understand-checkbox"
//             checked={isUnderstandChecked}
//             onChange={() => setIsUnderstandChecked(!isUnderstandChecked)}
//           />
//           <label htmlFor="understand-checkbox">
//             I understand the installation requirements and process
//           </label>
//         </div>

//         <div className="buttons-container">
//           <button
//             className={`download-button ${!isUnderstandChecked ? 'disabled' : ''}`}
//             onClick={handleDownload}
//             disabled={!isUnderstandChecked}
//           >
//             Download Zencia Edge <span className="arrow-icon">→</span>
//           </button>

//           <button className="license-button" onClick={handleGenerateLicense}>
//             Generate License Key
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Downloads;


// import axios from 'axios';
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Downloads.css';

// const Downloads = () => {
//   const [isUnderstandChecked, setIsUnderstandChecked] = useState(false);
//   const [selectedOS, setSelectedOS] = useState('windows');
//   const navigate = useNavigate();

//   // Handle download
//   const handleDownload = async () => {
//     if (isUnderstandChecked) {
//       // Trigger file download
//       const downloadLink = 'https://download851.mediafire.com/a1ydlf9c46vgWpcv3wNYW7Thik9t5ZrbZlw468pvel91m4OXVwCz18H8dAycrvM6YlEpqj4Rrwc0INKXRVNndxYL6DtOwqLgaJOmp_GWipXFZXDYlzK3Gyv63V_xLZn7JagudTZ4FAwt0Mdkr9QcgQE_zZDpHvkxajgXj8xL3iBx3A/97zk5juwksd1a70/ZENCIA-1.0.0.zip';
//       const link = document.createElement('a');
//       link.href = downloadLink;
//       link.download = 'zencia-windows-installer';
//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link);

//       // Call isDownloaded endpoint
//       try {
//         const token = localStorage.getItem('authToken');
//         if (!token) {
//           console.warn('No token found, skipping isDownloaded call');
//           return;
//         }
//         const response = await axios.put(
//           'https://zencia-finalbackend.vercel.app/api/download',
//           {},
//           {
//             headers: {
//               Authorization: `${token}`,
//             },
//           }
//         );
//         console.log('Download status updated:', response.data);
//       } catch (error) {
//         console.error('Error updating download status:', error.response?.data || error.message);
//         alert('Download started, but status update failed. Please try again later.');
//       }
//     }
//   };

//   const handleGenerateLicense = () => {
//     navigate('/plans');
//   };

//   return (
//     <div className="downloads-container">
//       <div className="downloads-header">
//         <div className="downloads-title-tag">Download Center</div>
//         <h1 className="downloads-title">Zencia Edge: Your Secure AI Companion</h1>
//         <p className="downloads-subtitle">
//           Unlock the power of local, private AI with complete data control and offline capabilities.
//           Zencia Edge provides a secure, intelligent assistant that works entirely on your local machine,
//           ensuring your data remains private and protected.
//         </p>
//       </div>

//       <div className="os-selection">
//         <button
//           className={`os-button ${selectedOS === 'windows' ? 'active' : ''}`}
//           onClick={() => setSelectedOS('windows')}
//         >
//           Windows
//         </button>
//         <button
//           className={`os-button ${selectedOS === 'mac' ? 'active' : ''}`}
//           onClick={() => setSelectedOS('mac')}
//         >
//           MacOS (Coming Soon)
//         </button>
//         <button
//           className={`os-button ${selectedOS === 'linux' ? 'active' : ''}`}
//           onClick={() => setSelectedOS('linux')}
//         >
//           Linux (Coming Soon)
//         </button>
//       </div>

//       <div className="downloads-cards-container">
//         <div className="downloads-card">
//           <div className="step-header">
//             <span className="step-number">01</span>
//             <h2>System Requirements</h2>
//           </div>
//           <div className="step-content">
//             <ul className="requirements-list">
//               <li>
//                 <span className="requirement-icon">✓</span>
//                 Windows 10 or Windows 11 (64-bit)
//               </li>
//               <li>
//                 <span className="requirement-icon">✓</span>
//                 Minimum 8GB RAM recommended
//               </li>
//               <li>
//                 <span className="requirement-icon">✓</span>
//                 At least 10GB free disk space
//               </li>
//               <li>
//                 <span className="requirement-icon">✓</span>
//                 Stable internet connection for initial setup
//               </li>
//               <li>
//                 <span className="requirement-icon">✓</span>
//                 Administrator rights for installation
//               </li>
//             </ul>
//           </div>
//         </div>

//         <div className="downloads-card">
//           <div className="step-header">
//             <span className="step-number">02</span>
//             <h2>Installation Process</h2>
//           </div>
//           <div className="step-content">
//             <ul className="requirements-list">
//               <li>
//                 <span className="requirement-icon">1.</span>
//                 Download the Windows installer
//               </li>
//               <li>
//                 <span className="requirement-icon">2.</span>
//                 Run the downloaded .exe file
//               </li>
//               <li>
//                 <span className="requirement-icon">3.</span>
//                 Follow on-screen installation wizard
//               </li>
//               <li>
//                 <span className="requirement-icon">4.</span>
//                 Complete the installation process
//               </li>
//               <li>
//                 <span className="requirement-icon">5.</span>
//                 Launch Zencia Edge after installation
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>

//       <div className="download-action-container">
//         <div className="checkbox-container">
//           <input
//             type="checkbox"
//             id="understand-checkbox"
//             checked={isUnderstandChecked}
//             onChange={() => setIsUnderstandChecked(!isUnderstandChecked)}
//           />
//           <label htmlFor="understand-checkbox">
//             I understand the installation requirements and process
//           </label>
//         </div>

//         <div className="buttons-container">
//           <button
//             className={`download-button ${!isUnderstandChecked ? 'disabled' : ''}`}
//             onClick={handleDownload}
//             disabled={!isUnderstandChecked}
//           >
//             Download Zencia Edge <span className="arrow-icon">→</span>
//           </button>

//           <button className="license-button" onClick={handleGenerateLicense}>
//             Generate License Key
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Downloads;


import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Downloads.css';

const Downloads = () => {
  const [isUnderstandChecked, setIsUnderstandChecked] = useState(false);
  const navigate = useNavigate();

  const handleDownload = async () => {
    if (isUnderstandChecked) {
      const downloadLink = 'https://zencia-exe.s3.amazonaws.com/ZENCIA-2.0.5.zip';
      const link = document.createElement('a');
      link.href = downloadLink;
      link.download = 'zencia-windows-installer';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      try {
        const token = localStorage.getItem('authToken');
        if (!token) {
          console.warn('No token found, skipping isDownloaded call');
          return;
        }
        const response = await axios.post(
          'https://zencia-finalbackend.vercel.app/api/download',
          {},
          {
            headers: {
              Authorization: `${token}`,
            },
          }
        );
        console.log('Download status updated:', response.data);
      } catch (error) {
        console.error('Error updating download status:', error.response?.data || error.message);
        alert('Download started, but status update failed. Please try again later.');
      }
    }
  };

  const handleGenerateLicense = () => {
    navigate('/plans');
  };

  return (
    <div className="downloads-container">
      <div className="downloads-header">
        <div className="downloads-title-tag">Download Center</div>
        <h1 className="downloads-title">Zencia Edge: Your Secure AI Companion</h1>
        <p className="downloads-subtitle">
          Unlock the power of local, private AI with complete data control and offline capabilities.
          Zencia Edge provides a secure, intelligent assistant that works entirely on your local machine,
          ensuring your data remains private and protected.
        </p>
      </div>

      <div className="os-selection">
        <button
          className="os-button active">
          Windows
        </button>
        <button
          className="os-button">
          MacOS (Coming Soon)
        </button>
        <button
          className="os-button">
          Linux (Coming Soon)
        </button>
      </div>

      <div className="downloads-cards-container">
        <div className="downloads-card">
          <div className="step-header">
            <span className="step-number">01</span>
            <h2>System Requirements</h2>
          </div>
          <div className="step-content">
            <div className="requirements-section">
              <h4 className="requirements-title">Minimum Requirements</h4>
              <ul className="requirements-list">
                <li>
                  <span className="requirement-icon">✓</span>
                  Windows 10 (64-bit)
                </li>
                <li>
                  <span className="requirement-icon">✓</span>
                  RAM: 16GB 
                </li>
                <li>
                  <span className="requirement-icon">✓</span>
                  Storage: 512GB SSD
                </li>
                <li>
                  <span className="requirement-icon">✓</span>
                  CPU: Intel i5 14th Gen / AMD Ryzen 5 7000 Series 
                </li>
                <li>
                  <span className="requirement-icon">✓</span>
                  GPU: RTX 3060 or greater
                </li>
               
              </ul>
            </div>
            
            <div className="requirements-section">
              <h4 className="requirements-title">Recommended Requirements</h4>
              <ul className="requirements-list">
                <li>
                  <span className="requirement-icon">✓</span>
                  Windows 11 (64-bit)
                </li>
                <li>
                  <span className="requirement-icon">✓</span>
                  RAM: 32GB DDR5
                </li>
                <li>
                  <span className="requirement-icon">✓</span>
                  Storage: 1TB SSD
                </li>
               
                <li>
                  <span className="requirement-icon">✓</span>
                  CPU: Intel i7 14th Gen / AMD Ryzen 7 7000 Series or greater
                </li>
                <li>
                  <span className="requirement-icon">✓</span>
                  GPU: RTX 4070 or greater
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="downloads-card">
          <div className="step-header">
            
            <span className="step-number">02</span>
            <h2>Installation Process </h2>
          </div>
          <div className="step-content">
          <h4 className="requirements-title">Download Process</h4>
            <ul className="requirements-list">
              <li>
                <span className="requirement-icon">1.</span>
                Download the Windows installer
              </li>
              <li>
                <span className="requirement-icon">2.</span>
                Run the downloaded .exe file
              </li>
              <li>
                <span className="requirement-icon">3.</span>
                Follow on-screen installation wizard
              </li>
              <li>
                <span className="requirement-icon">4.</span>
                Complete the installation process
              </li>
              <li>
                <span className="requirement-icon">5.</span>
                Launch Zencia Edge after installation
              </li>
            </ul>
          </div>
          <div className="step-content">
          <h4 className="requirements-title">License Key Process</h4>
            <ul className="requirements-list">
              <li>
                <span className="requirement-icon">1.</span>
                After installation, copy the Hardware ID.
              </li>
              <li>
                <span className="requirement-icon">2.</span>
                Return to the Dashboard and navigate to Plan Section
              </li>
              <li>
                <span className="requirement-icon">3.</span>
                Select the plan, Enter the Hardware ID for which you want to generate a license
              </li>
             
              <li>
                <span className="requirement-icon">4.</span>
               For trial It will Generate License 
              </li>
              <li>
                <span className="requirement-icon">5.</span>
              For Premium Plan Proceed to Checkout 
              </li>
              <li>
                <span className="requirement-icon">6.</span>
               Completing the Payment you will get your License Key
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="download-action-container">
        <div className="checkbox-container">
          <input
            type="checkbox"
            id="understand-checkbox"
            checked={isUnderstandChecked}
            onChange={() => setIsUnderstandChecked(!isUnderstandChecked)}
          />
          <label htmlFor="understand-checkbox">
            I understand the installation requirements and proccess (Proccess Takes Upto 20 mins)
          </label>
        </div>

        <div className="buttons-container">
          <button
            className={`download-button ${!isUnderstandChecked ? 'disabled' : ''}`}
            onClick={handleDownload}
            disabled={!isUnderstandChecked}
          >
            Download (Version 2.0.3) <span className="arrow-icon">→</span>
          </button>

          <button className="license-button" onClick={handleGenerateLicense}>
            Generate License Key
          </button>
        </div>
      </div>
    </div>
  );
};

export default Downloads;