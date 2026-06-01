import Link from 'next/link';
import DefectsGallery from '../components/DefectsGallery';

const insuranceServices = [
  {
    title: 'Minor Damage / Causation Report',
    desc: 'Assessment and reporting of minor property damage including visible defects, likely cause, and repair recommendations for insurance submissions.',
    bestFor: 'Minor storm, impact or moisture damage claims',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3l7 3v5c0 4.5-2.8 8.5-7 10-4.2-1.5-7-5.5-7-10V6z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Major Damage / Structural Report',
    desc: 'Thorough assessment of significant structural or building damage with detailed findings, cause analysis, and rectification guidance.',
    bestFor: 'Major storm events, structural damage, severe water damage',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 11l9-7 9 7" />
        <path d="M5 10v10h14V10" />
        <path d="M9 20v-6h6v6" />
      </svg>
    ),
  },
  {
    title: 'Full Insurance Assessment incl. Scope of Works',
    desc: 'Comprehensive assessment covering all damage, cause analysis, a complete scope of works, and repair cost guidance for your insurer.',
    bestFor: 'Full claims, complex damage, scope-required insurers',
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
    title: 'Re-Inspection / Follow-Up Report',
    desc: 'Follow-up inspection to verify completed repairs, assess ongoing concerns, or provide updated findings for an existing claim.',
    bestFor: 'Repair verification, ongoing claims, dispute follow-up',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M1 4v6h6" />
        <path d="M23 20v-6h-6" />
        <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10M23 14l-4.64 4.36A9 9 0 0 1 3.51 15" />
      </svg>
    ),
  },
];

const additionalServices = [
  {
    title: 'Moisture Mapping',
    desc: 'Targeted moisture detection to identify water ingress, elevated moisture levels, or hidden dampness throughout the property.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2C6.5 8.5 4 13 4 16a8 8 0 0 0 16 0c0-3-2.5-7.5-8-14z" />
      </svg>
    ),
  },
  {
    title: 'Thermal Imaging Scan',
    desc: 'Infrared thermal imaging to detect temperature anomalies, moisture intrusion, insulation gaps, or concealed defects.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      </svg>
    ),
  },
  {
    title: 'Roof Void Inspection',
    desc: 'Visual inspection of the roof space to identify structural concerns, moisture ingress, pest activity, or insulation deficiencies.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <path d="M9 22V12h6v10" />
      </svg>
    ),
  },
  {
    title: 'Detailed Scope of Works Only',
    desc: 'Preparation of a detailed scope of works document outlining required repairs, materials, priorities, and rectification guidance.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M8 3h8l2 3v15H6V6z" />
        <path d="M9 9h6" />
        <path d="M9 13h6" />
        <path d="M9 17h4" />
      </svg>
    ),
  },
];

const inclusions = [
  'Clear visual inspection findings',
  'Photo-supported reporting',
  'Practical recommendations',
  'Plain-English explanations',
  'Priority items highlighted',
  'Further investigation advice where needed',
];

const process = [
  {
    step: '01',
    title: 'Send an enquiry',
    text: 'Tell us the property type, location, service needed, and any concerns.',
  },
  {
    step: '02',
    title: 'Confirm the scope',
    text: 'We confirm what needs to be inspected, timing, access, and reporting requirements.',
  },
  {
    step: '03',
    title: 'Inspection completed',
    text: 'The property is inspected based on the agreed service and accessible areas.',
  },
  {
    step: '04',
    title: 'Receive your report',
    text: 'You receive a clear report with findings, photos, and practical next steps.',
  },
];

