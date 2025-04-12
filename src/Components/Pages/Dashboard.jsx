// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Dashboard.css';

// function Dashboard() {
//   const [isPopupVisible, setIsPopupVisible] = useState(false);
//   const [registeredHardware, setRegisteredHardware] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [overviewData, setOverviewData] = useState(null);
//   const [userName, setUserName] = useState('');

//   const navigate = useNavigate();

//   useEffect(() => {
//     // Get user name from local storage or set a default
//     const storedUserName = localStorage.getItem('userName') || 'User';
//     setUserName(storedUserName);
    
//     fetchHardwareList();
//     fetchOverviewData();
//   }, []);

//   const showDownloadPopup = () => {
//     setIsPopupVisible(true);
//   };

//   const closeDownloadPopup = () => {
//     setIsPopupVisible(false);
//   };

//   const windowsDownloadUrl =
//     'https://download851.mediafire.com/p0wtbetqwxngHw2b5fmmhG5vEOBzsU7dPH6YG4e7HCdU4Ji_wqD3udJEcV91Hv8WG0GKrBHk6hCXlIwZHqXyR40xFDd5-GP5Xexpr6iFeUt865dG83xaRy84ufZLkxlz_IIpGWJOB8gLAMhQLMJazxOVOy9CYUotzg4O_WLtvZvMKA/97zk5juwksd1a70/ZENCIA-1.0.0.zip';

//   const fetchHardwareList = async () => {
//     setIsLoading(true);
//     setError(null);
  
//     try {
//       const authToken = localStorage.getItem('authToken');
      
//       if (!authToken) {
//         setError('Authentication token not found. Please log in again.');
//         setIsLoading(false);
//         window.location.href = '/login';
//         return;
//       }
  
      // const response = await axios.get('https://zencia-finalbackend.vercel.app/api/hardware/hardwares-by-user', {
      //   headers: {
      //     'Authorization': `${authToken}`
      //   }
      // });
  
//       const data = response.data;
  
//       if (response.status === 404) {
//         setRegisteredHardware([]);
//       } else {
//         setRegisteredHardware(data.hardwareList || []);
//       }
//     } catch (error) {
//       console.error('Error fetching hardware:', error);
  
//       if (error.response) {
//         if (error.response.status === 401) {
//           setError('Session expired. Please log in again.');
//           localStorage.removeItem('authToken');
//           window.location.href = '/login';
//           return;
//         }
  
