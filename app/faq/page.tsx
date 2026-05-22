'use client';

import { useState } from 'react';

const faqs = [
  {
    q: 'What will I receive after the inspection?',
    a: 'You will receive a detailed, easy-to-read report with photos, findings, and practical recommendations.',
  },
  {
    q: 'How long does a building inspection take?',
    a: 'Most inspections take between 2–4 hours depending on the size and complexity of the property.',
  },
  {
    q: 'What does a building inspection cover?',
    a: 'We inspect visible and accessible areas including structure, exterior, interior, roofing, subfloor, and more.',
  },
  {
    q: 'How do I book an inspection?',
    a: 'You can contact us by phone, email, or submit an enquiry through the contact page.',
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`faq-item ${open ? 'open' : ''}`} onClick={() => setOpen(!open)}>
      <div className="faq-q">
        <span>{q}</span>
        <span className="faq-icon">{open ? '−' : '+'}</span>
      </div>

      <div className="faq-a" style={{ maxHeight: open ? '200px' : '0' }}>
        <p>{a}</p>
      </div>
    </div>
  );
}

export default function FAQPage() {
  return (
    <main className="page">
      <section className="page-header center">
        <div className="section-eyebrow">Frequently Asked Questions</div>
        <h1 className="page-title">Common questions, answered.</h1>
        <p className="page-sub">
          Here are some of the most common questions clients ask before booking
          an inspection.
        </p>
      </section>

      <section className="faq-grid">
        {faqs.map((faq) => (
          <FAQItem key={faq.q} {...faq} />
        ))}
      </section>
    </main>
  );
}