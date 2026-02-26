import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'למה חשוב לערוך צוואה — גם אם אתם צעירים',
  description: 'רבים דוחים את עריכת הצוואה לגיל מבוגר. מדוע זהו צעד חיוני בכל גיל, ואיך צוואה פשוטה יכולה למנוע סכסוכים משפחתיים עתידיים.',
  alternates: { canonical: 'https://www.tal-law.co.il/blog/young-will' },
  openGraph: { title: 'למה חשוב לערוך צוואה — גם אם אתם צעירים', type: 'article', images: [{ url: '/images/blog-young-will.jpg' }] },
  twitter: { card: 'summary_large_image', title: 'צוואה בגיל צעיר', images: ['/images/blog-young-will.jpg'] },
}

const articleSchema = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: 'למה חשוב לערוך צוואה — גם אם אתם צעירים',
  author: { '@type': 'Person', name: 'טל נתן אבילביץ', jobTitle: 'עורכת דין' },
  datePublished: '2026-01-18', dateModified: '2026-02-24',
  publisher: { '@type': 'Organization', name: 'משרד עו״ד טל נתן אבילביץ' },
  description: 'רבים דוחים את עריכת הצוואה לגיל מבוגר. מדוע זהו צעד חיוני בכל גיל, ואיך צוואה פשוטה יכולה למנוע סכסוכים משפחתיים עתידיים.',
}

