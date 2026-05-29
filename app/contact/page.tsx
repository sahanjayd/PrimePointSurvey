'use client';

import { useState } from 'react';

const services = [
  'Insurance Damage Assessment',
  'Causation Report',
  'Scope of Works',
  'Pre-Purchase Inspection',
  'PCI / Handover Inspection',
  'Defect Report',
  'Dilapidation Survey',
  'Dilapidation Report',
  'Warranty Inspection',
  'Maintenance Report',
];

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: { preventDefault(): void; currentTarget: HTMLFormElement }) {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem('contact-name') as HTMLInputElement).value,
      phone: (form.elements.namedItem('contact-phone') as HTMLInputElement).value,
      email: (form.elements.namedItem('contact-email') as HTMLInputElement).value,
      address: (form.elements.namedItem('contact-address') as HTMLInputElement).value,
      service: (form.elements.namedItem('contact-service') as HTMLSelectElement).value,
      preference: (form.elements.namedItem('contact-preference') as HTMLSelectElement).value,
      message: (form.elements.namedItem('contact-message') as HTMLTextAreaElement).value,
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
      setErrorMsg('Unable to send your enquiry. Please check your connection and try again.');
      setStatus('error');
    }
  }

  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero-content">
          <div className="section-eyebrow">Contact Us</div>

          <h1 className="page-title">
            Need an inspection or <em>independent advice?</em>
          </h1>

          <p className="page-sub">
            Send us your details and we&apos;ll get back to you to discuss your
            property, inspection type, timing, and report requirements.
          </p>

          <div className="contact-trust-row">
            <span>24h response</span>
            <span>Melbourne based</span>
            <span>Independent advice</span>
          </div>
        </div>
      </section>

      <section className="contact-grid">
        <div className="contact-left">
          <div className="contact-info-card main">
            <div className="contact-info-icon">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5 4h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.04 11.04 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498A1 1 0 0121 17v3a2 2 0 01-2 2C9.716 22 2 14.284 2 5a2 2 0 012-2h1z" />
              </svg>
            </div>

            <div>
              <div className="contact-label">Call Us</div>
              <a href="tel:0415184565" className="contact-value">
                0415 184 565
              </a>
              <p className="contact-small">Speak directly about your inspection needs.</p>
            </div>
          </div>

          <div className="contact-info-card">
            <div className="contact-info-icon">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>

            <div>
              <div className="contact-label">Email</div>
              <a
                href="mailto:info@primepointsurveying.com"
                className="contact-value"
              >
                info@primepointsurveying.com
              </a>
            </div>
          </div>

          <div className="contact-info-card">
            <div className="contact-info-icon">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 21s6-5.2 6-11a6 6 0 10-12 0c0 5.8 6 11 6 11z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
            </div>

            <div>
              <div className="contact-label">Location</div>
              <div className="contact-value">Melbourne, Victoria</div>
            </div>
          </div>

          <div className="contact-note-card">
            <h2>What happens next?</h2>
            <p>
              Once you send your enquiry, we&apos;ll review the property details,
              confirm the right inspection type, and contact you with the next
              steps.
            </p>
          </div>
        </div>

        {status === 'success' ? (
          <div className="contact-success">
            <div className="contact-success-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M9 12l2 2 4-4M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2>Enquiry sent!</h2>
            <p>
              Thanks for reaching out. We&apos;ll review your details and get back
              to you within 24 hours.
            </p>
            <button
              className="contact-submit"
              onClick={() => setStatus('idle')}
              style={{ marginTop: '1.5rem' }}
            >
              <span>Send another enquiry</span>
            </button>
          </div>
        ) : (
          <form className="contact-form-modern" onSubmit={handleSubmit} noValidate>
            <div className="contact-form-header">
              <div className="form-section-label">Inspection Enquiry</div>
              <h2>Request a callback</h2>
              <p>Fill in the details below and we&apos;ll get back to you shortly.</p>
            </div>

            <div className="form-grid two">
              <div className="form-group">
                <label className="form-label" htmlFor="contact-name">
                  Full Name
                </label>
                <input
                  id="contact-name"
                  name="contact-name"
                  className="form-input"
                  type="text"
                  placeholder="Your name"
                  autoComplete="name"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-phone">
                  Phone Number
                </label>
                <input
                  id="contact-phone"
                  name="contact-phone"
                  className="form-input"
                  type="tel"
                  placeholder="0415 184 565"
                  autoComplete="tel"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="contact-email">
                Email Address
              </label>
              <input
                id="contact-email"
                name="contact-email"
                className="form-input"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="contact-address">
                Property Address
              </label>
              <input
                id="contact-address"
                name="contact-address"
                className="form-input"
                type="text"
                placeholder="123 Main St, Melbourne"
                autoComplete="street-address"
              />
            </div>

            <div className="form-grid two">
              <div className="form-group">
                <label className="form-label" htmlFor="contact-service">
                  Service Required
                </label>

                <div className="service-select-wrap">
                  <select id="contact-service" name="contact-service" className="form-input service-select">
                    {services.map((service) => (
                      <option key={service}>{service}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-preference">
                  Preferred Contact
                </label>

                <select id="contact-preference" name="contact-preference" className="form-input">
                  <option>Phone</option>
                  <option>Email</option>
                  <option>Either is fine</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="contact-message">
                Message
              </label>
              <textarea
                id="contact-message"
                name="contact-message"
                className="form-input contact-textarea"
                placeholder="Tell us about the property, timing, access details, or any concerns..."
              />
            </div>

            {status === 'error' && (
              <p className="contact-form-error" role="alert">
                {errorMsg}
              </p>
            )}

            <button
              className="contact-submit"
              type="submit"
              disabled={status === 'sending'}
            >
              <span>{status === 'sending' ? 'Sending…' : 'Send Enquiry'}</span>
              {status !== 'sending' && (
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              )}
            </button>

            <p className="contact-form-note">
              By submitting this form, you agree to be contacted about your enquiry.
            </p>
          </form>
        )}
      </section>
    </main>
  );
}
