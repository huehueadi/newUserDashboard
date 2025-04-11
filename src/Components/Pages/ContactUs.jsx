// import React, { useState } from 'react';
// import './Contact.css';

// function ContactUs() {
//   const [formData, setFormData] = useState({
//     subject: '',
//     message: ''
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitMessage, setSubmitMessage] = useState({ type: '', text: '' });

//   const handleInputChange = (e) => {
//     const { id, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [id === 'contact-subject' ? 'subject' : 'message']: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     if (!formData.subject || !formData.message) {
//       setSubmitMessage({
//         type: 'error',
//         text: 'Please fill in both subject and message fields.'
//       });
//       return;
//     }
    
//     setIsSubmitting(true);
    
//     // Simulate API call
//     setTimeout(() => {
//       setSubmitMessage({
//         type: 'success',
//         text: 'Your message has been sent successfully! We will get back to you soon.'
//       });
//       setFormData({ subject: '', message: '' });
//       setIsSubmitting(false);
//     }, 1500);
//   };

//   return (
//     <div className="dashboard-content-container">
//       <div className="dashboard-tab" id="contact-us">
//       <div className="pricing-header">
//         <div className="pricing-title-tag">Get in Touch</div>
//         <h1 className="pricing-title">We’d Love to Hear from You</h1>
//       </div>
        
//         {submitMessage.text && (
//           <div className={`message-container ${submitMessage.type}`}>
//             <span className="message-icon">
//               {submitMessage.type === 'success' ? '✓' : '⚠'}
//             </span>
//             <span className="message-text">{submitMessage.text}</span>
//           </div>
//         )}
        
//         <div className="contact-form">
//           <div className="form-group">
//             <label htmlFor="contact-subject">Subject</label>
//             <input 
//               type="text" 
//               id="contact-subject" 
//               className="input-control" 
//               placeholder="How can we help you?" 
//               value={formData.subject}
//               onChange={handleInputChange}
//               disabled={isSubmitting}
//             />
//           </div>
          
//           <div className="form-group">
//             <label htmlFor="contact-message">Message</label>
//             <textarea 
//               id="contact-message" 
//               className="input-control" 
//               placeholder="Please describe your issue or question in detail..." 
//               value={formData.message}
//               onChange={handleInputChange}
//               disabled={isSubmitting}
//             />
//           </div>
          
//           <button 
//             className={`submit-btn ${isSubmitting ? 'loading' : ''}`}
//             onClick={handleSubmit}
//             disabled={isSubmitting}
//           >
//             {isSubmitting ? (
//               <>
//                 <span className="spinner"></span>
//                 <span>Sending...</span>
//               </>
//             ) : 'Send Message'}
//           </button>
//         </div>
        
//         <h2 className="section-title contact-info-title">Contact Information</h2>
        
//         <div className="contact-cards-container">
//           <div className="contact-card">
//             <div className="card-icon">📧</div>
//             <h3 className="card-title">Email Support</h3>
//             <p className="card-desc">24/7 email support</p>
//             <div className="card-details">
//               <div className="detail-item">
//                 <span className="detail-icon">📧</span>
//                 <a href="mailto:support@zencia.ai" className="email-link">support@zencia.ai</a>
//               </div>
//               <div className="detail-item">
//                 <span className="detail-icon">⏱️</span>
//                 <span>Response within 24 hours</span>
//               </div>
//             </div>
//           </div>
          
//           <div className="contact-card">
//             <div className="card-icon">📞</div>
//             <h3 className="card-title">Phone Support</h3>
//             <p className="card-desc">Available 9 AM - 7 PM IST</p>
//             <div className="card-details">
//               <div className="detail-item">
//                 <span className="detail-icon">📞</span>
//                 <a href="tel:+919559050100" className="phone-link">(+91) 9559050100</a>
//               </div>
//               <div className="detail-item">
//                 <span className="detail-icon">⏱️</span>
//                 <span>Business hours support</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


// export default ContactUs;



import axios from 'axios'; // Add axios import
import React, { useState } from 'react';
import './Contact.css';

