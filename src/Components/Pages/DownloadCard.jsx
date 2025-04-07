import React, { useState } from 'react';

function Dashboard() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  
  const showDownloadPopup = () => {
    setIsPopupVisible(true);
  };
  
  const closeDownloadPopup = () => {
    setIsPopupVisible(false);
  };
  
  const confirmDownload = () => {
    // Logic for handling the download
    alert('Download started!');
    setIsPopupVisible(false);
  };

  return (
    <div className="dashboard-content-container">
      {/* Overview Tab (default active) */}
      <div className="dashboard-tab active" >
        {/* Stats Section */}
        <div className="stats-container">
          <div className="stat-card">
            <div className="stat-card-header">
              <span>Active Licenses</span>
              <span>🔑</span>
            </div>
            <div className="stat-card-value">3</div>
            <div className="stat-card-label">Valid licenses</div>
          </div>
          <div className="stat-card">
            <div className="stat-card-header">
              <span>Current Plan</span>
              <span>⭐</span>
            </div>
            <div className="stat-card-value">Lifetime</div>
            <div className="stat-card-label">Never expires</div>
          </div>
          <div className="stat-card">
            <div className="stat-card-header">
              <span>Support Tickets</span>
              <span>🎟️</span>
            </div>
            <div className="stat-card-value">0</div>
            <div className="stat-card-label">No pending tickets</div>
          </div>
          <div className="stat-card">
            <div className="stat-card-header">
              <span>Last Payment</span>
              <span>💳</span>
            </div>
            <div className="stat-card-value">$19</div>
            <div className="stat-card-label">March 28, 2025</div>
          </div>
        </div>
        {/* Quick Actions */}
        <h2 className="section-title">Quick Actions</h2>
        <div className="card-container">
          <div className="plan-card">
            <h3 className="plan-name">Generate New Key</h3>
            <p className="plan-desc">Create a license key for your software</p>
            <div className="feature-list">
              <div className="feature-item"><i>✓</i> Hardware ID validation</div>
              <div className="feature-item"><i>✓</i> Automatic activation</div>
              <div className="feature-item"><i>✓</i> Secure encryption</div>
            </div>
            <button className="btn btn-primary">Generate Key</button>
          </div>
          
          {/* Download Software Card with Click Handler */}
          <div className="plan-card" onClick={showDownloadPopup}>
            <h3 className="plan-name">Download Software</h3>
            <p className="plan-desc">Get the latest version of our software</p>
            <div className="feature-list">
              <div className="feature-item"><i>✓</i> Latest version (v2.1.3)</div>
              <div className="feature-item"><i>✓</i> Windows &amp; Mac compatible</div>
              <div className="feature-item"><i>✓</i> Offline installer</div>
            </div>
            <button className="btn btn-primary">Download Now</button>
          </div>
          
          <div className="plan-card">
            <h3 className="plan-name">Need Help?</h3>
            <p className="plan-desc">Get support from our team</p>
            <div className="feature-list">
              <div className="feature-item"><i>✓</i> 24/7 Support</div>
              <div className="feature-item"><i>✓</i> Priority response</div>
              <div className="feature-item"><i>✓</i> Dedicated assistance</div>
            </div>
            <button className="btn btn-primary">Contact Support</button>
          </div>
        </div>
        {/* Recent Licenses */}
        <h2 className="section-title">Recent Licenses</h2>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>License Key</th>
                <th>Hardware ID</th>
                <th>Created On</th>
                <th>Expires On</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>XXXX-YYYY-ZZZZ-1234</td>
                <td>HWID-9876-5432-1098</td>
                <td>Mar 28, 2025</td>
                <td>Never</td>
                <td><span className="status-badge status-active">Active</span></td>
                <td>
                  <button className="btn">Copy</button>
                </td>
              </tr>
              <tr>
                <td>AAAA-BBBB-CCCC-5678</td>
                <td>HWID-1234-5678-9012</td>
                <td>Feb 15, 2025</td>
                <td>Never</td>
                <td><span className="status-badge status-active">Active</span></td>
                <td>
                  <button className="btn">Copy</button>
                </td>
              </tr>
              <tr>
                <td>DDDD-EEEE-FFFF-9012</td>
                <td>HWID-5544-3322-1100</td>
                <td>Jan 10, 2025</td>
                <td>Never</td>
                <td><span className="status-badge status-active">Active</span></td>
                <td>
                  <button className="btn">Copy</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Download Popup Modal */}
      {isPopupVisible && (
        <div id="downloadPopup" className="modal">
          <div className="modal-content">
            <span 
              className="close" 
              id="close-download-popup"
              onClick={closeDownloadPopup}
            >
              ×
            </span>
            <h3>System Requirements</h3>
            <ul>
              <li>Operating System: Windows 10 or later / macOS 11 or later</li>
              <li>RAM: 8GB minimum (16GB recommended)</li>
              <li>Storage: 2GB free space</li>
              <li>Processor: Intel i5 or equivalent</li>
            </ul>
            <button 
              className="btn btn-primary" 
              id="confirm-download"
              onClick={confirmDownload}
            >
              Download
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;