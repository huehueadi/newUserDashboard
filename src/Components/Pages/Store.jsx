import React from 'react'

function Store() {
  return (
    <div className="pricing-container">
  <div className="tools-section">
  <div className="pricing-header">
        <div className="pricing-title-tag">Zencia App Store</div>
        <h1 className="pricing-title"></h1>
      </div>    
      <div className="tools-grid">
      <div className="pricing-card popular">
              <div className="tool-card-icon" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
  <h3><i className="fas fa-qrcode" style={{ fontSize: '32px' }}></i></h3>
  <h3>QR Code Generator</h3>
</div>
        <p>QR Code Generator empowers users to create personalized QR codes in seconds. Input URLs, text, contact details, or custom data to generate scannable codes, perfect for marketing, event sharing, or digital convenience.</p>
        <button className="choose-plan-btn gradient-btn">Free Tool with Zencia</button>
      </div>
        <div className="pricing-card popular">
      <div className="tool-card-icon" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
  <h3><i className="fas fa-file-import" style={{ fontSize: '32px' }}></i></h3>
  <h3>Merge PDF</h3>
</div>
        <p>Merge PDF simplifies document consolidation by combining multiple PDF files into one unified output. Offering customizable page ordering, it’s an efficient solution for organizing reports, meeting minutes, or project files seamlessly.</p>
        <button className="choose-plan-btn gradient-btn">Free Tool with Zencia</button>
      </div>
        <div className="pricing-card popular">
      <div className="tool-card-icon" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
  <h3><i className="fas fa-image" style={{ fontSize: '32px' }}></i></h3>
  <h3>Image to PDF</h3>
</div>
        <p>Image to PDF transforms your images into professional, portable PDF documents with minimal effort. Upload single or multiple photos or scans to compile them into a polished, shareable file for work or personal use.</p>
        <button className="choose-plan-btn gradient-btn">Free Tool with Zencia</button>
      </div>
    </div>
  </div>
  <div className="tools-section">
    <h2>PDF Tools</h2>
    <div className="tools-grid">
        <div className="pricing-card popular">
      <div className="tool-card-icon" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
  <h3><i className="fas fa-cut" style={{ fontSize: '32px' }}></i></h3>
  <h3>Split PDF</h3>
</div>

        <p>Split PDF provides a fast way to divide large PDF files into smaller, focused segments. Extract specific pages or ranges effortlessly, making it ideal for isolating chapters, forms, or sections as needed.</p>
        <button className="choose-plan-btn gradient-btn">Free Tool with Zencia</button>
      </div>
        <div className="pricing-card popular">
      <div className="tool-card-icon" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
  <h3><i className="fas fa-file-image" style={{ fontSize: '32px' }}></i></h3>
  <h3>PDF to Image</h3>
</div>
        <p>PDF to Image converts PDF pages into sharp, high-resolution image files suitable for any purpose. Whether for presentations, archiving, or sharing visuals, it ensures clarity and flexibility in every output.</p>
        <button className="choose-plan-btn gradient-btn">Free Tool with Zencia</button>
      </div>
        <div className="pricing-card popular">
      <div className="tool-card-icon" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
  <h3><i className="fas fa-file-word" style={{ fontSize: '32px' }}></i></h3>
  <h3>PDF to Word</h3>
</div>
        <p>PDF to Word converts static PDF files into fully editable Word documents with precision. Preserving layouts and formatting, it streamlines editing, repurposing, or collaborating on content for any project.</p>
        <button className="choose-plan-btn gradient-btn">Free Tool with Zencia</button>
      </div>
    </div>
  </div>

  <div className="tools-section">
    <h2>Upcoming Tools</h2>
    <div className="tools-grid">
        <div className="pricing-card popular">
        <div className="tool-card-icon">
          <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4Ij48cmVjdCB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIGZpbGw9IiMzZjUxYjUiIHJ4PSI4IiByeT0iOCIvPjxwYXRoIGQ9Ik0yOCAyMGgtOHY0aDh2LTR6bTQgMTZIMTZWMTJoMTZ2MjR6bTQtMjhhNCA0IDAgMDAtNC00SDE2Yy0yLjIxIDAtNCAyLjAxLTQgNC4yM3YyNy41NEMxMiA0My45OSAxNC4yMSA0NiAxNiA0NmgxNmMyLjIxIDAgNC0yLjAxIDQtNC4yM1Y4em0tNCAyNkgxNlYxMmgxNnYyNHoiIGZpbGw9IndoaXRlIi8+PC9zdmc+" alt="Merge PDF" />
          <h3>Memories.AI </h3>
        </div>
        <p>Memories.AI enables users to upload and store past memories as PDFs, images, text, or voice recordings. Its advanced AI analyzes the content, allowing natural, engaging conversations that bring those moments vividly back to lifer</p>
        <button className="choose-plan-btn gradient-btn">Coming Soon</button>
      </div>
        <div className="pricing-card popular">
        <div className="tool-card-icon">
          <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4Ij48cmVjdCB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIGZpbGw9IiMzZjUxYjUiIHJ4PSI4IiByeT0iOCIvPjxwYXRoIGQ9Ik0yOCAyMGgtOHY0aDh2LTR6bTQgMTZIMTZWMTJoMTZ2MjR6bTQtMjhhNCA0IDAgMDAtNC00SDE2Yy0yLjIxIDAtNCAyLjAxLTQgNC4yM3YyNy41NEMxMiA0My45OSAxNC4yMSA0NiAxNiA0NmgxNmMyLjIxIDAgNC0yLjAxIDQtNC4yM1Y4em0tNCAyNkgxNlYxMmgxNnYyNHoiIGZpbGw9IndoaXRlIi8+PC9zdmc+" alt="Merge PDF" />
          <h3>MOM AI (Minutes of the Meetings)</h3>
        </div>
        <p>These minutes summarize key points, decisions, and action items discussed during the meeting, presenting them in a single, well-organized document. With the ability to customize the order of content, users can prioritize sections like agenda items, conclusions, or follow-ups to suit their needs.</p>
        <button className="choose-plan-btn gradient-btn">Coming Soon</button>
      </div>
        <div className="pricing-card popular">
        <div className="tool-card-icon">
          <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4Ij48cmVjdCB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIGZpbGw9IiMzZjUxYjUiIHJ4PSI4IiByeT0iOCIvPjxwYXRoIGQ9Ik0yOCAyMGgtOHY0aDh2LTR6bTQgMTZIMTZWMTJoMTZ2MjR6bTQtMjhhNCA0IDAgMDAtNC00SDE2Yy0yLjIxIDAtNCAyLjAxLTQgNC4yM3YyNy41NEMxMiA0My45OSAxNC4yMSA0NiAxNiA0NmgxNmMyLjIxIDAgNC0yLjAxIDQtNC4yM1Y4em0tNCAyNkgxNlYxMmgxNnYyNHoiIGZpbGw9IndoaXRlIi8+PC9zdmc+" alt="Merge PDF" />
          <h3>Tender.AI</h3>
        </div>
        <p>Tender.AI simplifies the tender filing process with powerful AI-driven tools. Users can effortlessly upload tender-related documents in formats like PDFs, images, or text, and the system organizes them for easy submission. </p>
        <button className="choose-plan-btn gradient-btn">Coming Soon</button>
      </div>
    </div>
  </div>
</div>

  )
}

export default Store