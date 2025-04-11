// regsiter



// // import React from 'react';

// // function Register() {


// //   return (
// //     <div className='auth-register-Container '>
// //       <div className="register-container">
// //         <div className="register-sidebar">
// //           <div className="logo">
// //             <img src="/api/placeholder/40/40" alt="ZenLicense Logo" />
// //             <span className="logo-text">ZenLicense</span>
// //           </div>
// //           <div className="sidebar-content">
// //             <h2>Join ZenLicense Today</h2>
// //             <p>Create an account to manage your software licenses with our premium dashboard. Simplify your licensing workflow in minutes.</p>
// //             <div className="benefits">
// //               <div className="benefit-item">
// //                 <div className="benefit-icon">✨</div>
// //                 <div className="benefit-text">Generate and manage license keys with hardware ID validation</div>
// //               </div>
// //               <div className="benefit-item">
// //                 <div className="benefit-icon">🔐</div>
// //                 <div className="benefit-text">Secure encryption and authentication for all your licenses</div>
// //               </div>
// //               <div className="benefit-item">
// //                 <div className="benefit-icon">📊</div>
// //                 <div className="benefit-text">Track usage, renewals, and expiration dates in one place</div>
// //               </div>
// //               <div className="benefit-item">
// //                 <div className="benefit-icon">💼</div>
// //                 <div className="benefit-text">Enterprise-ready features for businesses of all sizes</div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //         <div className="register-form-container">
// //           <div className="register-header">
// //             <h1>Create Your Account</h1>
// //             <p>Start managing your software licenses today</p>
// //           </div>
// //           <div className="register-options">
// //             <button className="register-option-google" id="google-signup">
// //               <img src="/api/placeholder/20/20" alt="Google Logo" />
// //               <span>Sign up with Google</span>
// //             </button>
// //           </div>
// //           <div className="separator">Or register with email</div>
// //           <form className="register-form" id="register-form">
// //             <div className="input-row">
// //               <div className="form-group">
// //                 <label htmlFor="first-name">First Name</label>
// //                 <input type="text" id="first-name" className="input-control" placeholder="Enter your first name" required />
// //               </div>
// //               <div className="form-group">
// //                 <label htmlFor="last-name">Last Name</label>
// //                 <input type="text" id="last-name" className="input-control" placeholder="Enter your last name" required />
// //               </div>
// //             </div>
// //             <div className="form-group">
// //               <label htmlFor="email">Email Address</label>
// //               <input type="email" id="email" className="input-control" placeholder="Enter your email address" required />
// //             </div>
// //             <div className="form-group">
// //               <label htmlFor="password">Password</label>
// //               <div style={{ position: 'relative' }}>
// //                 <input type="password" id="password" className="input-control" placeholder="Create a strong password" required />
// //                 <button type="button" className="toggle-password" id="toggle-password">👁️</button>
// //               </div>
// //               <div className="password-strength" id="password-strength" />
// //               <div className="password-feedback" id="password-feedback">Password should be at least 8 characters</div>
// //             </div>
// //             <div className="form-group">
// //               <label htmlFor="confirm-password">Confirm Password</label>
// //               <div style={{ position: 'relative' }}>
// //                 <input type="password" id="confirm-password" className="input-control" placeholder="Confirm your password" required />
// //                 <button type="button" className="toggle-password" id="toggle-confirm-password">👁️</button>
// //               </div>
// //             </div>
// //             <div className="terms-checkbox">
// //               <input type="checkbox" id="terms" required />
// //               <label htmlFor="terms">
// //                 I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>
// //               </label>
// //             </div>
// //             <button type="submit" className="btn btn-primary" id="register-button">Create Account</button>
// //             <div className="register-footer">
// //               Already have an account? <a href="login.html" className="login-link">Sign in</a>
// //             </div>
// //           </form>
// //           {/* OTP Form (hidden by default) */}
// //           <form className="register-form otp-container" id="otp-form">
// //             <div className="form-group">
// //               <label>Enter the verification code sent to your email</label>
// //               <div className="otp-inputs">
// //                 <input type="text" className="otp-input" maxLength={1} autoFocus />
// //                 <input type="text" className="otp-input" maxLength={1} />
// //                 <input type="text" className="otp-input" maxLength={1} />
// //                 <input type="text" className="otp-input" maxLength={1} />
// //                 <input type="text" className="otp-input" maxLength={1} />
// //                 <input type="text" className="otp-input" maxLength={1} />
// //               </div>
// //             </div>
// //             <button type="submit" className="btn btn-primary">Verify & Continue</button>
// //             <div className="resend-otp">
// //               Didn't receive a code? <span className="resend-link" id="resend-otp">Resend</span>
// //             </div>
// //           </form>
// //         </div>
// //       </div>
// //       {/* Onboarding Popup (appears after successful registration) */}
// //       <div className="onboarding-overlay" id="onboarding-overlay">
// //         <div className="onboarding-popup">
// //           <div className="onboarding-progress">
// //             <div className="onboarding-progress-dot active" />
// //             <div className="onboarding-progress-dot" />
// //           </div>
// //           {/* Step 1 */}
// //           <div className="onboarding-step active" id="onboarding-step-1">
// //             <div className="onboarding-header">
// //               <h3>What's your purpose?</h3>
// //               <p>Help us personalize your experience</p>
// //             </div>
// //             <div className="onboarding-option" data-value="individual">
// //               <div className="onboarding-option-radio" />
// //               <div className="onboarding-option-text">
// //                 <div className="onboarding-option-title">Individual</div>
// //                 <div className="onboarding-option-desc">For personal use or small projects</div>
// //               </div>
// //             </div>
// //             <div className="onboarding-option" data-value="business">
// //               <div className="onboarding-option-radio" />
// //               <div className="onboarding-option-text">
// //                 <div className="onboarding-option-title">Business</div>
// //                 <div className="onboarding-option-desc">For small to medium-sized businesses</div>
// //               </div>
// //             </div>
// //             <div className="onboarding-option" data-value="corporate">
// //               <div className="onboarding-option-radio" />
// //               <div className="onboarding-option-text">
// //                 <div className="onboarding-option-title">Corporate</div>
// //                 <div className="onboarding-option-desc">For large enterprises and organizations</div>
// //               </div>
// //             </div>
// //             <div className="onboarding-actions">
// //               <div /> {/* Empty div to maintain flex spacing */}
// //               <button className="onboarding-btn onboarding-btn-next" id="step-1-next" disabled>Next</button>
// //             </div>
// //           </div>
// //           {/* Step 2 (Individual) */}
// //           <div className="onboarding-step" id="onboarding-step-2-individual">
// //             <div className="onboarding-header">
// //               <h3>What are you primarily looking for?</h3>
// //               <p>We'll customize your dashboard accordingly</p>
// //             </div>
// //             <div className="onboarding-option" data-value="study">
// //               <div className="onboarding-option-radio" />
// //               <div className="onboarding-option-text">
// //                 <div className="onboarding-option-title">Study</div>
// //                 <div className="onboarding-option-desc">Educational or academic projects</div>
// //               </div>
// //             </div>
// //             <div className="onboarding-option" data-value="research">
// //               <div className="onboarding-option-radio" />
// //               <div className="onboarding-option-text">
// //                 <div className="onboarding-option-title">Research</div>
// //                 <div className="onboarding-option-desc">Scientific or investigative work</div>
// //               </div>
// //             </div>
// //             <div className="onboarding-option" data-value="entertainment">
// //               <div className="onboarding-option-radio" />
// //               <div className="onboarding-option-text">
// //                 <div className="onboarding-option-title">Entertainment</div>
// //                 <div className="onboarding-option-desc">Gaming or media applications</div>
// //               </div>
// //             </div>
// //             <div className="onboarding-actions">
// //               <button className="onboarding-btn onboarding-btn-back" id="step-2-individual-back">Back</button>
// //               <button className="onboarding-btn onboarding-btn-next" id="step-2-individual-next" disabled>Complete</button>
// //             </div>
// //           </div>
// //           {/* Step 2 (Business) */}
// //           <div className="onboarding-step" id="onboarding-step-2-business">
// //             <div className="onboarding-header">
// //               <h3>What's your business type?</h3>
// //               <p>We'll tailor your experience to your needs</p>
// //             </div>
// //             <div className="onboarding-option" data-value="small-business">
// //               <div className="onboarding-option-radio" />
// //               <div className="onboarding-option-text">
// //                 <div className="onboarding-option-title">Small Business</div>
// //                 <div className="onboarding-option-desc">Less than 50 employees</div>
// //               </div>
// //             </div>
// //             <div className="onboarding-option" data-value="startup">
// //               <div className="onboarding-option-radio" />
// //               <div className="onboarding-option-text">
// //                 <div className="onboarding-option-title">Startup</div>
// //                 <div className="onboarding-option-desc">New and growing business</div>
// //               </div>
// //             </div>
// //             <div className="onboarding-option" data-value="enterprise">
// //               <div className="onboarding-option-radio" />
// //               <div className="onboarding-option-text">
// //                 <div className="onboarding-option-title">Enterprise</div>
// //                 <div className="onboarding-option-desc">50+ employees or established business</div>
// //               </div>
// //             </div>
// //             <div className="onboarding-actions">
// //               <button className="onboarding-btn onboarding-btn-back" id="step-2-business-back">Back</button>
// //               <button className="onboarding-btn onboarding-btn-next" id="step-2-business-next" disabled>Complete</button>
// //             </div>
// //           </div>
// //           {/* Step 2 (Corporate) */}
// //           <div className="onboarding-step" id="onboarding-step-2-corporate">
// //             <div className="onboarding-header">
// //               <h3>Company Details</h3>
// //               <p>Tell us about your organization</p>
// //             </div>
// //             <div className="form-group">
// //               <label htmlFor="company-name">Company Name</label>
// //               <input type="text" id="company-name" className="input-control" placeholder="Enter your company name" />
// //             </div>
// //             <div className="form-group">
// //               <label htmlFor="your-role">Your Role</label>
// //               <select id="your-role" className="input-control">
// //                 <option value disabled selected>Select your role</option>
// //                 <option value="it-admin">IT Administrator</option>
// //                 <option value="manager">Manager</option>
// //                 <option value="director">Director</option>
// //                 <option value="executive">Executive</option>
// //                 <option value="other">Other</option>
// //               </select>
// //             </div>
// //             <div className="form-group">
// //               <label htmlFor="team-size">Team Size</label>
// //               <select id="team-size" className="input-control">
// //                 <option value disabled selected>Select team size</option>
// //                 <option value="1-10">1-10 employees</option>
// //                 <option value="11-50">11-50 employees</option>
// //                 <option value="51-200">51-200 employees</option>
// //                 <option value="201-1000">201-1000 employees</option>
// //                 <option value="1000+">1000+ employees</option>
// //               </select>
// //             </div>
// //             <div className="onboarding-actions">
// //               <button className="onboarding-btn onboarding-btn-back" id="step-2-corporate-back">Back</button>
// //               <button className="onboarding-btn onboarding-btn-next" id="step-2-corporate-next">Complete</button>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }


