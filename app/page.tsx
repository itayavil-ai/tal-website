import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { content } from '@/content'

const { home } = content

export const metadata: Metadata = {
  title: 'עו״ד טל נתן אבילביץ | עורכת דין ירושות וצוואות, דיני משפחה',
  description: 'עו״ד טל נתן אבילביץ — עורכת דין מומחית בדיני ירושה, צוואות, עיזבונות ודיני משפחה בישראל. ייעוץ אישי, ליווי מקצועי ומסור.',
  alternates: { canonical: 'https://www.tal-law.co.il/' },
  openGraph: {
    title: 'עו״ד טל נתן אבילביץ | ירושות, צוואות ודיני משפחה',
    description: 'ייעוץ וייצוג משפטי מומחה בתחום ירושות, צוואות ודיני משפחה בישראל.',
    url: 'https://www.tal-law.co.il/',
    images: [{ url: '/tal-photo.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'עו״ד טל נתן אבילביץ | ירושות, צוואות ודיני משפחה',
    description: 'ייעוץ וייצוג משפטי מומחה בתחום ירושות, צוואות ודיני משפחה בישראל.',
    images: ['/tal-photo.png'],
  },
}

const trustIcons = [
  'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',
  'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z',
  'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z',
  'M2 3h20v14H2zM8 21h8M12 17v4',
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="hero" aria-label="פתיח">
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-badge" data-animate="fade-down">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              {home.hero.badge}
            </div>
            <h1 className="hero-title" data-animate="fade-up" data-delay="1">
              {home.hero.titleLine1}<br />
              <span className="hero-title-accent">{home.hero.titleLine2}</span>
            </h1>
            <p className="hero-lead" data-animate="fade-up" data-delay="2">
              {home.hero.lead}
            </p>
            <div className="hero-actions" data-animate="fade-up" data-delay="3">
              <Link href="/appointment" className="btn btn-primary btn-lg">{home.hero.ctaPrimary}</Link>
              <a href="tel:+972542233127" className="btn btn-ghost">{home.hero.ctaPhone}</a>
            </div>
          </div>
          <div className="hero-photo-wrap" data-animate="fade-left">
            <Image
              src="/tal-photo.png"
              alt="עו״ד טל נתן אבילביץ — מומחית לדיני ירושה וצוואות"
              width={420}
              height={560}
              className="hero-photo"
              priority
            />
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="trust-bar" aria-label="נקודות מפתח">
        <div className="container">
          <div className="trust-bar-inner">
            {home.trustBar.map((text, i, arr) => (
              <>
                <span key={text} className="trust-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d={trustIcons[i]}/>
                  </svg>
                  {text}
                </span>
                {i < arr.length - 1 && <span key={`sep-${i}`} className="trust-sep" aria-hidden="true">|</span>}
              </>
            ))}
          </div>
        </div>
      </div>

      {/* Services */}
      <section className="services" id="services" aria-labelledby="services-title">
        <div className="container">
          <div className="section-header">
            <p className="section-eyebrow" data-animate="fade-up">{home.services.eyebrow}</p>
            <h2 className="section-title" id="services-title" data-animate="fade-up" data-delay="1">{home.services.title}</h2>
            <p className="section-lead" data-animate="fade-up" data-delay="2">{home.services.lead}</p>
          </div>
          <div className="services-grid">
            {home.services.items.map((s, i) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="service-card" data-animate="fade-up" data-delay={String(i % 3)}>
                <div className="service-icon" aria-hidden="true">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9h6M9 12h6M9 15h4"/></svg>
                </div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="about-preview" aria-labelledby="about-title">
        <div className="container">
          <div className="about-preview-grid">
            <div className="about-preview-img" data-animate="fade-right">
              <Image src="/tal-photo.png" alt="עו״ד טל נתן אבילביץ" width={480} height={500} style={{ objectFit: 'cover', objectPosition: 'top', width: '100%', height: '500px' }} />
            </div>
            <div data-animate="fade-up">
              <p className="section-eyebrow">{home.aboutPreview.eyebrow}</p>
              <h2 className="section-title" id="about-title">{home.aboutPreview.title}</h2>
              <p style={{ color: '#7a7673', lineHeight: 1.75, marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                {home.aboutPreview.lead}
              </p>
              <ul className="about-highlights">
                {home.aboutPreview.highlights.map(h => <li key={h}>{h}</li>)}
              </ul>
              <Link href="/about" className="btn btn-primary">{home.aboutPreview.cta}</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="why-us" aria-labelledby="why-title">
        <div className="container">
          <div className="section-header" data-animate="fade-up">
            <p className="section-eyebrow">{home.whyUs.eyebrow}</p>
            <h2 className="section-title" id="why-title">{home.whyUs.title}</h2>
          </div>
          <div className="why-grid">
            {home.whyUs.items.map((w, i) => (
              <div key={w.title} className="why-item" data-animate="fade-up" data-delay={String(i)}>
                <div className="why-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                </div>
                <h3>{w.title}</h3>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="process" aria-labelledby="process-title">
        <div className="container">
          <div className="section-header" data-animate="fade-up">
            <p className="section-eyebrow">{home.process.eyebrow}</p>
            <h2 className="section-title" id="process-title">{home.process.title}</h2>
          </div>
          <div className="process-steps">
            {home.process.steps.map((step, i) => (
              <div key={step.num} className="process-step" data-animate="fade-up" data-delay={String(i)}>
                <div className="process-step-num">{step.num}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials" aria-labelledby="testimonials-title">
        <div className="container">
          <div className="section-header" data-animate="fade-up">
            <p className="section-eyebrow">{home.testimonials.eyebrow}</p>
            <h2 className="section-title" id="testimonials-title">{home.testimonials.title}</h2>
          </div>
          <div className="testimonials-grid">
            {home.testimonials.items.map((t, i) => (
              <div key={t.name} className="testimonial-card" data-animate="fade-up" data-delay={String(i)}>
                <div className="testimonial-stars" aria-label="דירוג 5 כוכבים">★★★★★</div>
                <p className="testimonial-text">&quot;{t.text}&quot;</p>
                <div className="testimonial-author">
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq" aria-labelledby="faq-title">
        <div className="container">
          <div className="section-header" data-animate="fade-up">
            <p className="section-eyebrow">{home.faq.eyebrow}</p>
            <h2 className="section-title" id="faq-title">{home.faq.title}</h2>
          </div>
          <div className="faq-list" data-animate="fade-up" data-delay="1">
            {home.faq.items.map(faq => (
              <details key={faq.q} className="faq-item">
                <summary>{faq.q}</summary>
                <div className="faq-answer">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta" aria-labelledby="cta-title">
        <div className="container">
          <div className="cta-content" data-animate="fade-up">
            <h2 id="cta-title">{home.cta.title}</h2>
            <p>{home.cta.lead}</p>
            <div className="cta-actions">
              <Link href="/appointment" className="btn btn-white">{home.cta.ctaBtn}</Link>
              <a href="tel:+972542233127" className="btn" style={{ background: 'transparent', color: 'rgba(255,255,255,0.8)', border: '2px solid rgba(255,255,255,0.3)' }}>{home.cta.ctaPhone}</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
