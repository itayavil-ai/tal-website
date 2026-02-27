import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

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

const faqs = [
  { q: 'כמה עולה ייעוץ ראשוני?', a: 'פגישת הייעוץ הראשונית היא ללא עלות וללא התחייבות. בפגישה נשמע אתכם, נבין את הצורך ונציג את האפשרויות העומדות בפניכם.' },
  { q: 'כמה זמן לוקח להוציא צו ירושה?', a: 'בדרך כלל 3–6 חודשים, תלוי במורכבות התיק ובעומס בית המשפט. אם אין מחלוקות, ההליך קצר יותר.' },
  { q: 'האם אפשר לערער על צוואה?', a: 'כן. עילות שכיחות: לחץ, השפעה בלתי הוגנת, חוסר כשרות, פגמים צורניים. יש להגיש התנגדות לרשם הירושות תוך המועדים הקבועים.' },
  { q: 'מה קורה אם נפטר מישהו ואין צוואה?', a: 'הירושה מחולקת לפי חוק הירושה הישראלי. סדר הירושה: בן הזוג וילדים בראש, לאחר מכן הורים ואחים. פגישה עם עו״ד תבהיר את מצבכם הספציפי.' },
  { q: 'האם הסכם ממון משפיע על הירושה?', a: 'כן. הסכם ממון יכול לקבוע איזה רכוש ייחשב משותף ואיזה פרטי, ובכך להשפיע על הסכום שיחולק בין יורשים. תכנון נכון מראש חוסך סכסוכים בעתיד.' },
]