//         if (error.response.status === 404) {
//           setRegisteredHardware([]);
//         } else {
//           setError(error.response.data?.message || `API error: ${error.response.status}`);
//         }
//       } else if (error.request) {
//         setError('No response from server. Please check your connection.');
//       } else {
//         setError('Error connecting to server');
//       }
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const fetchOverviewData = async () => {
//     try {
//       const authToken = localStorage.getItem('authToken');
//       if (!authToken) {
//         return;
//       }

//       const response = await axios.get('https://zencia-finalbackend.vercel.app/api/hardware/overview', {
//         headers: {
//           'Authorization': `${authToken}`
//         }
//       });

//       setOverviewData(response.data.data);
//     } catch (error) {
//       console.error('Error fetching overview data:', error);
//       if (error.response?.status === 401) {
//         localStorage.removeItem('authToken');
//         window.location.href = '/auth/login';
//       }
//     }
//   };

//   const hasRegisteredHardware = Array.isArray(registeredHardware) && registeredHardware.length > 0;
//   const displayHardware = hasRegisteredHardware ? registeredHardware : [];

//   return (
//     <div className="dashboard-container">
//       {/* Header Section */}
//       <div className="dashboard-header">
//         <div className="user-welcome">
//           <h1>Welcome, {userName}!</h1>
//           <p>Manage your Zencia Account</p>
//         </div>
//         <button className="get-started-btn" onClick={() => navigate('/plans')}>
//           <span>Get Started</span>
//           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//             <path d="M5 12h14"></path>
//             <path d="M12 5l7 7-7 7"></path>
//           </svg>
//         </button>
//       </div>

//       {/* Stats Cards */}
//       <div className="stats-grid">
//         <div className="stat-card">
//           <div className="stat-info">
//             <h3>Active Licenses</h3>
//             <div className="stat-value">{overviewData?.activeLicenses ?? '0'}</div>
//             <div className="stat-label">Valid licenses</div>
//           </div>
//           <div className="stat-icon license-icon">🔑</div>
//         </div>

//         <div className="stat-card">
//           <div className="stat-info">
//             <h3>Current Plan</h3>
//             <div className="stat-value">{overviewData?.currentPlan ?? 'None'}</div>
//             <div className="stat-label">Plan Subscription</div>
//           </div>
//           <div className="stat-icon plan-icon">⭐</div>
//         </div>

//         <div className="stat-card">
//           <div className="stat-info">
//             <h3>Support Tickets</h3>
//             <div className="stat-value">{overviewData?.supportTickets ?? '0'}</div>
//             <div className="stat-label">
//               {overviewData?.supportTickets === 0 ? 'No pending tickets' : 'Pending tickets'}
//             </div>
//           </div>
//           <div className="stat-icon tickets-icon">🎟️</div>
//         </div>

//         <div className="stat-card">
//           <div className="stat-info">
//             <h3>Last Payment</h3>
//             <div className="stat-value">
//               {overviewData?.lastPayment ? `$${overviewData.lastPayment.amount}` : '$0'}
//             </div>
//             <div className="stat-label">
//               {overviewData?.lastPayment
//                 ? new Date(overviewData.lastPayment.date).toLocaleDateString('en-US', {
//                     month: 'long',
//                     day: 'numeric',
//                     year: 'numeric',
//                   })
//                 : 'No payment found'}
//             </div>
//           </div>
//           <div className="stat-icon payment-icon">💳</div>
//         </div>
//       </div>

//       {/* Action Cards Section */}
//       <div className="section">
//         <div className="section-header">
//           <div className="section-marker"></div>
//           <h2>Quick Actions</h2>
//         </div>
//         <div className="actions-grid">
//           <div className="action-card" onClick={showDownloadPopup}>
//             <div className="action-content">
//               <h3>Download Software</h3>
//               <p>Get the latest version of our software</p>
//               <ul className="feature-list">
//                 <li><span className="check-icon">✓</span> Latest version (v2.1.3)</li>
//                 <li><span className="check-icon">✓</span> Windows & Mac compatible</li>
//                 <li><span className="check-icon">✓</span> Offline installer</li>
//               </ul>
//             </div>
//             <button className="action-button">Download Now</button>
//           </div>

//           <div className="action-card">
//             <div className="action-content">
//               <h3>Need Help?</h3>
//               <p>Get support from our team</p>
//               <ul className="feature-list">
//                 <li><span className="check-icon">✓</span> 24/7 Support</li>
//                 <li><span className="check-icon">✓</span> Priority response</li>
//                 <li><span className="check-icon">✓</span> Dedicated assistance</li>
//               </ul>
//             </div>
//             <button className="action-button" onClick={() => navigate('/contact-us')}>
//               Contact Support
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Hardware Devices Section */}
//       <div className="section">
//         <div className="section-header">
//           <div className="section-marker"></div>
//           <h2>Hardware Devices</h2>
//         </div>