// // export default Register;



// // import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google'; // Import both components
// // import axios from 'axios'; // For making API requests
// // import React, { useState } from 'react';

// // function Register() {
// //   const [firstName, setFirstName] = useState('');
// //   const [lastName, setLastName] = useState('');
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [mobileNumber, setMobileNumber] = useState('');
// //   const [city, setCity] = useState('');
// //   const [state, setState] = useState('');
// //   const [country, setCountry] = useState('');
// //   const [isOtpVisible, setIsOtpVisible] = useState(false);
// //   const [otp, setOtp] = useState('');
// //   const [otpSent, setOtpSent] = useState(false);
// //   const [error, setError] = useState(null);

// //   // Handle Google OAuth login
// //   const handleGoogleOAuth = async (response) => {
// //     try {
// //       const { credential } = response;
// //       const { data } = await axios.post('http://localhost:3000/api/google-auth', { token: credential });
// //       console.log('Google login successful', data);
// //       // Handle success, save the token, or redirect the user
// //     } catch (error) {
// //       console.error('Google login error', error);
// //       setError('Google login failed, please try again.');
// //     }
// //   };

// //   // Handle form submission for email registration
// //   const handleSubmit = async (event) => {
// //     event.preventDefault();

// //     try {
// //       // Register the user via email and send OTP
// //       const { data } = await axios.post('http://localhost:3000/api/register', {
// //         email,
// //         password,
// //         firstName,
// //         lastName,
// //         mobileNumber,
// //         city,
// //         state,
// //         country,
// //       });

