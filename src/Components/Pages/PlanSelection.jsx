// import axios from "axios";


// import React, { useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";

// const PlanSelection = () => {
//   const [selectedHWID, setSelectedHWID] = useState("");
//   const [manualHWID, setManualHWID] = useState("");
//   const [licenseKey, setLicenseKey] = useState("");
//   const [message, setMessage] = useState("");
//   const [messageType, setMessageType] = useState(""); // "success" or "error"

//   const location = useLocation();
//   const navigate = useNavigate();
//   const token = localStorage.getItem("authToken");

//   const { planId, planName, hardwareList } = location.state || {};

//   const getEffectiveHWID = () => {
//     return manualHWID.trim() || selectedHWID;
//   };

//   const handleHWIDConfirm = async () => {
//     const effectiveHWID = getEffectiveHWID();
//     if (!effectiveHWID) {
//       setMessage("Please select or enter a hardware ID.");
//       setMessageType("error");
//       return;
//     }

//     if (planName === "Trial") {
//       try {
//         const licenseResponse = await axios.post(
//           "https://zencia-finalbackend.vercel.app/api/license/trail-generate",
//           {
//             planId: planId,
//             hardware_id: effectiveHWID,
//             start_date: new Date().toISOString().split("T")[0],
//           },
//           {
//             headers: {
//               "Content-Type": "application/json",
//               Authorization: `${token}`,
//             },
//           }
//         );

//         if (licenseResponse.data.success) {
//           setLicenseKey(licenseResponse.data.licenseKey);
//           setMessage("License generated successfully!");
//           setMessageType("success");
//         } else {
//           throw new Error(licenseResponse.data.message || "Failed to generate license.");
//         }
//       } catch (error) {
//         setMessage(`Failed to generate license: ${error.message}`);
//         setMessageType("error");
//       }
//     }
//   };

//   const handleCheckoutPayment = () => {
//     const effectiveHWID = getEffectiveHWID();
//     if (!effectiveHWID) {
//       setMessage("Please select or enter a hardware ID.");
//       setMessageType("error");
//       return;
//     }

//     if (planName === "Custom" || planName === "Premium") {
//       navigate(`/payment-gateway?planId=${planId}&hardwareId=${effectiveHWID}`, {
//         state: { planId, planName, hardwareId: effectiveHWID },
//       });
//     }
//   };

//   const copyToClipboard = () => {
//     navigator.clipboard.writeText(licenseKey);
//     setMessage("License key copied to clipboard!");
//     setMessageType("success");
//   };

//   const handleBack = () => {
//     navigate(-1); // Go back to previous page
//   };

//   if (!planId || !planName) {
//     return (
//       <div className="dashboard-content-container no-plan-container">
//         <div className="no-plan-message">
//           <h3>No plan selected</h3>
//           <p>Please go back and select a plan.</p>
//           <button 
//             onClick={handleBack}
//             className="btn-zencia"
//           >
//             Go Back
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="dashboard-content-container">
//       <div className="plan-selection-wrapper">
//         <div className="header-section">
//           <button 
//             onClick={handleBack}
//             className="btn-back"
//           >
//             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//               <path d="M19 12H5M12 19l-7-7 7-7"/>
//             </svg>
//             Back to Plans
//           </button>
//           <h2 className="section-title">
//             <span className="plan-highlight">{planName}</span> Plan Setup
//           </h2>
//           <p className="section-subtitle">
//             Please select or enter the Hardware ID for your device
//           </p>
//         </div>

//         <div className="form-container">
//           <div className="form-group">
//             <label htmlFor="hardware-select">
//               Choose your device
//             </label>
//             <select
//               id="hardware-select"
//               value={selectedHWID}
//               onChange={(e) => {
//                 setSelectedHWID(e.target.value);
//                 if (e.target.value) setManualHWID("");
//               }}
//             >
//               <option value="">Select a Hardware ID</option>
//               {hardwareList && hardwareList.map((hw) => (
//                 <option key={hw._id} value={hw.hardwareId}>
//                   {`${hw.hardwareId} (${hw.nickName})`}
//                 </option>
//               ))}
//             </select>
//           </div>