export default function YoungWillPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <section className="page-hero">
        <div className="container">
          <p className="section-eyebrow" data-animate="fade-up">מאמרים</p>
          <h1 className="section-title" data-animate="fade-up" data-delay="1">למה חשוב לערוך צוואה — גם אם אתם צעירים</h1>
        </div>
      </section>

      <section className="article-section">
        <div className="container">
          <nav className="article-breadcrumbs" aria-label="מיקום באתר">
            <Link href="/">ראשי</Link>
            <span aria-hidden="true">›</span>
            <Link href="/blog">מאמרים</Link>
            <span aria-hidden="true">›</span>
            <span aria-current="page">צוואה בגיל צעיר</span>
          </nav>

          <div className="article-hero-image">
            <Image src="/images/blog-young-will.jpg" alt="זוג צעיר חותם על מסמכים משפטיים" width={900} height={400} loading="lazy" />
          </div>

          <div className="article-meta">
            <span className="article-meta-author">מאת עו״ד טל נתן אבילביץ</span>
            <time className="article-meta-date" dateTime="2026-01-18">18 בינואר, 2026</time>
            <span className="article-meta-category">צוואות</span>
            <span>זמן קריאה: 7 דקות</span>
          </div>

          <div className="article-body">
            <p><strong>
              &quot;אני עוד צעיר, יש לי זמן&quot; — זהו המשפט שאנו שומעים הכי הרבה כשמדברים על עריכת צוואה. המציאות היא שצוואה אינה מסמך שנועד רק לקשישים. היא כלי תכנון חיוני לכל מבוגר שיש לו נכסים, קרובים, או מישהו שהוא רוצה להגן עליו.
            </strong></p>

            <h2>למה אנשים דוחים צוואה?</h2>
            <p>הסיבות לדחייה רבות ומגוונות:</p>
            <ul>
              <li><strong>&quot;אני בריא ועוד אחכה&quot;</strong> — מות בגיל צעיר הוא בלתי צפוי, בדיוק לכן יש להתכונן.</li>
              <li><strong>&quot;אין לי הרבה נכסים&quot;</strong> — גם דירה שכורה, חסכונות קטנים ורכב דורשים הוראות ברורות.</li>
              <li><strong>&quot;הכל יסתדר עם המשפחה&quot;</strong> — חוסר בהירות הוא הגורם הנפוץ ביותר לסכסוכי ירושה.</li>
              <li><strong>&quot;זה מביא מזל רע&quot;</strong> — מיתוס. עריכת צוואה היא אחריות, לא אות מוות.</li>
            </ul>

            <h2>מה קורה אם אין צוואה?</h2>
            <p>
              כאשר אדם נפטר ללא צוואה, הירושה מתחלקת לפי חוק הירושה — ולא בהכרח לפי רצונו. חוק הירושה קובע סדר קבוע: בן הזוג מקבל חלק, הילדים מקבלים חלק, ואם אין — ההורים. הבעיה? חוק הירושה לא מתחשב בנסיבות אישיות.
            </p>
            <p>דוגמאות למצבים בהם החוק &quot;לא מבין אתכם&quot;:</p>
            <ul>
              <li>זוג ידועים בציבור שאינם נשואים — הבן/בת זוג עשויים לא לרשת דבר.</li>
              <li>ילדים מנישואים קודמים — עלולים להגיע לסכסוך חריף עם בן הזוג החדש.</li>
              <li>רכוש שרציתם לתת לחבר קרוב — לא יקרה ללא צוואה.</li>
              <li>עסק שרציתם שישמר — עלול להימכר בניגוד לרצונכם.</li>
            </ul>

            <h2>מצבים שבהם צוואה חיונית במיוחד לצעירים</h2>

            <h3>יש לכם ילדים קטינים</h3>
            <p>
              בצוואה ניתן לקבוע מי יהיה האפוטרופוס על ילדיכם אם שני ההורים ילכו לעולמם. ללא קביעה זו, בית המשפט יחליט — ולא בהכרח לפי הרצון שלכם. כמו כן, ניתן לקבוע מתי ובאיזה אופן ילדיכם יקבלו את ירושתם (למשל: לא לפני גיל 25).
            </p>

            <h3>יש לכם שותפים עסקיים</h3>
            <p>
              בצוואה ניתן לקבוע מה יקרה עם חלקכם בעסק — אם יועבר לשותפים, לבני המשפחה, או יימכר. ללא הנחיות כאלה, עסק שבניתם במשך שנים עשוי להתמוטט.
            </p>

            <h3>אתם ידועים בציבור</h3>
            <p>
              חוק הירושה הישראלי מגן על ידועים בציבור, אך ההכרה אינה אוטומטית. צוואה מבטיחה שבן/בת הזוג שלכם יקבלו את שמגיע להם — ללא צורך בהליכים משפטיים מורכבים.
            </p>

            <h3>יש לכם קרובים עם מוגבלות</h3>
            <p>
              אם אחד מקרוביכם מסתמך עליכם — ניתן להכין צוואה שתגן עליו גם לאחר שלא תהיו. ניתן אף להקים נאמנות מיוחדת לטובתו.
            </p>

            <h2>כמה עולה לערוך צוואה?</h2>
            <p>
              עלות עריכת צוואה בסיסית נמוכה בהרבה ממה שאנשים מדמיינים. זוהי אחת ההשקעות הכי חשובות שתעשו — כי הביטוח שהיא מספקת למשפחתכם אין לו תחליף. צוואות מורכבות יותר (עם נאמנויות, עסקים, נכסים בחו״ל) עולות יותר, אך עדיין שוות כל שקל.
            </p>

            <h2>האם צוואה שכתבתם בעצמכם תקפה?</h2>
            <p>
              כן — חוק הירושה מכיר ב<strong>צוואה בכתב יד</strong> שנכתבה כולה בכתב יד הכותב, עם תאריך וחתימה. אין צורך בעדים. אולם, ישנן מלכודות רבות: מחיקות, שינויים לאחר מעשה, ניסוח לא חד-משמעי, וחוסר עדכון לאחר שינויי חיים. מומלץ בחום לערוך צוואה בסיוע עורך דין.
            </p>

            <h2>מתי לעדכן את הצוואה?</h2>
            <p>צוואה אינה מסמך &quot;לחיים&quot;. יש לעדכן אותה בעקבות:</p>
            <ul>
              <li>נישואין, גירושין, פרידה.</li>
              <li>לידת ילדים ונכדים.</li>
              <li>רכישה או מכירה של נכסים משמעותיים.</li>
              <li>שינוי מצבו של יורש (פטירה, נכות, שינוי יחסים).</li>
              <li>שינוי בחוק.</li>
            </ul>

            <div className="article-cta" data-animate="fade-up">
              <div className="article-cta-text">
                <h3>רוצים לערוך צוואה?</h3>
                <p>משרד עו״ד טל נתן אבילביץ מלווה אנשים בכל גיל בהכנת צוואה מותאמת אישית. פגישת ייעוץ ראשונית ללא עלות.</p>
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
                  <p className="blog-card-excerpt">סקירה מקיפה של ארבעת סוגי הצוואות המוכרים בחוק הישראלי — מה מתאים לכם?</p>
                  <span className="blog-card-link">קראו עוד</span>
                </div>
              </Link>
              <Link href="/blog/no-will" className="blog-card" style={{ textDecoration: 'none' }}>
                <div className="blog-card-content">
                  <h3 className="blog-card-title">מה קורה כשאין צוואה?</h3>
                  <p className="blog-card-excerpt">סדר הירושה הקבוע בחוק, חלקו של בן הזוג, וזכויות הילדים.</p>
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
