import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { content } from '@/content'

const { about } = content

export const metadata: Metadata = {
  title: 'אודות עו״ד טל נתן אבילביץ | מומחית לדיני ירושה וצוואות',
  description: 'עו״ד טל נתן אבילביץ — עורכת דין מומחית בדיני ירושה, צוואות ועיזבונות. למעלה מ-15 שנות ניסיון בליווי משפחות בישראל בהליכים משפטיים מורכבים.',
  alternates: { canonical: 'https://www.tal-law.co.il/about' },
  openGraph: {
    title: 'אודות עו״ד טל נתן אבילביץ | מומחית לדיני ירושה',
    description: 'למעלה מ-15 שנות ניסיון בליווי משפחות בישראל בדיני ירושה, צוואות ועיזבונות.',
    type: 'profile',
    images: [{ url: '/tal-photo.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'אודות עו״ד טל נתן אבילביץ | מומחית לדיני ירושה',
    description: 'למעלה מ-15 שנות ניסיון בליווי משפחות בישראל בדיני ירושה, צוואות ועיזבונות.',
    images: ['/tal-photo.png'],
  },
}

const credentialIcons = [
  <svg key="edu" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>,
  <svg key="bar" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  <svg key="med" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>,
  <svg key="cpe" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/></svg>,
]

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <p className="section-eyebrow" data-animate="fade-up" data-delay="0">{about.hero.eyebrow}</p>
          <h1 className="section-title" data-animate="fade-up" data-delay="1">{about.hero.titleLine1}<br />{about.hero.titleLine2}</h1>
        </div>
      </section>

      {/* About Full */}
      <section className="about-full">
        <div className="container">
          <div className="about-full-grid">
            <aside className="about-sidebar" data-animate="fade-right">
              <div className="about-sidebar-image">
                <Image
                  src="/tal-photo.png"
                  alt="עו״ד טל נתן אבילביץ — מומחית לדיני ירושה וצוואות"
                  width={400}
                  height={530}
                  loading="lazy"
                />
              </div>
            </aside>
            <div className="about-content" data-animate="fade-up" data-delay="1">
              <h2>{about.bio.expertiseTitle}</h2>
              <p>{about.bio.expertiseText}</p>
              <h2>{about.bio.approachTitle}</h2>
              <p>{about.bio.approachText1}</p>
              <p>{about.bio.approachText2}</p>
              <h2>{about.bio.educationTitle}</h2>
              <p>{about.bio.educationText1}</p>
              <p>{about.bio.educationText2}</p>
              <h2>{about.bio.whyTitle}</h2>
              <p>{about.bio.whyText}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="credentials">
        <div className="container">
          <div className="section-header" data-animate="fade-up">
            <p className="section-eyebrow">{about.credentials.eyebrow}</p>
            <h2 className="section-title">{about.credentials.title}</h2>
          </div>
          <div className="credentials-grid">
            {about.credentials.items.map((c, i) => (
              <div key={c.title} className="credential-card" data-animate="fade-up" data-delay={String(i)}>
                <div className="credential-icon" aria-hidden="true">{credentialIcons[i]}</div>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="timeline">
        <div className="container">
          <div className="section-header" data-animate="fade-up">
            <p className="section-eyebrow">{about.timeline.eyebrow}</p>
            <h2 className="section-title">{about.timeline.title}</h2>
          </div>
          <div className="timeline-list" data-animate="fade-up" data-delay="1">
            {about.timeline.items.map(t => (
              <div key={t.year} className="timeline-item">
                <div className="timeline-year">{t.year}</div>
                <h3>{t.title}</h3>
                <p>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="about-values">
        <div className="container">
          <div className="section-header" data-animate="fade-up">
            <p className="section-eyebrow">{about.values.eyebrow}</p>
            <h2 className="section-title">{about.values.title}</h2>
          </div>
          <div className="values-grid">
            {about.values.items.map((v, i) => (
              <div key={v.title} className="value-card" data-animate="fade-up" data-delay={String(i)}>
                <div className="value-number" aria-hidden="true">{v.letter}</div>
                <div className="value-title">{v.title}</div>
                <div className="value-desc">{v.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="container">
          <div className="cta-content" data-animate="fade-up">
            <h2>{about.cta.title}</h2>
            <p>{about.cta.lead}</p>
            <div className="cta-actions">
              <Link href="/appointment" className="btn btn-white">{about.cta.ctaBtn}</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
