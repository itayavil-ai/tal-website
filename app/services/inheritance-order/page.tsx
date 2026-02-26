import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'צו ירושה וצו קיום צוואה | עו״ד טל נתן אבילביץ',
  description: 'ניהול מלא של הליך הוצאת צו ירושה וצו קיום צוואה — הגשה, מעקב, ייצוג בהתנגדויות. פגישת ייעוץ ראשונית ללא עלות.',
  alternates: { canonical: 'https://www.tal-law.co.il/services/inheritance-order' },
}

export default function InheritanceOrderServicePage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="section-eyebrow" data-animate="fade-up">תחומי שירות</p>
          <h1 className="section-title" data-animate="fade-up" data-delay="1">צו ירושה וצו קיום צוואה</h1>
        </div>
      </section>

      <section className="article-section">
        <div className="container">
          <nav className="article-breadcrumbs" aria-label="מיקום באתר">
            <Link href="/">ראשי</Link>
            <span aria-hidden="true">›</span>
            <span aria-current="page">צו ירושה וצו קיום צוואה</span>
          </nav>

          <div className="article-body">
            <p><strong>
              לאחר פטירת קרוב משפחה, בנקים, לשכת רישום המקרקעין, חברות ביטוח ורשויות המדינה ידרשו מסמך משפטי אחד לפני שיאפשרו לכם לפעול בנכסים: צו ירושה או צו קיום צוואה. אנחנו מטפלים בהליך מהרגע הראשון ועד שהצו בידיכם.
            </strong></p>

            <h2>צו ירושה לעומת צו קיום צוואה</h2>
            <p>
              שני הצווים הם מסמכים שניתנים על ידי הרשם לענייני ירושה או בית המשפט לענייני משפחה, ומאפשרים ליורשים לפעול בנכסי המנוח. ההבדל ביניהם:
            </p>
            <ul>
              <li><strong>צו ירושה</strong> — ניתן כשאין צוואה. מפרט מיהם היורשים על פי חוק הירושה וחלקו של כל אחד.</li>
              <li><strong>צו קיום צוואה</strong> — ניתן כשיש צוואה. מאמת שהצוואה תקפה ומאפשר לפעול לפיה.</li>
            </ul>

            <h2>מתי צריך את הצו?</h2>
            <ul>
              <li>העברת בעלות על דירה או קרקע בטאבו.</li>
              <li>משיכת כספים מחשבון הבנק של המנוח.</li>
              <li>קבלת תגמולים מחברות ביטוח וגמל.</li>
              <li>שינוי בעלות על רכב ברשות הרישוי.</li>
              <li>המשך ניהול עסק או חברה של המנוח.</li>
            </ul>

            <h2>מה אנחנו עושים בשבילכם?</h2>
            <p>
              הגשת בקשה לצו ירושה כרוכה באיסוף מסמכים, מילוי טפסים מורכבים, תשלום אגרות, הגשה לרשם ומעקב אחר הליך הפרסום. כל פרט שגוי — שם, תאריך, השמטת יורש — עלול לעכב את התהליך ואף לבטל את הבקשה. טל נתן אבילביץ מנהלת את כל ההליך עבורכם:
            </p>
            <ul>
              <li>איסוף כל המסמכים הנדרשים: תעודת פטירה, ת.ז. של יורשים, נסח טאבו ועוד.</li>
              <li>הכנה וחתימה על תצהיר מאומת.</li>
              <li>הגשת הבקשה לרשם לענייני ירושה.</li>
              <li>מעקב אחר פרסום הבקשה בילקוט הפרסומים (45 ימי המתנה).</li>
              <li>טיפול בכל התנגדות שתוגש — בגישור או בייצוג בבית המשפט.</li>
              <li>קבלת הצו ומסירתו לגופים הרלוונטיים.</li>
            </ul>

            <h2>כמה זמן לוקח?</h2>
            <p>
              בתיק פשוט ללא התנגדויות — 3 עד 6 חודשים מיום הגשת הבקשה. ניסיוננו מאפשר לנו להכין את הבקשה נכון מהפעם הראשונה, ולמנוע עיכובים מיותרים.
            </p>

            <h2>מקרים מורכבים</h2>
            <p>
              ניסיוננו כולל גם תיקים מורכבים: יורשים בחו״ל, נכסים בחו״ל הדורשים הליך מקביל, מחלוקות בין יורשים על חלוקת העיזבון, ותיקים בהם הוגשה התנגדות לצו. בכל מצב — אנחנו לצדכם.
            </p>

            <div className="article-cta" data-animate="fade-up">
              <div className="article-cta-text">
                <h3>צריכים צו ירושה?</h3>
                <p>פנו אלינו בהקדם. ככל שמתחילים מוקדם יותר, כך מסיימים מהר יותר.</p>
              </div>
              <Link href="/appointment" className="btn btn-primary">לקביעת פגישת ייעוץ</Link>
            </div>
          </div>

          <section className="related-articles" aria-labelledby="related-title">
            <h2 id="related-title">שירותים נוספים</h2>
            <div className="related-grid">
              <Link href="/services/estate" className="blog-card" style={{ textDecoration: 'none' }}>
                <div className="blog-card-content">
                  <h3 className="blog-card-title">ניהול עיזבונות</h3>
                  <p className="blog-card-excerpt">ליווי מקצועי בכל שלבי ניהול העיזבון וחלוקת הרכוש.</p>
                  <span className="blog-card-link">לפרטים</span>
                </div>
              </Link>
              <Link href="/services/contesting" className="blog-card" style={{ textDecoration: 'none' }}>
                <div className="blog-card-content">
                  <h3 className="blog-card-title">התנגדות לצוואה</h3>
                  <p className="blog-card-excerpt">ייצוג בהתנגדויות לצוואה — בשל לחץ, השפעה בלתי הוגנת ופגמים צורניים.</p>
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