// //       setOtpSent(true);
// //       setIsOtpVisible(true);
// //       setError(null);
// //       alert(data.message); // Display message that OTP is sent
// //     } catch (error) {
// //       console.error('Registration error', error);
// //       setError(error.response?.data?.message || 'Registration failed');
// //     }
// //   };

// //   // Handle OTP verification
// //   const handleVerifyOtp = async (event) => {
// //     event.preventDefault();

// //     try {
// //       // Verify OTP
// //       const { data } = await axios.post('http://localhost:3000/api/verfiy', { email, otp });
// //       alert(data.message);
// //       setIsOtpVisible(false); // Hide OTP form after verification
// //     } catch (error) {
// //       console.error('OTP verification error', error);
// //       setError(error.response?.data?.message || 'OTP verification failed');
// //     }
// //   };

// //   return (
// //     <div className="auth-register-Container">
// //       <div className="register-container">
// //         <div className="register-sidebar">
// //           <div className="logo">
// //             <img src="/api/placeholder/40/40" alt="ZenLicense Logo" />
// //             <span className="logo-text">ZenLicense</span>
// //           </div>
// //           <div className="sidebar-content">
// //             <h2>Join ZenLicense Today</h2>
// //             <p>Create an account to manage your software licenses with our premium dashboard.</p>
// //           </div>
// //         </div>

// //         <div className="register-form-container">
// //           <div className="register-header">
// //             <h1>Create Your Account</h1>
// //             <p>Start managing your software licenses today</p>
// //           </div>

// //           <div className="register-options">
// //             {/* Google OAuth Button */}
// //             <GoogleOAuthProvider clientId="424370588012-s14oo8n1aqn4cjda2ahbmavnls1863rj.apps.googleusercontent.com">  {/* Wrap it here */}
// //               <GoogleLogin onSuccess={handleGoogleOAuth} onError={(error) => console.error(error)} />
// //             </GoogleOAuthProvider>
// //           </div>

// //           <div className="separator">Or register with email</div>

// //           {/* Email Registration Form */}
// //           <form className="register-form" onSubmit={handleSubmit}>
// //             <div className="input-row">
// //               <div className="form-group">
// //                 <label htmlFor="first-name">First Name</label>
// //                 <input
// //                   type="text"
// //                   id="first-name"
// //                   className="input-control"
// //                   placeholder="Enter your first name"
// //                   value={firstName}
// //                   onChange={(e) => setFirstName(e.target.value)}
// //                   required
// //                 />
// //               </div>
// //               <div className="form-group">
// //                 <label htmlFor="last-name">Last Name</label>
// //                 <input
// //                   type="text"
// //                   id="last-name"
// //                   className="input-control"
// //                   placeholder="Enter your last name"
// //                   value={lastName}
// //                   onChange={(e) => setLastName(e.target.value)}
// //                   required
// //                 />
// //               </div>
// //             </div>

// //             <div className="form-group">
// //               <label htmlFor="email">Email Address</label>
// //               <input
// //                 type="email"
// //                 id="email"
// //                 className="input-control"
// //                 placeholder="Enter your email address"
// //                 value={email}
// //                 onChange={(e) => setEmail(e.target.value)}
// //                 required
// //               />
// //             </div>

// //             <div className="form-group">
// //               <label htmlFor="mobileNumber">Mobile Number</label>
// //               <input
// //                 type="text"
// //                 id="mobileNumber"
// //                 className="input-control"
// //                 placeholder="Enter your mobile number"
// //                 value={mobileNumber}
// //                 onChange={(e) => setMobileNumber(e.target.value)}
// //                 required
// //               />
// //             </div>

// //             <div className="form-group">
// //               <label htmlFor="city">City</label>
// //               <input
// //                 type="text"
// //                 id="city"
// //                 className="input-control"
// //                 placeholder="Enter your city"
// //                 value={city}
// //                 onChange={(e) => setCity(e.target.value)}
// //               />
// //             </div>

// //             <div className="form-group">
// //               <label htmlFor="state">State</label>
// //               <input
// //                 type="text"
// //                 id="state"
// //                 className="input-control"
// //                 placeholder="Enter your state"
// //                 value={state}
// //                 onChange={(e) => setState(e.target.value)}
// //               />
// //             </div>

// //             <div className="form-group">
// //               <label htmlFor="country">Country</label>
// //               <input
// //                 type="text"
// //                 id="country"
// //                 className="input-control"
// //                 placeholder="Enter your country"
// //                 value={country}
// //                 onChange={(e) => setCountry(e.target.value)}
// //               />
// //             </div>

// //             <div className="form-group">
// //               <label htmlFor="password">Password</label>
// //               <input
// //                 type="password"
// //                 id="password"
// //                 className="input-control"
// //                 placeholder="Create a strong password"
// //                 value={password}
// //                 onChange={(e) => setPassword(e.target.value)}
// //                 required
// //               />
// //             </div>

// //             <div className="terms-checkbox">
// //               <input type="checkbox" id="terms" required />
// //               <label htmlFor="terms">
// //                 I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>
// //               </label>
// //             </div>

// //             <button type="submit" className="btn btn-primary" id="register-button">Create Account</button>
// //           </form>

// //           {/* OTP Verification Form (only shown if OTP is sent */}
// //           {isOtpVisible && (
// //             <form className="register-form otp-container" onSubmit={handleVerifyOtp}>
// //               <div className="form-group">
// //                 <label>Enter the verification code sent to your email</label>
// //                 <input
// //                   type="text"
// //                   className="otp-input"
// //                   value={otp}
// //                   onChange={(e) => setOtp(e.target.value)}
// //                   placeholder="Enter OTP"
// //                   required
// //                 />
// //               </div>
// //               <button type="submit" className="btn btn-primary">Verify & Continue</button>
// //             </form>
// //           )}

