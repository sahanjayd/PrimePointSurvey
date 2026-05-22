'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ReactNode, useEffect, useState } from 'react';
import QuotePanel from './QuotePanel';

export default function SiteShell({ children }: { children: ReactNode }) {
  const [panelOpen, setPanelOpen] = useState(false);
  const [navSolid, setNavSolid] = useState(false);
  const [scrollPct, setScrollPct] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const max = document.body.scrollHeight - window.innerHeight;

      setScrollPct(max > 0 ? (y / max) * 100 : 0);
      setNavSolid(y > 60);
    };

    onScroll();

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <div className="scroll-bar" style={{ width: `${scrollPct}%` }} />

      <QuotePanel open={panelOpen} onClose={() => setPanelOpen(false)} />

      <nav className={`nav ${navSolid ? 'solid' : 'top'}`}>
        <Link href="/" className="site-logo-link" aria-label="Prime Point Surveying home">
          <Image
            src="/prime-point-logo.png"
            alt="Prime Point Surveying"
            width={300}
            height={110}
            priority
            className="site-logo-img"
          />
        </Link>

        <ul className="nav-links">
          <li>
            <Link href="/">Home</Link>
          </li>

          <li>
            <Link href="/services">Services</Link>
          </li>

          <li>
            <Link href="/about">About</Link>
          </li>

          <li>
            <Link href="/faq">FAQ</Link>
          </li>

          <li>
            <Link href="/contact">Contact</Link>
          </li>

          <li>
            <button className="nav-cta" onClick={() => setPanelOpen(true)}>
              Get a Quote
            </button>
          </li>
        </ul>
      </nav>

      {children}

      <footer className="footer">
        <div className="footer-top">
          <div>
            <Link href="/" className="footer-logo-link" aria-label="Prime Point Surveying home">
              <Image
                src="/prime-point-logo.png"
                alt="Prime Point Surveying"
                width={280}
                height={100}
                className="footer-logo-img"
              />
            </Link>

            <div className="footer-tagline">
              Your property, inspected properly.
            </div>
          </div>

          <div>
            <div className="footer-col-title">Contact Us</div>
            <div className="footer-contact-item">✉ info@primepointsurveying.com.au</div>
            <div className="footer-contact-item">📞 0415 184 565</div>
            <div className="footer-contact-item">🌐 primepointsurveying.com.au</div>
          </div>

          <div>
            <div className="footer-col-title">Services</div>

            <ul className="footer-col-links">
              <li>
                <Link href="/services">Pre-Purchase</Link>
              </li>

              <li>
                <Link href="/services">PCI / Handover</Link>
              </li>

              <li>
                <Link href="/services">Defect Reports</Link>
              </li>

              <li>
                <Link href="/services">Dilapidation</Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="footer-col-title">Company</div>

            <ul className="footer-col-links">
              <li>
                <Link href="/about">About</Link>
              </li>

              <li>
                <Link href="/services">Services</Link>
              </li>

              <li>
                <Link href="/faq">FAQ</Link>
              </li>

              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Prime Point Surveying. All Rights Reserved.</span>

          <div className="footer-legal-links">
            <Link href="/privacy">Privacy Policy</Link>
            <span>•</span>
            <Link href="/terms">Terms & Conditions</Link>
          </div>
        </div>
      </footer>
    </>
  );
}