'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const defects = [
  {
    src: '/img-01.PNG',
    alt: 'Crack above window frame identified during inspection',
    caption: 'Crack above window / door frame',
  },
  {
    src: '/img-02.PNG',
    alt: 'Cracked floor tiles with thermal scan overlay',
    caption: 'Cracked floor tiles with thermal scan',
  },
  {
    src: '/imge-03.PNG',
    alt: 'Moisture and thermal inspection under tiles',
    caption: 'Moisture and thermal inspection under tiles',
  },
  {
    src: '/imge-04.PNG',
    alt: 'Digital level showing floor slope deviation',
    caption: 'Digital level floor slope reading',
  },
  {
    src: '/img-05.PNG',
    alt: 'Out-of-plumb wall measurement using digital level',
    caption: 'Wall plumb / out-of-plumb measurement',
  },
  {
    src: '/img-06.png',
    alt: 'Vertical crack in brick veneer wall',
    caption: 'Vertical Crack — Brick Veneer Wall',
  },
];

export default function DefectsGallery() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visible, setVisible] = useState<boolean[]>(
    new Array(defects.length).fill(false)
  );

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];

    cardRefs.current.forEach((card, i) => {
      if (!card) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            const t = setTimeout(() => {
              setVisible((prev) => {
                const next = [...prev];
                next[i] = true;
                return next;
              });
            }, i * 110);
            timers.push(t);
            observer.disconnect();
          }
        },
        { threshold: 0.12 }
      );

      observer.observe(card);
    });

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section className="defects-section">
      <div className="services-section-header center">
        <div className="section-eyebrow">Inspection Examples</div>
        <h2 className="section-title">
          Defects Identified During Building Inspections
        </h2>
        <p className="section-body">
          At Prime Point Surveying, we use industry-leading tools — including
          digital levels, moisture meters, and thermal imaging — to identify
          defects that may impact the safety, performance, or long-term
          durability of your home.
        </p>
      </div>

      <div className="defects-intro-list">
        <p>Common defects identified during our inspections include:</p>
        <ul>
          <li>Cracked brickwork and mortar separation</li>
          <li>Wall and ceiling movement, including out of plumb or out of level surfaces</li>
          <li>Moisture intrusion beneath tiles and flooring</li>
          <li>Thermal anomalies indicating leaks or insulation gaps</li>
          <li>Structural settlement and slab deviation</li>
          <li>Poor workmanship or incomplete finishes</li>
        </ul>
      </div>

      <div className="defects-gallery">
        {defects.map((defect, i) => (
          <div
            key={defect.src}
            ref={(el) => { cardRefs.current[i] = el; }}
            className={`defect-card${visible[i] ? ' is-visible' : ''}`}
          >
            <div className="defect-img-wrap">
              <Image
                src={defect.src}
                alt={defect.alt}
                fill
                className="defect-img"
                sizes="(max-width: 768px) 100vw, (max-width: 1100px) 50vw, 33vw"
              />
            </div>
            <div className="defect-caption">{defect.caption}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