// //           <div className="register-footer">
// //             Already have an account? <a href="login.html" className="login-link">Sign in</a>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Register;








// // import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
// // import axios from 'axios';
// // import React, { useEffect, useRef, useState } from 'react';
// // import { useNavigate } from 'react-router-dom';

// // function Register() {
// //   const [firstName, setFirstName] = useState('');
// //   const [lastName, setLastName] = useState('');
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [mobileNumber, setMobileNumber] = useState('');
// //   const [city, setCity] = useState('');
// //   const [state, setState] = useState('');
// //   const [country, setCountry] = useState('');
// //   const [isOtpVisible, setIsOtpVisible] = useState(false);
// //   const [otp, setOtp] = useState(['', '', '', '', '', '']);
// //   const [otpSent, setOtpSent] = useState(false);
// //   const [error, setError] = useState(null);
// //   const [successMessage, setSuccessMessage] = useState('');
// //   const [isLoading, setIsLoading] = useState(false);
// //   const navigate = useNavigate();
  
// //   // Refs for OTP inputs to allow focus movement
// //   const otpInputRefs = Array(6).fill(0).map(() => useRef(null));

// //   // Handle Google OAuth login
// //   const handleGoogleOAuth = async (response) => {
// //     console.log("Google OAuth response:", response);
// //     try {
// //       const { credential } = response;
// //       console.log("Google credential:", credential);
// //       const { data } = await axios.post('http://localhost:3000/api/google-auth', { token: credential });
// //       console.log('Google login successful', data);
      
// //       navigate('/dashboard');
// //     } catch (error) {
// //       console.error('Google login error', error);
// //       setError('Google login failed, please try again.');
// //     }
// //   };

// //   const handleSubmit = async (event) => {
// //     event.preventDefault();
// //     console.log("Form submitted for registration");
// //     setIsLoading(true);

// //     try {
// //       // Register the user via email and send OTP
// //       const { data } = await axios.post('http://localhost:3000/api/register', {
// //         email,
// //         password,
// //         firstName,
// //         lastName,
// //         mobileNumber,
// //         city,
// //         state,
// //         country,
// //       });
// //       console.log("Registration API response:", data);

// //       setOtpSent(true);
// //       setIsOtpVisible(true);
// //       setError(null);
// //       setSuccessMessage('Verification code sent to your email. Please check your inbox.');
// //       setIsLoading(false);
// //     } catch (error) {
// //       console.error('Registration error', error);
// //       setError(error.response?.data?.message || 'Registration failed');
// //       setIsLoading(false);
// //     }
// //   };

// //   // Handle OTP input changes
// //   const handleOtpChange = (index, value) => {
// //     // Allow only numbers
// //     if (!/^\d*$/.test(value)) return;

// //     // Update OTP array
// //     const newOtp = [...otp];
// //     newOtp[index] = value;
// //     setOtp(newOtp);

// //     // Auto-focus to next input if current input is filled
// //     if (value && index < 5) {
// //       otpInputRefs[index + 1].current.focus();
// //     }
// //   };

// //   // Handle backspace in OTP inputs
// //   const handleKeyDown = (index, e) => {
// //     // Move focus to previous input on backspace if current input is empty
// //     if (e.key === 'Backspace' && !otp[index] && index > 0) {
// //       otpInputRefs[index - 1].current.focus();
// //     }
// //   };

// //   // Handle OTP verification
// //   const handleVerifyOtp = async (event) => {
// //     event.preventDefault();
// //     console.log("OTP verification submitted");
    
// //     // Join OTP array into a string
// //     const otpString = otp.join('');
    
// //     // Validate OTP
// //     if (otpString.length !== 6) {
// //       setError('Please enter all 6 digits of the OTP');
// //       return;
// //     }

// //     setIsLoading(true);
// //     setError(null);

// //     try {
// //       // Verify OTP
// //       const { data } = await axios.post('http://localhost:3000/api/verfiy', { 

// //         email, 
// //         otp: otpString 
// //       });
// //       console.log("OTP verification API response:", data);

// //       const token = data.token

// //       if(token){
// //         localStorage.setItem('authToken', token)
// //       }
// //       console.log("token", token)

// //       setIsLoading(false);
// //       setSuccessMessage(data.message || 'Verification successful');
      
// //       // Redirect to dashboard after successful verification
// //       setTimeout(() => {
// //         navigate('/dashboard');
// //       }, 1000); // Short delay to show success message
// //     } catch (error) {
// //       setIsLoading(false);
// //       console.error('OTP verification error', error);
// //       setError(error.response?.data?.message || 'OTP verification failed');
// //       setSuccessMessage('');
// //     }
// //   };

// //   // If all OTP digits are entered, auto-submit after a short delay
// //   useEffect(() => {
// //     if (otp.every(digit => digit !== '') && otp.length === 6) {
// //       const timer = setTimeout(() => {
// //         document.getElementById('verify-otp-button').click();
// //       }, 500);
// //       return () => clearTimeout(timer);
// //     }
// //   }, [otp]);

// //   return (
// //     <div className="auth-register-Container">
// //       <div className="register-container">
// //         <div className="register-sidebar">
// //           <div className="logo">
// //             <img src="/api/placeholder/40/40" alt="ZenLicense Logo" />
// //             <span className="logo-text">ZenLicense</span>
// //           </div>
// //           <div className="sidebar-content">
// //             <h2>Join ZenLicense Today</h2>
// //             <p>Create an account to manage your software licenses with our premium dashboard.</p>
// //           </div>
// //         </div>

// //         <div className="register-form-container">
// //           <div className="register-header">
// //             <h1>Create Your Account</h1>
// //             <p>Start managing your software licenses today</p>
// //           </div>

// //           {/* Success and Error Messages */}
// //           {successMessage && (
// //             <div className="success-message">
// //               <p>{successMessage}</p>
// //             </div>
// //           )}

// //           {error && (
// //             <div className="error-message">
// //               <p>{error}</p>
// //             </div>
// //           )}

