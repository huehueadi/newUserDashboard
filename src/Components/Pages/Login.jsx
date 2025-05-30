// import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
// import axios from 'axios';
// import React, { useState } from 'react';

// function Login({ onSuccess }) {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState(null);
//   const [successMessage, setSuccessMessage] = useState('');
//   const [isLoading, setIsLoading] = useState(false);

//   // Handle Google OAuth login
//   const handleGoogleOAuth = async (response) => {
//     console.log("Google OAuth response:", response);
//     try {
//       const { credential } = response;
//       console.log("Google credential:", credential);
//       const { data } = await axios.post('http://localhost:3000/api/google-auth', { token: credential });
//       console.log('Google login successful', data);
//       localStorage.setItem('authToken', data.token); // Store token
//       setSuccessMessage('Google login successful');
//       setTimeout(() => {
//         onSuccess(); // Call onSuccess
//       }, 1000);
//     } catch (error) {
//       console.error('Google login error', error);
//       setError('Google login failed, please try again.');
//     }
//   };

//   // Handle email/password login
//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     console.log("Form submitted for login");
//     setIsLoading(true);
//     setError(null);
//     setSuccessMessage('');

//     try {
//       const { data } = await axios.post('https://zencia-finalbackend.vercel.app/api/login', {
//         email,
//         password,
//       });
//       console.log("Login API response:", data);
//       localStorage.setItem('authToken', data.token); // Store token
//       setIsLoading(false);
//       setSuccessMessage('Login successful');
//       setTimeout(() => {
//         onSuccess(); // Call onSuccess
//       }, 1000);
//     } catch (error) {
//       console.error('Login error', error);
//       setError(error.response?.data?.message || 'Login failed');
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="auth-login-container">
//       <div className="login-container">
//         <div className="login-sidebar">
//           <div className="logo">
//             <img src="/api/placeholder/40/40" alt="ZenLicense Logo" />
//             <span className="logo-text">ZenLicense</span>
//           </div>
//           <div className="sidebar-content">
//             <h2>Welcome Back</h2>
//             <p>Log in to manage your software licenses with ZenLicense.</p>
//           </div>
//         </div>

//         <div className="login-form-container">
//           <div className="login-header">
//             <h1>Sign In</h1>
//             <p>Access your ZenLicense account</p>
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

//           <div className="login-options">
//             <GoogleOAuthProvider clientId="424370588012-s14oo8n1aqn4cjda2ahbmavnls1863rj.apps.googleusercontent.com">
//               <GoogleLogin
//                 onSuccess={handleGoogleOAuth}
//                 onError={(error) => console.error('Google login error:', error)}
//               />
//             </GoogleOAuthProvider>
//           </div>

//           <div className="separator">Or sign in with email</div>

//           <form className="login-form" onSubmit={handleSubmit}>
//             <div className="form-group">
//               <label htmlFor="email">Email Address</label>
//               <input
//                 type="email"
//                 id="email"
//                 className="input-control"
//                 placeholder="Enter your email address"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//             </div>

//             <div className="form-group">
//               <label htmlFor="password">Password</label>
//               <input
//                 type="password"
//                 id="password"
//                 className="input-control"
//                 placeholder="Enter your password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//             </div>

//             <button
//               type="submit"
//               className="btn btn-primary"
//               id="login-button"
//               disabled={isLoading}
//             >
//               {isLoading ? 'Signing In...' : 'Sign In'}
//             </button>
//           </form>

//           <div className="login-footer">
//             Don’t have an account? <a href="/auth/register" className="register-link">Sign up</a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;


// import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
// import axios from 'axios';
// import React, { useState } from 'react';

// function Login({ onSuccess }) {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState(null);
//   const [successMessage, setSuccessMessage] = useState('');
//   const [isLoading, setIsLoading] = useState(false);

//   // Handle Google OAuth login
//   const handleGoogleOAuth = async (response) => {
//     try {
//       const { credential } = response;
//       const { data } = await axios.post('https://zencia-finalbackend.vercel.app/api/google-auth', {
//         token: credential,
//       });
//       const { token, redirectPath } = data;
//       localStorage.setItem('authToken', token); 
//       setSuccessMessage('Google login successful');
//       setTimeout(() => {
//         onSuccess(redirectPath, token); 
//       }, 1000);
//     } catch (error) {
//       console.error('Google Register Error:', error);
//       setError(error.response?.data?.message || 'Google login failed');
//     }
//   };

//   // Handle email/password login
//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setIsLoading(true);
//     setError(null);
//     setSuccessMessage('');