function ContactUs() {
  const [formData, setFormData] = useState({
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState({ type: '', text: '' });

  const token = localStorage.getItem('authToken'); // Get token for authenticated requests

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    console.log('Input changed:', { id, value }); // Debug log
    setFormData((prev) => ({
      ...prev,
      [id === 'contact-subject' ? 'subject' : 'message']: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted with:', formData); // Debug log

    if (!formData.subject || !formData.message) {
      console.log('Validation failed: Missing subject or message');
      setSubmitMessage({
        type: 'error',
        text: 'Please fill in both subject and message fields.',
      });
      return;
    }

    setIsSubmitting(true);
    console.log('Submitting form...');

    try {
      const response = await axios.post(
        'https://zencia-finalbackend.vercel.app/api/support/submit-contact-form',
        {
          subject: formData.subject,
          message: formData.message,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `${token}` // Include token if present
          },
        }
      );

      console.log('API response:', response.data); // Debug log
      if (response.data.success) {
        setSubmitMessage({
          type: 'success',
          text: response.data.message, // Use backend message
        });
        setFormData({ subject: '', message: '' });
      } else {
        throw new Error(response.data.message || 'Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error.response?.data || error.message);
      setSubmitMessage({
        type: 'error',
        text: `Failed to send message: ${error.response?.data?.message || error.message}`,
      });
    } finally {
      setIsSubmitting(false);
      console.log('Submission complete, isSubmitting set to false');
    }
  };

  console.log('Rendering with state:', { formData, isSubmitting, submitMessage }); // Debug log

  return (
    <div className="dashboard-content-container">
      <div className="dashboard-tab" id="contact-us">
        <div className="pricing-header">
          <div className="pricing-title-tag">Get in Touch</div>
          <h1 className="pricing-title">We’d Love to Hear from You</h1>
        </div>

        {submitMessage.text && (
          <div className={`message-container ${submitMessage.type}`}>
            <span className="message-icon">
              {submitMessage.type === 'success' ? '✓' : '⚠'}
            </span>
            <span className="message-text">{submitMessage.text}</span>
          </div>
        )}

        <div className="contact-form">
          <div className="form-group">
            <label htmlFor="contact-subject">Subject</label>
            <input
              type="text"
              id="contact-subject"
              className="input-control"
              placeholder="How can we help you?"
              value={formData.subject}
              onChange={handleInputChange}
              disabled={isSubmitting}
            />
          </div>

          <div className="form-group">
            <label htmlFor="contact-message">Message</label>
            <textarea
              id="contact-message"
              className="input-control"
              placeholder="Please describe your issue or question in detail..."
              value={formData.message}
              onChange={handleInputChange}
              disabled={isSubmitting}
            />
          </div>

          <button
            className={`submit-btn ${isSubmitting ? 'loading' : ''}`}
            onClick={handleSubmit}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <span className=""></span>
                <span>Sending...</span>
              </>
            ) : (
              'Send Message'
            )}
          </button>
        </div>

        <h2 className="section-title contact-info-title">Contact Information</h2>

        <div className="contact-cards-container">
          <div className="contact-card">
            <div className="card-icon">📧</div>
            <h3 className="card-title">Email Support</h3>
            <p className="card-desc">24/7 email support</p>
            <div className="card-details">
              <div className="detail-item">
                <span className="detail-icon">📧</span>
                <a href="mailto:support@zencia.ai" className="email-link">
                  support@zencia.ai
                </a>
              </div>
              <div className="detail-item">
                <span className="detail-icon">⏱️</span>
                <span>Response within 24 hours</span>
              </div>
            </div>
          </div>

          <div className="contact-card">
            <div className="card-icon">📞</div>
            <h3 className="card-title">Phone Support</h3>
            <p className="card-desc">Available 9 AM - 7 PM IST</p>
            <div className="card-details">
              <div className="detail-item">
                <span className="detail-icon">📞</span>
                <a href="tel:+919559050100" className="phone-link">
                  (+91) 9559050100
                </a>
              </div>
              <div className="detail-item">
                <span className="detail-icon">⏱️</span>
                <span>Business hours support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;