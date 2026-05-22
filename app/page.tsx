import Link from 'next/link';

const services = [
  {
    title: 'Pre-Purchase Inspections',
    desc: 'Uncover hidden issues before you buy and move forward with full confidence.',
  },
  {
    title: 'PCI / Handover Inspections',
    desc: 'Pre-completion inspections for new builds and complete handover peace of mind.',
  },
  {
    title: 'Defect Reports',
    desc: 'Clear, itemised reports with photos to identify building defects and needed rectifications.',
  },
];
export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-grid" />

        <div className="hero-left">
          <div className="hero-eyebrow">
            Independent Inspections. Practical Advice.
          </div>

          <h1 className="hero-h1">
            Inspection Services &<br />
            <em>Independent Advice</em>
          </h1>

          <p className="hero-sub">
            We provide thorough building inspections and clear, honest reporting
            across Melbourne. Our goal is simple — help you understand the
            condition of your property so you can make confident decisions.
          </p>

          <div className="hero-btns">
            <Link href="/contact" className="btn btn-primary">
              Request a Quote →
            </Link>

            <a href="tel:0415184565" className="btn btn-ghost">
              📞 0415 184 565
            </a>
          </div>
        </div>

        <div className="hero-right">
          <div className="trust-card">
            <div className="trust-card-title">Why clients choose us</div>
            <div className="trust-card-sub">
              Melbourne&apos;s trusted independent building consultants
            </div>

          <div className="trust-badges">
            <div className="trust-badge">
              <span className="trust-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="12" cy="12" r="8" />
                  <circle cx="12" cy="12" r="3" />
                  <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
                </svg>
              </span>
              <span>Independent & Unbiased</span>
            </div>

            <div className="trust-badge">
              <span className="trust-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M7 3h7l4 4v14H7z" />
                  <path d="M14 3v5h5" />
                  <path d="M9 13h6M9 17h6" />
                </svg>
              </span>
              <span>Clear Photos & Reports</span>
            </div>

            <div className="trust-badge">
              <span className="trust-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 21s6-5.2 6-11a6 6 0 1 0-12 0c0 5.8 6 11 6 11z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
              </span>
              <span>Local Melbourne Expertise</span>
            </div>

            <div className="trust-badge">
              <span className="trust-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 3l7 3v5c0 4.5-2.8 8.5-7 10-4.2-1.5-7-5.5-7-10V6z" />
                  <path d="M8.5 12.2l2.2 2.2 4.8-5" />
                </svg>
              </span>
              <span>Practical Advice</span>
            </div>
          </div>
          </div>
        </div>
      </section>

      <section className="about-preview">
        <div>
          <div className="section-eyebrow">About Prime Point Surveying</div>
          <h2 className="section-title">
            Local. Independent. <em>On Your Side.</em>
          </h2>
          <p className="section-body">
            Prime Point Surveying is an independent building consultancy based in
            Melbourne. We work for you — not developers, agents or builders.
          </p>

          <Link href="/about" className="btn btn-navy">
            Learn More
          </Link>
        </div>

        <div className="about-quote">
          <div className="about-quote-text">
            “We believe good decisions start with accurate information and honest advice.”
          </div>
        </div>
      </section>

      <section className="services-preview">
        <div className="services-header">
          <div className="section-eyebrow">Our Services</div>
          <h2 className="section-title">
            Inspection services built around clarity.
          </h2>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.title} className="service-card">
              <div className="service-icon-wrap">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M7 3h7l4 4v14H7z" />
                  <path d="M14 3v5h5" />
                  <path d="M9 13h6" />
                  <path d="M9 17h4" />
                </svg>
              </div>
              <div className="service-title">{service.title}</div>
              <p className="service-desc">{service.desc}</p>
            </div>
          ))}
        </div>

        <div className="center-btn">
          <Link href="/services" className="btn btn-primary">
            View All Services
          </Link>
        </div>
      </section>

      <section className="cta-band">
        <div>
          <div className="cta-icon">🏗</div>
          <h2 className="cta-title">Need an inspection or advice?</h2>
          <p className="cta-sub">
            Get in touch today for independent building inspections and practical
            property advice across Melbourne.
          </p>
        </div>

        <div className="cta-btns">
          <Link href="/contact" className="btn btn-navy">
            📋 Request a Quote
          </Link>

          <a href="tel:0415184565" className="btn btn-outline-navy">
            📞 Call 0415 184 565
          </a>
        </div>
      </section>
    </>
  );
}