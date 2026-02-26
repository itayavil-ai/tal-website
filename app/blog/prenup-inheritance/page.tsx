import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'הסכם ממון וירושה: איך מגנים על הנכסים לדורות הבאים',
  description: 'הקשר בין הסכמי ממון לדיני ירושה, ואיך תכנון נכון יכול להגן על הרכוש המשפחתי ולמנוע סכסוכים בעתיד.',
  alternates: { canonical: 'https://www.tal-law.co.il/blog/prenup-inheritance' },
  openGraph: { title: 'הסכם ממון וירושה', type: 'article', images: [{ url: '/images/blog-prenup.jpg' }] },
  twitter: { card: 'summary_large_image', title: 'הסכם ממון וירושה', images: ['/images/blog-prenup.jpg'] },
}

const articleSchema = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: 'הסכם ממון וירושה: איך מגנים על הנכסים לדורות הבאים',
  author: { '@type': 'Person', name: 'טל נתן אבילביץ', jobTitle: 'עורכת דין' },
  datePublished: '2026-01-03', dateModified: '2026-02-24',
  publisher: { '@type': 'Organization', name: 'משרד עו״ד טל נתן אבילביץ' },
  description: 'הקשר בין הסכמי ממון לדיני ירושה, ואיך תכנון נכון יכול להגן על הרכוש המשפחתי ולמנוע סכסוכים בעתיד.',
}

