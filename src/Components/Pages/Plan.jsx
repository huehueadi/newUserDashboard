













// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Plan = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedHWID, setSelectedHWID] = useState("");
//   const [selectedPlanId, setSelectedPlanId] = useState("");
//   const [selectedPlanName, setSelectedPlanName] = useState(""); // Track plan name
//   const [plans, setPlans] = useState([]);
//   const [hardwareList, setHardwareList] = useState([]);
//   const [licenseKey, setLicenseKey] = useState("");
//   const [message, setMessage] = useState("");
//   const [loadingPlans, setLoadingPlans] = useState(true);
//   const [loadingHardware, setLoadingHardware] = useState(true);
//   const [error, setError] = useState(null);

//   const token = localStorage.getItem("authToken");
//   const navigate = useNavigate();

//   // Fetch plans
//   useEffect(() => {
//     const fetchPlans = async () => {
//       try {
//         const response = await axios.get("http://localhost:3000/api/license/get-plans");
//         setPlans(response.data.allPlans);
//         setLoadingPlans(false);
//       } catch (err) {
//         setError(err.message);
//         setLoadingPlans(false);
//       }
//     };
//     fetchPlans();
//   }, []);

//   // Fetch hardware IDs
//   useEffect(() => {
//     const fetchHardware = async () => {
//       try {
//         const response = await axios.get("http://localhost:3000/api/hardware/hardwares-by-user", {
//           headers: { Authorization: `${token}` },
//         });
//         setHardwareList(response.data.hardwareList);
//         setLoadingHardware(false);
//       } catch (error) {
//         setError(error.message);
//         setLoadingHardware(false);
//       }
//     };
//     if (token) fetchHardware();
//     else setLoadingHardware(false);
//   }, [token]);

//   const openModal = (planId, planName) => {
//     setSelectedPlanId(planId);
//     setSelectedPlanName(planName); // Store plan name
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setSelectedHWID("");
//     setSelectedPlanId("");
//     setSelectedPlanName("");
//     setMessage("");
//     setLicenseKey("");
//   };

//   const handleHWIDConfirm = async () => {
//     if (selectedPlanName === "Trial") {
//       try {
//         const licenseResponse = await axios.post(
//           "http://localhost:3000/api/license/trail-generate",
//           {
//             planId: selectedPlanId,
//             hardware_id: selectedHWID,
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
//     // For "Custom" or "Lifetime", the "Checkout Payment" button will handle navigation
//   };

//   const handleCheckoutPayment = () => {
//     if (selectedHWID && (selectedPlanName === "Custom" || selectedPlanName === "Lifetime")) {
//       navigate(`/payment-gateway?planId=${selectedPlanId}&hardwareId=${selectedHWID}`, {
//         state: { planId: selectedPlanId, planName: selectedPlanName, hardwareId: selectedHWID },
//       });
//       closeModal(); // Close modal after navigation
//     }
//   };

//   const copyToClipboard = () => {
//     navigator.clipboard.writeText(licenseKey);
//     setMessage("License key copied to clipboard!");
//   };