export default function ServicesPage() {
  return (
    <main className="services-page">

      <section className="services-hero">
        <div className="services-hero-copy">
          <div className="section-eyebrow">Our Services</div>

          <h1 className="page-title">
            Insurance assessments and specialist inspection services.
          </h1>

          <p className="page-sub">
            From insurance damage assessments and causation reports to moisture
            mapping and thermal imaging, we provide independent reporting that
            gives you clear, accurate information about your property.
          </p>

          <div className="services-hero-actions">
            <Link href="/contact" className="btn btn-primary">
              Request a Quote
            </Link>

            <a href="tel:0415184565" className="btn btn-outline-navy">
              Call 0415 184 565
            </a>
          </div>
        </div>

        <div className="services-hero-card">
          <div className="services-hero-card-label">What you receive</div>

          <ul>
            <li>Independent advice</li>
            <li>Clear reports with photos</li>
            <li>Practical recommendations</li>
            <li>Melbourne-based support</li>
          </ul>
        </div>
      </section>

      {/* Insurance Reporting Services */}
      <section className="services-section">
        <div className="services-section-header">
          <div className="section-eyebrow">Insurance Reporting</div>
          <h2 className="section-title">Insurance Assessment Services</h2>
          <p>
            Independent insurance assessments and damage reporting for property
            claims across Melbourne. Each report is prepared to meet insurance
            submission requirements.
          </p>
        </div>

        <div className="services-grid page-grid">
          {insuranceServices.map((service) => (
            <article key={service.title} className="service-card">
              <div className="service-card-top">
                <div className="service-icon-wrap">{service.icon}</div>
                <span className="service-category">Insurance</span>
              </div>

              <h2 className="service-title">{service.title}</h2>
              <p className="service-desc">{service.desc}</p>

              <div className="service-card-footer">
                <div className="service-best-sm">
                  <span>Best for</span>
                  <p>{service.bestFor}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="surcharge-banner">
          <span className="surcharge-icon">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 8v4M12 16h.01" />
            </svg>
          </span>
          <div>
            <strong>Urgent / Same-Day Assessment</strong>
            {' '}— available for urgent or same-day requests. Contact us to
            discuss availability and timing.
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="services-section">
        <div className="services-section-header">
          <div className="section-eyebrow">Add-On Services</div>
          <h2 className="section-title">Additional Inspection Services</h2>
          <p>
            Specialist tools and documentation that can be added to any
            assessment or booked independently.
          </p>
        </div>

        <div className="services-grid services-grid-4 page-grid">
          {additionalServices.map((service) => (
            <article key={service.title} className="service-card">
              <div className="service-card-top">
                <div className="service-icon-wrap">{service.icon}</div>
              </div>

              <h2 className="service-title">{service.title}</h2>
              <p className="service-desc">{service.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Complex Claims */}
      <section className="complex-claims-section">
        <div className="complex-claims-inner">
          <div className="complex-claims-content">
            <div className="section-eyebrow">Complex Claims</div>
            <h2 className="section-title">Large or Complex Claims</h2>
            <p className="section-body">
              For large-scale, complex, or multi-element insurance claims
              requiring extended site time, additional investigation, or expert
              coordination, we work on a transparent hourly basis. We will
              always confirm the estimated time before commencing.
            </p>
          </div>

          <div className="complex-claims-rate">
            <div className="complex-rate-label">Tailored to Your Claim</div>
            <p>Pricing is confirmed upfront based on scope and estimated site time. Contact us to discuss your claim before we commence.</p>
            <Link href="/contact" className="btn btn-primary">
              Discuss Your Claim
            </Link>
          </div>
        </div>
      </section>

      {/* Defects Gallery */}
      <DefectsGallery />

      {/* Inclusions */}
      <section className="services-inclusions">
        <div>
          <div className="section-eyebrow">What&apos;s Included</div>
          <h2 className="section-title">Clear reporting without the confusion.</h2>
          <p className="section-body">
            Our reports are designed to be practical. You get clear findings,
            supporting photos, and advice you can actually understand.
          </p>
        </div>

        <div className="inclusion-grid">
          {inclusions.map((item) => (
            <div key={item} className="inclusion-item">
              <span>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </span>
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="services-process">
        <div className="services-section-header center">
          <div className="section-eyebrow">How It Works</div>
          <h2 className="section-title">Simple process. Clear outcome.</h2>
        </div>

        <div className="process-grid">
          {process.map((item) => (
            <div key={item.step} className="process-card">
              <div className="process-step">{item.step}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="services-cta">
        <div>
          <div className="section-eyebrow">Need Help Choosing?</div>
          <h2>Not sure which inspection you need?</h2>
          <p>
            Send us a quick enquiry with the property details and we&apos;ll
            point you toward the right service.
          </p>
        </div>

        <Link href="/contact" className="btn btn-primary">
          Get Advice
        </Link>
      </section>

    </main>
  );
}