// //           {!isOtpVisible ? (
// //             <>
// //               <div className="register-options">
// //                 {/* Google OAuth Button */}
// //                 <GoogleOAuthProvider clientId="424370588012-s14oo8n1aqn4cjda2ahbmavnls1863rj.apps.googleusercontent.com">
// //                   <GoogleLogin 
// //                     onSuccess={handleGoogleOAuth} 
// //                     onError={(error) => console.error("Google login error:", error)} 
// //                   />
// //                 </GoogleOAuthProvider>
// //               </div>

// //               <div className="separator">Or register with email</div>

// //               {/* Email Registration Form */}
// //               <form className="register-form" onSubmit={handleSubmit}>
// //                 <div className="input-row">
// //                   <div className="form-group">
// //                     <label htmlFor="first-name">First Name</label>
// //                     <input
// //                       type="text"
// //                       id="first-name"
// //                       className="input-control"
// //                       placeholder="Enter your first name"
// //                       value={firstName}
// //                       onChange={(e) => setFirstName(e.target.value)}
// //                       required
// //                     />
// //                   </div>
// //                   <div className="form-group">
// //                     <label htmlFor="last-name">Last Name</label>
// //                     <input
// //                       type="text"
// //                       id="last-name"
// //                       className="input-control"
// //                       placeholder="Enter your last name"
// //                       value={lastName}
// //                       onChange={(e) => setLastName(e.target.value)}
// //                       required
// //                     />
// //                   </div>
// //                 </div>

// //                 <div className="form-group">
// //                   <label htmlFor="email">Email Address</label>
// //                   <input
// //                     type="email"
// //                     id="email"
// //                     className="input-control"
// //                     placeholder="Enter your email address"
// //                     value={email}
// //                     onChange={(e) => setEmail(e.target.value)}
// //                     required
// //                   />
// //                 </div>

// //                 <div className="form-group">
// //                   <label htmlFor="mobileNumber">Mobile Number</label>
// //                   <input
// //                     type="text"
// //                     id="mobileNumber"
// //                     className="input-control"
// //                     placeholder="Enter your mobile number"
// //                     value={mobileNumber}
// //                     onChange={(e) => setMobileNumber(e.target.value)}
// //                     required
// //                   />
// //                 </div>

// //                 <div className="input-row">
// //                   <div className="form-group">
// //                     <label htmlFor="city">City</label>
// //                     <input
// //                       type="text"
// //                       id="city"
// //                       className="input-control"
// //                       placeholder="Enter your city"
// //                       value={city}
// //                       onChange={(e) => setCity(e.target.value)}
// //                     />
// //                   </div>
// //                   <div className="form-group">
// //                     <label htmlFor="state">State</label>
// //                     <input
// //                       type="text"
// //                       id="state"
// //                       className="input-control"
// //                       placeholder="Enter your state"
// //                       value={state}
// //                       onChange={(e) => setState(e.target.value)}
// //                     />
// //                   </div>
// //                 </div>

// //                 <div className="form-group">
// //                   <label htmlFor="country">Country</label>
// //                   <input
// //                     type="text"
// //                     id="country"
// //                     className="input-control"
// //                     placeholder="Enter your country"
// //                     value={country}
// //                     onChange={(e) => setCountry(e.target.value)}
// //                   />
// //                 </div>

// //                 <div className="form-group">
// //                   <label htmlFor="password">Password</label>
// //                   <input
// //                     type="password"
// //                     id="password"
// //                     className="input-control"
// //                     placeholder="Create a strong password"
// //                     value={password}
// //                     onChange={(e) => setPassword(e.target.value)}
// //                     required
// //                   />
// //                 </div>

// //                 <div className="terms-checkbox">
// //                   <input type="checkbox" id="terms" required />
// //                   <label htmlFor="terms">
// //                     I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>
// //                   </label>
// //                 </div>

// //                 <button 
// //                   type="submit" 
// //                   className="btn btn-primary" 
// //                   id="register-button"
// //                   disabled={isLoading}
// //                 >
// //                   {isLoading ? 'Creating Account...' : 'Create Account'}
// //                 </button>
// //               </form>
// //             </>
// //           ) : (
// //             /* OTP Verification Form */
// //             <div className="otp-verification-container">
// //               <h2>Email Verification</h2>
// //               <p>Please enter the 6-digit code sent to {email}</p>
              
// //               <form className="otp-form" onSubmit={handleVerifyOtp}>
// //                 <div className="otp-inputs-container">
// //                   {otp.map((digit, index) => (
// //                     <input
// //                       key={index}
// //                       ref={otpInputRefs[index]}
// //                       type="text"
// //                       className="otp-input"
// //                       maxLength={1}
// //                       value={digit}
// //                       onChange={(e) => handleOtpChange(index, e.target.value)}
// //                       onKeyDown={(e) => handleKeyDown(index, e)}
// //                       autoFocus={index === 0}
// //                     />
// //                   ))}
// //                 </div>
                
// //                 <div className="otp-actions">
// //                   <button
// //                     type="submit"
// //                     id="verify-otp-button"
// //                     className="btn btn-primary"
// //                     disabled={isLoading}
// //                   >
// //                     {isLoading ? (
// //                       <span className="loading-text">
// //                         <span className="loading-spinner"></span>
// //                         Verifying...
// //                       </span>
// //                     ) : (
// //                       'Verify'
// //                     )}
// //                   </button>
                  
// //                   <button
// //                     type="button"
// //                     className="btn btn-secondary"
// //                     onClick={() => setIsOtpVisible(false)}
// //                     disabled={isLoading}
// //                   >
// //                     Back
// //                   </button>
// //                 </div>
                
// //                 <div className="resend-otp">
// //                   <p>Didn't receive the code? <button type="button" className="resend-link">Resend</button></p>
// //                 </div>
// //               </form>
// //             </div>
// //           )}

// //           <div className="register-footer">
// //             Already have an account? <a href="login.html" className="login-link">Sign in</a>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Register;



// // Working Register


// // import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
// // import axios from 'axios';
// // import React, { useEffect, useRef, useState } from 'react';