//   if (loadingPlans || loadingHardware) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <div className="dashboard-content-container">
//       <h2 className="section-title">Choose Your Most Suitable Pricing Plan</h2>
//       <div className="card-container">
//         {plans.map((plan) => (
//           <div
//             key={plan._id}
//             className={`plan-card ${plan.name === "Lifetime" ? "popular" : ""}`}
//           >
//             <h3 className="plan-name">{plan.name}</h3>
//             <p className="plan-desc">
//               {plan.name === "Trial"
//                 ? "Limited time access to all features"
//                 : plan.name === "Lifetime"
//                 ? "Access all features for a one-time payment"
//                 : "Perfect for businesses with advanced needs"}
//             </p>
//             <div className="plan-price">${plan.price}</div>
//             <p className="plan-price-desc">
//               {plan.name === "Trial"
//                 ? `Perfect for testing the platform (${plan.duration} days)`
//                 : plan.name === "Lifetime"
//                 ? `Ideal for long-term use (${plan.duration} days)`
//                 : `For advanced needs (${plan.duration} days)`}
//             </p>
//             <div className="feature-list">
//               {plan.name === "Trial" && (
//                 <>
//                   <div className="feature-item"><i>✓</i> Limited Time Access</div>
//                   <div className="feature-item"><i>✓</i> Full Feature Access</div>
//                   <div className="feature-item"><i>✓</i> Priority Support</div>
//                 </>
//               )}
//               {plan.name === "Lifetime" && (
//                 <>
//                   <div className="feature-item"><i>✓</i> Lifetime Access</div>
//                   <div className="feature-item"><i>✓</i> Full Feature Access</div>
//                   <div className="feature-item"><i>✓</i> Priority Support</div>
//                 </>
//               )}
//               {plan.name === "Custom" && (
//                 <>
//                   <div className="feature-item"><i>✓</i> White Label Solution</div>
//                   <div className="feature-item"><i>✓</i> Advanced Customization</div>
//                   <div className="feature-item"><i>✓</i> Priority Support</div>
//                   <div className="feature-item"><i>✓</i> Embedding Business Workflows</div>
//                 </>
//               )}
//             </div>
//             <button
//               className="btn btn-primary"
//               onClick={() => openModal(plan._id, plan.name)}
//             >
//               Choose This Plan
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* Modal for All Plans */}
//       {isModalOpen && (
//         <div
//           className="modal"
//           style={{
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             position: "fixed",
//             top: 0,
//             left: 0,
//             width: "100%",
//             height: "100%",
//             backgroundColor: "rgba(0,0,0,0.5)",
//             zIndex: 1000,
//           }}
//           onClick={(e) => e.target === e.currentTarget && closeModal()}
//         >
//           <div
//             className="modal-content"
//             style={{
//               background: "var(--secondary-dark)",
//               borderRadius: "12px",
//               padding: "40px",
//               width: "95%",
//               maxWidth: "600px",
//               boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
//               position: "relative",
//             }}
//           >
//             <span
//               className="close"
//               style={{
//                 position: "absolute",
//                 top: "15px",
//                 right: "15px",
//                 color: "var(--text-gray)",
//                 fontSize: "28px",
//                 cursor: "pointer",
//               }}
//               onClick={closeModal}
//             >
//               ×
//             </span>
//             <h3 style={{ marginBottom: "25px", fontSize: "22px" }}>
//               Select Hardware ID for {selectedPlanName}
//             </h3>
//             <div className="form-group" style={{ marginBottom: "30px" }}>
//               <label
//                 htmlFor="hardware-select"
//                 style={{
//                   display: "block",
//                   marginBottom: "10px",
//                   color: "var(--text-gray)",
//                   fontSize: "15px",
//                 }}
//               >
//                 Choose your device
//               </label>
//               <select
//                 id="hardware-select"
//                 value={selectedHWID}
//                 onChange={(e) => setSelectedHWID(e.target.value)}
//                 style={{
//                   width: "100%",
//                   padding: "12px 15px",
//                   borderRadius: "6px",
//                   border: "1px solid var(--border-color)",
//                   backgroundColor: "rgba(255,255,255,0.05)",
//                   color: "var(--text-light)",
//                   fontSize: "15px",
//                 }}
//               >
//                 <option value="">Select a Hardware ID</option>
//                 {hardwareList.map((hw) => (
//                   <option key={hw._id} value={hw.hardwareId}>
//                     {`${hw.hardwareId} (${hw.nickName})`}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             {/* Conditional Buttons */}
//             {selectedHWID && selectedPlanName === "Trial" && (
//               <button
//                 className="btn btn-primary"
//                 onClick={handleHWIDConfirm}
//                 style={{ padding: "12px 25px", fontSize: "15px" }}
//               >
//                 Generate License
//               </button>
//             )}
//             {selectedHWID && (selectedPlanName === "Custom" || selectedPlanName === "Lifetime") && (
//               <button
//                 className="btn btn-primary"
//                 onClick={handleCheckoutPayment}
//                 style={{ padding: "12px 25px", fontSize: "15px" }}
//               >
//                 Checkout Payment
//               </button>
//             )}

