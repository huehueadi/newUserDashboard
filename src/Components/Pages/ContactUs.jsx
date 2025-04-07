import React from 'react'

function ContactUs() {
  return (
   <div classname="dashboard-content-container">
  <div className="dashboard-tab" id="contact-us">
    <h2 className="section-title">Contact Us</h2>
    <div className="key-generator">
      <div className="form-group">
        <label htmlFor="contact-subject">Subject</label>
        <input type="text" id="contact-subject" className="input-control" placeholder="How can we help you?" />
      </div>
      <div className="form-group">
        <label htmlFor="contact-message">Message</label>
        <textarea id="contact-message" className="input-control" style={{minHeight: 150}} placeholder="Please describe your issue or question in detail..." defaultValue={""} />
      </div>
      <div className="form-group">
        <label>Preferred Contact Method</label>
        <div className="input-group">
          <button className="btn btn-primary">Email</button>
          <button className="btn">Phone</button>
          <button className="btn">Live Chat</button>
        </div>
      </div>
      <button className="btn btn-primary">Send Message</button>
    </div>
    <h2 className="section-title" style={{marginTop: 30}}>Contact Information</h2>
    <div className="card-container">
      <div className="plan-card">
        <h3 className="plan-name">Email Support</h3>
        <p className="plan-desc">24/7 email support</p>
        <div className="feature-list">
          <div className="feature-item"><i>📧</i> support@zenlicense.com</div>
          <div className="feature-item"><i>⏱️</i> Response within 24 hours</div>
        </div>
        <button className="btn btn-primary">Email Us</button>
      </div>
      <div className="plan-card">
        <h3 className="plan-name">Phone Support</h3>
        <p className="plan-desc">Available 9 AM - 5 PM ET</p>
        <div className="feature-list">
          <div className="feature-item"><i>📞</i> +1 (555) 123-4567</div>
          <div className="feature-item"><i>⏱️</i> Business hours support</div>
        </div>
        <button className="btn btn-primary">Call Us</button>
      </div>
      <div className="plan-card">
        <h3 className="plan-name">Live Chat</h3>
        <p className="plan-desc">Instant assistance</p>
        <div className="feature-list">
          <div className="feature-item"><i>💬</i> Available now</div>
          <div className="feature-item"><i>⏱️</i> Immediate response</div>
        </div>
        <button className="btn btn-primary">Start Chat</button>
      </div>
    </div>
  </div>
</div>

  )
}

export default ContactUs
