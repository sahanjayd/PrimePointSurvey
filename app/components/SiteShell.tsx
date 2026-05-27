'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ReactNode, useEffect, useState } from 'react';
import QuotePanel from './QuotePanel';

export default function SiteShell({ children }: { children: ReactNode }) {
  const [panelOpen, setPanelOpen] = useState(false);
  const [navSolid, setNavSolid] = useState(false);
  const [scrollPct, setScrollPct] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

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

  const closeMenu = () => setMobileOpen(false);

  return (
    <>
      <div className="scroll-bar" style={{ width: `${scrollPct}%` }} />

      <QuotePanel open={panelOpen} onClose={() => setPanelOpen(false)} />

      <nav className={`nav ${navSolid ? 'solid' : 'top'}`}>
        <Link href="/" className="site-logo-link" onClick={closeMenu} aria-label="Prime Point Surveying home">
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
          <li><Link href="/">Home</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/faq">FAQ</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li>
            <button className="nav-cta" onClick={() => setPanelOpen(true)}>
              Get a Quote
            </button>
          </li>
        </ul>

        <button
          className="nav-hamburger"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {mobileOpen && (
        <div className="mobile-menu-overlay" onClick={closeMenu} aria-hidden="true" />
      )}

      <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`} aria-hidden={!mobileOpen}>
        <ul className="mobile-menu-links">
          <li><Link href="/" onClick={closeMenu}>Home</Link></li>
          <li><Link href="/services" onClick={closeMenu}>Services</Link></li>
          <li><Link href="/about" onClick={closeMenu}>About</Link></li>
          <li><Link href="/faq" onClick={closeMenu}>FAQ</Link></li>
          <li><Link href="/contact" onClick={closeMenu}>Contact</Link></li>
          <li>
            <button
              className="mobile-menu-cta"
              onClick={() => { closeMenu(); setPanelOpen(true); }}
            >
              Get a Quote
            </button>
          </li>
        </ul>
      </div>

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
              Independent Building Consultant&nbsp;&mdash;<br />
              Providing detailed causation and damage reports for insurers,
              builders, and property managers.
            </div>
          </div>

          <div>
            <div className="footer-col-title">Contact Us</div>
          <a
            href="mailto:info@primepointsurveying.com.au"
            className="footer-contact-item"
          > 
              <span className="footer-contact-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              <span>info@primepointsurveying.com.au</span>
          </a>    
            
          <a
            href="tel:+61415184565"
            className="footer-contact-item"
          >
              <span className="footer-contact-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M5 4h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.04 11.04 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498A1 1 0 0121 17v3a2 2 0 01-2 2C9.716 22 2 14.284 2 5a2 2 0 012-2h1z" />
                </svg>
              </span>
              <span>0415 184 565</span>
          </a>

          <a
            href="https://primepointsurvey.com.au"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-contact-item"
           >
              <span className="footer-contact-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
                </svg>
              </span>
              <span>primepointsurvey.com.au</span>
          </a>
          </div>

          <div>
            <div className="footer-col-title">Services</div>
            <ul className="footer-col-links">
              <li><Link href="/services">Insurance Assessments</Link></li>
              <li><Link href="/services">Moisture Mapping</Link></li>
              <li><Link href="/services">Thermal Imaging</Link></li>
              <li><Link href="/services">Scope of Works</Link></li>
            </ul>
          </div>

          <div>
            <div className="footer-col-title">Company</div>
            <ul className="footer-col-links">
              <li><Link href="/about">About</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/faq">FAQ</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Prime Point Surveying. All Rights Reserved.</span>

          <div className="footer-legal-links">
            <Link href="/privacy">Privacy Policy</Link>
            <span>•</span>
            <Link href="/terms">Terms &amp; Conditions</Link>
          </div>
        </div>
      </footer>
    </>
  );
}