//             {message && (
//               <p style={{ marginTop: "20px", color: "var(--text-light)" }}>{message}</p>
//             )}
//             {licenseKey && (
//               <div style={{ marginTop: "20px" }}>
//                 <p style={{ color: "var(--text-light)" }}>
//                   License Key: <strong>{licenseKey}</strong>
//                 </p>
//                 <button
//                   className="btn btn-secondary"
//                   onClick={copyToClipboard}
//                   style={{ padding: "8px 15px", fontSize: "14px", marginTop: "10px" }}
//                 >
//                   Copy to Clipboard
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Plan;




// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Plan = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedHWID, setSelectedHWID] = useState(""); // From dropdown
//   const [manualHWID, setManualHWID] = useState(""); // From manual input
//   const [selectedPlanId, setSelectedPlanId] = useState("");
//   const [selectedPlanName, setSelectedPlanName] = useState("");
//   const [plans, setPlans] = useState([]);
//   const [hardwareList, setHardwareList] = useState([]);
//   const [licenseKey, setLicenseKey] = useState("");
//   const [message, setMessage] = useState("");
//   const [loadingPlans, setLoadingPlans] = useState(true);
//   const [loadingHardware, setLoadingHardware] = useState(true);
//   const [error, setError] = useState(null);

//   const token = localStorage.getItem("authToken");
//   const navigate = useNavigate();

//   // Fetch plans
//   useEffect(() => {
//     const fetchPlans = async () => {
//       try {
//         const response = await axios.get("https://zencia-finalbackend.vercel.app/api/license/get-plans");
//         setPlans(response.data.allPlans);
//         setLoadingPlans(false);
//       } catch (err) {
//         setError(err.message);
//         setLoadingPlans(false);
//       }
//     };
//     fetchPlans();
//   }, []);

//   // Fetch hardware IDs
//   useEffect(() => {
//     const fetchHardware = async () => {
//       try {
//         const response = await axios.get("https://zencia-finalbackend.vercel.app/api/hardware/hardwares-by-user", {
//           headers: { Authorization: `${token}` },
//         });
//         setHardwareList(response.data.hardwareList);
//         setLoadingHardware(false);
//       } catch (error) {
//         setError(error.message);
//         setLoadingHardware(false);
//       }
//     };
//     if (token) fetchHardware();
//     else setLoadingHardware(false);
//   }, [token]);

//   const openModal = (planId, planName) => {
//     setSelectedPlanId(planId);
//     setSelectedPlanName(planName);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setSelectedHWID("");
//     setManualHWID(""); // Reset manual input
//     setSelectedPlanId("");
//     setSelectedPlanName("");
//     setMessage("");
//     setLicenseKey("");
//   };

//   const getEffectiveHWID = () => {
//     return manualHWID.trim() || selectedHWID;
//   };

//   const handleHWIDConfirm = async () => {
//     const effectiveHWID = getEffectiveHWID();
//     if (!effectiveHWID) {
//       setMessage("Please select or enter a hardware ID.");
//       return;
//     }

//     if (selectedPlanName === "Trial") {
//       try {
//         const licenseResponse = await axios.post(
//           "https://zencia-finalbackend.vercel.app/api/license/trail-generate",
//           {
//             planId: selectedPlanId,
//             hardware_id: effectiveHWID, // Use the effective HWID
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

//     if (selectedPlanName === "Custom" || selectedPlanName === "Lifetime") {
//       navigate(`/payment-gateway?planId=${selectedPlanId}&hardwareId=${effectiveHWID}`, {
//         state: { planId: selectedPlanId, planName: selectedPlanName, hardwareId: effectiveHWID },
//       });
//       closeModal();
//     }
//   };