export default function PrenupInheritancePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <section className="page-hero">
        <div className="container">
          <p className="section-eyebrow" data-animate="fade-up">מאמרים</p>
          <h1 className="section-title" data-animate="fade-up" data-delay="1">הסכם ממון וירושה: איך מגנים על הנכסים לדורות הבאים</h1>
        </div>
      </section>

      <section className="article-section">
        <div className="container">
          <nav className="article-breadcrumbs" aria-label="מיקום באתר">
            <Link href="/">ראשי</Link>
            <span aria-hidden="true">›</span>
            <Link href="/blog">מאמרים</Link>
            <span aria-hidden="true">›</span>
            <span aria-current="page">הסכם ממון וירושה</span>
          </nav>

          <div className="article-hero-image">
            <Image src="/images/blog-prenup.jpg" alt="חתימה על הסכם ממון" width={900} height={400} loading="lazy" />
          </div>

          <div className="article-meta">
            <span className="article-meta-author">מאת עו״ד טל נתן אבילביץ</span>
            <time className="article-meta-date" dateTime="2026-01-03">3 בינואר, 2026</time>
            <span className="article-meta-category">הסכמי ממון</span>
            <span>זמן קריאה: 8 דקות</span>
          </div>

          <div className="article-body">
            <p><strong>
              הסכם ממון הוא כלי משפטי שנועד להסדיר את יחסי הרכוש בין בני זוג — הן בחיים והן לאחר מוות. אם חשבתם שהסכם ממון רלוונטי רק לגירושין, קראו את המאמר הזה. הקשר בין הסכמי ממון לדיני ירושה הוא עמוק ומשמעותי, ותכנון נכון יכול להגן על עושר שצברתם לאורך שנים.
            </strong></p>

            <h2>מהו הסכם ממון?</h2>
            <p>הסכם ממון הוא חוזה בין בני זוג (לפני הנישואין או במהלכם) שמסדיר בין היתר:</p>
            <ul>
              <li>אילו נכסים נחשבים משותפים ואילו שייכים לכל אחד בנפרד.</li>
              <li>מה יקרה לנכסים במקרה של גירושין.</li>
              <li>מה יקרה לנכסים בפטירת אחד מבני הזוג.</li>
            </ul>
            <p>
              ההסכם חייב לקבל אישור של בית משפט לענייני משפחה או נוטריון כדי להיות תקף.
            </p>

            <h2>כיצד הסכם ממון משפיע על הירושה?</h2>

            <h3>הגנה על נכסים מלפני הנישואין</h3>
            <p>
              ללא הסכם ממון, נכסים שצברתם לפני הנישואין עשויים להפוך ל&quot;שיתוף בנכסים&quot; לאחר שנים של חיים משותפים. הסכם ממון יכול להבטיח שנכסים שהבאתם לנישואין — דירה שירשתם, עסק משפחתי, כסף שקיבלתם במתנה — יישארו שלכם ויועברו ליורשים שבחרתם.
            </p>

            <h3>הגנה על ילדים מנישואין קודמים</h3>
            <p>
              זהו אחד השימושים הנפוצים ביותר. אם יש לכם ילדים מנישואין קודמים, הסכם ממון יכול להבטיח שנכסים מסוימים יישארו לטובתם — ולא יועברו לבן/בת הזוג החדשים ולילדיהם בפטירתכם.
            </p>

            <h3>הגדרת גבולות ברורים</h3>
            <p>
              הסכם ממון מפחית משמעותית את הסיכוי לסכסוכים בין היורשים לבין בן/בת הזוג שנותרו בחיים — מפני שכל אחד יודע מה שייך לו ומה לא.
            </p>

            <h2>מה הסכם ממון לא יכול לעשות?</h2>
            <p>חשוב לדעת את הגבולות:</p>
            <ul>
              <li>הסכם ממון <strong>אינו מחליף צוואה</strong>. הוא מסדיר יחסי רכוש, אך לא את חלוקת הנכסים לאחר הפטירה.</li>
              <li>הסכם ממון לא יכול לפגוע ב<strong>עיזבון המגיע לילדים על פי דין</strong> בצורה שאינה מאוזנת.</li>
              <li>הסכם ממון שנכתב תחת לחץ, הטעיה, או ללא גילוי נאות — עלול להתבטל.</li>
            </ul>

            <h2>הסכם ממון + צוואה = תכנון עיזבון מלא</h2>
            <p>הגישה המומלצת היא שילוב בין הסכם ממון לבין צוואה מסודרת:</p>
            <ul>
              <li><strong>הסכם ממון</strong> — קובע מה שייך לכם ומה משותף.</li>
              <li><strong>צוואה</strong> — קובעת למי יועברו הנכסים שלכם לאחר פטירתכם.</li>
            </ul>
            <p>
              שני המסמכים יחד יוצרים &quot;תכנון עיזבון&quot; מקיף שמגן על משפחתכם ומבטיח שרצונכם יכובד.
            </p>

            <h2>מתי כדאי לשקול הסכם ממון?</h2>
            <ul>
              <li>לפני נישואין שניים, כשיש ילדים מנישואים קודמים.</li>
              <li>כשאחד מבני הזוג מביא לנישואין נכסים משמעותיים (דירה, עסק, ירושה).</li>
              <li>כשמשפחות עם עסק משפחתי רוצים להבטיח שהעסק יישאר בתוך המשפחה.</li>
              <li>כשיש פער גדול בהון בין בני הזוג.</li>
              <li>כשרוצים להגן על נכסים מפני חובות עתידיים.</li>
            </ul>

            <h2>הגנה על עסק משפחתי</h2>
            <p>
              עסקים משפחתיים הם אחד הנכסים הרגישים ביותר בירושה. ללא תכנון נכון, מות אחד הבעלים עלול לסכן את המשך פעילות העסק. הסכם ממון בשילוב עם הסכם שותפות ועם צוואה מפורטת יכולים להבטיח שהעסק ימשיך לפעול ויועבר בצורה מסודרת.
            </p>

            <h2>מה חשוב לדעת לפני חתימה על הסכם ממון?</h2>
            <ul>
              <li><strong>גילוי נאות הדדי</strong> — כל צד חייב לגלות לשני את כל נכסיו וחובותיו. הסתרה עלולה לבטל את ההסכם.</li>
              <li><strong>ייעוץ משפטי נפרד</strong> — מומלץ שכל צד ייוצג על ידי עורך דין משלו.</li>
              <li><strong>אישור בית משפט</strong> — ההסכם חייב לקבל אישור שיפוטי כדי לתקף אותו.</li>
              <li><strong>עדכון תקופתי</strong> — ככל שהנסיבות משתנות (לידת ילדים, רכישת נכסים), מומלץ לבחון ולעדכן את ההסכם.</li>
            </ul>

            <div className="article-cta" data-animate="fade-up">
              <div className="article-cta-text">
                <h3>רוצים לערוך הסכם ממון?</h3>
                <p>משרד עו״ד טל נתן אבילביץ מתמחה בעריכת הסכמי ממון ותכנון ירושה. פגישת ייעוץ ראשונית ללא עלות.</p>
              </div>
              <Link href="/appointment" className="btn btn-primary">לקביעת פגישת ייעוץ</Link>
            </div>
          </div>

          <section className="related-articles" aria-labelledby="related-title">
            <h2 id="related-title">מאמרים נוספים</h2>
            <div className="related-grid">
              <Link href="/blog/types-of-wills" className="blog-card" style={{ textDecoration: 'none' }}>
                <div className="blog-card-content">
                  <h3 className="blog-card-title">סוגי צוואות בישראל – המדריך המלא</h3>
                  <p className="blog-card-excerpt">איזה סוג צוואה מתאים לכם? סקירה מקיפה של ארבעת הסוגים המוכרים בחוק.</p>
                  <span className="blog-card-link">קראו עוד</span>
                </div>
              </Link>
              <Link href="/blog/young-will" className="blog-card" style={{ textDecoration: 'none' }}>
                <div className="blog-card-content">
                  <h3 className="blog-card-title">למה חשוב לערוך צוואה — גם אם אתם צעירים</h3>
                  <p className="blog-card-excerpt">מדוע אין להמתין לגיל מבוגר, ואיך צוואה מגינה על כל מה שחשוב לכם.</p>
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
