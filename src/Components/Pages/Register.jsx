




// //  New Register




// import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
// import axios from 'axios';
// import React, { useEffect, useRef, useState } from 'react';
// import './Register.css';

// function Register({ onSuccess }) {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [mobileNumber, setMobileNumber] = useState('');
//   const [city, setCity] = useState('');
//   const [state, setState] = useState('');
//   const [country, setCountry] = useState('');
//   const [isOtpVisible, setIsOtpVisible] = useState(false);
//   const [otp, setOtp] = useState(['', '', '', '', '', '']);
//   const [otpSent, setOtpSent] = useState(false);
//   const [error, setError] = useState(null);
//   const [successMessage, setSuccessMessage] = useState('');
//   const [isLoading, setIsLoading] = useState(false);

//   const otpInputRefs = Array(6).fill(0).map(() => useRef(null));

//   // Handle Google OAuth login
//   const handleGoogleOAuth = async (response) => {
//     console.log("Google OAuth response:", response);
//     try {
//       const { credential } = response;
//       console.log("Google credential:", credential);
//       const { data } = await axios.post('https://zencia-finalbackend.vercel.app/api/google-auth', { token: credential });
//       console.log('Google login successful', data);
//       localStorage.setItem('authToken', data.token);
//       setSuccessMessage('Google registration successful');
//       setTimeout(() => onSuccess(), 1000);
//     } catch (error) {
//       console.error('Google login error', error);
//       setError('Google registration failed, please try again.');
//     }
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     console.log("Form submitted for registration");
//     setIsLoading(true);
//     try {
//       const { data } = await axios.post('https://zencia-finalbackend.vercel.app/api/register', {
//         email, password, firstName, lastName, mobileNumber, city, state, country,
//       });
//       console.log("Registration API response:", data);
//       setOtpSent(true);
//       setIsOtpVisible(true);
//       setError(null);
//       setSuccessMessage('Verification code sent to your email. Please check your inbox.');
//       setIsLoading(false);
//     } catch (error) {
//       console.error('Registration error', error);
//       setError(error.response?.data?.message || 'Registration failed');
//       setIsLoading(false);
//     }
//   };

//   const handleOtpChange = (index, value) => {
//     if (!/^\d*$/.test(value)) return;
//     const newOtp = [...otp];
//     newOtp[index] = value;
//     setOtp(newOtp);
//     if (value && index < 5) otpInputRefs[index + 1].current.focus();
//   };

//   const handleKeyDown = (index, e) => {
//     if (e.key === 'Backspace' && !otp[index] && index > 0) {
//       otpInputRefs[index - 1].current.focus();
//     }
//   };

//   const handleVerifyOtp = async (event) => {
//     event.preventDefault();
//     console.log("OTP verification submitted");
//     const otpString = otp.join('');
//     if (otpString.length !== 6) {
//       setError('Please enter all 6 digits of the OTP');
//       return;
//     }
//     setIsLoading(true);
//     setError(null);
//     try {
//       const { data } = await axios.post('https://zencia-finalbackend.vercel.app/api/verfiy', { email, otp: otpString });
//       console.log("OTP verification API response:", data);
//       const token = data.token;
//       if (token) localStorage.setItem('authToken', token);
//       console.log("token", token);
//       setIsLoading(false);
//       setSuccessMessage(data.message || 'Verification successful');
//       setTimeout(() => onSuccess(), 1000);
//     } catch (error) {
//       setIsLoading(false);
//       console.error('OTP verification error', error);
//       setError(error.response?.data?.message || 'OTP verification failed');
//       setSuccessMessage('');
//     }
//   };

//   useEffect(() => {
//     if (otp.every((digit) => digit !== '') && otp.length === 6) {
//       const timer = setTimeout(() => {
//         document.getElementById('verify-otp-button').click();
//       }, 500);
//       return () => clearTimeout(timer);
//     }
//   }, [otp]);