//   const copyToClipboard = () => {
//     navigator.clipboard.writeText(licenseKey);
//     setMessage("License key copied to clipboard!");
//   };

//   if (loadingPlans || loadingHardware) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <div className="dashboard-content-container">
//       <h2 className="section-title">Choose Your Most Suitable Pricing Plan</h2>
//       <div className="card-container">
//         {plans.map((plan) => (
//           <div
//             key={plan._id}
//             className={`plan-card ${plan.name === "Lifetime" ? "popular" : ""}`}
//           >
//             <h3 className="plan-name">{plan.name}</h3>
//             <p className="plan-desc">
//               {plan.name === "Trial"
//                 ? "Limited time access to all features"
//                 : plan.name === "Lifetime"
//                 ? "Access all features for a one-time payment"
//                 : "Perfect for businesses with advanced needs"}
//             </p>
//             <div className="plan-price">${plan.price}</div>
//             <p className="plan-price-desc">
//               {plan.name === "Trial"
//                 ? `Perfect for testing the platform (${plan.duration} days)`
//                 : plan.name === "Lifetime"
//                 ? `Ideal for long-term use (${plan.duration} days)`
//                 : `For advanced needs (${plan.duration} days)`}
//             </p>
//             <div className="feature-list">
//               {plan.name === "Trial" && (
//                 <>
//                   <div className="feature-item"><i>✓</i> Limited Time Access</div>
//                   <div className="feature-item"><i>✓</i> Full Feature Access</div>
//                   <div className="feature-item"><i>✓</i> Priority Support</div>
//                 </>
//               )}
//               {plan.name === "Premium" && (
//                 <> 
//                   <div className="feature-item"><i>✓</i> White Label Solution</div>
//                   <div className="feature-item"><i>✓</i> Lifetime Access</div>
//                   <div className="feature-item"><i>✓</i> Live Support</div>
//                   <div className="feature-item"><i>✓</i> Advanced Customization as Per Bussiness </div>