//           <div className="divider">
//             <span>OR</span>
//           </div>

//           <div className="form-group">
//             <label htmlFor="manual-hardware-id">
//               Enter your Hardware ID manually
//             </label>
//             <input
//               id="manual-hardware-id"
//               type="text"
//               value={manualHWID}
//               onChange={(e) => {
//                 setManualHWID(e.target.value);
//                 if (e.target.value) setSelectedHWID("");
//               }}
//               placeholder="Enter Hardware ID"
//             />
//           </div>

//           <div className="action-buttons">
//             {(selectedHWID || manualHWID) && planName === "Trial" && (
//               <button
//                 className="btn-primary"
//                 onClick={handleHWIDConfirm}
//               >
//                 Generate License
//               </button>
//             )}
//             {(selectedHWID || manualHWID) && (planName === "Custom" || planName === "Premium") && (
//               <button
//                 className="btn-primary"
//                 onClick={handleCheckoutPayment}
//               >
//                 Proceed to Payment
//               </button>
//             )}
//           </div>

//           {message && (
//             <div className={`message-container ${messageType}`}>
//               <span>{message}</span>
//             </div>
//           )}
          
//           {licenseKey && (
//             <div className="license-key-container">
//               <div className="license-header">
//                 <span className="license-title">Your License Key</span>
//                 <button
//                   className="btn-copy"
//                   onClick={copyToClipboard}
//                 >
//                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                     <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
//                     <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
//                   </svg>
//                   Copy
//                 </button>
//               </div>
//               <div className="license-content">
//                 {licenseKey}
//               </div>
//             </div>
//           )}
//         </div>
//       </div>

//       <style jsx>{`
//         .dashboard-content-container {
//           min-height: 70vh;
//           background-color: #121212;
//           color: #f8f8f8;
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           padding: 20px;
//         }
  
        
//         .header-section {
//           margin-bottom: 32px;
//           text-align: center;
//         }
        
//         .btn-back {
//           background: transparent; 
//           color: #b8b8b8;
//           border: none;
//           display: flex;
//           align-items: center;
//           gap: 8px;
//           font-size: 14px;
//           cursor: pointer;
//           padding: 0;
//           margin-bottom: 20px;
//           position: relative;
//           left: -5px;
//           transition: color 0.2s;
//         }
        
//         .btn-back:hover {
//           color: #fff;
//         }
        
//         .section-title {
//           font-size: 28px;
//           font-weight: 600;
//           margin-bottom: 8px;
//           color: #ffffff;
//         }
        
//         .plan-highlight {
//           color: #a44bfc;
//           font-weight: 700;
//         }
        
//         .section-subtitle {
//           font-size: 16px;
//           color: #b8b8b8;
//           margin-bottom: 0;
//         }
        
//         .form-container {
//           display: flex;
//           flex-direction: column;
//           gap: 24px;
//         }
        
//         .form-group {
//           display: flex;
//           flex-direction: column;
//           gap: 8px;
//         }
        
//         .form-group label {
//           font-size: 14px;
//           font-weight: 500;
//           color: #d0d0d0;
//         }
        
//         .form-group select,
//         .form-group input {
//           width: 100%;
//           padding: 12px 16px;
//           border-radius: 8px;
//           border: 1px solid rgba(100, 100, 150, 0.3);
//           background-color: rgba(30, 30, 40, 0.6);
//           color: #ffffff;
//           font-size: 15px;
//           transition: all 0.2s;
//         }
        
//         .form-group select:focus,
//         .form-group input:focus {
//           border-color: #a44bfc;
//           outline: none;
//           box-shadow: 0 0 0 2px rgba(164, 75, 252, 0.2);
//         }
        
//         .form-group select:hover,
//         .form-group input:hover {
//           border-color: rgba(164, 75, 252, 0.5);
//         }
        
