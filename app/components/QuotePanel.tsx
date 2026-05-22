'use client';

type QuotePanelProps = {
  open: boolean;
  onClose: () => void;
};

const services = [
  'Pre-Purchase Inspection',
  'PCI / Handover Inspection',
  'Defect Report',
  'Dilapidation Report',
  'Warranty Inspection',
  'Maintenance Report',
];

export default function QuotePanel({ open, onClose }: QuotePanelProps) {
  return (
    <>
      <div
        className={`panel-overlay ${open ? 'show' : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />

      <aside
        className={`quote-panel ${open ? 'open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Request a Quote"
      >
        <button className="panel-close" onClick={onClose} aria-label="Close quote panel">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>

        <div className="panel-header">
          <div className="panel-header-glow" />

          <div className="panel-eyebrow">Inspection Enquiry</div>

          <h2 className="panel-title">Request a Quote</h2>

          <p className="panel-sub">
            Tell us what you need inspected and we’ll get back to you with the
            next steps.
          </p>

          <div className="panel-trust-row">
            <span>24h response</span>
            <span>Independent advice</span>
            <span>Melbourne based</span>
          </div>
        </div>

        <form className="panel-form">
          <div className="form-section-label">Your details</div>

          <div className="form-grid two">
            <div className="form-group">
              <label className="form-label" htmlFor="quote-name">
                Full Name
              </label>
              <input
                id="quote-name"
                className="form-input"
                type="text"
                placeholder="John Smith"
                autoComplete="name"
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="quote-phone">
                Phone Number
              </label>
              <input
                id="quote-phone"
                className="form-input"
                type="tel"
                placeholder="0415 184 565"
                autoComplete="tel"
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="quote-email">
              Email Address
            </label>
            <input
              id="quote-email"
              className="form-input"
              type="email"
              placeholder="info@example.com"
              autoComplete="email"
            />
          </div>

          <div className="form-section-label">Property details</div>

          <div className="form-group">
            <label className="form-label" htmlFor="quote-address">
              Property Address
            </label>
            <input
              id="quote-address"
              className="form-input"
              type="text"
              placeholder="123 Main St, Melbourne"
              autoComplete="street-address"
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="quote-service">
              Service Required
            </label>

            <div className="service-select-wrap">
              <select id="quote-service" className="form-input service-select">
                {services.map((service) => (
                  <option key={service}>{service}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-grid two">
            <div className="form-group">
              <label className="form-label" htmlFor="quote-date">
                Preferred Date
              </label>
              <input id="quote-date" className="form-input" type="date" />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="quote-contact">
                Preferred Contact
              </label>
              <select id="quote-contact" className="form-input">
                <option>Phone</option>
                <option>Email</option>
                <option>Either is fine</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="quote-message">
              Extra Details
            </label>
            <textarea
              id="quote-message"
              className="form-input panel-textarea"
              placeholder="Tell us about the property, access details, concerns, or timing..."
            />
          </div>

          <button className="panel-submit" type="submit">
            <span>Send Request</span>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </button>

          <p className="panel-note">
            By submitting this form, you agree to be contacted about your enquiry.
          </p>
        </form>
      </aside>
    </>
  );
}