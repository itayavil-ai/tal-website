import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'ניהול עיזבונות | עו״ד טל נתן אבילביץ',
  description: 'ייצוג מנהלי עיזבון ויורשים — איתור נכסים, פירעון חובות, חלוקת הרכוש. ליווי מקצועי מהשלב הראשון ועד סיום ההליך.',
  alternates: { canonical: 'https://www.tal-law.co.il/services/estate' },
}

export default function EstateServicePage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="section-eyebrow" data-animate="fade-up">תחומי שירות</p>
          <h1 className="section-title" data-animate="fade-up" data-delay="1">ניהול עיזבונות</h1>
        </div>
      </section>

      <section className="article-section">
        <div className="container">
          <nav className="article-breadcrumbs" aria-label="מיקום באתר">
            <Link href="/">ראשי</Link>
            <span aria-hidden="true">›</span>
            <span aria-current="page">ניהול עיזבונות</span>
          </nav>

          <div className="article-body">
            <p><strong>
              ניהול עיזבון הוא הליך משפטי ומנהלי מורכב שמתחיל עם הפטירה ומסתיים בחלוקת הרכוש בין היורשים. אנחנו מלווים משפחות בכל השלבים — מהאיתור הראשוני של נכסים וחובות ועד לרישום הנכסים על שם הבעלים החדשים.
            </strong></p>

            <h2>מה כולל שירות ניהול העיזבון שלנו?</h2>
            <p>
              כל עיזבון הוא שונה. יש עיזבונות עם נכסים מעטים ויורשים מסכימים שמסתיימים תוך חודשים, ויש עיזבונות מורכבים עם נדל״ן, עסקים, חובות ומחלוקות שנמשכים שנים. בכל מקרה, אנחנו מספקים ליווי מלא:
            </p>
            <ul>
              <li><strong>ייצוג ומינוי מנהל עיזבון</strong> — סיוע בבחירת מנהל עיזבון מתאים וייצוגו מול הרשם ובית המשפט.</li>
              <li><strong>איתור נכסים</strong> — בדיקת חשבונות בנק, נדל״ן בטאבו ובמינהל, פוליסות ביטוח, קופות גמל, ניירות ערך ועסקים.</li>
              <li><strong>איתור חובות</strong> — הלוואות, משכנתאות, חובות לרשויות המס וערבויות.</li>
              <li><strong>פירעון חובות</strong> — טיפול בפירעון מסודר לפי סדר העדיפויות הקבוע בחוק.</li>
              <li><strong>חלוקת הרכוש</strong> — ניסוח הסכמי חלוקה, ייצוג בהליכי פירוק שיתוף, ותיאום מול כל הגורמים הרלוונטיים.</li>
              <li><strong>רישום נכסים</strong> — העברת בעלות בטאבו, עדכון חשבונות, שינוי בעלות על רכבים ועוד.</li>
            </ul>

            <h2>כיצד טל יכולה לעזור?</h2>
            <p>
              ניהול עיזבון ללא ייעוץ משפטי מקצועי עלול לעלות ביוקר. פעולות שגויות — כמו חלוקת נכסים לפני קבלת צו ירושה, או העברת כספים ללא הסמכה — עלולות לחשוף יורשים לאחריות משפטית. טל נתן אבילביץ:
            </p>
            <ul>
              <li>מוודאת שכל פעולה מתבצעת בסדר הנכון ובמסגרת החוק.</li>
              <li>מתמצאת באיתור נכסים "נסתרים" — חסכונות, פוליסות ישנות, נכסים שלא נרשמו.</li>
              <li>מנהלת מו״מ בין יורשים ומונעת סכסוכים לפני שהם מתפרצים.</li>
              <li>מייצגת בבית המשפט כשנדרש — בתביעות חלוקה, בפירוק שיתוף ובסכסוכי יורשים.</li>
            </ul>

            <h2>עיזבונות מורכבים</h2>
            <p>
              יש לנו ניסיון ספציפי בניהול עיזבונות הכוללים: עסקים ושותפויות, נכסים מחוץ לישראל, מחלוקות בין יורשים מרובים, ועיזבונות עם חובות הגבוהים מהנכסים. בכל מקרה כזה — האסטרטגיה המשפטית חשובה לא פחות מהניהול המנהלי.
            </p>

            <div className="article-cta" data-animate="fade-up">
              <div className="article-cta-text">
                <h3>צריכים ליווי בניהול עיזבון?</h3>
                <p>אנחנו מלווים את המשפחה מהרגע הראשון. פגישת ייעוץ ראשונית ללא עלות.</p>
              </div>
              <Link href="/appointment" className="btn btn-primary">לקביעת פגישת ייעוץ</Link>
            </div>
          </div>

          <section className="related-articles" aria-labelledby="related-title">
            <h2 id="related-title">שירותים נוספים</h2>
            <div className="related-grid">
              <Link href="/services/inheritance-order" className="blog-card" style={{ textDecoration: 'none' }}>
                <div className="blog-card-content">
                  <h3 className="blog-card-title">צו ירושה וצו קיום צוואה</h3>
                  <p className="blog-card-excerpt">ניהול מלא של הליך הוצאת הצו — מהגשה עד קבלה.</p>
                  <span className="blog-card-link">לפרטים</span>
                </div>
              </Link>
              <Link href="/services/wills" className="blog-card" style={{ textDecoration: 'none' }}>
                <div className="blog-card-content">
                  <h3 className="blog-card-title">עריכת צוואות</h3>
                  <p className="blog-card-excerpt">ניסוח מקצועי של צוואה שתשקף את רצונכם ותעמוד בחוק.</p>
                  <span className="blog-card-link">לפרטים</span>
                </div>
              </Link>
            </div>
          </section>
        </div>
      </section>
    </>
  )
}
