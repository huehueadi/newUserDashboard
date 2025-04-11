// import React from 'react';
// import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
// import Layout from './Components/Layout/Layout';
// import ContactUs from './Components/Pages/ContactUs';
// import Dashboard from './Components/Pages/Dashboard';
// import LicenseManagement from './Components/Pages/LicenseManagement';
// import OnboardingFlow from './Components/Pages/OnbaordingFlow';
// import PaymentGateway from './Components/Pages/PaymentGatway';
// import PaymentHistory from './Components/Pages/PaymentHistory';
// import Plan from './Components/Pages/Plan';
// import RasieTicket from './Components/Pages/RasieTicket';
// import Store from './Components/Pages/Store';



// import { Navigate } from 'react-router-dom';
// import ProtectedRoute from './Components/Authentication/Authenticate';
// import Plans from './Components/Pages/Plans';
// import Success from './Components/Pages/Success';


// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/auth/*" element={<OnboardingFlow />} />

//         {/* Authenticated routes */}
//         <Route path="/" element={<Layout />}>
//           <Route
//             path="dashboard"
//             element={
//               <ProtectedRoute>
//                 <Dashboard />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="license-management"element={
//               <ProtectedRoute>
//                 <LicenseManagement />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="payment-history"
//             element={
//               <ProtectedRoute>
//                 <PaymentHistory />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="store"
//             element={
//               <ProtectedRoute>
//                 <Store />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="contact-us"
//             element={
//               <ProtectedRoute>
//                 <ContactUs />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="raise-ticket"
//             element={
//               <ProtectedRoute>
//                 <RasieTicket />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="plans"
//             element={
//               <ProtectedRoute>
//                 <Plan />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="payment-gateway"
//             element={
//               <ProtectedRoute>
//                 <PaymentGateway />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="success"
//             element={
//               <ProtectedRoute>
//                 <Success />
//               </ProtectedRoute>
//             }
//           />
//            <Route
//             path="pln"
//             element={
//               <ProtectedRoute>
//                 <Plans />
//               </ProtectedRoute>
//             }
//           />
//           {/* Default route */}
//           <Route
//             index
//             element={
//               <ProtectedRoute>
//                 <Dashboard />
//               </ProtectedRoute>
//             }
//           />
//         </Route>

//         {/* Catch-all route */}
//         <Route path="*" element={<Navigate to="/auth/login" replace />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;



import React from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ProtectedRoute from './Components/Authentication/Authenticate';
import Layout from './Components/Layout/Layout';
import ContactUs from './Components/Pages/ContactUs';
import Dashboard from './Components/Pages/Dashboard';
import Download from './Components/Pages/Download'; // Add this import
import Plans from './Components/Pages/extra/Plans';
import FAQ from './Components/Pages/Faq';
import LicenseManagement from './Components/Pages/LicenseManagement';
import OnboardingFlow from './Components/Pages/OnbaordingFlow';
import PaymentGateway from './Components/Pages/PaymentGatway';
import PaymentHistory from './Components/Pages/PaymentHistory';
import Plan from './Components/Pages/Plan';
import PlanSelection from './Components/Pages/PlanSelection';
import RasieTicket from './Components/Pages/RasieTicket';
import Store from './Components/Pages/Store';
import Success from './Components/Pages/Success';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/auth/*" element={<OnboardingFlow />} />

        {/* Authenticated routes */}
        <Route path="/" element={<Layout />}>
          <Route
            path="dashboard"
            element={<ProtectedRoute><Dashboard /></ProtectedRoute>}
          />
          <Route
            path="license-management"
            element={<ProtectedRoute><LicenseManagement /></ProtectedRoute>}
          />
          <Route
            path="payment-history"
            element={<ProtectedRoute><PaymentHistory /></ProtectedRoute>}
          />
          <Route
            path="store"
            element={<ProtectedRoute><Store /></ProtectedRoute>}
          />
          <Route
            path="contact-us"
            element={<ProtectedRoute><ContactUs /></ProtectedRoute>}
          />
          <Route
            path="raise-ticket"
            element={<ProtectedRoute><RasieTicket /></ProtectedRoute>}
          />
          <Route
            path="plans"
            element={<ProtectedRoute><Plan /></ProtectedRoute>}
          />
           <Route
            path="plan-selection"
            element={<ProtectedRoute><PlanSelection /></ProtectedRoute>}
          />
          <Route
            path="payment-gateway"
            element={<ProtectedRoute><PaymentGateway /></ProtectedRoute>}
          />
          <Route
            path="success"
            element={<ProtectedRoute><Success /></ProtectedRoute>}
          />
          <Route
            path="pln"
            element={<ProtectedRoute><Plans /></ProtectedRoute>}
          />
          <Route
            path="download" // New route
            element={<ProtectedRoute><Download /></ProtectedRoute>}
          />
           <Route
            path="faq" // New route
            element={<ProtectedRoute><FAQ /></ProtectedRoute>}
          />
          <Route
            index
            element={<ProtectedRoute><Dashboard /></ProtectedRoute>}
          />
        </Route>

        {/* Catch-all route */}
        <Route path="*" element={<Navigate to="/auth/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;