import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'צו ירושה בישראל: המדריך המלא לשנת 2026',
  description: 'מדריך מקיף להוצאת צו ירושה בישראל: מהו צו ירושה, מתי צריך אותו, אילו מסמכים נדרשים, כמה זמן התהליך לוקח, ומה לעשות אם מוגשת התנגדות.',
  alternates: { canonical: 'https://www.tal-law.co.il/blog/inheritance-order' },
  openGraph: { title: 'צו ירושה: המדריך המלא', description: 'מדריך מקיף להוצאת צו ירושה בישראל', type: 'article', images: [{ url: '/images/blog-inheritance.jpg' }] },
  twitter: { card: 'summary_large_image', title: 'צו ירושה: המדריך המלא', description: 'מדריך מקיף להוצאת צו ירושה בישראל', images: ['/images/blog-inheritance.jpg'] },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'צו ירושה בישראל: המדריך המלא לשנת 2026',
  author: { '@type': 'Person', name: 'טל נתן אבילביץ', jobTitle: 'עורכת דין' },
  datePublished: '2026-01-22',
  dateModified: '2026-02-18',
  publisher: { '@type': 'Organization', name: 'משרד עו״ד טל נתן אבילביץ' },
  description: 'מדריך מקיף להוצאת צו ירושה בישראל',
}

