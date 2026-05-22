const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3l7 3v5c0 4.5-2.8 8.5-7 10-4.2-1.5-7-5.5-7-10V6z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    title: 'Insurance Damage Assessments',
    desc: 'Independent assessment of property damage for insurance-related matters, helping identify visible defects, causes, and repair considerations.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="11" cy="11" r="7" />
        <path d="M16.5 16.5L21 21" />
        <path d="M8.5 11h5" />
        <path d="M11 8.5v5" />
      </svg>
    ),
    title: 'Causation Reports',
    desc: 'Clear reporting to help determine likely causes of building issues, damage, movement, moisture problems, or construction-related defects.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 3h7l4 4v14H7z" />
        <path d="M14 3v5h5" />
        <path d="M9 13h6" />
        <path d="M9 17h4" />
      </svg>
    ),
    title: 'Scope of Works',
    desc: 'Practical scope documentation outlining required works, rectification items, and repair recommendations in a clear and structured format.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 11l9-7 9 7" />
        <path d="M5 10v10h14V10" />
        <path d="M9 20v-6h6v6" />
      </svg>
    ),
    title: 'Pre-Purchase Inspections',
    desc: 'Uncover hidden issues before buying a property. We inspect visible and accessible areas and provide a clear report so you can make a confident decision.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M8 12l3 3 5-6" />
        <path d="M4 6h16" />
        <path d="M4 18h16" />
        <path d="M6 6v12" />
        <path d="M18 6v12" />
      </svg>
    ),
    title: 'PCI / Handover Inspections',
    desc: 'For new builds and handovers, we check workmanship, finishes, defects, and incomplete items before final acceptance.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M8 3h8l2 3v15H6V6z" />
        <path d="M9 9h6" />
        <path d="M9 13h6" />
        <path d="M9 17h4" />
      </svg>
    ),
    title: 'Defect Reports',
    desc: 'Detailed defect reporting with photos, clear notes, and practical recommendations for rectification.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 19h16" />
        <path d="M7 19V9l5-4 5 4v10" />
        <path d="M9 19v-5h6v5" />
        <path d="M4 12h4" />
        <path d="M16 12h4" />
      </svg>
    ),
    title: 'Dilapidation Surveys',
    desc: 'Condition surveys completed before nearby construction, excavation, or development works begin.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 20h16" />
        <path d="M6 20L18 8" />
        <path d="M8 8h10v10" />
        <path d="M8 8l10 10" />
      </svg>
    ),
    title: 'Dilapidation Reports',
    desc: 'Document the existing condition of surrounding structures and assets to help manage risk before works commence.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3l7 3v5c0 4.5-2.8 8.5-7 10-4.2-1.5-7-5.5-7-10V6z" />
        <path d="M8.5 12.2l2.2 2.2 4.8-5" />
      </svg>
    ),
    title: 'Warranty Inspections',
    desc: 'Identify issues before your builder warranty period expires so they can be raised in time.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M14.7 6.3a4 4 0 0 0-5.3 5.3L4 17v3h3l5.4-5.4a4 4 0 0 0 5.3-5.3" />
        <path d="M15 5l4 4" />
      </svg>
    ),
    title: 'Maintenance Reports',
    desc: 'Practical maintenance reporting to help protect your property, prioritise repairs, and reduce long-term costs.',
  },
];

export default function ServicesPage() {
  return (
    <main className="page">
      <section className="page-header">
        <div className="section-eyebrow">Our Services</div>
        <h1 className="page-title">Comprehensive building inspection services.</h1>
        <p className="page-sub">
          We provide clear inspections, practical advice, and detailed reporting
          for buyers, owners, builders, insurers, and property managers across Melbourne.
        </p>
      </section>

      <section className="services-grid page-grid">
        {services.map((service) => (
          <article key={service.title} className="service-card">
            <div className="service-icon-wrap">
              {service.icon}
            </div>

            <h2 className="service-title">{service.title}</h2>
            <p className="service-desc">{service.desc}</p>
          </article>
        ))}
      </section>
    </main>
  );
}