//   return (
//     <div className="auth-register-container">
//       <div className="register-container">
//         {/* Left Column: Centered Image, Text, and Google Button */}
//         <div className="register-welcome-section">
//           <div className="logo">
//             <img src="zencia-logo.png" alt="ZenLicense Logo" />
//           </div>
//           <div className="welcome-content">
//             <h2 className="welcome-title">Join ZenLicense Today</h2>
//             <GoogleOAuthProvider clientId="424370588012-s14oo8n1aqn4cjda2ahbmavnls1863rj.apps.googleusercontent.com">
//               <GoogleLogin
//                 onSuccess={handleGoogleOAuth}
//                 onError={(error) => console.error("Google login error:", error)}
//               />
//             </GoogleOAuthProvider>
//           </div>
//         </div>

//         {/* Right Column: Registration Form */}
//         <div className="register-form-section">
//           <div className="register-header">
//             <h1>Create Your Account</h1>
//             <p>Start managing your software licenses today</p>
//           </div>

//           {successMessage && (
//             <div className="success-message">
//               <p>{successMessage}</p>
//             </div>
//           )}
//           {error && (
//             <div className="error-message">
//               <p>{error}</p>
//             </div>
//           )}

//           {!isOtpVisible ? (
//             <form className="register-form" onSubmit={handleSubmit}>
//               <div className="input-row">
//                 <div className="form-group">
//                   <label htmlFor="first-name">First Name</label>
//                   <input
//                     type="text"
//                     id="first-name"
//                     className="input-control"
//                     placeholder="Enter your first name"
//                     value={firstName}
//                     onChange={(e) => setFirstName(e.target.value)}
//                     required
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="last-name">Last Name</label>
//                   <input
//                     type="text"
//                     id="last-name"
//                     className="input-control"
//                     placeholder="Enter your last name"
//                     value={lastName}
//                     onChange={(e) => setLastName(e.target.value)}
//                     required
//                   />
//                 </div>
//               </div>

//               <div className="form-group">
//                 <label htmlFor="email">Email Address</label>
//                 <input
//                   type="email"
//                   id="email"
//                   className="input-control"
//                   placeholder="Enter your email address"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   required
//                 />
//               </div>

//               <div className="input-row">
//                 <div className="form-group">
//                   <label htmlFor="mobileNumber">Mobile Number</label>
//                   <input
//                     type="text"
//                     id="mobileNumber"
//                     className="input-control"
//                     placeholder="Enter your mobile number"
//                     value={mobileNumber}
//                     onChange={(e) => setMobileNumber(e.target.value)}
//                     required
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="country">Country</label>
//                   <input
//                     type="text"
//                     id="country"
//                     className="input-control"
//                     placeholder="Enter your country"
//                     value={country}
//                     onChange={(e) => setCountry(e.target.value)}
//                   />
//                 </div>
//               </div>

//               <div className="input-row">
//                 <div className="form-group">
//                   <label htmlFor="city">City</label>
//                   <input
//                     type="text"
//                     id="city"
//                     className="input-control"
//                     placeholder="Enter your city"
//                     value={city}
//                     onChange={(e) => setCity(e.target.value)}
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="state">State</label>
//                   <input
//                     type="text"
//                     id="state"
//                     className="input-control"
//                     placeholder="Enter your state"
//                     value={state}
//                     onChange={(e) => setState(e.target.value)}
//                   />
//                 </div>
//               </div>

//               <div className="form-group">
//                 <label htmlFor="password">Password</label>
//                 <input
//                   type="password"
//                   id="password"
//                   className="input-control"
//                   placeholder="Create a strong password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   required
//                 />
//               </div>

//               <div className="terms-checkbox">
//                 <input type="checkbox" id="terms" required />
//                 <label htmlFor="terms">
//                   I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>
//                 </label>
//               </div>

