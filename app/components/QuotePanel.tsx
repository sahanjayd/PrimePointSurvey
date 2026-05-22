'use client';

type QuotePanelProps = {
  open: boolean;
  onClose: () => void;
};

export default function QuotePanel({ open, onClose }: QuotePanelProps) {
  return (
    <>
      <div
        className={`panel-overlay ${open ? 'show' : ''}`}
        onClick={onClose}
      />

      <div className={`quote-panel ${open ? 'open' : ''}`}>
        <button className="panel-close" onClick={onClose}>
          ✕
        </button>

        <div className="panel-header">
          <div className="panel-eyebrow">Get in Touch</div>
          <h2 className="panel-title">Request a Quote</h2>
          <p className="panel-sub">We'll get back to you within 24 hours.</p>
        </div>

        <form className="panel-form">
          <div className="form-group">
            <label className="form-label">Full Name</label>
            <input className="form-input" type="text" placeholder="John Smith" />
          </div>

          <div className="form-group">
            <label className="form-label">Email Address</label>
            <input className="form-input" type="email" placeholder="john@example.com" />
          </div>

          <div className="form-group">
            <label className="form-label">Phone Number</label>
            <input className="form-input" type="tel" placeholder="0400 000 000" />
          </div>

          <div className="form-group">
            <label className="form-label">Property Address</label>
            <input className="form-input" type="text" placeholder="123 Main St, Melbourne" />
          </div>

          <div className="form-group">
            <label className="form-label">Service Required</label>
            <select className="form-input">
              <option>Pre-Purchase Inspection</option>
              <option>PCI / Handover Inspection</option>
              <option>Defect Report</option>
              <option>Dilapidation Report</option>
              <option>Warranty Inspection</option>
              <option>Maintenance Advice</option>
            </select>
          </div>

          <button className="panel-submit" type="submit">
            Send Request →
          </button>
        </form>
      </div>
    </>
  );
}