//         .form-group select option {
//           background-color: #252530;
//           color: #ffffff;
//         }
        
//         .divider {
//           display: flex;
//           align-items: center;
//           color: #8e8e8e;
//           font-size: 14px;
//           margin: 5px 0;
//         }
        
//         .divider::before,
//         .divider::after {
//           content: "";
//           flex: 1;
//           border-bottom: 1px solid rgba(100, 100, 150, 0.2);
//         }
        
//         .divider::before {
//           margin-right: 16px;
//         }
        
//         .divider::after {
//           margin-left: 16px;
//         }
        
//         .action-buttons {
//           display: flex;
//           justify-content: center;
//           margin-top: 8px;
//         }
        
//         .btn-primary {
//           background: linear-gradient(135deg, #a44bfc 0%, #8a36e9 100%);
//           color: white;
//           border: none;
//           padding: 12px 28px;
//           border-radius: 8px;
//           font-size: 16px;
//           font-weight: 500;
//           cursor: pointer;
//           transition: all 0.2s;
//           box-shadow: 0 4px 12px rgba(164, 75, 252, 0.3);
//         }
        
//         .btn-primary:hover {
//           transform: translateY(-2px);
//           box-shadow: 0 6px 16px rgba(164, 75, 252, 0.4);
//           background: linear-gradient(135deg, #b05aff 0%, #9845f8 100%);
//         }
        
//         .btn-primary:active {
//           transform: translateY(1px);
//           box-shadow: 0 2px 8px rgba(164, 75, 252, 0.3);
//         }
        
//         .message-container {
//           text-align: center;
//           padding: 12px;
//           border-radius: 6px;
//           font-size: 14px;
//         }
        
//         .message-container.success {
//           background-color: rgba(39, 174, 96, 0.1);
//           border: 1px solid rgba(39, 174, 96, 0.3);
//           color: #2ecc71;
//         }
        
//         .message-container.error {
//           background-color: rgba(231, 76, 60, 0.1);
//           border: 1px solid rgba(231, 76, 60, 0.3);
//           color: #e74c3c;
//         }
        
//         .license-key-container {
//           background-color: rgba(30, 30, 40, 0.8);
//           border-radius: 8px;
//           overflow: hidden;
//           border: 1px solid rgba(100, 100, 150, 0.3);
//         }
        
//         .license-header {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           padding: 12px 16px;
//           background: rgba(20, 20, 30, 0.5);
//         }
        
//         .license-title {
//           font-weight: 500;
//           color: #d0d0d0;
//           font-size: 14px;
//         }
        
//         .btn-copy {
//           background: transparent;
//           border: 1px solid rgba(164, 75, 252, 0.4);
//           color: #a44bfc;
//           font-size: 13px;
//           padding: 5px 10px;
//           border-radius: 4px;
//           display: flex;
//           align-items: center;
//           gap: 6px;
//           cursor: pointer;
//           transition: all 0.2s;
//         }
        
//         .btn-copy:hover {
//           background: rgba(164, 75, 252, 0.1);
//           border-color: rgba(164, 75, 252, 0.6);
//         }
        
//         .license-content {
//           padding: 16px;
//           word-break: break-all;
//           font-family: monospace;
//           font-size: 14px;
//           color: #f8f8f8;
//           background: linear-gradient(90deg, rgba(30, 30, 40, 0.6) 0%, rgba(40, 40, 50, 0.6) 100%);
//         }
        
//         .no-plan-container {
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           height: 100vh;
//         }
        
//         .no-plan-message {
//           text-align: center;
//           padding: 32px;
//           background: rgba(40, 40, 50, 0.6);
//           border-radius: 12px;
//           max-width: 400px;
//         }
        
//         .no-plan-message h3 {
//           font-size: 22px;
//           margin-bottom: 10px;
//           color: #ffffff;
//         }
        
//         .no-plan-message p {
//           color: #b8b8b8;
//           margin-bottom: 20px;
//         }
        