// // function Register({ onSuccess }) {
// //   const [firstName, setFirstName] = useState('');
// //   const [lastName, setLastName] = useState('');
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [mobileNumber, setMobileNumber] = useState('');
// //   const [city, setCity] = useState('');
// //   const [state, setState] = useState('');
// //   const [country, setCountry] = useState('');
// //   const [isOtpVisible, setIsOtpVisible] = useState(false);
// //   const [otp, setOtp] = useState(['', '', '', '', '', '']);
// //   const [otpSent, setOtpSent] = useState(false);
// //   const [error, setError] = useState(null);
// //   const [successMessage, setSuccessMessage] = useState('');
// //   const [isLoading, setIsLoading] = useState(false);

// //   const otpInputRefs = Array(6).fill(0).map(() => useRef(null));

// //   // Handle Google OAuth login
// //   const handleGoogleOAuth = async (response) => {
// //     console.log("Google OAuth response:", response);
// //     try {
// //       const { credential } = response;
// //       console.log("Google credential:", credential);
// //       const { data } = await axios.post('http://localhost:3000/api/google-auth', { token: credential });
// //       console.log('Google login successful', data);
// //       localStorage.setItem('authToken', data.token); 
// //       setSuccessMessage('Google registration successful');
// //       setTimeout(() => {
// //         onSuccess();
// //       }, 1000);
// //     } catch (error) {
// //       console.error('Google login error', error);
// //       setError('Google registration failed, please try again.');
// //     }
// //   };

// //   const handleSubmit = async (event) => {
// //     event.preventDefault();
// //     console.log("Form submitted for registration");
// //     setIsLoading(true);

// //     try {
// //       const { data } = await axios.post('http://localhost:3000/api/register', {
// //         email,
// //         password,
// //         firstName,
// //         lastName,
// //         mobileNumber,
// //         city,
// //         state,
// //         country,
// //       });
// //       console.log("Registration API response:", data);

// //       setOtpSent(true);
// //       setIsOtpVisible(true);
// //       setError(null);
// //       setSuccessMessage('Verification code sent to your email. Please check your inbox.');
// //       setIsLoading(false);
// //     } catch (error) {
// //       console.error('Registration error', error);
// //       setError(error.response?.data?.message || 'Registration failed');
// //       setIsLoading(false);
// //     }
// //   };

// //   const handleOtpChange = (index, value) => {
// //     if (!/^\d*$/.test(value)) return;
// //     const newOtp = [...otp];
// //     newOtp[index] = value;
// //     setOtp(newOtp);
// //     if (value && index < 5) {
// //       otpInputRefs[index + 1].current.focus();
// //     }
// //   };

// //   const handleKeyDown = (index, e) => {
// //     if (e.key === 'Backspace' && !otp[index] && index > 0) {
// //       otpInputRefs[index - 1].current.focus();
// //     }
// //   };

// //   const handleVerifyOtp = async (event) => {
// //     event.preventDefault();
// //     console.log("OTP verification submitted");
// //     const otpString = otp.join('');
// //     if (otpString.length !== 6) {
// //       setError('Please enter all 6 digits of the OTP');
// //       return;
// //     }

// //     setIsLoading(true);
// //     setError(null);

// //     try {
// //       const { data } = await axios.post('http://localhost:3000/api/verfiy', {
// //         email,
// //         otp: otpString,
// //       });
// //       console.log("OTP verification API response:", data);
// //       const token = data.token;
// //       if (token) {
// //         localStorage.setItem('authToken', token);
// //       }
// //       console.log("token", token);

// //       setIsLoading(false);
// //       setSuccessMessage(data.message || 'Verification successful');
// //       setTimeout(() => {
// //         onSuccess(); 
// //       }, 1000);
// //     } catch (error) {
// //       setIsLoading(false);
// //       console.error('OTP verification error', error);
// //       setError(error.response?.data?.message || 'OTP verification failed');
// //       setSuccessMessage('');
// //     }
// //   };

// //   useEffect(() => {
// //     if (otp.every((digit) => digit !== '') && otp.length === 6) {
// //       const timer = setTimeout(() => {
// //         document.getElementById('verify-otp-button').click();
// //       }, 500);
// //       return () => clearTimeout(timer);
// //     }
// //   }, [otp]);

// //   return (
// //     <div className="auth-register-Container">
// //       <div className="register-container">
// //         <div className="register-sidebar">
// //           <div className="logo">
// //             <img src="/api/placeholder/40/40" alt="ZenLicense Logo" />
// //             <span className="logo-text">ZenLicense</span>
// //           </div>
// //           <div className="sidebar-content">
// //             <h2>Join ZenLicense Today</h2>
// //             <p>Create an account to manage your software licenses with our premium dashboard.</p>
// //           </div>
// //         </div>

// //         <div className="register-form-container">
// //           <div className="register-header">
// //             <h1>Create Your Account</h1>
// //             <p>Start managing your software licenses today</p>
// //           </div>

// //           {successMessage && (
// //             <div className="success-message">
// //               <p>{successMessage}</p>
// //             </div>
// //           )}
// //           {error && (
// //             <div className="error-message">
// //               <p>{error}</p>
// //             </div>
// //           )}

// //           {!isOtpVisible ? (
// //             <>
// //               <div className="register-options">
// //                 <GoogleOAuthProvider clientId="424370588012-s14oo8n1aqn4cjda2ahbmavnls1863rj.apps.googleusercontent.com">
// //                   <GoogleLogin
// //                     onSuccess={handleGoogleOAuth}
// //                     onError={(error) => console.error("Google login error:", error)}
// //                   />
// //                 </GoogleOAuthProvider>
// //               </div>

// //               <div className="separator">Or register with email</div>

// //               <form className="register-form" onSubmit={handleSubmit}>
// //                 <div className="input-row">
// //                   <div className="form-group">
// //                     <label htmlFor="first-name">First Name</label>
// //                     <input
// //                       type="text"
// //                       id="first-name"
// //                       className="input-control"
// //                       placeholder="Enter your first name"
// //                       value={firstName}
// //                       onChange={(e) => setFirstName(e.target.value)}
// //                       required
// //                     />
// //                   </div>
// //                   <div className="form-group">
// //                     <label htmlFor="last-name">Last Name</label>
// //                     <input
// //                       type="text"
// //                       id="last-name"
// //                       className="input-control"
// //                       placeholder="Enter your last name"
// //                       value={lastName}
// //                       onChange={(e) => setLastName(e.target.value)}
// //                       required
// //                     />
// //                   </div>
// //                 </div>

