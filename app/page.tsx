import Link from 'next/link';

const services = [
  {
    title: 'Full Insurance Assessment incl. Scope of Works',
    desc: 'Comprehensive damage assessment, cause analysis, and complete scope of works prepared for insurance submission.',
    category: 'Insurance',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 3h7l4 4v14H7z" />
        <path d="M14 3v5h5" />
        <path d="M9 13h6" />
        <path d="M9 17h4" />
      </svg>
    ),
  },
  {
    title: 'Minor Damage / Causation Report',
    desc: 'Clear assessment of minor property damage including defect findings, probable cause, and repair recommendations.',
    category: 'Insurance',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3l7 3v5c0 4.5-2.8 8.5-7 10-4.2-1.5-7-5.5-7-10V6z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Thermal Imaging Scan',
    desc: 'Infrared thermal imaging to detect moisture intrusion, insulation gaps, and concealed defects not visible to the eye.',
    category: 'Additional',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      </svg>
    ),
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
            Inspection Services &amp;<br />
            <em>Independent Advice</em>
          </h1>

          <p className="hero-sub">
            We provide thorough building inspections and clear, honest reporting
            across Melbourne. Our goal is simple — help you understand the
            condition of your property so you can make confident decisions.
          </p>

          <div className="hero-btns">
            <Link href="/contact" className="btn btn-primary">
              Request a Quote
            </Link>

            <a href="tel:0415184565" className="btn btn-ghost">
              <svg className="btn-icon" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5 4h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.04 11.04 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498A1 1 0 0121 17v3a2 2 0 01-2 2C9.716 22 2 14.284 2 5a2 2 0 012-2h1z" />
              </svg>
              0415 184 565
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
                <span>Independent &amp; Unbiased</span>
              </div>

              <div className="trust-badge">
                <span className="trust-icon">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M7 3h7l4 4v14H7z" />
                    <path d="M14 3v5h5" />
                    <path d="M9 13h6M9 17h6" />
                  </svg>
                </span>
                <span>Clear Photos &amp; Reports</span>
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

          <p className="section-body about-qual-text">
            Qualified with an Advanced Diploma in Building Surveying, we combine
            practical inspection knowledge with clear, evidence-based reporting.
          </p>

          <Link href="/about" className="btn btn-navy">
            Learn More
          </Link>
        </div>

        <div className="about-credential-home">
          <div className="about-credential-home-inner">
            <div className="about-credential-home-icon">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c3.33 1.67 8.67 1.67 12 0v-5" />
              </svg>
            </div>

            <div className="about-credential-home-label">Advanced Diploma in</div>
            <div className="about-credential-home-title">Building Surveying</div>

            <div className="about-credential-home-divider" />

            <div className="about-credential-home-badges">
              <div className="about-home-badge">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 3l7 3v5c0 4.5-2.8 8.5-7 10-4.2-1.5-7-5.5-7-10V6z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
                Professional Indemnity Insurance
              </div>
              <div className="about-home-badge">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 3l7 3v5c0 4.5-2.8 8.5-7 10-4.2-1.5-7-5.5-7-10V6z" />
                  <path d="M12 9v4M12 16h.01" />
                </svg>
                Public Liability Insurance
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services-preview">
        <div className="services-header">
          <div className="section-eyebrow">Our Services</div>

          <h2 className="section-title">
            Inspection services built around clarity.
          </h2>

          <p className="section-body services-preview-sub">
            A snapshot of our main services. Visit the services page for our
            full range, including moisture mapping, thermal imaging, roof void
            inspections, and complex claim assessments.
          </p>
        </div>

        <div className="home-services-grid">
          {services.map((service) => (
            <article key={service.title} className="home-service-card">
              <div className="service-card-top">
                <div className="service-icon-wrap">{service.icon}</div>
                <span className="service-category">{service.category}</span>
              </div>

              <h3 className="service-title">{service.title}</h3>

              <p className="service-desc">{service.desc}</p>

            </article>
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
          <div className="cta-icon">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </div>

          <h2 className="cta-title">Need an inspection or advice?</h2>

          <p className="cta-sub">
            Get in touch today for independent building inspections and practical
            property advice across Melbourne.
          </p>
        </div>

        <div className="cta-btns">
          <Link href="/contact" className="btn btn-navy">
            Request a Quote
          </Link>

          <a href="tel:0415184565" className="btn btn-outline-navy">
            <svg className="btn-icon" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 4h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.04 11.04 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498A1 1 0 0121 17v3a2 2 0 01-2 2C9.716 22 2 14.284 2 5a2 2 0 012-2h1z" />
            </svg>
            Call 0415 184 565
          </a>
        </div>
      </section>
    </>
  );
}
