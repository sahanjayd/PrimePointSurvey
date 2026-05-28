'use client';

import { useState } from 'react';

type QuotePanelProps = {
  open: boolean;
  onClose: () => void;
};

const services = [
  'Minor Damage / Causation Report',
  'Major Damage / Structural Report',
  'Full Insurance Assessment incl. Scope of Works',
  'Re-Inspection / Follow-Up Report',
  'Urgent / Same-Day Assessment',
  'Moisture Mapping',
  'Thermal Imaging Scan',
  'Roof Void Inspection',
  'Detailed Scope of Works Only',
  'Complex Claim (Hourly)',
];

export default function QuotePanel({ open, onClose }: QuotePanelProps) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: { preventDefault(): void; currentTarget: HTMLFormElement }) {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem('quote-name') as HTMLInputElement).value,
      phone: (form.elements.namedItem('quote-phone') as HTMLInputElement).value,
      email: (form.elements.namedItem('quote-email') as HTMLInputElement).value,
      address: (form.elements.namedItem('quote-address') as HTMLInputElement).value,
      service: (form.elements.namedItem('quote-service') as HTMLSelectElement).value,
      date: (form.elements.namedItem('quote-date') as HTMLInputElement).value,
      preference: (form.elements.namedItem('quote-contact') as HTMLSelectElement).value,
      message: (form.elements.namedItem('quote-message') as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (!res.ok) {
        setErrorMsg(json.error ?? 'Something went wrong. Please try again.');
        setStatus('error');
      } else {
        setStatus('success');
        form.reset();
      }
    } catch {
      setErrorMsg('Unable to send your request. Please check your connection and try again.');
      setStatus('error');
    }
  }

  function handleClose() {
    setStatus('idle');
    setErrorMsg('');
    onClose();
  }

  return (
    <>
      <div
        className={`panel-overlay ${open ? 'show' : ''}`}
        onClick={handleClose}
        aria-hidden="true"
      />

      <aside
        className={`quote-panel ${open ? 'open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Request a Quote"
      >
        <button className="panel-close" onClick={handleClose} aria-label="Close quote panel">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>

        <div className="panel-header">
          <div className="panel-header-glow" />

          <div className="panel-eyebrow">Inspection Enquiry</div>

          <h2 className="panel-title">Request a Quote</h2>

          <p className="panel-sub">
            Tell us what you need inspected and we'll get back to you with the
            next steps.
          </p>

          <div className="panel-trust-row">
            <span>24h response</span>
            <span>Independent advice</span>
            <span>Melbourne based</span>
          </div>
        </div>

        {status === 'success' ? (
          <div className="panel-success">
            <div className="panel-success-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M9 12l2 2 4-4M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3>Request sent!</h3>
            <p>
              Thanks for reaching out. We&apos;ll review your details and get
              back to you within 24 hours.
            </p>
            <button className="panel-submit" onClick={handleClose} style={{ marginTop: '1.5rem' }}>
              <span>Close</span>
            </button>
          </div>
        ) : (
          <form className="panel-form" onSubmit={handleSubmit} noValidate>
            <div className="form-section-label">Your details</div>

            <div className="form-grid two">
              <div className="form-group">
                <label className="form-label" htmlFor="quote-name">
                  Full Name
                </label>
                <input
                  id="quote-name"
                  name="quote-name"
                  className="form-input"
                  type="text"
                  placeholder="John Smith"
                  autoComplete="name"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="quote-phone">
                  Phone Number
                </label>
                <input
                  id="quote-phone"
                  name="quote-phone"
                  className="form-input"
                  type="tel"
                  placeholder="0415 184 565"
                  autoComplete="tel"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="quote-email">
                Email Address
              </label>
              <input
                id="quote-email"
                name="quote-email"
                className="form-input"
                type="email"
                placeholder="info@example.com"
                autoComplete="email"
                required
              />
            </div>

            <div className="form-section-label">Property details</div>

            <div className="form-group">
              <label className="form-label" htmlFor="quote-address">
                Property Address
              </label>
              <input
                id="quote-address"
                name="quote-address"
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
                <select id="quote-service" name="quote-service" className="form-input service-select">
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
                <input id="quote-date" name="quote-date" className="form-input" type="date" />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="quote-contact">
                  Preferred Contact
                </label>
                <select id="quote-contact" name="quote-contact" className="form-input">
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
                name="quote-message"
                className="form-input panel-textarea"
                placeholder="Tell us about the property, access details, concerns, or timing..."
              />
            </div>

            {status === 'error' && (
              <p className="panel-form-error" role="alert">
                {errorMsg}
              </p>
            )}

            <button
              className="panel-submit"
              type="submit"
              disabled={status === 'sending'}
            >
              <span>{status === 'sending' ? 'Sending…' : 'Send Request'}</span>
              {status !== 'sending' && (
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              )}
            </button>

            <p className="panel-note">
              By submitting this form, you agree to be contacted about your enquiry.
            </p>
          </form>
        )}
      </aside>
    </>
  );
}