//         {isLoading ? (
//           <div className="status-container loading">
//             <div className="loader"></div>
//             <p>Loading hardware devices...</p>
//           </div>
//         ) : error ? (
//           <div className="status-container error">
//             <div className="error-icon">⚠️</div>
//             <p>{error}</p>
//             <button className="retry-btn" onClick={fetchHardwareList}>Try Again</button>
//           </div>
//         ) : displayHardware.length > 0 ? (
//           <div className="hardware-table-container">
//             <table className="hardware-table">
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
//                     <td className="hardware-id">{hardware.hardwareId}</td>
//                     <td>{hardware.nickName}</td>
//                     <td>{new Date(hardware.createdAt).toLocaleDateString('en-US', {
//                       year: 'numeric',
//                       month: 'short',
//                       day: 'numeric'
//                     })}</td>
//                     <td>
//                       <button 
//                         className="license-btn"
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
//           <div className="empty-hardware">
//             <div className="computer-icon">💻</div>
//             <h3>No hardware devices found</h3>
//             <p>Hardware devices will appear here after you install the software and run it on your computer.</p>
//           </div>
//         )}
//       </div>

//       {/* Download Popup */}
//       {isPopupVisible && (
//         <div className="popup-overlay">
//           <div className="popup-content">
//             <button className="close-btn" onClick={closeDownloadPopup}>×</button>
//             <h3>Minimum System Requirements</h3>
//             <ul className="req-list">
//               <li>
//                 <span className="req-check">✓</span>
//                 <span>Operating System: Windows 10 or later</span>
//               </li>
//               <li>
//                 <span className="req-check">✓</span>
//                 <span>RAM: 8GB minimum (16GB recommended)</span>
//               </li>
//               <li>
//                 <span className="req-check">✓</span>
//                 <span>Storage: 512GB SSD</span>
//               </li>
//               <li>
//                 <span className="req-check">✓</span>
//                 <span>GPU: RTX 3060 or greater</span>
//               </li>
//               <li>
//                 <span className="req-check">✓</span>
//                 <span>CPU: Intel i5 14th Gen / AMD Ryzen 5 7000 Series or greater</span>
//               </li>
//             </ul>
//             <a 
//               href={windowsDownloadUrl}
//               download
//               className="download-btn"
//             >
//               Download Now
//             </a>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Dashboard;




import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Plan.css"; // Keep existing CSS

