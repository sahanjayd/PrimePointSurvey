'use client';

import { useEffect, useRef, useState } from 'react';

const trustItems = [
  {
    label: 'Professional Indemnity Insurance',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3l7 3v5c0 4.5-2.8 8.5-7 10-4.2-1.5-7-5.5-7-10V6z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    label: 'Public Liability Insurance',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3l7 3v5c0 4.5-2.8 8.5-7 10-4.2-1.5-7-5.5-7-10V6z" />
        <path d="M12 9v4M12 16h.01" />
      </svg>
    ),
  },
  {
    label: 'Independent Building Consultant',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
      </svg>
    ),
  },
  {
    label: 'Detailed Causation Reports',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 3h7l4 4v14H7z" />
        <path d="M14 3v5h5" />
        <path d="M9 13h6M9 17h4" />
      </svg>
    ),
  },
  {
    label: 'Insurance Assessment Support',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
        <rect x="9" y="3" width="6" height="4" rx="1" />
        <path d="M9 12h6M9 16h4" />
      </svg>
    ),
  },
];

export default function CredentialSection() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={`credential-section${visible ? ' is-visible' : ''}`}
    >
      <div className="services-section-header center">
        <div className="section-eyebrow">Qualifications &amp; Trust</div>
        <h2 className="section-title">Verified credentials you can rely on.</h2>
      </div>

      <div className="credential-inner">
        <div className="credential-card">
          <div className="credential-card-icon">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
              <path d="M6 12v5c3.33 1.67 8.67 1.67 12 0v-5" />
            </svg>
          </div>

          <div className="credential-tag">Formal Qualification</div>

          <h3 className="credential-title">
            Advanced Diploma in Building Surveying
          </h3>

          <div className="credential-divider" />

          <p className="credential-desc">
            Backed by an Advanced Diploma in Building Surveying, Prime Point
            Surveying provides detailed, evidence-based inspection reports for
            insurance, building, and property-related matters.
          </p>
        </div>

        <div className="trust-items">
          {trustItems.map((item) => (
            <div key={item.label} className="trust-item">
              <span className="trust-item-icon">{item.icon}</span>
              <span className="trust-item-label">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