//     try {
//       const { data } = await axios.get('https://zencia-finalbackend.vercel.app/api/login', {
//         email,
//         password,
//       });
//       localStorage.setItem('authToken', data.token);
//       setIsLoading(false);
//       setSuccessMessage('Login successful');
//       setTimeout(() => {
//         onSuccess(data.redirectPath || '/dashboard', data.token); 
//       }, 1000);
//     } catch (error) {
//       console.error('Login error', error);
//       setError(error.response?.data?.message || 'Login failed');
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="auth-login-container">
//       <div className="login-container">
        
//         <div className="login-welcome-section">
//           <div className="logo">
//             <img src="/-ZENLOGO.png" alt="ZenLicense Logo" />
//           </div>
//           <div className="welcome-content">
//             <h2 className="welcome-title">Welcome Back</h2>
//             <GoogleOAuthProvider clientId="424370588012-s14oo8n1aqn4cjda2ahbmavnls1863rj.apps.googleusercontent.com">
//               <GoogleLogin
//                 onSuccess={handleGoogleOAuth}
//                 onError={(error) => console.error('Google login error:', error)}
//               />
//             </GoogleOAuthProvider>
//           </div>
//         </div>

//         {/* Right Column: Login Form */}
//         <div className="login-form-section">
//           <div className="login-header">
//             <h1>Sign in</h1>
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

//           <form className="login-form" onSubmit={handleSubmit}>
//             <div className="form-group">
//               <label htmlFor="email">Email</label>
//               <input
//                 type="email"
//                 id="email"
//                 className="input-control"
//                 placeholder="Enter your email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//             </div>

//             <div className="form-group">
//               <label htmlFor="password">Password</label>
//               <input
//                 type="password"
//                 id="password"
//                 className="input-control"
//                 placeholder="Enter your password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//             </div>

//             <button
//               type="submit"
//               className="btn btn-primary"
//               id="login-button"
//               disabled={isLoading}
//             >
//               {isLoading ? 'Signing In...' : 'Sign In'}
//             </button>
//           </form>

//           <div className="login-footer">
//             Don’t have an account? <a href="/auth/register" className="register-link">Sign up</a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;



import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import axios from 'axios';
import React, { useState } from 'react';

function Login({ onSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Handle Google OAuth login
  const handleGoogleOAuth = async (response) => {
    try {
      const { credential } = response;
      const { data } = await axios.post('https://zencia-finalbackend.vercel.app/api/google-auth', {
        token: credential,
      });
      const { token, redirectPath } = data;
      localStorage.setItem('authToken', token);
      setSuccessMessage('Google login successful');
      setTimeout(() => {
        onSuccess(redirectPath, token);
      }, 1000);
    } catch (error) {
      console.error('Google Login Error:', error);
      setError(error.response?.data?.message || 'Google login failed');
    }
  };

  // Handle email/password login
  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccessMessage('');

    try {
      const { data } = await axios.post('https://zencia-finalbackend.vercel.app/api/login', {
        email,
        password,
      });
      const { token, redirectPath } = data;
      localStorage.setItem('authToken', token);
      setSuccessMessage(data.message || 'Login successful');
      setTimeout(() => {
        onSuccess(redirectPath, token);
      }, 1000);
    } catch (error) {
      console.error('Login Error:', error);
      setError(error.response?.data?.message || 'Invalid email or password');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="auth-login-container">
      <div className="login-container">
        {/* Left Column: Welcome Section */}
        <div className="login-welcome-section">
          <div className="logo">
            <img src="/-ZENLOGO.png" alt="ZenLicense Logo" />
          </div>
          <div className="welcome-content">
            <h2 className="welcome-title">Welcome Back</h2>
            <GoogleOAuthProvider clientId="424370588012-s14oo8n1aqn4cjda2ahbmavnls1863rj.apps.googleusercontent.com">
              <GoogleLogin
                onSuccess={handleGoogleOAuth}
                onError={(error) => console.error('Google login error:', error)}
              />
            </GoogleOAuthProvider>
          </div>
        </div>

        {/* Right Column: Login Form */}
        <div className="login-form-section">
          <div className="login-header">
            <h1>Sign in</h1>
          </div>

          {successMessage && (
            <div className="success-message">
              <p>{successMessage}</p>
            </div>
          )}
          {error && (
            <div className="error-message">
              <p>{error}</p>
            </div>
          )}

          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="input-control"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isLoading}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                className="input-control"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={isLoading}
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              id="login-button"
              disabled={isLoading}
            >
              {isLoading ? 'Signing In...' : 'Sign In'}
            </button>
          </form>

          <div className="login-footer">
            Don’t have an account? <a href="/auth/register" className="register-link">Sign up</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;