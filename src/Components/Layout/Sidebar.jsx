import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Sidebar() {
  return (
    <div className="sidebar" id="sidebar">
      <div className="logo-container">
        <div className="logo">
        <div class="logo">
  <img className="full-logo" src="Untitled design (2).png" alt="ZenLicense Logo" />
</div>
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

    <Link href="/genrate" className="menu-item" data-tab="plans">
      <div className="menu-icon">🔑</div>
      <span className="menu-text">Generate Key</span>
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
      </div>
    </div>
  );
}

export default Sidebar;
