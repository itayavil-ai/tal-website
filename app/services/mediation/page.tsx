import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'גישור משפחתי | עו״ד טל נתן אבילביץ',
  description: 'גישור מוסמך בסכסוכי ירושה ומחלוקות משפחתיות — מהיר, פרטי, חסכוני ומשמר יחסים. עו״ד טל נתן אבילביץ, מגשרת מוסמכת.',
  alternates: { canonical: 'https://www.tal-law.co.il/services/mediation' },
}

export default function MediationServicePage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="section-eyebrow" data-animate="fade-up">תחומי שירות</p>
          <h1 className="section-title" data-animate="fade-up" data-delay="1">גישור משפחתי</h1>
        </div>
      </section>

      <section className="article-section">
        <div className="container">
          <nav className="article-breadcrumbs" aria-label="מיקום באתר">
            <Link href="/">ראשי</Link>
            <span aria-hidden="true">›</span>
            <span aria-current="page">גישור משפחתי</span>
          </nav>

          <div className="article-body">
            <p><strong>
              סכסוכי ירושה הם מהכואבים ביותר — הם פורצים ברגע הקשה ממילא, ועלולים לפגוע קשות ביחסים המשפחתיים לשנים רבות. גישור מוסמך הוא דרך לפתור מחלוקות בצורה מהירה, פרטית, וללא ההרס שמותיר אחריו הליך משפטי ממושך.
            </strong></p>

            <h2>מה זה גישור?</h2>
            <p>
              גישור הוא הליך וולונטרי שבו הצדדים הנוגעים בדבר נפגשים בנוכחות מגשר מוסמך — אדם ניטרלי שאינו שופט ואינו מכריע, אלא מסייע לצדדים להגיע לפתרון שהם עצמם בוחרים. ההסכמה שמגיעים אליה מחייבת.
            </p>

            <h2>יתרונות הגישור על פני בית המשפט</h2>
            <ul>
              <li><strong>מהירות</strong> — גישור נמשך שבועות עד חודשים, לעומת הליך משפטי שנמשך שנים.</li>
              <li><strong>פרטיות</strong> — כל מה שנאמר בגישור חסוי ואינו קביל כראיה. בית המשפט הוא מקום ציבורי.</li>
              <li><strong>עלות נמוכה</strong> — עלות הגישור נמוכה משמעותית מהוצאות משפטיות.</li>
              <li><strong>שמירת יחסים</strong> — הפתרון בא מתוך הסכמה, לא מכפייה. לעיתים קרובות הצדדים שומרים על קשר לאחר.</li>
              <li><strong>גמישות</strong> — הצדדים יכולים להגיע לפתרונות יצירתיים שבית המשפט אינו יכול להורות עליהם.</li>
            </ul>

            <h2>באילו מצבים מתאים גישור?</h2>
            <ul>
              <li>מחלוקות בין יורשים על אופן חלוקת הרכוש.</li>
              <li>סכסוכים בין אחים לאחר פטירת הורה.</li>
              <li>מחלוקות בין יורשים לבין בן/בת הזוג שנותר בחיים.</li>
              <li>ויכוחים על ניהול עסק משפחתי אחרי פטירת בעלים.</li>
              <li>מצבים שבהם נדרשת חלוקת רכוש אך הצדדים רוצים להימנע ממשפט.</li>
            </ul>

            <h2>טל נתן אבילביץ — מגשרת מוסמכת</h2>
            <p>
              בנוסף לניסיונה כעורכת דין, טל היא מגשרת מוסמכת עם התמחות ספציפית בסכסוכי ירושה ומשפחה. הנסיון הכפול — ידע משפטי מעמיק בשילוב עם כלי גישור מקצועיים — מאפשר לה להיות מגשרת יעילה במיוחד במקרים שיש בהם מורכבות משפטית.
            </p>

            <h2>תהליך הגישור</h2>
            <h3>שלב 1 — פגישת היכרות</h3>
            <p>כל צד נפגש עם טל בנפרד להכרות ולבדיקת התאמת הגישור למצב.</p>
            <h3>שלב 2 — מפגשי גישור</h3>
            <p>ישיבות משותפות שבהן כל צד מציג את עמדתו, והמגשרת עוזרת לחשוף את האינטרסים האמיתיים מאחורי הדרישות.</p>
            <h3>שלב 3 — גיבוש הסכם</h3>
            <p>כשמגיעים להסכמה — מנסחים הסכם מחייב בכתב, שניתן לאשרו בבית המשפט.</p>

            <div className="article-cta" data-animate="fade-up">
              <div className="article-cta-text">
                <h3>רוצים לנסות גישור?</h3>
                <p>פנו אלינו לפגישת ייעוץ ראשונית — נבדוק יחד אם גישור מתאים למצבכם.</p>
              </div>
              <Link href="/appointment" className="btn btn-primary">לקביעת פגישת ייעוץ</Link>
            </div>
          </div>

          <section className="related-articles" aria-labelledby="related-title">
            <h2 id="related-title">שירותים נוספים</h2>
            <div className="related-grid">
              <Link href="/services/contesting" className="blog-card" style={{ textDecoration: 'none' }}>
                <div className="blog-card-content">
                  <h3 className="blog-card-title">התנגדות לצוואה</h3>
                  <p className="blog-card-excerpt">ייצוג בהתנגדויות לצוואה — בשל לחץ, השפעה בלתי הוגנת ופגמים צורניים.</p>
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