// //                 <div className="form-group">
// //                   <label htmlFor="email">Email Address</label>
// //                   <input
// //                     type=" ACHemail"
// //                     id="email"
// //                     className="input-control"
// //                     placeholder="Enter your email address"
// //                     value={email}
// //                     onChange={(e) => setEmail(e.target.value)}
// //                     required
// //                   />
// //                 </div>

// //                 <div className="form-group">
// //                   <label htmlFor="mobileNumber">Mobile Number</label>
// //                   <input
// //                     type="text"
// //                     id="mobileNumber"
// //                     className="input-control"
// //                     placeholder="Enter your mobile number"
// //                     value={mobileNumber}
// //                     onChange={(e) => setMobileNumber(e.target.value)}
// //                     required
// //                   />
// //                 </div>

// //                 <div className="input-row">
// //                   <div className="form-group">
// //                     <label htmlFor="city">City</label>
// //                     <input
// //                       type="text"
// //                       id="city"
// //                       className="input-control"
// //                       placeholder="Enter your city"
// //                       value={city}
// //                       onChange={(e) => setCity(e.target.value)}
// //                     />
// //                   </div>
// //                   <div className="form-group">
// //                     <label htmlFor="state">State</label>
// //                     <input
// //                       type="text"
// //                       id="state"
// //                       className="input-control"
// //                       placeholder="Enter your state"
// //                       value={state}
// //                       onChange={(e) => setState(e.target.value)}
// //                     />
// //                   </div>
// //                 </div>

// //                 <div className="form-group">
// //                   <label htmlFor="country">Country</label>
// //                   <input
// //                     type="text"
// //                     id="country"
// //                     className="input-control"
// //                     placeholder="Enter your country"
// //                     value={country}
// //                     onChange={(e) => setCountry(e.target.value)}
// //                   />
// //                 </div>

// //                 <div className="form-group">
// //                   <label htmlFor="password">Password</label>
// //                   <input
// //                     type="password"
// //                     id="password"
// //                     className="input-control"
// //                     placeholder="Create a strong password"
// //                     value={password}
// //                     onChange={(e) => setPassword(e.target.value)}
// //                     required
// //                   />
// //                 </div>

// //                 <div className="terms-checkbox">
// //                   <input type="checkbox" id="terms" required />
// //                   <label htmlFor="terms">
// //                     I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>
// //                   </label>
// //                 </div>

// //                 <button
// //                   type="submit"
// //                   className="btn btn-primary"
// //                   id="register-button"
// //                   disabled={isLoading}
// //                 >
// //                   {isLoading ? 'Creating Account...' : 'Create Account'}
// //                 </button>
// //               </form>
// //             </>
// //           ) : (
// //             <div className="otp-verification-container">
// //               <h2>Email Verification</h2>
// //               <p>Please enter the 6-digit code sent to {email}</p>

// //               <form className="otp-form" onSubmit={handleVerifyOtp}>
// //                 <div className="otp-inputs-container">
// //                   {otp.map((digit, index) => (
// //                     <input
// //                       key={index}
// //                       ref={otpInputRefs[index]}
// //                       type="text"
// //                       className="otp-input"
// //                       maxLength={1}
// //                       value={digit}
// //                       onChange={(e) => handleOtpChange(index, e.target.value)}
// //                       onKeyDown={(e) => handleKeyDown(index, e)}
// //                       autoFocus={index === 0}
// //                     />
// //                   ))}
// //                 </div>

// //                 <div className="otp-actions">
// //                   <button
// //                     type="submit"
// //                     id="verify-otp-button"
// //                     className="btn btn-primary"
// //                     disabled={isLoading}
// //                   >
// //                     {isLoading ? (
// //                       <span className="loading-text">
// //                         <span className="loading-spinner"></span>
// //                         Verifying...
// //                       </span>
// //                     ) : (
// //                       'Verify'
// //                     )}
// //                   </button>

// //                   <button
// //                     type="button"
// //                     className="btn btn-secondary"
// //                     onClick={() => setIsOtpVisible(false)}
// //                     disabled={isLoading}
// //                   >
// //                     Back
// //                   </button>
// //                 </div>

// //                 <div className="resend-otp">
// //                   <p>
// //                     Didn't receive the code?{' '}
// //                     <button type="button" className="resend-link">
// //                       Resend
// //                     </button>
// //                   </p>
// //                 </div>
// //               </form>
// //             </div>
// //           )}

// //           <div className="register-footer">
// //             Already have an account? <a href="/auth/login" className="login-link">Sign in</a>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Register;




// is Authenticated 


// // ProtectedRoute component with token verification
// const ProtectedRoute = ({ children }) => {
//   const navigate = useNavigate();
//   const token = localStorage.getItem('authToken');
//   const [isValidating, setIsValidating] = React.useState(true);
//   const [isAuthenticated, setIsAuthenticated] = React.useState(false);

//   useEffect(() => {
//     const verifyToken = async () => {
//       if (!token) {
//         console.log('No token found, redirecting to login');
//         navigate('/auth/login', { replace: true });
//         return;
//       }

//       try {
//         // Verify token with an API call
//         const response = await axios.get('https://zencia-finalbackend.vercel.app/api/verify-user', {
//           headers: {
//             'Authorization': `${token}`
//           }
//         });

//         if (response.status === 200) {
//           console.log('Token is valid');
//           setIsAuthenticated(true);
//         } else {
//           console.log('Token verification failed, redirecting to login');
//           localStorage.removeItem('authToken');
//           navigate('/auth/login', { replace: true });
//         }
//       } catch (error) {
//         console.error('Token verification error:', error);
//         if (error.response && error.response.status === 401) {
//           console.log('Token expired or invalid, redirecting to login');
//           localStorage.removeItem('authToken');
//           navigate('/auth/login', { replace: true });
//         } else {
//           console.log('Server error during token verification');
//           // Optionally handle other errors differently
//           navigate('/auth/login', { replace: true });
//         }
//       } finally {
//         setIsValidating(false);
//       }
//     };

