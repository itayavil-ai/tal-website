import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'הצהרת נגישות | עו״ד טל נתן אבילביץ',
  description: 'הצהרת נגישות של אתר עו״ד טל נתן אבילביץ בהתאם לתקן הישראלי IS 5568 ולהנחיות WCAG 2.0 ברמה AA.',
  alternates: { canonical: 'https://www.tal-law.co.il/accessibility' },
}

export default function AccessibilityPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="section-eyebrow" data-animate="fade-up">מחויבות לנגישות</p>
          <h1 className="section-title" data-animate="fade-up" data-delay="1">הצהרת נגישות</h1>
        </div>
      </section>

      <section className="a11y-section">
        <div className="container">
          <div className="a11y-content" data-animate="fade-up">
            <h2>מחויבותנו לנגישות</h2>
            <p>
              משרד עו״ד טל נתן אבילביץ מחויב להנגשת האתר לאנשים עם מוגבלויות, בהתאם לחוק שוויון זכויות לאנשים עם מוגבלות, התשנ״ח-1998, ולתקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות), התשע״ג-2013.
            </p>

            <h2>תקן הנגישות</h2>
            <p>
              אתר זה עומד בדרישות התקן הישראלי <strong>IS 5568</strong> לנגישות תכנים באינטרנט, המבוסס על הנחיות <strong>WCAG 2.0</strong> ברמת תאימות <strong>AA</strong> של ארגון ה-W3C.
            </p>

            <h2>פעולות שנעשו להנגשת האתר</h2>
            <ul>
              <li>שימוש בניגודיות צבעים מספקת בין טקסט לרקע (יחס 4.5:1 לפחות לטקסט רגיל, 3:1 לטקסט גדול).</li>
              <li>תמיכה מלאה בניווט באמצעות מקלדת בלבד, כולל מחוון מיקוד (focus) נראה בכל הרכיבים האינטראקטיביים.</li>
              <li>קישור &quot;דלג לתוכן הראשי&quot; בכל עמודי האתר.</li>
              <li>שימוש בתגיות HTML סמנטיות (header, nav, main, footer, section) ובמאפייני ARIA מתאימים.</li>
              <li>תיאורי טקסט חלופי (alt) לכל התמונות באתר.</li>
              <li>מבנה כותרות היררכי תקין (h1, h2, h3) ללא דילוגים.</li>
              <li>טפסים מונגשים עם תוויות (labels) מקושרות, הודעות שגיאה מקושרות באמצעות aria-describedby, וסימון aria-invalid בשדות שגויים.</li>
              <li>תמיכה בהגדלת טקסט עד 200% ללא אובדן תוכן או פונקציונליות.</li>
              <li>תמיכה בכיוון כתיבה מימין לשמאל (RTL) בהתאם לשפה העברית.</li>
              <li>תפריט ניווט נייד נגיש עם תמיכה במקש Escape לסגירה.</li>
            </ul>

            <h2>דפדפנים וטכנולוגיות מסייעות</h2>
            <p>
              האתר תומך בגרסאות העדכניות של הדפדפנים הנפוצים: Chrome, Firefox, Safari ו-Edge. האתר נבנה באופן התואם טכנולוגיות מסייעות כגון קוראי מסך.
            </p>

            <h2>פנייה בנושא נגישות</h2>
            <p>
              אם נתקלתם בבעיית נגישות באתר, או אם יש לכם הצעות לשיפור הנגישות, נשמח לשמוע מכם. ניתן לפנות אלינו באחת מהדרכים הבאות:
            </p>
            <ul>
              <li><strong>טלפון:</strong> 054-223-3127</li>
              <li><strong>דוא״ל:</strong> talnatan10@gmail.com</li>
              <li><strong>כתובת:</strong> התעשיה 15, רעננה</li>
            </ul>
            <p>
              אנו נעשה כל מאמץ להגיב לפניות בנושא נגישות תוך 5 ימי עבודה, ולטפל בבעיות שיתגלו בהקדם האפשרי.
            </p>

            <h2>עדכון אחרון</h2>
            <p>הצהרת נגישות זו עודכנה לאחרונה בתאריך 18 בפברואר, 2026.</p>
          </div>
        </div>
      </section>
    </>
  )
}