//                 </>
//               )}
//               {plan.name === "Custom" && (
//                 <>
//                   <div className="feature-item"><i>✓</i> Access Upto One Year </div>
//                   <div className="feature-item"><i>✓</i> Priority Support</div>
//                   <div className="feature-item"><i>✓</i> Full Feature Access Upto One Year</div>
//                   <div className="feature-item"><i>✓</i> Personas for Business Workflows </div>
//                 </>
//               )}
//             </div>
//             <button
//               className="btn btn-primary"
//               onClick={() => openModal(plan._id, plan.name)}
//             >
//               Choose This Plan
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* Modal for All Plans */}
//       {isModalOpen && (
//         <div
//           className="modal"
//           style={{
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             position: "fixed",
//             top: 0,
//             left: 0,
//             width: "100%",
//             height: "100%",
//             backgroundColor: "rgba(0,0,0,0.5)",
//             zIndex: 1000,
//           }}
//           onClick={(e) => e.target === e.currentTarget && closeModal()}
//         >
//           <div
//             className="modal-content"
//             style={{
//               background: "var(--secondary-dark)",
//               borderRadius: "12px",
//               padding: "40px",
//               width: "95%",
//               maxWidth: "600px",
//               boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
//               position: "relative",
//             }}
//           >
//             <span
//               className="close"
//               style={{
//                 position: "absolute",
//                 top: "15px",
//                 right: "15px",
//                 color: "var(--text-gray)",
//                 fontSize: "28px",
//                 cursor: "pointer",
//               }}
//               onClick={closeModal}
//             >
//               ×
//             </span>
//             <h3 style={{ marginBottom: "25px", fontSize: "22px" }}>
//               Select or Enter Hardware ID for {selectedPlanName}
//             </h3>
//             <div className="form-group" style={{ marginBottom: "20px" }}>
//               <label
//                 htmlFor="hardware-select"
//                 style={{
//                   display: "block",
//                   marginBottom: "10px",
//                   color: "var(--text-gray)",
//                   fontSize: "15px",
//                 }}
//               >
//                 Choose your device
//               </label>
//               <select
//                 id="hardware-select"
//                 value={selectedHWID}
//                 onChange={(e) => {
//                   setSelectedHWID(e.target.value);
//                   if (e.target.value) setManualHWID(""); // Clear manual input if dropdown is used
//                 }}
//                 style={{
//                   width: "100%",
//                   padding: "12px 15px",
//                   borderRadius: "6px",
//                   border: "1px solid var(--border-color)",
//                   backgroundColor: "rgba(255,255,255,0.05)",
//                   color: "var(--text-light)",
//                   fontSize: "15px",
//                 }}
//               >
//                 <option value="">Select a Hardware ID</option>
//                 {hardwareList.map((hw) => (
//                   <option key={hw._id} value={hw.hardwareId}>
//                     {`${hw.hardwareId} (${hw.nickName})`}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             <div className="form-group" style={{ marginBottom: "30px" }}>
//               <label
//                 htmlFor="manual-hardware-id"
//                 style={{
//                   display: "block",
//                   marginBottom: "10px",
//                   color: "var(--text-gray)",
//                   fontSize: "15px",
//                 }}
//               >
//                 Or enter your Hardware ID manually
//               </label>
//               <input
//                 id="manual-hardware-id"
//                 type="text"
//                 value={manualHWID}
//                 onChange={(e) => {
//                   setManualHWID(e.target.value);
//                   if (e.target.value) setSelectedHWID(""); // Clear dropdown selection if manual input is used
//                 }}
//                 placeholder="Enter Hardware ID"
//                 style={{
//                   width: "100%",
//                   padding: "12px 15px",
//                   borderRadius: "6px",
//                   border: "1px solid var(--border-color)",
//                   backgroundColor: "rgba(255,255,255,0.05)",
//                   color: "var(--text-light)",
//                   fontSize: "15px",
//                 }}
//               />
//             </div>

//             {/* Conditional Buttons */}
//             {(selectedHWID || manualHWID) && selectedPlanName === "Trial" && (
//               <button
//                 className="btn btn-primary"
//                 onClick={handleHWIDConfirm}
              
//               >
//                 Generate License
//               </button>
//             )}
//             {(selectedHWID || manualHWID) && (selectedPlanName === "Custom" || selectedPlanName === "Premium") && (
//               <button
//                 className="btn btn-primary"
//                 onClick={handleCheckoutPayment}
//                 style={{ padding: "12px 25px", fontSize: "15px" }}
//               >
//                 Checkout Payment
//               </button>
//             )}

//             {message && (
//               <p style={{ marginTop: "20px", color: "var(--text-light)" }}>{message}</p>
//             )}
//            {licenseKey && (               
//   <div style={{ 
//     backgroundColor: "#2c2c2c", 
//     padding: "15px", 
//     borderRadius: "4px",
//     marginTop: "20px" 
//   }}>                 
//     <p style={{ 
//       color: "var(--text-light)", 
//       marginBottom: "10px",
//       wordBreak: "break-all" 
//     }}>                   
//       License Key: {licenseKey}                
//     </p>                 
//     <button                   
//       className="btn btn-primary"                   
//       onClick={copyToClipboard}>                   
//       Copy to Clipboard                 
//     </button>               
//   </div>             
// )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Plan;



// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Plan = () => {
//   const [plans, setPlans] = useState([]);
//   const [hardwareList, setHardwareList] = useState([]);
//   const [loadingPlans, setLoadingPlans] = useState(true);
//   const [loadingHardware, setLoadingHardware] = useState(true);
//   const [error, setError] = useState(null);