//     verifyToken();
//   }, [token, navigate]);

//   // Show loading state while validating
//   if (isValidating) {
//     return <div>Loading...</div>; // Or a proper loading spinner
//   }

//   // Render children only if authenticated
//   return isAuthenticated ? children : null;
// };



// RPoutes 

// import Success from './Components/Pages/Success';

// function App() {

//   return (
// <Router>
//       <Routes>
//         <Route path="/auth/*" element={<OnboardingFlow />} />
//         <Route path="/" element={<Layout />}>
//           <Route path="dashboard" element={<Dashboard />} />
//           <Route path="license-management" element={<LicenseManagement />} />
//           <Route path="payment-history" element={<PaymentHistory />} />
//           <Route path="store" element={<Store />} />
//           <Route path="contact-us" element={<ContactUs />} />
//           <Route path="raise-ticket" element={<RasieTicket />} />
//           <Route path="plans" element={<Plan />} />
//           <Route path="/payment-gateway" element={<PaymentGateway />} />

//           <Route path="success" element={<Success />} />

        


//           <Route index element={<Dashboard />} />
//         </Route>
//       </Routes>
//     </Router>
//   )
// } 

// export default App


// Header Model

// <div style={styles.modalOverlay}>
// <div style={{...styles.modalContent, maxWidth: '500px', padding: '30px'}}>
//   <h2 style={styles.modalHeading}>Get Started</h2>
  
//   <div style={{marginBottom: '20px'}}>
//     <h3 style={{color: '#9333ea', marginBottom: '10px'}}>Step 1: Download Software</h3>
//     <ol style={{textAlign: 'left', paddingLeft: '20px', color: '#333'}}>
//       <li>Go to Zencia.AI website</li>
//       <li>Find Downloads section</li>
//       <li>Choose your OS version</li>
//       <li>Download installation file</li>
//       <li>Install the software</li>
//     </ol>
//   </div>

//   <div>
//     <h3 style={{color: '#9333ea', marginBottom: '10px'}}>Step 2: Get Hardware ID</h3>
//     <ol style={{textAlign: 'left', paddingLeft: '20px', color: '#333'}}>
//       <li>Open Zencia.AI app</li>
//       <li>Go to License Management</li>
//       <li>Click 'Generate Key'</li>
//       <li>Copy your Hardware ID</li>
//       <li>Use ID for activation</li>
//     </ol>
//   </div>

//   <button 
//     onClick={toggleModal}
//   >
//     Close
//   </button>
// </div>
// </div>



// Onboarding flow 


// import axios from 'axios'; // Import axios
// import React, { useEffect, useState } from 'react';
// import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
// import Login from './Login';
// import Onboarding from './Onbarding';
// import Register from './Register';

// const OnboardingFlow = () => {
//   const [isNewUser, setIsNewUser] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const checkUserStatus = async () => {
//       const token = localStorage.getItem('authToken');
//       console.log("token", token)
//       if (token) {
//         try {
//           const response = await axios.get('http://localhost:3000/api/user', {
//             headers: { Authorization: `${token}` },
//           });
         
//           const userData = response.data.data;
//           setIsNewUser(!userData.isOnboardingCompleted);
//           navigate(userData.isOnboardingCompleted ? '/dashboard' : '/auth/onboard');
//         } catch (error) {
//           console.error('Error fetching user data:', error.response?.data?.message || error.message);
//           localStorage.removeItem('authToken');
//           navigate('/auth/login');
//         }
//       }
//     };
//     checkUserStatus();
//   }, [navigate]);

//   const handleRegistrationSuccess = () => {
//     setIsNewUser(true);
//     navigate('/auth/onboard');
//   };

//   const handleLoginSuccess = async () => {
//     const token = localStorage.getItem('authToken');
//     try {
//       const response = await axios.get('http://localhost:3000/api/user', {
//         headers: { Authorization: `${token}` },
//       });
//       const userData = response.data.data;
//       setIsNewUser(!userData.isOnboardingCompleted);
//       navigate(userData.isOnboardingCompleted ? '/dashboard' : '/auth/onboard');
//     } catch (error) {
//       console.error('Error fetching user data:', error.response?.data?.message || error.message);
//       navigate('/auth/login');
//     }
//   };

//   const handleOnboardingComplete = () => {
//     setIsNewUser(false);
//     navigate('/dashboard');
//   };

//   const hasToken = () => !!localStorage.getItem('authToken');

//   return (
//     <Routes>
//       <Route
//         path="register"
//         element={
//           !hasToken() ? (
//             <Register onSuccess={handleRegistrationSuccess} />
//           ) : isNewUser ? (
//             <Navigate to="/auth/onboard" />
//           ) : (
//             <Navigate to="/dashboard" />
//           )
//         }
//       />
//       <Route
//         path="login"
//         element={
//           !hasToken() ? (
//             <Login onSuccess={handleLoginSuccess} />
//           ) : isNewUser ? (
//             <Navigate to="/auth/onboard" />
//           ) : (
//             <Navigate to="/dashboard" />
//           )
//         }
//       />
//       <Route
//         path="onboard"
//         element={
//           hasToken() && isNewUser ? (
//             <Onboarding onComplete={handleOnboardingComplete} />
//           ) : hasToken() ? (
//             <Navigate to="/dashboard" />
//           ) : (
//             <Navigate to="/auth/login" />
//           )
//         }
//       />
//       <Route
//         path="*"
//         element={<Navigate to={hasToken() ? '/dashboard' : '/auth/login'} />}
//       />
//     </Routes>
//   );
// };

// export default OnboardingFlow;





















// import axios from "axios";


// import React, { useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import "./HardwareSelection.css";


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
//     <div className="hardware-container">      
//     <div className="hardware-header">
//         <div className="hardware-title-tag">Hardware Setup</div>
//         <h1 className="hardware-title">Select or Enter Your Hardware ID</h1>
//       </div>
//       <div className="hardware-card">

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

//         <div className="hardware-card">
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
//           <label htmlFor="hardware-select">
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
