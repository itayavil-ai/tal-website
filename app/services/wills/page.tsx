import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'עריכת צוואות | עו״ד טל נתן אבילביץ',
  description: 'ניסוח מקצועי של צוואות בישראל — כל 4 סוגי הצוואות, התאמה אישית, הגנה על רצונכם. פגישת ייעוץ ראשונית ללא עלות.',
  alternates: { canonical: 'https://www.tal-law.co.il/services/wills' },
}

export default function WillsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="section-eyebrow" data-animate="fade-up">תחומי שירות</p>
          <h1 className="section-title" data-animate="fade-up" data-delay="1">עריכת צוואות</h1>
        </div>
      </section>

      <section className="article-section">
        <div className="container">
          <nav className="article-breadcrumbs" aria-label="מיקום באתר">
            <Link href="/">ראשי</Link>
            <span aria-hidden="true">›</span>
            <span aria-current="page">עריכת צוואות</span>
          </nav>

          <div className="article-body">
            <p><strong>
              צוואה היא אחד המסמכים המשפטיים החשובים ביותר שתערכו בחייכם. היא מבטיחה שרצונכם יכובד לאחר פטירתכם — ומגנה על האנשים שאתם אוהבים מפני סכסוכים ואי-ודאות.
            </strong></p>

            <h2>מה כוללת עריכת צוואה אצלנו?</h2>
            <p>
              אנחנו מלווים אתכם בכל שלב — החל מהשיחה הראשונה שבה נבין את רצונכם ואת המצב המשפחתי, ועד לניסוח הסופי, החתימה ושמירה בטוחה של המסמך. אנחנו מתמחים בכל 4 סוגי הצוואות המוכרים בחוק הישראלי:
            </p>
            <ul>
              <li><strong>צוואה בכתב יד</strong> — פשוטה ופרטית, אך מחייבת ניסוח זהיר כדי למנוע פסילה.</li>
              <li><strong>צוואה בעדים</strong> — הנפוצה ביותר. כתובה ונחתמת בפני שני עדים כשירים.</li>
              <li><strong>צוואה בפני רשות</strong> — בפני שופט או רשם ירושה. קשה לערער עליה.</li>
              <li><strong>צוואה בעל פה</strong> — למצבי חירום בלבד. תוקפה מוגבל בזמן.</li>
            </ul>

            <h2>מדוע צוואה בסיוע עורכת דין עדיפה?</h2>
            <p>
              צוואות שנכתבות ללא ייצוג משפטי חשופות לאתגרים משפטיים רבים: ניסוח לא חד-משמעי שמוביל לפרשנויות שגויות, פגמים צורניים שעלולים לפסול את הצוואה כולה, או אי-עדכון לאחר שינויי חיים מהותיים. טל נתן אבילביץ מבטיחה שהצוואה שלכם תעמוד בכל דרישות החוק ותשקף במדויק את רצונכם.
            </p>

            <h2>נושאים שניתן להסדיר בצוואה</h2>
            <ul>
              <li>חלוקת נכסים — נדל״ן, חשבונות בנק, ניירות ערך, רכב, תכולת בית.</li>
              <li>קביעת אפוטרופוס לילדים קטינים.</li>
              <li>קביעת גיל או תנאים לקבלת הירושה.</li>
              <li>הדרה של יורש מסוים מהעיזבון.</li>
              <li>מינוי מנהל עיזבון.</li>
              <li>הוראות לגבי עסקים ושותפויות.</li>
              <li>הקמת נאמנות לטובת אדם עם מוגבלות.</li>
            </ul>

            <h2>תהליך העבודה שלנו</h2>
            <h3>שלב 1 — פגישת ייעוץ</h3>
            <p>בפגישה הראשונה נשמע את רצונותיכם, נסביר את האפשרויות, ונייעץ מהי הצוואה המתאימה למצבכם הספציפי. הפגישה ללא עלות וללא התחייבות.</p>
            <h3>שלב 2 — ניסוח</h3>
            <p>טל מנסחת את הצוואה בשפה משפטית ברורה וחד-משמעית, תוך שימת לב לפרטים שעלולים ליצור מחלוקות עתידיות.</p>
            <h3>שלב 3 — בדיקה ואישור</h3>
            <p>אתם קוראים, שואלים ומאשרים. אנחנו עומדים לרשותכם עד שתהיו מרוצים לחלוטין מהמסמך.</p>
            <h3>שלב 4 — חתימה ושמירה</h3>
            <p>החתימה מתבצעת כחוק — בנוכחות עדים או בפני רשות, לפי הסוג שנבחר. אנחנו מסייעים גם בשמירה מאובטחת של הצוואה.</p>

            <h2>מתי לעדכן צוואה?</h2>
            <p>צוואה אינה מסמך "לכל החיים". מומלץ לבחון ולעדכן אותה לאחר: נישואין, גירושין, לידת ילדים, פטירת יורש, שינוי משמעותי ברכוש, או שינוי ביחסים משפחתיים.</p>

            <div className="article-cta" data-animate="fade-up">
              <div className="article-cta-text">
                <h3>מוכנים לערוך צוואה?</h3>
                <p>פגישת הייעוץ הראשונית ללא עלות. טל תנחה אתכם בכל שלב ותבטיח שרצונכם יישמר.</p>
              </div>
              <Link href="/appointment" className="btn btn-primary">לקביעת פגישת ייעוץ</Link>
            </div>
          </div>

          <section className="related-articles" aria-labelledby="related-title">
            <h2 id="related-title">שירותים נוספים</h2>
            <div className="related-grid">
              <Link href="/services/inheritance-order" className="blog-card" style={{ textDecoration: 'none' }}>
                <div className="blog-card-content">
                  <h3 className="blog-card-title">צו ירושה / צו קיום צוואה</h3>
                  <p className="blog-card-excerpt">ניהול מלא של הליך הוצאת הצו — מהגשה עד קבלה.</p>
                  <span className="blog-card-link">לפרטים</span>
                </div>
              </Link>
              <Link href="/services/estate" className="blog-card" style={{ textDecoration: 'none' }}>
                <div className="blog-card-content">
                  <h3 className="blog-card-title">ניהול עיזבונות</h3>
                  <p className="blog-card-excerpt">ליווי מקצועי בכל שלבי ניהול העיזבון וחלוקת הרכוש.</p>
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