//         .btn-zencia {
//           background: linear-gradient(135deg, #a44bfc 0%, #8a36e9 100%);
//           color: white;
//           border: none;
//           padding: 10px 24px;
//           border-radius: 6px;
//           font-size: 14px;
//           cursor: pointer;
//           transition: all 0.2s;
//         }
        
//         .btn-zencia:hover {
//           background: linear-gradient(135deg, #b05aff 0%, #9845f8 100%);
//         }
//       `}</style>
//     </div>
//   );
// };

// export default PlanSelection;





import axios from "axios";


import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./HardwareSelection.css";


const PlanSelection = () => {
  const [selectedHWID, setSelectedHWID] = useState("");
  const [manualHWID, setManualHWID] = useState("");
  const [licenseKey, setLicenseKey] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // "success" or "error"

  const location = useLocation();
  const navigate = useNavigate();
  const token = localStorage.getItem("authToken");

  const { planId, planName, hardwareList } = location.state || {};

  const getEffectiveHWID = () => {
    return manualHWID.trim() || selectedHWID;
  };

  const handleHWIDConfirm = async () => {
    const effectiveHWID = getEffectiveHWID();
    if (!effectiveHWID) {
      setMessage("Please select or enter a hardware ID.");
      setMessageType("error");
      return;
    }

    if (planName === "Trial") {
      try {
        const licenseResponse = await axios.post(
          "https://zencia-finalbackend.vercel.app/api/license/trail-generate",
          {
            planId: planId,
            hardware_id: effectiveHWID,
            start_date: new Date().toISOString().split("T")[0],
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `${token}`,
            },
          }
        );

        if (licenseResponse.data.success) {
          setLicenseKey(licenseResponse.data.licenseKey);
          setMessage("License generated successfully!");
          setMessageType("success");
        } else {
          throw new Error(licenseResponse.data.message || "Failed to generate license.");
        }
      } catch (error) {
        setMessage(`Failed to generate license: ${error.message}`);
        setMessageType("error");
      }
    }
  };

  const handleCheckoutPayment = () => {
    const effectiveHWID = getEffectiveHWID();
    if (!effectiveHWID) {
      setMessage("Please select or enter a hardware ID.");
      setMessageType("error");
      return;
    }

    if (planName === "Custom" || planName === "Premium") {
      navigate(`/payment-gateway?planId=${planId}&hardwareId=${effectiveHWID}`, {
        state: { planId, planName, hardwareId: effectiveHWID },
      });
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(licenseKey);
    setMessage("License key copied to clipboard!");
    setMessageType("success");
  };

  const handleBack = () => {
    navigate(-1); // Go back to previous page
  };

  if (!planId || !planName) {
    return (
      <div className="dashboard-content-container no-plan-container">
        <div className="no-plan-message">
          <h3>No plan selected</h3>
          <p>Please go back and select a plan.</p>
          <button 
            onClick={handleBack}
            className="btn-zencia"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="hardware-container">      
    <div className="hardware-header">
        <div className="hardware-title-tag">Hardware Setup</div>
        <h1 className="hardware-title">Select or Enter Your Hardware ID</h1>
      </div>
     <div className="hardware-card">
          <button 
            onClick={handleBack}
            className="btn-back"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Back to Plans
          </button>
               {/* <div className="plan-info">
          <h2 className="plan-selected-title">{planName}</h2> Plan Setup
          <p className="plan-selected-description">
            Please select or enter the Hardware ID for your device
          </p>
          </div> */}

         <div className="plan-info">
           <h2 className="plan-selected-title">Selected Plan: {planName}</h2>
         <p className="plan-selected-description">            {planName === "Trial"
              ? "Complete your trial activation by selecting a hardware ID"
              : planName === "Custom"
              ? "Proceed to payment after selecting a hardware ID"
              : "Contact us after selecting a hardware ID"}
          </p>
        </div>


          <div className="form-group">
            <label htmlFor="hardware-select">
              Choose your device
            </label>
            <select
              id="hardware-select"
              value={selectedHWID}
              onChange={(e) => {
                setSelectedHWID(e.target.value);
                if (e.target.value) setManualHWID("");
              }}
            >
              <option value="">Select a Hardware ID</option>
              {hardwareList && hardwareList.map((hw) => (
                <option key={hw._id} value={hw.hardwareId}>
                  {`${hw.hardwareId} (${hw.nickName})`}
                </option>
              ))}
            </select>
          </div>

         
          <div className="form-group">
    <label htmlFor="manual-hardware-id">Or enter your Hardware ID manually</label>

            <input
              id="manual-hardware-id"
              type="text"
              value={manualHWID}
              onChange={(e) => {
                setManualHWID(e.target.value);
                if (e.target.value) setSelectedHWID("");
              }}
              placeholder="Enter Hardware ID"
            />
          </div>

          <div className="action-buttons">
            {(selectedHWID || manualHWID) && planName === "Trial" && (
              <button
                className="action-btn"
                onClick={handleHWIDConfirm}
              >
                Generate License
              </button>
            )}
            {(selectedHWID || manualHWID) && (planName === "Custom" || planName === "Premium") && (
              <button
                className="action-btn"
                onClick={handleCheckoutPayment}
              >
                Proceed to Payment
              </button>
            )}
          </div>

          {message && (
            <div className={`message ${messageType}`}>
              <span>{message}</span>
            </div>
          )}
          
          {/* {licenseKey && (
            <div className="license-key-container">
              <div className="license-header">
                <span className="license-title">Your License Key</span>
                <button
                  className="btn-copy"
                  onClick={copyToClipboard}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                  </svg>
                  Copy
                </button>
              </div>
              <div className="license-content">
                {licenseKey}
              </div>
            </div>
          )} */}
           {licenseKey && (
          <div className="license-key-container">
            <p className="license-key-text">License Key: {licenseKey}</p>
            <button className="copy-btn" onClick={copyToClipboard}>
              Copy to Clipboard
            </button>
          </div>
        )}
        </div>
    </div>
  );
};

export default PlanSelection;







// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import "./HardwareSelection.css";

// const PlanSelection = () => {
//   const [selectedHWID, setSelectedHWID] = useState("");
//   const [manualHWID, setManualHWID] = useState("");
//   const [hardwareList, setHardwareList] = useState([]);
//   const [licenseKey, setLicenseKey] = useState("");
//   const [message, setMessage] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const location = useLocation();
//   const navigate = useNavigate();
//   const token = localStorage.getItem("authToken");

//   // Extract plan information from the location state
//   const planId = location.state?.planId;
//   const planName = location.state?.planName;

//   // Fetch hardware IDs
//   useEffect(() => {
//     const fetchHardware = async () => {
//       try {
//         const response = await axios.get("https://zencia-finalbackend.vercel.app/api/hardware/hardwares-by-user", {
//           headers: { Authorization: `${token}` },
//         });
//         setHardwareList(response.data.hardwareList);
//         setLoading(false);
//       } catch (error) {
//         setError(error.message);
//         setLoading(false);
//       }
//     };

//     if (!planId || !planName) {
//       navigate("/plans");
//       return;
//     }

//     if (token) fetchHardware();
//     else setLoading(false);
//   }, [token, planId, planName, navigate]);

//   const getEffectiveHWID = () => {
//     return manualHWID.trim() || selectedHWID;
//   };

//   const handleHWIDConfirm = async () => {
//     const effectiveHWID = getEffectiveHWID();
//     if (!effectiveHWID) {
//       setMessage("Please select or enter a hardware ID.");
//       return;
//     }

//     if (planName === "Trial") {
//       try {
//         const licenseResponse = await axios.post(
//           "https://zencia-finalbackend.vercel.app/api/license/trail-generate",
//           {
//             planId: planId,
//             hardware_id: effectiveHWID,
//             start_date: new Date().toISOString().split("T")[0],
//           },
//           {
//             headers: {
//               "Content-Type": "application/json",
//               Authorization: `${token}`,
//             },
//           }
//         );

//         if (licenseResponse.data.success) {
//           setLicenseKey(licenseResponse.data.licenseKey);
//           setMessage("License generated successfully!");
//         } else {
//           throw new Error(licenseResponse.data.message || "Failed to generate license.");
//         }
//       } catch (error) {
//         setMessage(`Failed to generate license: ${error.message}`);
//       }
//     }
//   };

//   const handleCheckoutPayment = () => {
//     const effectiveHWID = getEffectiveHWID();
//     if (!effectiveHWID) {
//       setMessage("Please select or enter a hardware ID.");
//       return;
//     }

//     if (planName === "Custom" || planName === "Premium") {
//       navigate(`/payment-gateway`, {
//         state: { planId: planId, planName: planName, hardwareId: effectiveHWID },
//       });
//     }
//   };

//   const copyToClipboard = () => {
//     navigator.clipboard.writeText(licenseKey);
//     setMessage("License key copied to clipboard!");
//   };

//   const handleGoBack = () => {
//     navigate("/plans");
//   };

//   if (loading) return <div className="loading">Loading...</div>;
//   if (error) return <div className="error">Error: {error}</div>;

//   return (
//     <div className="hardware-container">
//       <div className="hardware-header">
//         <div className="hardware-title-tag">Hardware Setup</div>
//         <h1 className="hardware-title">Select or Enter Your Hardware ID</h1>
//       </div>

//       <div className="hardware-card">
//         <div className="plan-info">
//           <h2 className="plan-selected-title">Selected Plan: {planName}</h2>
//           <p className="plan-selected-description">
//             {planName === "Trial"
//               ? "Complete your trial activation by selecting a hardware ID"
//               : planName === "Custom"
//               ? "Proceed to payment after selecting a hardware ID"
//               : "Contact us after selecting a hardware ID"}
//           </p>
//         </div>

//         <div className="form-section">
//           <div className="form-group">
//             <label htmlFor="hardware-select">Choose your device</label>
//             <select
//               id="hardware-select"
//               value={selectedHWID}
//               onChange={(e) => {
//                 setSelectedHWID(e.target.value);
//                 if (e.target.value) setManualHWID("");
//               }}
//             >
//               <option value="">Select a Hardware ID</option>
//               {hardwareList.map((hw) => (
//                 <option key={hw._id} value={hw.hardwareId}>
//                   {`${hw.hardwareId} (${hw.nickName})`}
//                 </option>
//               ))}
//             </select>
//           </div>

//           <div className="form-group">
//             <label htmlFor="manual-hardware-id">Or enter your Hardware ID manually</label>
//             <input
//               id="manual-hardware-id"
//               type="text"
//               value={manualHWID}
//               onChange={(e) => {
//                 setManualHWID(e.target.value);
//                 if (e.target.value) setSelectedHWID("");
//               }}
//               placeholder="Enter Hardware ID"
//             />
//           </div>
//         </div>

//         <div className="action-buttons">
//           <button className="back-btn" onClick={handleGoBack}>
//             Back to Plans
//           </button>

//           {(selectedHWID || manualHWID) && planName === "Trial" && (
//             <button className="action-btn" onClick={handleHWIDConfirm}>
//               Generate License
//             </button>
//           )}

//           {(selectedHWID || manualHWID) && (planName === "Custom" || planName === "Premium") && (
//             <button className="action-btn" onClick={handleCheckoutPayment}>
//               Proceed to Payment
//             </button>
//           )}
//         </div>

//         {message && <p className="message">{message}</p>}

//         {licenseKey && (
//           <div className="license-key-container">
//             <p className="license-key-text">License Key: {licenseKey}</p>
//             <button className="copy-btn" onClick={copyToClipboard}>
//               Copy to Clipboard
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default PlanSelection;