export default function ContactPage() {
  return (
    <main className="page">
      <section className="contact-grid">
        <div>
          <div className="section-eyebrow">Contact Us</div>

          <h1 className="page-title">Need an inspection or advice?</h1>

          <p className="section-body">
            Send us your details and we’ll get back to you to discuss your
            property, inspection type, timing, and report requirements.
          </p>

          <div className="contact-details">
            <div className="contact-card">
              <div className="contact-label">Phone</div>
              <div className="contact-value">0415 184 565</div>
            </div>

            <div className="contact-card">
              <div className="contact-label">Email</div>
              <div className="contact-value">info@primepointsurveying.com.au</div>
            </div>

            <div className="contact-card">
              <div className="contact-label">Location</div>
              <div className="contact-value">Melbourne, Victoria</div>
            </div>
          </div>
        </div>

        <form className="contact-form">
          <div className="form-group">
            <label className="form-label">Full Name</label>
            <input className="form-input" type="text" placeholder="Your name" />
          </div>

          <div className="form-group">
            <label className="form-label">Email Address</label>
            <input className="form-input" type="email" placeholder="you@example.com" />
          </div>

          <div className="form-group">
            <label className="form-label">Phone Number</label>
            <input className="form-input" type="tel" placeholder="0400 000 000" />
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

          <div className="form-group">
            <label className="form-label">Message</label>
            <textarea
              className="form-input textarea"
              placeholder="Tell us about the property and what you need help with..."
            />
          </div>

          <button className="panel-submit" type="submit">
            Send Enquiry →
          </button>
        </form>
      </section>
    </main>
  );
}