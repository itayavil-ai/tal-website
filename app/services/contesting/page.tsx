import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'התנגדות לצוואה | עו״ד טל נתן אבילביץ',
  description: 'ייצוג בהתנגדויות לצוואה — לחץ, השפעה בלתי הוגנת, חוסר כשרות, פגמים צורניים. פעולה מהירה — המועדים קצרים.',
  alternates: { canonical: 'https://www.tal-law.co.il/services/contesting' },
}

export default function ContestingServicePage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="section-eyebrow" data-animate="fade-up">תחומי שירות</p>
          <h1 className="section-title" data-animate="fade-up" data-delay="1">התנגדות לצוואה</h1>
        </div>
      </section>

      <section className="article-section">
        <div className="container">
          <nav className="article-breadcrumbs" aria-label="מיקום באתר">
            <Link href="/">ראשי</Link>
            <span aria-hidden="true">›</span>
            <span aria-current="page">התנגדות לצוואה</span>
          </nav>

          <div className="article-body">
            <p><strong>
              לא כל צוואה שנמצאת לאחר פטירה היא תקפה. אם אתם חושדים שהצוואה נכתבה תחת לחץ, השפעה בלתי הוגנת, או שהמנוח לא היה מסוגל לבצע אותה — חשוב לפעול מיד. המועד להגשת התנגדות הוא 45 יום בלבד.
            </strong></p>

            <h2>עילות נפוצות להתנגדות</h2>
            <p>בישראל ניתן להתנגד לצוואה על בסיס מספר עילות משפטיות מוכרות:</p>

            <h3>השפעה בלתי הוגנת</h3>
            <p>
              כאשר אדם ניצל את חולשתו הפיזית או הנפשית של המנוח — בדידות, תלות, מחלה — כדי לגרום לו לשנות את הצוואה לטובתו. זוהי העילה הנפוצה ביותר, ולעיתים קרובות מופיעה כשילד שטיפל בהורה קשיש קיבל חלק גדול מהעיזבון על חשבון האחרים.
            </p>

            <h3>חוסר כשרות משפטית</h3>
            <p>
              המנוח חייב היה להבין את משמעות הצוואה בעת חתימתה. צוואה שנכתבה בתקופת דמנציה, מחלה נפשית חמורה, או אובדן הכרה עשויה להיות בטלה.
            </p>

            <h3>כפייה ואיומים</h3>
            <p>
              אם המנוח חתם על הצוואה עקב לחץ, איומים, או כפייה — הצוואה בטלה. נדרשות ראיות ממשיות להוכחה.
            </p>

            <h3>פגמים צורניים</h3>
            <p>
              חוק הירושה מחייב עמידה בדרישות טכניות מחמירות. פגמים כמו עדים פסולים, חסרת חתימה, תאריך חסר, או כתב יד חלקי עלולים לפסול את הצוואה.
            </p>

            <h3>מרמה</h3>
            <p>
              אם המנוח הוטעה לחשוב שחותם על מסמך אחר, או אם תוכן הצוואה שונה לאחר חתימתה — הצוואה בטלה.
            </p>

            <h2>מה כוללת עבודתנו?</h2>
            <p>
              טל נתן אבילביץ מייצגת הן מגישי התנגדויות — המתנגדים לצוואה — והן מי שמבקשים לקיים אותה ומצויים בפני התנגדות. בשני המקרים, האסטרטגיה והמהירות קריטיות:
            </p>
            <ul>
              <li>בדיקת הצוואה ועילות ההתנגדות — ייעוץ כנה על סיכויי ההצלחה.</li>
              <li>איסוף ראיות: מסמכים רפואיים, חוות דעת גריאטריות, עדויות, כתבי בית דין קודמים.</li>
              <li>הגשת ההתנגדות לרשם הירושות או לבית המשפט לענייני משפחה תוך 45 ימים.</li>
              <li>ייצוג בכל שלבי ההליך: קדם-משפט, גישור, שמיעת ראיות ופסק דין.</li>
            </ul>

            <div className="article-info-box">
              <p><strong>שימו לב:</strong> המועד להגשת התנגדות לצוואה הוא 45 ימים מיום פרסום הבקשה. אי-עמידה במועד זה עלולה לסגור את הדלת לחלוטין. אם יש לכם חשד — פנו אלינו עוד היום.</p>
            </div>

            <div className="article-cta" data-animate="fade-up">
              <div className="article-cta-text">
                <h3>חושדים שיש עילה להתנגד?</h3>
                <p>פנו אלינו בהקדם — המועדים קצרים ויש לפעול מיידית.</p>
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
              <Link href="/services/mediation" className="blog-card" style={{ textDecoration: 'none' }}>
                <div className="blog-card-content">
                  <h3 className="blog-card-title">גישור משפחתי</h3>
                  <p className="blog-card-excerpt">פתרון סכסוכי ירושה מחוץ לבית המשפט — מהיר, פרטי וחסכוני.</p>
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
