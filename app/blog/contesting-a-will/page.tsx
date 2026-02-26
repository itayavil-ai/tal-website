import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'התנגדות לצוואה: מתי יש עילה ואיך מגישים?',
  description: 'לא כל צוואה היא תקפה. סקירת העילות להתנגדות לצוואה, ההליך המשפטי ומה חשוב לדעת לפני שמגישים התנגדות.',
  alternates: { canonical: 'https://www.tal-law.co.il/blog/contesting-a-will' },
  openGraph: { title: 'התנגדות לצוואה: מתי יש עילה ואיך מגישים?', type: 'article', images: [{ url: '/images/blog-contesting.jpg' }] },
  twitter: { card: 'summary_large_image', title: 'התנגדות לצוואה', images: ['/images/blog-contesting.jpg'] },
}

const articleSchema = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: 'התנגדות לצוואה: מתי יש עילה ואיך מגישים?',
  author: { '@type': 'Person', name: 'טל נתן אבילביץ', jobTitle: 'עורכת דין' },
  datePublished: '2026-02-01', dateModified: '2026-02-18',
  publisher: { '@type': 'Organization', name: 'משרד עו״ד טל נתן אבילביץ' },
}

export default function ContestingAWillPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <section className="page-hero">
        <div className="container">
          <p className="section-eyebrow" data-animate="fade-up">מאמרים</p>
          <h1 className="section-title" data-animate="fade-up" data-delay="1">התנגדות לצוואה: מתי יש עילה ואיך מגישים?</h1>
        </div>
      </section>

      <section className="article-section">
        <div className="container">
          <nav className="article-breadcrumbs" aria-label="מיקום באתר">
            <Link href="/">ראשי</Link>
            <span aria-hidden="true">›</span>
            <Link href="/blog">מאמרים</Link>
            <span aria-hidden="true">›</span>
            <span aria-current="page">התנגדות לצוואה</span>
          </nav>

          <div className="article-hero-image">
            <Image src="/images/blog-contesting.jpg" alt="פטיש שופט בבית משפט" width={900} height={400} loading="lazy" />
          </div>

          <div className="article-meta">
            <span className="article-meta-author">מאת עו״ד טל נתן אבילביץ</span>
            <time className="article-meta-date" dateTime="2026-02-01">1 בפברואר, 2026</time>
            <span className="article-meta-category">התנגדות לצוואה</span>
            <span>זמן קריאה: 9 דקות</span>
          </div>

          <div className="article-body">
            <p><strong>
              לא כל צוואה שנמצאת לאחר פטירתו של אדם היא בהכרח תקפה. ישנם מקרים שבהם ניתן — ואף חובה — לערער על תוקפה של צוואה. במאמר זה נסביר מתי יש עילה להתנגדות לצוואה, כיצד מגישים התנגדות, ומה לצפות מההליך המשפטי.
            </strong></p>

            <h2>מהי התנגדות לצוואה?</h2>
            <p>
              התנגדות לצוואה היא הליך משפטי שבמסגרתו אדם בעל עניין בירושה פונה לבית המשפט לענייני משפחה בטענה שהצוואה אינה תקפה. ההתנגדות מוגשת בתגובה לבקשה לצו קיום צוואה, שמוגשת על ידי אחד מהיורשים לפי הצוואה.
            </p>

            <h2>עילות נפוצות להתנגדות לצוואה</h2>

            <h3>1. חוסר כשרות משפטית (צלילות דעת)</h3>
            <p>
              כדי שצוואה תהיה תקפה, המצווה חייב היה להיות בעל כשרות משפטית מלאה בעת עריכתה — כלומר, הוא הבין את משמעות מעשיו, את הרכוש שברשותו, ואת זהות יורשיו. צוואה שנערכה בזמן שהמצווה סבל מדמנציה, אלצהיימר, או מצב נפשי חמור, עשויה להיות בטלה.
            </p>

            <h3>2. השפעה בלתי הוגנת</h3>
            <p>
              כאשר אדם מנצל את מצבו הפגיע של המצווה — חולשה פיזית, תלות רגשית, או בדידות — כדי לגרום לו לשנות את צוואתו לטובתו, מדובר בהשפעה בלתי הוגנת. זוהי עילה נפוצה מאוד, במיוחד כאשר ילד אחד טיפל בהורה קשיש וקיבל חלק גדול מהעיזבון.
            </p>

            <h3>3. כפייה ואיומים</h3>
            <p>
              אם המצווה נחלץ לחתום על הצוואה עקב לחץ, איומים, או כפייה, הצוואה בטלה. נטל הראיה להוכחת כפייה הוא גבוה, ונדרשות ראיות ממשיות.
            </p>

            <h3>4. פגמים צורניים</h3>
            <p>
              חוק הירושה קובע דרישות צורניות מחמירות לכל סוג של צוואה. אי-עמידה בדרישות אלה עלולה לפסול את הצוואה:
            </p>
            <ul>
              <li>צוואה בכתב יד שאינה כתובה כולה בכתב ידו של המצווה.</li>
              <li>צוואה בעדים שנחתמה בפני עדים פסולים (למשל, יורשים לפי הצוואה).</li>
              <li>חסרה חתימה או תאריך.</li>
            </ul>

            <h3>5. מרמה</h3>
            <p>
              אם המצווה הוטעה לחתום על מסמך אחר בחשבו שהוא חותם על מסמך שאינו צוואה, או אם תוכן הצוואה שונה לאחר חתימתה — הצוואה בטלה מחמת מרמה.
            </p>

            <h2>מי רשאי להגיש התנגדות?</h2>
            <p>
              כל אדם שיש לו עניין בירושה רשאי להגיש התנגדות: יורשים על פי דין (לפי החוק), נהנים שהוחרגו מהצוואה, נושים של המנוח, ואנשים שמוזכרים בצוואה קודמת.
            </p>

            <h2>הליך ההתנגדות</h2>
            <h3>שלב 1: הגשת ההתנגדות</h3>
            <p>
              ההתנגדות מוגשת לבית המשפט לענייני משפחה תוך 45 ימים מיום פרסום הבקשה לצו קיום צוואה בברשומות. ההתנגדות חייבת לכלול תצהיר עם פירוט הטענות.
            </p>
            <h3>שלב 2: קדם משפט</h3>
            <p>בית המשפט קובע דיון לבדיקת הראיות הראשוניות ולניסיון להגיע להסדר גישור.</p>
            <h3>שלב 3: שמיעת ראיות</h3>
            <p>אם לא הושג הסדר, מתקיים משפט מלא שבו מוגשות ראיות: מסמכים רפואיים, עדויות, חוות דעת מומחים.</p>
            <h3>שלב 4: פסק דין</h3>
            <p>בית המשפט נותן פסק דין: מקיים את הצוואה, מבטל אותה, או מקיים אותה חלקית.</p>

            <div className="article-info-box">
              <p><strong>חשוב:</strong> הגשת התנגדות לצוואה היא הליך משפטי מורכב הדורש ייצוג מקצועי. אי-עמידה במועדים עלולה לסגור את הדלת בפניכם.</p>
            </div>

            <div className="article-cta" data-animate="fade-up">
              <div className="article-cta-text">
                <h3>חושבים שיש עילה להתנגד לצוואה?</h3>
                <p>פנו אלינו בהקדם — המועדים קצרים ויש לפעול מיידית.</p>
              </div>
              <Link href="/appointment" className="btn btn-primary">לקביעת פגישת ייעוץ</Link>
            </div>
          </div>

          <section className="related-articles" aria-labelledby="related-title">
            <h2 id="related-title">מאמרים נוספים</h2>
            <div className="related-grid">
              <Link href="/blog/inheritance-order" className="blog-card" style={{ textDecoration: 'none' }}>
                <div className="blog-card-content">
                  <h3 className="blog-card-title">צו ירושה בישראל: המדריך המלא</h3>
                  <p className="blog-card-excerpt">כל מה שצריך לדעת על הגשת בקשה לצו ירושה.</p>
                  <span className="blog-card-link">קראו עוד</span>
                </div>
              </Link>
              <Link href="/blog/types-of-wills" className="blog-card" style={{ textDecoration: 'none' }}>
                <div className="blog-card-content">
                  <h3 className="blog-card-title">סוגי צוואות בישראל</h3>
                  <p className="blog-card-excerpt">סקירה מקיפה של ארבעת סוגי הצוואות המוכרים בחוק הישראלי.</p>
                  <span className="blog-card-link">קראו עוד</span>
                </div>
              </Link>
            </div>
          </section>
        </div>
      </section>
    </>
  )
}
