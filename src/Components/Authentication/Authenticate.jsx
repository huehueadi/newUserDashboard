import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem('authToken');
  const [isValidating, setIsValidating] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const verifyToken = async () => {
      if (!token) {
        console.log('No token found, redirecting to login');
        setIsValidating(false);
        navigate('/auth/login', { replace: true });
        return;
      }

      try {
        await axios.get('https://zencia-finalbackend.vercel.app/api/verify-user', {
          headers: {
            'Authorization': `${token}`
          }
        });
        
        console.log('Token is valid');
        setIsAuthenticated(true);
      } catch (error) {
        console.error('Token verification error:', error);
        console.log('Token verification failed, redirecting to login');
        localStorage.removeItem('authToken');
        navigate('/auth/login', { replace: true });
      } finally {
        setIsValidating(false);
      }
    };

    verifyToken();
  }, [token, navigate]);

  if (isValidating) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? children : null;
};

export default ProtectedRoute;