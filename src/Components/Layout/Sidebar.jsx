import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Sidebar() {
  const navigate = useNavigate();

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('authToken'); // Remove token from localStorage
    navigate('/auth/login'); // Redirect to login page
  };

  return (
    <div className="sidebar" id="sidebar">
      <div className="logo-container">
        <div className="logo">
          <img className="full-logo" src="/design.png" alt="ZenLicense Logo" />
        </div>
      </div>
      <div className="menu-container">
        <Link to="/dashboard" className="menu-item" data-tab="overview">
          <div className="menu-icon">🏠</div>
          <span className="menu-text">Overview</span>
        </Link>

        <Link to="/plans" className="menu-item" data-tab="plans">
          <div className="menu-icon">💰</div>
          <span className="menu-text">Plans</span>
        </Link>

        <Link to="/license-management" className="menu-item" data-tab="license-management">
          <div className="menu-icon">📋</div>
          <span className="menu-text">License Management</span>
        </Link>

        <Link to="/payment-history" className="menu-item" data-tab="payment-history">
          <div className="menu-icon">🧾</div>
          <span className="menu-text">Payment History</span>
        </Link>

        <Link to="/store" className="menu-item" data-tab="store">
          <div className="menu-icon">🛒</div>
          <span className="menu-text">Store</span>
        </Link>

        <Link to="/contact-us" className="menu-item" data-tab="contact-us">
          <div className="menu-icon">📞</div>
          <span className="menu-text">Contact Us</span>
        </Link>

        <Link to="/raise-ticket" className="menu-item" data-tab="raise-ticket">
          <div className="menu-icon">🎟️</div>
          <span className="menu-text">Raise Ticket</span>
        </Link>

        {/* Corrected Logout Link */}
        <Link
          to="/auth/login" // Redirect destination, but we'll override navigation
          className="menu-item logout-btn"
          style={{
            marginTop: 'auto', // Push to bottom
            borderTop: '1px solid #333', // Visual separator
            paddingTop: '15px',
            marginTop: '20px',
          }}
          onClick={(e) => {
            e.preventDefault(); // Prevent default Link navigation
            handleLogout(); // Call logout function
          }}
        >
          <div className="menu-icon">🚪</div>
          <span className="menu-text">Logout</span>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;