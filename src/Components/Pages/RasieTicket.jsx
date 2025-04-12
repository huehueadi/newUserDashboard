// import axios from 'axios';
// import React, { useEffect, useState } from 'react';


// function RaiseTicket() {
//   const [formData, setFormData] = useState({
//     subject: '',
//     priority: 'Low',
//     description: '',
//     attachments: null,
//   });

//   const [tickets, setTickets] = useState([]);

//   useEffect(() => {
//     const fetchTickets = async () => {
//       try {
//         const authToken = localStorage.getItem('authToken');
//         console.log('Fetching tickets - Token:', authToken);
//         if (!authToken) throw new Error('No authentication token found');

//         console.log('Initiating GET request to /api/support/get-ticket');
//         const response = await axios.get('https://zencia-finalbackend.vercel.app/api/support/get-ticket', {
//           headers: {
//             Authorization: `${authToken}`,
//           },
//         });
//         console.log('GET response:', response.data);
//         setTickets(response.data);
//       } catch (error) {
//         console.error('Error fetching tickets:', {
//           message: error.message,
//           status: error.response?.status,
//           data: error.response?.data,
//         });
//       }
//     };
//     fetchTickets();
//   }, []);

//   const handleInputChange = (e) => {
//     const { id, value, files } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [id === 'ticket-subject' ? 'subject' : id === 'ticket-description' ? 'description' : 'attachments']:
//         id === 'ticket-attachment' ? files[0] : value,
//     }));
//   };

//   const handlePriorityChange = (priority) => {
//     setFormData((prev) => ({
//       ...prev,
//       priority,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const ticketData = new FormData();
//     ticketData.append('subject', formData.subject);
//     ticketData.append('priority', formData.priority);
//     ticketData.append('description', formData.description);
//     if (formData.attachments) ticketData.append('attachments', formData.attachments);

//     try {
//       const authToken = localStorage.getItem('authToken');
//       console.log('Submitting ticket - Token:', authToken);
//       console.log('Form data:', {
//         subject: formData.subject,
//         priority: formData.priority,
//         description: formData.description,
//         attachments: formData.attachments ? formData.attachments.name : 'None',
//       });
//       if (!authToken) throw new Error('No authentication token found');

//       console.log('Initiating POST request to /api/support/create');
//       const response = await axios.post(
//         'https://zencia-finalbackend.vercel.app/api/support/create',
//         ticketData,
//         {
//           headers: {
//             Authorization: `${authToken}`,
//             'Content-Type': 'multipart/form-data',
//           },
//         }
//       );
//       console.log('POST response:', response.data);

//       setTickets((prev) => [...prev, response.data.ticket]);
//       setFormData({
//         subject: '',
//         priority: 'Low',
//         description: '',
//         attachments: null,
//       });
//       document.getElementById('ticket-attachment').value = '';
//       alert("Ticket subbmited sucessfully")
//     } catch (error) {
//       console.error('Error submitting ticket:', {
//         message: error.message,
//         status: error.response?.status,
//         data: error.response?.data,
//       });
//     }
//   };

//   return (
//     <div className="pricing-container">
//       <div className="dashboard-tab">
//         <h2 className="section-title">Raise Support Ticket</h2>
//         <div className="key-generator">
//           <div className="form-group">
//             <label htmlFor="ticket-subject">Subject</label>
//             <input
//               type="text"
//               id="ticket-subject"
//               className="input-control"
//               value={formData.subject}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className="form-group">
//             <label>Priority</label>
//             <div className="input-group">
//               {['Low', 'Medium', 'High', 'Urgent'].map((level) => (
//                 <button
//                   key={level}
//                   className="btn"
//                   style={{
//                     backgroundColor: formData.priority === level ? '#3f51b5' : '#e0e0e0',
//                     color: formData.priority === level ? 'white' : 'black',
//                     padding: '8px 16px',
//                     margin: '0 5px',
//                     border: 'none',
//                     borderRadius: '4px',
//                     cursor: 'pointer',
//                   }}
//                   onClick={() => handlePriorityChange(level)}
//                   type="button"
//                 >
//                   {level}
//                 </button>
//               ))}
//             </div>
//           </div>
//           <div className="form-group">
//             <label htmlFor="ticket-description">Description</label>
//             <textarea
//               id="ticket-description"
//               className="input-control"
//               style={{ minHeight: 150 }}
//               placeholder="Please provide detailed information about your issue..."
//               value={formData.description}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="ticket-attachment">Attachments (Optional)</label>
//             <input
//               type="file"
//               id="ticket-attachment"
//               className="input-control"
//               onChange={handleInputChange}
//             />
//           </div>
//           <button className="btn btn-primary" onClick={handleSubmit}>
//             Submit Ticket
//           </button>
//         </div>