//               <button
//                 type="submit"
//                 className="btn btn-primary"
//                 id="register-button"
//                 disabled={isLoading}
//               >
//                 {isLoading ? 'Creating Account...' : 'Create Account'}
//               </button>
//             </form>
//           ) : (
//             <div className="otp-verification-container">
//               <h2>Email Verification</h2>
//               <p>Please enter the 6-digit code sent to {email}</p>
//               <form className="otp-form" onSubmit={handleVerifyOtp}>
//                 <div className="otp-inputs-container">
//                   {otp.map((digit, index) => (
//                     <input
//                       key={index}
//                       ref={otpInputRefs[index]}
//                       type="text"
//                       className="otp-input"
//                       maxLength={1}
//                       value={digit}
//                       onChange={(e) => handleOtpChange(index, e.target.value)}
//                       onKeyDown={(e) => handleKeyDown(index, e)}
//                       autoFocus={index === 0}
//                     />
//                   ))}
//                 </div>
//                 <div className="otp-actions">
//                   <button
//                     type="submit"
//                     id="verify-otp-button"
//                     className="btn btn-primary"
//                     disabled={isLoading}
//                   >
//                     {isLoading ? (
//                       <span className="loading-text">
//                         <span className="loading-spinner"></span>
//                         Verifying...
//                       </span>
//                     ) : (
//                       'Verify'
//                     )}
//                   </button>
//                   <button
//                     type="button"
//                     className="btn btn-secondary"
//                     onClick={() => setIsOtpVisible(false)}
//                     disabled={isLoading}
//                   >
//                     Back
//                   </button>
//                 </div>
//                 <div className="resend-otp">
//                   <p>
//                     Didn't receive the code?{' '}
//                     <button type="button" className="resend-link">
//                       Resend
//                     </button>
//                   </p>
//                 </div>
//               </form>
//             </div>
//           )}

         
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Register;




import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import './Register.css';

