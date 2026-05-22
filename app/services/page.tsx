import Link from 'next/link';

const services = [
  {
    category: 'Insurance',
    title: 'Insurance Damage Assessments',
    desc: 'Independent assessment of property damage for insurance-related matters, helping identify visible defects, likely causes, and repair considerations.',
    bestFor: 'Insurance claims, storm damage, water damage, impact damage',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3l7 3v5c0 4.5-2.8 8.5-7 10-4.2-1.5-7-5.5-7-10V6z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    category: 'Reporting',
    title: 'Causation Reports',
    desc: 'Clear reporting to help determine likely causes of building issues, movement, moisture damage, construction defects, or property deterioration.',
    bestFor: 'Defect disputes, insurance matters, building damage investigation',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="11" cy="11" r="7" />
        <path d="M16.5 16.5L21 21" />
        <path d="M8.5 11h5" />
        <path d="M11 8.5v5" />
      </svg>
    ),
  },
  {
    category: 'Documentation',
    title: 'Scope of Works',
    desc: 'Practical scope documentation outlining required works, rectification items, repair recommendations, and priority actions.',
    bestFor: 'Repair planning, builder communication, rectification works',
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
    category: 'Buyers',
    title: 'Pre-Purchase Inspections',
    desc: 'A detailed visual inspection before buying a property, helping you understand visible defects, risks, and potential repair concerns.',
    bestFor: 'Home buyers, investors, auction preparation',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 11l9-7 9 7" />
        <path d="M5 10v10h14V10" />
        <path d="M9 20v-6h6v6" />
      </svg>
    ),
  },
  {
    category: 'New Builds',
    title: 'PCI / Handover Inspections',
    desc: 'Inspection before handover to identify incomplete works, poor finishes, defects, and items that should be addressed before final acceptance.',
    bestFor: 'New homes, townhouses, apartments, builder handovers',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M8 12l3 3 5-6" />
        <path d="M4 6h16" />
        <path d="M4 18h16" />
        <path d="M6 6v12" />
        <path d="M18 6v12" />
      </svg>
    ),
  },
  {
    category: 'Defects',
    title: 'Defect Reports',
    desc: 'Detailed reporting of visible defects with notes, photos, and practical recommendations for rectification or further investigation.',
    bestFor: 'Building defects, disputes, owner concerns, rectification requests',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M8 3h8l2 3v15H6V6z" />
        <path d="M9 9h6" />
        <path d="M9 13h6" />
        <path d="M9 17h4" />
      </svg>
    ),
  },
  {
    category: 'Condition',
    title: 'Dilapidation Surveys',
    desc: 'Condition surveys completed before nearby construction, excavation, demolition, or development works begin.',
    bestFor: 'Pre-construction records, neighbouring properties, risk control',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 19h16" />
        <path d="M7 19V9l5-4 5 4v10" />
        <path d="M9 19v-5h6v5" />
        <path d="M4 12h4" />
        <path d="M16 12h4" />
      </svg>
    ),
  },
  {
    category: 'Condition',
    title: 'Dilapidation Reports',
    desc: 'Formal reporting that documents the existing condition of surrounding structures and assets before works commence.',
    bestFor: 'Developers, builders, owners, asset protection',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 20h16" />
        <path d="M6 20L18 8" />
        <path d="M8 8h10v10" />
        <path d="M8 8l10 10" />
      </svg>
    ),
  },
  {
    category: 'Warranty',
    title: 'Warranty Inspections',
    desc: 'Inspection before your builder warranty period expires, helping identify issues that should be raised before time runs out.',
    bestFor: 'New builds, warranty periods, defect follow-up',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3l7 3v5c0 4.5-2.8 8.5-7 10-4.2-1.5-7-5.5-7-10V6z" />
        <path d="M8.5 12.2l2.2 2.2 4.8-5" />
      </svg>
    ),
  },
  {
    category: 'Maintenance',
    title: 'Maintenance Reports',
    desc: 'Practical maintenance reporting to help prioritise repairs, protect your property, and reduce long-term costs.',
    bestFor: 'Property owners, landlords, asset managers',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M14.7 6.3a4 4 0 0 0-5.3 5.3L4 17v3h3l5.4-5.4a4 4 0 0 0 5.3-5.3" />
        <path d="M15 5l4 4" />
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
            Building inspection services for clearer property decisions.
          </h1>

          <p className="page-sub">
            From pre-purchase inspections to defect reports, insurance damage
            assessments, dilapidation reports, and maintenance advice, we provide
            practical reporting that helps you understand the condition of your property.
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

      <section className="services-section">
        <div className="services-section-header">
          <div className="section-eyebrow">Service List</div>
          <h2 className="section-title">Choose the right inspection service.</h2>
          <p>
            Each service is designed for a different property situation. If you
            are unsure which one you need, send an enquiry and we can guide you.
          </p>
        </div>

        <div className="services-grid page-grid">
          {services.map((service) => (
            <article key={service.title} className="service-card">
              <div className="service-card-top">
                <div className="service-icon-wrap">{service.icon}</div>
                <span className="service-category">{service.category}</span>
              </div>

              <h2 className="service-title">{service.title}</h2>
              <p className="service-desc">{service.desc}</p>

              <div className="service-best">
                <span>Best for</span>
                <p>{service.bestFor}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="services-inclusions">
        <div>
          <div className="section-eyebrow">What’s Included</div>
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

      <section className="services-cta">
        <div>
          <div className="section-eyebrow">Need Help Choosing?</div>
          <h2>Not sure which inspection you need?</h2>
          <p>
            Send us a quick enquiry with the property details and we’ll point you
            toward the right service.
          </p>
        </div>

        <Link href="/contact" className="btn btn-primary">
          Get Advice
        </Link>
      </section>
    </main>
  );
}