const testimonials = [
  { text: 'עו״ד טל ליוותה אותנו בתהליך מורכב של ירושה — בסבלנות, במקצועיות ובאמפתיה. הרגשנו שאנחנו בידיים טובות לאורך כל הדרך.', name: 'משפחת כהן', role: 'תל אביב' },
  { text: 'הגעתי אחרי שנים של דחייה לערוך צוואה. טל הסבירה הכל בפשטות, ניסחה צוואה שמשקפת בדיוק את רצוני, ועשתה את התהליך נוח ונגיש.', name: 'אברהם מ.', role: 'רעננה' },
  { text: 'נאלצנו להגיש התנגדות לצוואה שנחתמה בנסיבות חשודות. טל ניהלה את ההליך נחרצות ומקצועית, ובסופו של דבר הצלחנו.', name: 'רחל ו.', role: 'נתניה' },
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
              מומחיות בדיני ירושה וצוואות
            </div>
            <h1 className="hero-title" data-animate="fade-up" data-delay="1">
              ייעוץ משפטי אישי<br />
              <span className="hero-title-accent">בדיני ירושה וצוואות</span>
            </h1>
            <p className="hero-lead" data-animate="fade-up" data-delay="2">
              עו״ד טל נתן אבילביץ מלווה משפחות בישראל בהליכים משפטיים רגישים — עריכת צוואות, צו ירושה, ניהול עיזבונות וייצוג בסכסוכי ירושה.
            </p>
            <div className="hero-actions" data-animate="fade-up" data-delay="3">
              <Link href="/appointment" className="btn btn-primary btn-lg">קביעת פגישת ייעוץ ←</Link>
              <a href="tel:+972542233127" className="btn btn-ghost">054-223-3127</a>
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
            {[
              { icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z', text: 'מומחיות ייחודית בירושות' },
              { icon: 'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z', text: '15+ שנות ניסיון', extra: 'polyline points="12 6 12 12 16 14"' },
              { icon: 'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z', text: 'ייעוץ אישי ומסור' },
              { icon: 'M2 3h20v14H2zM8 21h8M12 17v4', text: 'פגישה ראשונית ללא עלות' },
            ].map((item, i, arr) => (
              <>
                <span key={item.text} className="trust-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d={item.icon}/>
                  </svg>
                  {item.text}
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
            <p className="section-eyebrow" data-animate="fade-up">תחומי התמחות</p>
            <h2 className="section-title" id="services-title" data-animate="fade-up" data-delay="1">השירותים שלנו</h2>
            <p className="section-lead" data-animate="fade-up" data-delay="2">ליווי מקצועי בכל היבטי דיני הירושה, הצוואות והמשפחה בישראל</p>
          </div>
          <div className="services-grid">
            {[
              { title: 'עריכת צוואות', slug: 'wills', desc: 'ניסוח מקצועי של צוואות — בכתב יד, בעדים, בפני רשות ועל פה — בהתאם לרצונכם ולחוק הישראלי.' },
              { title: 'צו ירושה / צו קיום צוואה', slug: 'inheritance-order', desc: 'ניהול מלא של הליך הוצאת צו ירושה או צו קיום צוואה — כולל הגשת בקשות לרשם הירושות ולבית המשפט.' },
              { title: 'ניהול עיזבונות', slug: 'estate', desc: 'ייצוג מנהלי עיזבון ויורשים, ניהול הליך חלוקת הרכוש בצורה מסודרת ומקצועית.' },
              { title: 'התנגדות לצוואה', slug: 'contesting', desc: 'ייצוג בהתנגדויות לצוואה — בשל לחץ, השפעה בלתי הוגנת, חוסר כשרות, או פגמים צורניים.' },
              { title: 'הסכמי ממון', slug: 'prenup', desc: 'ניסוח וייעוץ בהסכמי ממון לפני ובמהלך נישואין — הגנה על רכוש ועל הדורות הבאים.' },
              { title: 'גישור משפחתי', slug: 'mediation', desc: 'גישור מוסמך בסכסוכי ירושה ומחלוקות משפחתיות — פתרון אלטרנטיבי יעיל, חוסך הליכים ארוכים.' },
              { title: 'ייפוי כח מתמשך', slug: 'poa', desc: 'מינוי אדם מהימן שיקבל החלטות עבורכם אם לא תוכלו — הגנה עליכם בחייכם, לא רק לאחר פטירה.' },
            ].map((s, i) => (
              <Link key={s.title} href={`/services/${s.slug}`} className="service-card" data-animate="fade-up" data-delay={String(i % 3)}>
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
              <p className="section-eyebrow">אודות</p>
              <h2 className="section-title" id="about-title">עו״ד טל נתן אבילביץ</h2>
              <p style={{ color: '#7a7673', lineHeight: 1.75, marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                מתמחה בדיני ירושה, צוואות ועיזבונות. עם ניסיון של למעלה מ-15 שנה, טל ליוותה מאות משפחות בהליכים משפטיים רגישים ומורכבים.
              </p>
              <ul className="about-highlights">
                <li>ניסיון של למעלה מ-15 שנה בדיני ירושה, צוואות ועיזבונות</li>
                <li>כל תיק מטופל אישית על ידי טל — ללא העברה לאחרים</li>
                <li>ייצוג בכל הערכאות, מהרשם ועד בית המשפט המחוזי</li>
                <li>פגישת ייעוץ ראשונית ללא עלות וללא התחייבות</li>
              </ul>
              <Link href="/about" className="btn btn-primary">קראו עוד אודותינו ←</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="why-us" aria-labelledby="why-title">
        <div className="container">
          <div className="section-header" data-animate="fade-up">
            <p className="section-eyebrow">למה לבחור בנו</p>
            <h2 className="section-title" id="why-title">היתרון שלנו</h2>
          </div>
          <div className="why-grid">
            {[
              { title: 'מומחיות ספציפית', desc: 'התמחות ייחודית בדיני ירושה — לא ג׳נרליסטים. כל התיקים שלנו בתחום אחד.' },
              { title: 'יחס אישי', desc: 'כל לקוח מקבל תשומת לב מלאה. אנחנו לא מפנים תיקים לאחרים — טל מטפלת בהם בעצמה.' },
              { title: 'שקיפות מלאה', desc: 'תמחור ברור, עדכונים שוטפים. אין הפתעות — תדעו בדיוק מה קורה בתיקכם בכל שלב.' },
              { title: 'ניסיון מוכח', desc: '15+ שנות ניסיון, ייצוג בכל הערכאות — מבית המשפט לענייני משפחה ועד המחוזי.' },
            ].map((w, i) => (
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
            <p className="section-eyebrow">איך עובדים איתנו</p>
            <h2 className="section-title" id="process-title">תהליך הטיפול</h2>
          </div>
          <div className="process-steps">
            {[
              { num: '01', title: 'פגישת ייעוץ ראשונית', desc: 'פגישה ראשונה ללא עלות — הכרות, הבנת הצורך ומתן הערכה מקצועית.' },
              { num: '02', title: 'הצעת מחיר שקופה', desc: 'הצעה ברורה עם מחיר קבוע מראש, ללא הפתעות.' },
              { num: '03', title: 'ליווי מקצועי', desc: 'טיפול שוטף בתיק, עדכונים קבועים ונגישות ישירה לטל.' },
              { num: '04', title: 'סיום מוצלח', desc: 'השגת המטרה — מהוצאת צו ועד חלוקת הירושה.' },
            ].map((step, i) => (
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
            <p className="section-eyebrow">לקוחות מספרים</p>
            <h2 className="section-title" id="testimonials-title">מה אומרים עלינו</h2>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
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
            <p className="section-eyebrow">שאלות נפוצות</p>
            <h2 className="section-title" id="faq-title">שאלות ותשובות</h2>
          </div>
          <div className="faq-list" data-animate="fade-up" data-delay="1">
            {faqs.map(faq => (
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
            <h2 id="cta-title">מוכנים לפנות אלינו?</h2>
            <p>פגישת הייעוץ הראשונית היא ללא עלות וללא התחייבות. נשמח לעמוד לרשותכם.</p>
            <div className="cta-actions">
              <Link href="/appointment" className="btn btn-white">קביעת פגישה ←</Link>
              <a href="tel:+972542233127" className="btn" style={{ background: 'transparent', color: 'rgba(255,255,255,0.8)', border: '2px solid rgba(255,255,255,0.3)' }}>054-223-3127</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