//         <h2 className="section-title" style={{ marginTop: 30 }}>Your Tickets</h2>
//         <div className="table-container">
//           <table>
//             <thead>
//               <tr>
//                 <th>Ticket ID</th>
//                 <th>Subject</th>
//                 <th>Date Created</th>
//                 <th>Priority</th>
//                 <th>Last Update</th>
//                 <th>Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {tickets.length === 0 ? (
//                 <tr>
//                   <td colSpan={7} style={{ textAlign: 'center', padding: 30 }}>
//                     No tickets found
//                   </td>
//                 </tr>
//               ) : (
//                 tickets.map((ticket) => (
//                   <tr key={ticket._id}>
//                     <td>{ticket._id}</td>
//                     <td>{ticket.subject}</td>
//                     <td>{new Date(ticket.createdAt).toLocaleDateString()}</td>
//                     <td>{ticket.priority}</td>
//                     <td>{new Date(ticket.lastUpdate).toLocaleDateString()}</td>
//                     <td>
//                       <button className="btn">{ticket.status}</button>
//                     </td>
//                   </tr>
//                 ))
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default RaiseTicket;



import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Ticket.css';

function RaiseTicket() {
  const [formData, setFormData] = useState({
    subject: '',
    priority: 'Low',
    description: '',
    attachments: null,
  });

  const [tickets, setTickets] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState({ type: '', text: '' });

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const authToken = localStorage.getItem('authToken');
        if (!authToken) throw new Error('No authentication token found');

        const response = await axios.get('https://zencia-finalbackend.vercel.app/api/support/get-ticket', {
          headers: {
            Authorization: `${authToken}`,
          },
        });
        setTickets(response.data);
      } catch (error) {
        console.error('Error fetching tickets:', {
          message: error.message,
          status: error.response?.status,
          data: error.response?.data,
        });
      }
    };
    fetchTickets();
  }, []);

  const handleInputChange = (e) => {
    const { id, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id === 'ticket-subject' ? 'subject' : id === 'ticket-description' ? 'description' : 'attachments']:
        id === 'ticket-attachment' ? files[0] : value,
    }));
  };

  const handlePriorityChange = (priority) => {
    setFormData((prev) => ({
      ...prev,
      priority,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Clear any previous messages
    setSubmitMessage({ type: '', text: '' });
    
    // Validate form data
    if (!formData.subject || !formData.description) {
      setSubmitMessage({ 
        type: 'error', 
        text: 'Please fill in both subject and description fields.' 
      });
      return;
    }

    setIsSubmitting(true);

    const ticketData = new FormData();
    ticketData.append('subject', formData.subject);
    ticketData.append('priority', formData.priority);
    ticketData.append('description', formData.description);
    if (formData.attachments) ticketData.append('attachments', formData.attachments);

    try {
      const authToken = localStorage.getItem('authToken');
      if (!authToken) throw new Error('No authentication token found');

      const response = await axios.post(
        'https://zencia-finalbackend.vercel.app/api/support/create',
        ticketData,
        {
          headers: {
            Authorization: `${authToken}`,
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      // Add new ticket to the list
      setTickets((prev) => [...prev, response.data.ticket]);
      
      // Reset form
      setFormData({
        subject: '',
        priority: 'Low',
        description: '',
        attachments: null,
      });
      document.getElementById('ticket-attachment').value = '';
      
      // Set success message
      setSubmitMessage({ 
        type: 'success', 
        text: response.data.message || 'Ticket submitted successfully!' 
      });
      
      // Scroll to message
      setTimeout(() => {
        const messageElement = document.getElementById('submit-message');
        if (messageElement) {
          messageElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      
    } catch (error) {
      console.error('Error submitting ticket:', error);
      setSubmitMessage({ 
        type: 'error', 
        text: error.response?.data?.message || 'Failed to submit ticket. Please try again.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="dashboard-content-container">
      <div className="dashboard-tab">
      <div className="pricing-header">
        <div className="pricing-title-tag">Report an Issue</div>
        <h1 className="pricing-title">Need Help? Raise a Ticket</h1>
      </div>
        
        {submitMessage.text && (
          <div id="submit-message" className={`message-container ${submitMessage.type}`}>
            <span className="message-icon">
              {submitMessage.type === 'success' ? '✓' : '⚠'}
            </span>
            <span className="message-text">{submitMessage.text}</span>
          </div>
        )}
        
        <div className="ticket-form">
          <div className="form-group">
            <label htmlFor="ticket-subject">Subject</label>
            <input
              type="text"
              id="ticket-subject"
              className="input-control"
              value={formData.subject}
              onChange={handleInputChange}
              placeholder="Enter a brief summary of your issue"
              disabled={isSubmitting}
            />
          </div>
          
          <div className="form-group">
            <label>Priority</label>
            <div className="priority-buttons">
              {['Low', 'Medium', 'High', 'Urgent'].map((level) => (
                <button
                  key={level}
                  className={`priority-btn ${formData.priority === level ? 'active' : ''}`}
                  onClick={() => handlePriorityChange(level)}
                  type="button"
                  disabled={isSubmitting}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="ticket-description">Description</label>
            <textarea
              id="ticket-description"
              className="input-control"
              placeholder="Please provide detailed information about your issue..."
              value={formData.description}
              onChange={handleInputChange}
              disabled={isSubmitting}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="ticket-attachment">Attachments</label>
            <input
              type="file"
              id="ticket-attachment"
              accept="image/*,application/pdf"
              className="file-input"
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
                <span>Submitting...</span>
              </>
            ) : 'Submit Ticket'}
          </button>
        </div>

        <h2 className="section-title tickets-heading">Your Tickets</h2>
        <div className="table-container">
          <table className="tickets-table">
            <thead>
              <tr>
                <th>Ticket ID</th>
                <th>Subject</th>
                <th>Date Created</th>
                <th>Priority</th>
                <th>Last Update</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {tickets.length === 0 ? (
                <tr className="empty-row">
                  <td colSpan={6}>
                    <div className="no-tickets">
                      <span className="no-data-icon">📋</span>
                      <span>No tickets found</span>
                    </div>
                  </td>
                </tr>
              ) : (
                tickets.map((ticket) => (
                  <tr key={ticket._id}>
                    <td className="ticket-id">{ticket._id}</td>
                    <td className="ticket-subject">{ticket.subject}</td>
                    <td>{new Date(ticket.createdAt).toLocaleDateString('en-US', {
                      year: 'numeric', 
                      month: 'short', 
                      day: 'numeric'
                    })}</td>
                    <td>
                      <span className={`priority-badge ${ticket.priority.toLowerCase()}`}>
                        {ticket.priority}
                      </span>
                    </td>
                    <td>{new Date(ticket.lastUpdate).toLocaleDateString('en-US', {
                      year: 'numeric', 
                      month: 'short', 
                      day: 'numeric'
                    })}</td>
                    <td>
                      <span className={`status-badge ${ticket.status.toLowerCase()}`}>
                        {ticket.status}
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default RaiseTicket;