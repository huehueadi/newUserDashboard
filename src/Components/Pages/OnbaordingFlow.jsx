


// import React from 'react';
// import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
// import Login from './Login';
// import Onboarding from './Onbarding';
// import Register from './Register';

// const OnboardingFlow = () => {
//   const navigate = useNavigate();

//   const handleAuthSuccess = (redirectPath, token) => {
//     localStorage.setItem('authToken', token);
//     navigate(redirectPath);
//   };

//   const handleOnboardingComplete = () => {
//     navigate('/dashboard');
//   };

//   const hasToken = () => !!localStorage.getItem('authToken');

//   return (
//     <Routes>
//       <Route
//         path="register"
//         element={!hasToken() ? <Register onSuccess={handleAuthSuccess} /> : <Navigate to="/dashboard" />}
//       />
//       <Route
//         path="login"
//         element={!hasToken() ? <Login onSuccess={handleAuthSuccess} /> : <Navigate to="/dashboard" />}
//       />
//       <Route
//         path="onboard"
//         element={hasToken() ? <Onboarding onComplete={handleOnboardingComplete} /> : <Navigate to="/auth/login" />}
//       />
//       <Route
//         path="*"
//         element={<Navigate to={hasToken() ? '/dashboard' : '/auth/login'} />}
//       />
//     </Routes>
//   );
// };

// export default OnboardingFlow;


import React from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import Login from './Login';
import Onboarding from './Onbarding';
import Register from './Register';

const OnboardingFlow = () => {
  const navigate = useNavigate();

  const handleAuthSuccess = (redirectPath, token) => {
    localStorage.setItem('authToken', token);
    navigate(redirectPath); // e.g., /auth/onboard
  };

  const handleOnboardingComplete = () => {
    navigate('/download'); 
  };

  const hasToken = () => !!localStorage.getItem('authToken');

  return (
    <Routes>
      <Route
        path="register"
        element={!hasToken() ? <Register onSuccess={handleAuthSuccess} /> : <Navigate to="/dashboard" />}
      />
      <Route
        path="login"
        element={!hasToken() ? <Login onSuccess={handleAuthSuccess} /> : <Navigate to="/dashboard" />}
      />
      <Route
        path="onboard"
        element={hasToken() ? <Onboarding onComplete={handleOnboardingComplete} /> : <Navigate to="/auth/login" />}
      />
      <Route
        path="*"
        element={<Navigate to={hasToken() ? '/dashboard' : '/auth/login'} />}
      />
    </Routes>
  );
};

export default OnboardingFlow;