const Plan = () => {
  const [plans, setPlans] = useState([]);
  const [hardwareList, setHardwareList] = useState([]);
  const [loadingPlans, setLoadingPlans] = useState(true);
  const [loadingHardware, setLoadingHardware] = useState(true);
  const [error, setError] = useState(null);

  const token = localStorage.getItem("authToken");
  const navigate = useNavigate();

  // Fetch plans (from Plan)
  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const response = await axios.get("https://zencia-finalbackend.vercel.app/api/license/get-plans");
        setPlans(response.data.allPlans);
        setLoadingPlans(false);
      } catch (err) {
        setError(err.message);
        setLoadingPlans(false);
      }
    };
    fetchPlans();
  }, []);

  // Fetch hardware IDs (from Plan, identical to Plans)
  useEffect(() => {
    const fetchHardware = async () => {
      try {
        const response = await axios.get("https://zencia-finalbackend.vercel.app/api/hardware/hardwares-by-user", {
          headers: { Authorization: `${token}` },
        });
        setHardwareList(response.data.hardwareList);
        setLoadingHardware(false);
      } catch (error) {
        setError(error.message);
        setLoadingHardware(false);
      }
    };
    if (token) fetchHardware();
    else setLoadingHardware(false);
  }, [token]);

  // Handle plan selection (from Plan)
  const handlePlanSelect = (planId, planName) => {
    navigate("/plan-selection", {
      state: {
        planId,
        planName,
        hardwareList,
      },
    });
  };

  if (loadingPlans || loadingHardware) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  // Map plans to the three-card layout, matching original Plans design
  const trialPlan = plans.find((p) => p.name === "Trial") || {};
  const customPlan = plans.find((p) => p.name === "Custom") || {};
  const premiumPlan = plans.find((p) => p.name === "Premium") || {};

  return (
    <div className="pricing-container">
      <div className="pricing-header">
        <div className="pricing-title-tag">Pricing Plan</div>
        <h1 className="pricing-title">Choose Your Most Suitable Pricing Plan</h1>
      </div>

      <div className="pricing-cards-container">
        {/* Trial Plan Card */}
        <div className="pricing-card">
          <h2 className="plan-title">{trialPlan.name || "Trial"}</h2>
          <p className="plan-description">
            {trialPlan.name ? "Limited time access to all features" : "Plan data not available"}
          </p>

          <div className="pricing-info">
            <div className="original-price">${trialPlan.price ? trialPlan.price + 1 : "1"}</div>
            <div className="current-price">${trialPlan.price || "0"}</div>
          </div>

          <p className="plan-time-info">
            Perfect for testing the platform{trialPlan.duration ? ` (${trialPlan.duration} days)` : ""}
          </p>

          <div className="features-list">
            <div className="feature-item">
              <span className="feature-icon">✓</span>
              Limited Time Access
            </div>
            <div className="feature-item">
              <span className="feature-icon">✓</span>
              Full Feature Access
            </div>
            <div className="feature-item">
              <span className="feature-icon">✓</span>
              All Personas Access            
              </div>
          </div>

          <button
            className="choose-plan-btn"
            onClick={() => handlePlanSelect(trialPlan._id, trialPlan.name || "Trial")}
          >
            Choose This Plan <span className="arrow-icon">→</span>
          </button>
        </div>

        {/* Yearly Plan Card (Custom) */}
        <div className="pricing-card popular">
          <div className="popular-tag">
            <span className="popular-icon">⚡</span> Most Popular
          </div>

          <h2 className="plan-title">{customPlan.name || "1 Year Plan"}</h2>
          <p className="plan-description">
            {customPlan.name ? "Access all features for 1 year" : "Plan data not available"}
          </p>

          <div className="pricing-info">
            <div className="original-price">{"$99"}</div>
            <div className="current-price">${customPlan.price || "49"}</div>
          </div>

          <p className="plan-time-info">
            Ideal for long-term use{customPlan.duration ? ` (${customPlan.duration} days)` : ""}
          </p>

          <div className="features-list">
            <div className="feature-item">
              <span className="feature-icon">✓</span>
              {customPlan.duration ? `${customPlan.duration} Days Access` : "1 Year Access"}
            </div>
            <div className="feature-item">
              <span className="feature-icon">✓</span>
              Full Feature Access
            </div>
            <div className="feature-item">
              <span className="feature-icon">✓</span>
              Tools access Upto One Year
            </div>
            <div className="feature-item">
              <span className="feature-icon">✓</span>
               Personas for Business Workflows
            </div>
            <div className="feature-item">
              <span className="feature-icon">✓</span>
              Ticket Support 
            </div>
          </div>

          <button
            className="choose-plan-btn gradient-btn"
            onClick={() => handlePlanSelect(customPlan._id, customPlan.name || "Custom")}
          >
            Choose This Plan <span className="arrow-icon">→</span>
          </button>
        </div>

        {/* Enterprise Plan Card (Premium) */}
        <div className="pricing-card">
          <h2 className="plan-title">{premiumPlan.name || "Customization & Enterprise"}</h2>
          <p className="plan-description">
            {premiumPlan.name ? "Perfect for businesses with advanced needs" : "Plan data not available"}
          </p>

          <div className="contact-info">
            <p>Get in touch</p>
          </div>

          <div className="features-list">
            <div className="feature-item">
              <span className="feature-icon">✓</span>
              Lifetime Access
            </div>
            <div className="feature-item">
              <span className="feature-icon">✓</span>
              Priority Support
            </div>
            <div className="feature-item">
              <span className="feature-icon">✓</span>
              White Label Solution
            </div>
            <div className="feature-item">
              <span className="feature-icon">✓</span>
              Advanced Software Customization
            </div>
          </div>

          <button className="choose-plan-btn"
            onClick={() => navigate("/contact-us")}>
             Contact Us <span className="arrow-icon">→</span>
         </button>
        </div>
      </div>
    </div>
  );
};

export default Plan;