//   const token = localStorage.getItem("authToken");
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchPlans = async () => {
//       try {
//         const response = await axios.get("https://zencia-finalbackend.vercel.app/api/license/get-plans");
//         setPlans(response.data.allPlans);
//         setLoadingPlans(false);
//       } catch (err) {
//         setError(err.message);
//         setLoadingPlans(false);
//       }
//     };
//     fetchPlans();
//   }, []);

//   useEffect(() => {
//     const fetchHardware = async () => {
//       try {
//         const response = await axios.get("https://zencia-finalbackend.vercel.app/api/hardware/hardwares-by-user", {
//           headers: { Authorization: `${token}` },
//         });
//         setHardwareList(response.data.hardwareList);
//         setLoadingHardware(false);
//       } catch (error) {
//         setError(error.message);
//         setLoadingHardware(false);
//       }
//     };
//     if (token) fetchHardware();
//     else setLoadingHardware(false);
//   }, [token]);

//   const handlePlanSelect = (planId, planName) => {
//     navigate('/plan-selection', { 
//       state: { 
//         planId, 
//         planName, 
//         hardwareList 
//       } 
//     });
//   };

//   if (loadingPlans || loadingHardware) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <div className="dashboard-content-container">
//       <h2 className="section-title">Choose Your Most Suitable Pricing Plan</h2>
//       <div className="card-container">
//         {plans.map((plan) => (
//           <div
//             key={plan._id}
//             className={`plan-card ${plan.name === "Lifetime" ? "popular" : ""}`}
//           >
//             <h3 className="plan-name">{plan.name}</h3>
//             <p className="plan-desc">
//               {plan.name === "Trial"
//                 ? "Limited time access to all features"
//                 : plan.name === "Lifetime"
//                 ? "Access all features for a one-time payment"
//                 : "Perfect for businesses with advanced needs"}
//             </p>
//             <div className="plan-price">${plan.price}</div>
//             <p className="plan-price-desc">
//               {plan.name === "Trial"
//                 ? `Perfect for testing the platform (${plan.duration} days)`
//                 : plan.name === "Lifetime"
//                 ? `Ideal for long-term use (${plan.duration} days)`
//                 : `For advanced needs (${plan.duration} days)`}
//             </p>
//             <div className="feature-list">
//               {plan.name === "Trial" && (
//                 <>
//                   <div className="feature-item"><i>✓</i> Limited Time Access</div>
//                   <div className="feature-item"><i>✓</i> Full Feature Access</div>
//                   <div className="feature-item"><i>✓</i> Priority Support</div>
//                 </>
//               )}
//               {plan.name === "Premium" && (
//                 <> 
//                   <div className="feature-item"><i>✓</i> White Label Solution</div>
//                   <div className="feature-item"><i>✓</i> Lifetime Access</div>
//                   <div className="feature-item"><i>✓</i> Live Support</div>
//                   <div className="feature-item"><i>✓</i> Advanced Customization as Per Bussiness </div>
//                 </>
//               )}
//               {plan.name === "Custom" && (
//                 <>
//                   <div className="feature-item"><i>✓</i> Access Upto One Year </div>
//                   <div className="feature-item"><i>✓</i> Priority Support</div>
//                   <div className="feature-item"><i>✓</i> Full Feature Access Upto One Year</div>
//                   <div className="feature-item"><i>✓</i> Personas for Business Workflows </div>
//                 </>
//               )}
//             </div>
//             <button
//               className="btn btn-primary"
//               onClick={() => handlePlanSelect(plan._id, plan.name)}
//             >
//               Choose This Plan
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Plan;


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
            <div className="original-price">${customPlan.price ? customPlan.price + 50 : "99"}</div>
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
              Ticket Support
            </div>
            <div className="feature-item">
              <span className="feature-icon">✓</span>
              Personas for Business Workflow
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

          <button
            className="choose-plan-btn contact-btn"
            onClick={() => handlePlanSelect(premiumPlan._id, premiumPlan.name || "Premium")}
          >
            Contact Us <span className="arrow-icon">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Plan;