function Register({ onSuccess }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [isOtpVisible, setIsOtpVisible] = useState(false);
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const otpInputRefs = Array(6).fill(0).map(() => useRef(null));

  // Handle Google OAuth
  const handleGoogleOAuth = async (response) => {
    try {
      const { credential } = response;
      const { data } = await axios.post('https://zencia-finalbackend.vercel.app/api/google-auth', {
        token: credential, // Changed from idToken to token to match backend expectation
      });
      const { token, redirectPath } = data;
      onSuccess(redirectPath, token); // Use backend-provided redirectPath
    } catch (error) {
      console.error('Google Register Error:', error);
      setError(error.response?.data?.message || 'Google registration failed');
    }
  };

  // Handle manual registration (Step 1: Send OTP)
  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const { data } = await axios.post('https://zencia-finalbackend.vercel.app/api/register', {
        firstName,
        lastName,
        email,
        password,
        mobileNumber,
        city,
        state,
        country,
      });
      setIsOtpVisible(true);
      setSuccessMessage(data.message || 'Verification code sent to your email.');
      setError(null);
    } catch (error) {
      console.error('Registration Error:', error);
      setError(error.response?.data?.message || 'Registration failed');
    } finally {
      setIsLoading(false);
    }
  };

  // Handle OTP input changes
  const handleOtpChange = (index, value) => {
    if (!/^\d*$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < 5) otpInputRefs[index + 1].current.focus();
  };

  // Handle backspace in OTP inputs
  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      otpInputRefs[index - 1].current.focus();
    }
  };

  // Handle OTP verification (Step 2)
  const handleVerifyOtp = async (event) => {
    event.preventDefault();
    const otpString = otp.join('');
    if (otpString.length !== 6) {
      setError('Please enter all 6 digits of the OTP');
      return;
    }
    setIsLoading(true);
    try {
      const { data } = await axios.post('https://zencia-finalbackend.vercel.app/api/verify-otp', {
        email,
        otp: otpString,
      });
      const { token, redirectPath } = data;
      onSuccess(redirectPath, token); 
    } catch (error) {
      console.error('OTP Verification Error:', error);
      setError(error.response?.data?.message || 'OTP verification failed');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (otp.every((digit) => digit !== '') && otp.length === 6) {
      const timer = setTimeout(() => {
        document.getElementById('verify-otp-button')?.click();
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [otp]);

  return (
    <div className="auth-register-container">
      <div className="register-container">
        {/* Left Column: Welcome Section */}
        <div className="register-welcome-section">
          <div className="logo">
            <img src="/design.png" alt="ZenLicense Logo" />
          </div>
          <div className="welcome-content">
            <h2 className="welcome-title">Join ZenLicense Today</h2>
            <GoogleOAuthProvider clientId="424370588012-s14oo8n1aqn4cjda2ahbmavnls1863rj.apps.googleusercontent.com">
              <GoogleLogin
                onSuccess={handleGoogleOAuth}
                onError={(error) => setError('Google registration failed')}
                text="signup_with"
              />
            </GoogleOAuthProvider>
          </div>
        </div>

        {/* Right Column: Registration Form */}
        <div className="register-form-section">
          <div className="register-header">
            <h1>Create Your Account</h1>
            <p>Start managing your software licenses today</p>
          </div>

          {successMessage && <div className="success-message"><p>{successMessage}</p></div>}
          {error && <div className="error-message"><p>{error}</p></div>}

          {!isOtpVisible ? (
            <form className="register-form" onSubmit={handleSubmit}>
              <div className="input-row">
                <div className="form-group">
                  <label htmlFor="first-name">First Name</label>
                  <input
                    type="text"
                    id="first-name"
                    className="input-control"
                    placeholder="Enter your first name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="last-name">Last Name</label>
                  <input
                    type="text"
                    id="last-name"
                    className="input-control"
                    placeholder="Enter your last name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  className="input-control"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isLoading}
                />
              </div>
              <div className="input-row">
                <div className="form-group">
                  <label htmlFor="mobileNumber">Mobile Number</label>
                  <input
                    type="text"
                    id="mobileNumber"
                    className="input-control"
                    placeholder="Enter your mobile number"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="country">Country</label>
                  <input
                    type="text"
                    id="country"
                    className="input-control"
                    placeholder="Enter your country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                  />
                </div>
              </div>
              <div className="input-row">
                <div className="form-group">
                  <label htmlFor="city">City</label>
                  <input
                    type="text"
                    id="city"
                    className="input-control"
                    placeholder="Enter your city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="state">State</label>
                  <input
                    type="text"
                    id="state"
                    className="input-control"
                    placeholder="Enter your state"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  className="input-control"
                  placeholder="Create a strong password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="terms-checkbox">
                <input type="checkbox" id="terms" required disabled={isLoading} />
                <label htmlFor="terms">
                  I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>
                </label>
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                id="register-button"
                disabled={isLoading}
              >
                {isLoading ? 'Creating Account...' : 'Create Account'}
              </button>
            </form>
          ) : (
            <div className="otp-verification-container">
              <h2>Email Verification</h2>
              <p>Please enter the 6-digit code sent to {email}</p>
              <form className="otp-form" onSubmit={handleVerifyOtp}>
                <div className="otp-inputs-container">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      ref={otpInputRefs[index]}
                      type="text"
                      className="otp-input"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleOtpChange(index, e.target.value)}
                      onKeyDown={(e) => handleKeyDown(index, e)}
                      autoFocus={index === 0}
                      disabled={isLoading}
                    />
                  ))}
                </div>
                <div className="otp-actions">
                  <button
                    type="submit"
                    id="verify-otp-button"
                    className="btn btn-primary"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Verifying...' : 'Verify'}
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => setIsOtpVisible(false)}
                    disabled={isLoading}
                  >
                    Back
                  </button>
                </div>
                <div className="resend-otp">
                  <p>
                    Didn't receive the code?{' '}
                    <button type="button" className="resend-link" disabled={isLoading}>
                      Resend
                    </button>
                  </p>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Register;
