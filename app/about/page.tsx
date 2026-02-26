import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

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

const credentials = [
  {
    title: 'תואר במשפטים (LL.B)',
    desc: 'בוגרת הפקולטה למשפטים, עם התמחות בדיני משפחה וירושה.',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>,
  },
  {
    title: 'חברת לשכת עורכי הדין',
    desc: 'חברה פעילה בלשכת עורכי הדין בישראל מזה למעלה מ-15 שנה.',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  },
  {
    title: 'הסמכה בגישור',
    desc: 'מגשרת מוסמכת, עם התמחות בגישור סכסוכי ירושה ומחלוקות משפחתיות.',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>,
  },
  {
    title: 'השתלמויות מקצועיות',
    desc: 'השתתפות קבועה בכנסים והשתלמויות בתחום דיני הירושה והצוואות.',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/></svg>,
  },
]

const timeline = [
  { year: '2008', title: 'סיום לימודי משפטים', desc: 'סיום תואר LL.B בהצטיינות והתחלת התמחות בתחום דיני המשפחה והירושה.' },
  { year: '2010', title: 'קבלה ללשכת עורכי הדין', desc: 'מתן רישיון עריכת דין ותחילת פרקטיקה עצמאית עם התמקדות בדיני ירושה וצוואות.' },
  { year: '2014', title: 'הסמכה כמגשרת', desc: 'השלמת הכשרה והסמכה בגישור, עם התמחות בסכסוכי ירושה ומחלוקות משפחתיות.' },
  { year: '2018', title: 'ייצוג בתיקים מורכבים', desc: 'ניהול תיקי ירושה מורכבים בבית המשפט המחוזי, כולל סכסוכי ירושה רב-יורשים.' },
  { year: '2023', title: 'הרחבת תחומי הפרקטיקה', desc: 'הרחבת הטיפול לתיקי ירושה הכוללים נכסים מחוץ לישראל, עסקים משפחתיים ותכנון עיזבון מקיף.' },
]

const values = [
  { letter: 'א', title: 'מקצועיות', desc: 'ידע משפטי מעמיק ועדכני בדיני ירושה וצוואות, עם גישה אנליטית לכל תיק.' },
  { letter: 'ב', title: 'רגישות', desc: 'הבנה שנושאי ירושה הם רגישים ומורכבים, וטיפול בהם מתוך כבוד ואמפתיה.' },
  { letter: 'ג', title: 'שקיפות', desc: 'תקשורת פתוחה וכנה, עדכונים שוטפים ותמחור שקוף ללא הפתעות.' },
]

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <p className="section-eyebrow" data-animate="fade-up" data-delay="0">הכירו אותנו</p>
          <h1 className="section-title" data-animate="fade-up" data-delay="1">אודות עו״ד<br />טל נתן אבילביץ</h1>
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
              <h2>המומחיות שלנו</h2>
              <p>
                עו״ד טל נתן אבילביץ מתמחה בדיני ירושה, צוואות, עיזבונות ודיני משפחה בישראל.
                עם ניסיון של למעלה מ-15 שנה בתחום, טל ליוותה מאות משפחות בהליכים משפטיים רגישים ומורכבים — החל מעריכת צוואות ועד ניהול עיזבונות וייצוג בהתנגדויות.
              </p>
              <h2>הגישה שלנו</h2>
              <p>
                אנחנו מאמינים שמאחורי כל שאלה משפטית עומדת משפחה. הגישה שלנו מתחילה בהקשבה אמיתית — הבנת הצרכים, החששות והתקוות של כל לקוח — ורק אז בניית אסטרטגיה משפטית מדויקת.
              </p>
              <p>
                בנושאים כמו ירושה וצוואות, המקצועיות לבד אינה מספיקה. נדרשת גם רגישות, סבלנות ויכולת לנווט בתוך דינמיקות משפחתיות מורכבות. זו המומחיות האמיתית שלנו.
              </p>
              <h2>השכלה וניסיון</h2>
              <p>
                טל היא בוגרת הפקולטה למשפטים וחברה בלשכת עורכי הדין מזה למעלה מ-15 שנה. במהלך הקריירה שלה, ייצגה בכל הערכאות — מבית המשפט לענייני משפחה ועד בית המשפט המחוזי — וצברה ניסיון נרחב בניהול תיקי ירושה, צוואות ועיזבונות.
              </p>
              <p>
                טל משתתפת באופן קבוע בהשתלמויות מקצועיות ועוקבת אחר חידושי הפסיקה והחקיקה בתחום, כדי להבטיח שכל לקוח מקבל את הייעוץ העדכני והמקצועי ביותר.
              </p>
              <h2>למה לבחור בנו?</h2>
              <p>
                כי אנחנו לא מתפשרים. לא על מקצועיות, לא על יחס אישי ולא על תוצאות. כל תיק מקבל את מלוא תשומת הלב, וכל לקוח יודע בדיוק איפה הוא עומד — בשקיפות מלאה, לאורך כל הדרך.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="credentials">
        <div className="container">
          <div className="section-header" data-animate="fade-up">
            <p className="section-eyebrow">הסמכות ותעודות</p>
            <h2 className="section-title">הכשרה מקצועית</h2>
          </div>
          <div className="credentials-grid">
            {credentials.map((c, i) => (
              <div key={c.title} className="credential-card" data-animate="fade-up" data-delay={String(i)}>
                <div className="credential-icon" aria-hidden="true">{c.icon}</div>
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
            <p className="section-eyebrow">הדרך המקצועית</p>
            <h2 className="section-title">אבני דרך</h2>
          </div>
          <div className="timeline-list" data-animate="fade-up" data-delay="1">
            {timeline.map(t => (
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
            <p className="section-eyebrow">הערכים שלנו</p>
            <h2 className="section-title">העקרונות שמובילים אותנו</h2>
          </div>
          <div className="values-grid">
            {values.map((v, i) => (
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
            <h2>רוצים לשמוע עוד?</h2>
            <p>נשמח להכיר ולספר איך נוכל לסייע. פגישת הייעוץ הראשונית היא ללא עלות.</p>
            <div className="cta-actions">
              <Link href="/appointment" className="btn btn-white">קביעת פגישה</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
