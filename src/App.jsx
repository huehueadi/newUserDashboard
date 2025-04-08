import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import ContactUs from './Components/Pages/ContactUs';
import Dashboard from './Components/Pages/Dashboard';
import LicenseManagement from './Components/Pages/LicenseManagement';
import OnboardingFlow from './Components/Pages/OnbaordingFlow';
import PaymentGateway from './Components/Pages/PaymentGatway';
import PaymentHistory from './Components/Pages/PaymentHistory';
import Plan from './Components/Pages/Plan';
import RasieTicket from './Components/Pages/RasieTicket';
import Store from './Components/Pages/Store';
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



import { Navigate } from 'react-router-dom';
import ProtectedRoute from './Components/Authentication/Authenticate';
import Success from './Components/Pages/Success';

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

function App() {
  return (
    <Router>
      <Routes>
        {/* Public route */}
        <Route path="/auth/*" element={<OnboardingFlow />} />

        {/* Authenticated routes */}
        <Route path="/" element={<Layout />}>
          <Route
            path="dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="license-management"element={
              <ProtectedRoute>
                <LicenseManagement />
              </ProtectedRoute>
            }
          />
          <Route
            path="payment-history"
            element={
              <ProtectedRoute>
                <PaymentHistory />
              </ProtectedRoute>
            }
          />
          <Route
            path="store"
            element={
              <ProtectedRoute>
                <Store />
              </ProtectedRoute>
            }
          />
          <Route
            path="contact-us"
            element={
              <ProtectedRoute>
                <ContactUs />
              </ProtectedRoute>
            }
          />
          <Route
            path="raise-ticket"
            element={
              <ProtectedRoute>
                <RasieTicket />
              </ProtectedRoute>
            }
          />
          <Route
            path="plans"
            element={
              <ProtectedRoute>
                <Plan />
              </ProtectedRoute>
            }
          />
          <Route
            path="payment-gateway"
            element={
              <ProtectedRoute>
                <PaymentGateway />
              </ProtectedRoute>
            }
          />
          <Route
            path="success"
            element={
              <ProtectedRoute>
                <Success />
              </ProtectedRoute>
            }
          />
          {/* Default route */}
          <Route
            index
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Route>

        {/* Catch-all route */}
        <Route path="*" element={<Navigate to="/auth/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
