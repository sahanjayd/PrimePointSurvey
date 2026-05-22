import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="page">
      <section className="about-page-grid">
        {/* LEFT SIDE TEXT */}
        <div>
          <div className="section-eyebrow">About Prime Point Surveying</div>

          <h1 className="page-title">
            Local. Independent. <em>On your side.</em>
          </h1>

          <p className="section-body">
            Prime Point Surveying is an independent building consultancy based in
            Melbourne. We support clients with clear building inspections,
            practical reporting, and honest advice.
          </p>

          <p className="section-body">
            We do not work for developers, agents, or builders. Our role is to
            help you understand the real condition of a property before you make
            important decisions.
          </p>

          <p className="section-body">
            Whether you are buying, building, maintaining, or managing a
            property, we focus on giving you accurate information in a format
            that is easy to understand.
          </p>
        </div>

        {/* RIGHT SIDE QUOTE CARD */}
        <div className="about-quote">
          <div className="about-quote-inner">
            <p className="about-quote-text">
              “Good decisions start with accurate information and honest advice.”
            </p>

            <div className="about-quote-divider" />

            <Image
              src="/prime-point-logo.png"
              alt="Prime Point Surveying"
              width={220}
              height={80}
              className="about-logo-img"
            />
          </div>
        </div>
      </section>

      <section className="why">
        <div className="why-header">
          <div className="section-eyebrow">Why Clients Work With Us</div>
          <h2 className="section-title">Built on trust and transparency.</h2>
        </div>

        <div className="why-grid">
          <div className="why-card">
            <div className="why-icon">🎯</div>
            <h3 className="why-title">Independent Advice</h3>
            <p className="why-desc">
              We work for you and provide unbiased advice without conflicts of interest.
            </p>
          </div>

          <div className="why-card">
            <div className="why-icon">📷</div>
            <h3 className="why-title">Clear Photos</h3>
            <p className="why-desc">
              Every report includes photos and explanations so the findings are easy to understand.
            </p>
          </div>

          <div className="why-card">
            <div className="why-icon">⚡</div>
            <h3 className="why-title">Fast Turnaround</h3>
            <p className="why-desc">
              Reports are prepared quickly so you can move forward without unnecessary delays.
            </p>
          </div>

          <div className="why-card">
            <div className="why-icon">📍</div>
            <h3 className="why-title">Local Expertise</h3>
            <p className="why-desc">
              Melbourne based with knowledge of local property conditions and common defects.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}