export default function InheritanceOrderPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <section className="page-hero">
        <div className="container">
          <p className="section-eyebrow" data-animate="fade-up">מאמרים</p>
          <h1 className="section-title" data-animate="fade-up" data-delay="1">צו ירושה: המדריך המלא</h1>
        </div>
      </section>

      <section className="article-section">
        <div className="container">
          <nav className="article-breadcrumbs" aria-label="מיקום באתר">
            <Link href="/">ראשי</Link>
            <span aria-hidden="true">›</span>
            <Link href="/blog">מאמרים</Link>
            <span aria-hidden="true">›</span>
            <span aria-current="page">צו ירושה: המדריך המלא</span>
          </nav>

          <div className="article-hero-image">
            <Image src="/images/blog-inheritance.jpg" alt="מאזני צדק במשרד עורך דין" width={900} height={400} loading="lazy" />
          </div>

          <div className="article-meta">
            <span className="article-meta-author">מאת עו״ד טל נתן אבילביץ</span>
            <time className="article-meta-date" dateTime="2026-01-22">22 בינואר, 2026</time>
            <span className="article-meta-category">צו ירושה</span>
            <span>זמן קריאה: 10 דקות</span>
          </div>

          <div className="article-body">
            <p><strong>
              כאשר אדם נפטר ללא צוואה, חלוקת עיזבונו מתבצעת לפי סדר הירושה הקבוע בחוק הירושה, התשכ״ה-1965. כדי לממש את זכויות הירושה – למשל, להעביר בעלות על דירה, לגשת לחשבונות בנק, או לנהל את נכסי המנוח – יש צורך בהוצאת צו ירושה. במאמר זה נסביר את כל מה שצריך לדעת על ההליך.
            </strong></p>

            <h2>מהו צו ירושה?</h2>
            <p>
              צו ירושה הוא מסמך משפטי שניתן על ידי הרשם לענייני ירושה או בית המשפט לענייני משפחה, המפרט את זהות היורשים של המנוח ואת חלקו של כל יורש בעיזבון. הצו ניתן כאשר <strong>אין צוואה</strong>, והירושה מתחלקת לפי הוראות החוק.
            </p>
            <p>
              אם המנוח השאיר צוואה, ההליך המתאים הוא בקשה לצו קיום צוואה – הליך דומה אך שונה, שבו בית המשפט או הרשם מאשרים את תוקף הצוואה.
            </p>

            <h2>מתי צריך צו ירושה?</h2>
            <p>צו ירושה נדרש כמעט בכל מקרה שבו יש צורך להעביר או לממש נכסים של המנוח:</p>
            <ul>
              <li><strong>העברת בעלות על נדל״ן</strong> – רישום דירה או קרקע על שם היורשים בטאבו.</li>
              <li><strong>גישה לחשבונות בנק</strong> – משיכת כספים, סגירת חשבונות, או העברת כספים ליורשים.</li>
              <li><strong>מימוש פוליסות ביטוח</strong> – חברות ביטוח דורשות צו ירושה לפני תשלום.</li>
              <li><strong>העברת רכבים</strong> – שינוי בעלות על רכב ברשות הרישוי.</li>
              <li><strong>ניהול עסקים</strong> – המשך ניהול או סגירת עסק של המנוח.</li>
              <li><strong>תביעות משפטיות</strong> – הגשת תביעות או המשך תביעות בשם העיזבון.</li>
            </ul>

            <h2>סדר הירושה לפי החוק</h2>
            <p>חוק הירושה קובע סדר ירושה ברור כאשר אין צוואה:</p>
            <h3>בן/בת הזוג</h3>
            <p>
              בן הזוג של המנוח זכאי לחלק משמעותי מהעיזבון. אם למנוח יש ילדים – בן הזוג מקבל מחצית מהעיזבון (וכן את מיטלטלי המשפחה כולל הרכב). אם למנוח אין ילדים אך יש הורים – בן הזוג מקבל שני שלישים. אם אין ילדים ואין הורים – בן הזוג יורש את הכול.
            </p>
            <h3>ילדים וצאצאיהם</h3>
            <p>
              ילדי המנוח הם יורשים מדרגה ראשונה. הם חולקים ביניהם בשווה את חלקם בעיזבון (לאחר חלק בן הזוג). אם אחד הילדים נפטר לפני המנוח – ילדיו (נכדי המנוח) יורשים את חלקו.
            </p>
            <h3>הורי המנוח וצאצאיהם</h3>
            <p>
              אם למנוח אין ילדים – הוריו הם היורשים. אם אחד ההורים נפטר – חלקו עובר לילדיו (אחי המנוח).
            </p>
            <h3>הורי ההורים וצאצאיהם</h3>
            <p>אם אין יורשים מהדרגות הקודמות – הירושה עוברת לסבים וסבתות ולצאצאיהם.</p>

            <h2>הליך הגשת בקשה לצו ירושה</h2>
            <p>להלן השלבים בהליך הוצאת צו ירושה:</p>
            <h3>שלב 1: הכנת המסמכים</h3>
            <ul>
              <li>טופס בקשה לצו ירושה (טופס מקוון באתר הרשם לענייני ירושה).</li>
              <li>תעודת פטירה של המנוח.</li>
              <li>תצהיר של המבקש, מאומת על ידי עורך דין.</li>
              <li>פרטי כל היורשים הפוטנציאליים (שם מלא, מספר זהות, כתובת).</li>
              <li>אישור על תשלום אגרה.</li>
            </ul>
            <h3>שלב 2: הגשת הבקשה</h3>
            <p>
              הבקשה מוגשת לרשם לענייני ירושה. ניתן להגיש באופן מקוון דרך אתר הרשם, או פיזית בלשכות הרשם הפרוסות ברחבי הארץ. כל אחד מהיורשים רשאי להגיש את הבקשה – אין צורך בהסכמת כל היורשים.
            </p>
            <h3>שלב 3: פרסום ברשומות</h3>
            <p>
              לאחר הגשת הבקשה, היא מתפרסמת בילקוט הפרסומים ובעיתון יומי, על מנת לאפשר לכל מי שמתנגד להגיש התנגדות. תקופת ההמתלה להתנגדויות היא <strong>45 ימים</strong> מיום הפרסום.
            </p>
            <h3>שלב 4: בחינת הבקשה</h3>
            <p>
              אם לא הוגשו התנגדויות, הרשם לענייני ירושה בוחן את הבקשה. אם הכל תקין – הצו יינתן. אם הוגשו התנגדויות, התיק מועבר לבית המשפט לענייני משפחה להכרעה.
            </p>
            <h3>שלב 5: קבלת הצו</h3>
            <p>
              צו הירושה נשלח לכל היורשים ומפרט את זהותם ואת חלקם בעיזבון. עם קבלת הצו, ניתן לפנות לגופים הרלוונטיים ולממש את הירושה.
            </p>

            <h2>כמה זמן לוקח התהליך?</h2>
            <ul>
              <li><strong>מקרה פשוט (ללא התנגדויות)</strong> – בין 3 ל-6 חודשים מיום הגשת הבקשה.</li>
              <li><strong>מקרה עם התנגדויות</strong> – עשוי להימשך שנה ואף יותר, תלוי בהליך המשפטי.</li>
              <li><strong>מקרים מורכבים</strong> – כאשר יש יורשים בחו״ל, נכסים מורכבים, או מחלוקות – ההליך עשוי להתארך משמעותית.</li>
            </ul>

            <h2>טעויות נפוצות שיש להימנע מהן</h2>
            <ul>
              <li><strong>עיכוב בהגשת הבקשה</strong> – אין הגבלת זמן להגשה, אך עיכוב עלול ליצור סיבוכים.</li>
              <li><strong>השמטת יורשים</strong> – חובה לציין את כל היורשים הפוטנציאליים. השמטה עלולה להוביל לביטול הצו.</li>
              <li><strong>חלוקת העיזבון לפני קבלת הצו</strong> – חלוקת נכסים ללא צו ירושה אינה תקפה משפטית.</li>
              <li><strong>טיפול ללא ייצוג משפטי</strong> – ליווי משפטי מונע טעויות ומזרז את ההליך.</li>
            </ul>

            <div className="article-cta" data-animate="fade-up">
              <div className="article-cta-text">
                <h3>צריכים עזרה בהוצאת צו ירושה?</h3>
                <p>משרד עו״ד טל נתן אבילביץ מלווה משפחות בהליך הוצאת צו ירושה מהרגע הראשון ועד לחלוקת העיזבון.</p>
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
                  <p className="blog-card-excerpt">סקירה מקיפה של ארבעת סוגי הצוואות המוכרים בחוק הישראלי.</p>
                  <span className="blog-card-link">קראו עוד</span>
                </div>
              </Link>
              <Link href="/blog/contesting-a-will" className="blog-card" style={{ textDecoration: 'none' }}>
                <div className="blog-card-content">
                  <h3 className="blog-card-title">התנגדות לצוואה: מתי ואיך?</h3>
                  <p className="blog-card-excerpt">באילו מקרים ניתן להתנגד לצוואה, מהן העילות המשפטיות, וכיצד מתנהל ההליך.</p>
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
