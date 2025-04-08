
function RasieTicket() {
  return (
<div classname="dashboard-content-container">
  <div className="dashboard-tab" >
    <h2 className="section-title">Raise Support Ticket</h2>
    <div className="key-generator">
      <div className="form-group">
        <label htmlFor="ticket-subject">Subject</label>
        <input type="text" id="ticket-subject" className="input-control"  />
      </div>
      <div className="form-group">
        <label>Priority</label>
        <div className="input-group">
          <button className="btn ">Low</button>
          <button className="btn">Medium</button>
          <button className="btn">High</button>
          <button className="btn">Urgent</button>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="ticket-description">Description</label>
        <textarea id="ticket-description" className="input-control" style={{minHeight: 150}} placeholder="Please provide detailed information about your issue..." defaultValue={""} />
      </div>
      <div className="form-group">
        <label htmlFor="ticket-attachment">Attachments (Optional)</label>
        <input type="file" id="ticket-attachment" className="input-control" />
      </div>
      <button className="btn btn-primary">Submit Ticket</button>
    </div>
    <h2 className="section-title" style={{marginTop: 30}}>Your Tickets</h2>
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Ticket ID</th>
            <th>Subject</th>
            <th>Date Created</th>
            <th>Priority</th>
            <th>Status</th>
            <th>Last Update</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={7} style={{textAlign: 'center', padding: 30}}>No tickets found</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div> 

  )
}

export default RasieTicket
