import axios from 'axios'; // Import axios
import React, { useEffect, useState } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import Login from './Login';
import Onboarding from './Onbarding';
import Register from './Register';

const OnboardingFlow = () => {
  const [isNewUser, setIsNewUser] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkUserStatus = async () => {
      const token = localStorage.getItem('authToken');
      console.log("token", token)
      if (token) {
        try {
          const response = await axios.get('https://zencia-finalbackend.vercel.app/api/user', {
            headers: { Authorization: `${token}` },
          });
         
          const userData = response.data.data;
          setIsNewUser(!userData.isOnboardingCompleted);
          navigate(userData.isOnboardingCompleted ? '/dashboard' : '/auth/onboard');
        } catch (error) {
          console.error('Error fetching user data:', error.response?.data?.message || error.message);
          localStorage.removeItem('authToken');
          navigate('/auth/login');
        }
      }
    };
    checkUserStatus();
  }, [navigate]);

  const handleRegistrationSuccess = () => {
    setIsNewUser(true);
    navigate('/auth/onboard');
  };

  const handleLoginSuccess = async () => {
    const token = localStorage.getItem('authToken');
    try {
      const response = await axios.get('https://zencia-finalbackend.vercel.app/api/user', {
        headers: { Authorization: `${token}` },
      });
      const userData = response.data.data;
      setIsNewUser(!userData.isOnboardingCompleted);
      navigate(userData.isOnboardingCompleted ? '/dashboard' : '/auth/onboard');
    } catch (error) {
      console.error('Error fetching user data:', error.response?.data?.message || error.message);
      navigate('/auth/login');
    }
  };

  const handleOnboardingComplete = () => {
    setIsNewUser(false);
    navigate('/dashboard');
  };

  const hasToken = () => !!localStorage.getItem('authToken');

  return (
    <Routes>
      <Route
        path="register"
        element={
          !hasToken() ? (
            <Register onSuccess={handleRegistrationSuccess} />
          ) : isNewUser ? (
            <Navigate to="/auth/onboard" />
          ) : (
            <Navigate to="/dashboard" />
          )
        }
      />
      <Route
        path="login"
        element={
          !hasToken() ? (
            <Login onSuccess={handleLoginSuccess} />
          ) : isNewUser ? (
            <Navigate to="/auth/onboard" />
          ) : (
            <Navigate to="/dashboard" />
          )
        }
      />
      <Route
        path="onboard"
        element={
          hasToken() && isNewUser ? (
            <Onboarding onComplete={handleOnboardingComplete} />
          ) : hasToken() ? (
            <Navigate to="/dashboard" />
          ) : (
            <Navigate to="/auth/login" />
          )
        }
      />
      <Route
        path="*"
        element={<Navigate to={hasToken() ? '/dashboard' : '/auth/login'} />}
      />
    </Routes>
  );
};

export default OnboardingFlow;