import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'ניהול עיזבון: הצעדים שצריך לעשות אחרי פטירה',
  description: 'מדריך מעשי למשפחות בתהליך ניהול עיזבון — מאיתור נכסים וחובות ועד חלוקת הירושה בין היורשים.',
  alternates: { canonical: 'https://www.tal-law.co.il/blog/estate-management' },
  openGraph: { title: 'ניהול עיזבון: הצעדים שצריך לעשות אחרי פטירה', type: 'article', images: [{ url: '/images/blog-estate.jpg' }] },
  twitter: { card: 'summary_large_image', title: 'ניהול עיזבון', images: ['/images/blog-estate.jpg'] },
}

const articleSchema = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: 'ניהול עיזבון: הצעדים שצריך לעשות אחרי פטירה',
  author: { '@type': 'Person', name: 'טל נתן אבילביץ', jobTitle: 'עורכת דין' },
  datePublished: '2026-01-25', dateModified: '2026-02-24',
  publisher: { '@type': 'Organization', name: 'משרד עו״ד טל נתן אבילביץ' },
  description: 'מדריך מעשי למשפחות בתהליך ניהול עיזבון — מאיתור נכסים וחובות ועד חלוקת הירושה בין היורשים.',
}

export default function EstateManagementPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <section className="page-hero">
        <div className="container">
          <p className="section-eyebrow" data-animate="fade-up">מאמרים</p>
          <h1 className="section-title" data-animate="fade-up" data-delay="1">ניהול עיזבון: הצעדים שצריך לעשות אחרי פטירה</h1>
        </div>
      </section>

      <section className="article-section">
        <div className="container">
          <nav className="article-breadcrumbs" aria-label="מיקום באתר">
            <Link href="/">ראשי</Link>
            <span aria-hidden="true">›</span>
            <Link href="/blog">מאמרים</Link>
            <span aria-hidden="true">›</span>
            <span aria-current="page">ניהול עיזבון</span>
          </nav>

          <div className="article-hero-image">
            <Image src="/images/blog-estate.jpg" alt="ניהול עיזבון — מסמכים ומפתחות" width={900} height={400} loading="lazy" />
          </div>

          <div className="article-meta">
            <span className="article-meta-author">מאת עו״ד טל נתן אבילביץ</span>
            <time className="article-meta-date" dateTime="2026-01-25">25 בינואר, 2026</time>
            <span className="article-meta-category">עיזבון</span>
            <span>זמן קריאה: 8 דקות</span>
          </div>

          <div className="article-body">
            <p><strong>
              אובדן קרוב משפחה הוא חוויה קשה ומכאיבה. עם זאת, בתוך האבל יש להתמודד גם עם מציאות משפטית ומנהלית — ניהול עיזבון המנוח. מדריך זה נועד לסייע לכם להבין מה עליכם לעשות, ובאיזה סדר, כדי להגן על הנכסים ולוודא חלוקה צודקת ומסודרת.
            </strong></p>

            <h2>מהו עיזבון?</h2>
            <p>
              עיזבון הוא כלל הנכסים, הזכויות והחובות שהשאיר אחריו המנוח. הוא כולל נדל״ן, כספים בחשבונות בנק, ניירות ערך, פוליסות ביטוח חיים, חברות ועסקים, רכבים, תכולת הבית וכן חובות שהמנוח היה חייב לאחרים. חלוקת העיזבון אינה אפשרית ללא קיום הליך משפטי מסודר.
            </p>

            <h2>השלב הראשון: אל תגעו בנכסים לפני שיש מסמך משפטי</h2>
            <p>
              הטעות הנפוצה ביותר שמשפחות עושות מיד לאחר הפטירה היא לגשת לחשבונות הבנק, לנהל מכירת נכסים, או לחלק חפצים לפני שקיבלו צו ירושה או צו קיום צוואה. פעולות כאלה עלולות להוות עבירה פלילית, ובכל מקרה אינן מחייבות משפטית. חכו לקבלת המסמך המשפטי המתאים.
            </p>

            <h2>שלב 2: מינוי מנהל עיזבון</h2>
            <p>
              במקרים רבים מוסמך בית המשפט למנות מנהל עיזבון — אדם שתפקידו לאסוף את הנכסים, לפרוע חובות, ולחלק את הנותר בין היורשים. מנהל העיזבון יכול להיות אחד מהיורשים, עורך דין, רואה חשבון, או כל אדם אחר שהמנוח ציין בצוואה. ניתן לבקש מינוי מנהל עיזבון אפילו לפני קבלת צו ירושה, כאשר יש חשש לנזק לנכסים.
            </p>

            <h2>שלב 3: איתור נכסים וחובות</h2>
            <p>אחד האתגרים הגדולים בניהול עיזבון הוא לאתר את מלוא הנכסים. נכסים שיש לחפש:</p>
            <ul>
              <li><strong>חשבונות בנק ופיקדונות</strong> — לעיתים פזורים בכמה בנקים.</li>
              <li><strong>נדל״ן</strong> — בדקו בטאבו (לשכת רישום המקרקעין) ובמינהל מקרקעי ישראל.</li>
              <li><strong>ניירות ערך ופוליסות ביטוח</strong> — פנו לחברות ביטוח ולבתי השקעות.</li>
              <li><strong>קופות גמל וחיסכון פנסיוני</strong> — בדקו באתר &quot;שלי&quot; של משרד האוצר.</li>
              <li><strong>חברות ועסקים</strong> — בדקו ברשם החברות.</li>
              <li><strong>נכסים בחו״ל</strong> — מחייב לעיתים הליך משפטי מקביל במדינה הזרה.</li>
            </ul>
            <p>
              בו בזמן, חשוב לאתר חובות: הלוואות, משכנתאות, מינוס בחשבון, חובות לרשויות המס, ערבויות שנתן המנוח לאחרים.
            </p>

            <h2>שלב 4: פרעון החובות</h2>
            <p>לפני חלוקת הירושה ליורשים, יש לפרוע את חובות העיזבון. הסדר המשפטי לפירעון חובות:</p>
            <ul>
              <li>הוצאות הלוויה וניהול העיזבון — ראשונות בתור.</li>
              <li>חובות לרשויות המס.</li>
              <li>חובות מובטחים (משכנתא, שעבוד).</li>
              <li>חובות לא מובטחים (הלוואות, חובות לספקים).</li>
            </ul>
            <p>
              אם נכסי העיזבון אינם מספיקים לכיסוי החובות, היורשים <strong>אינם חייבים בחובות המנוח מכיסם האישי</strong> — אלא אם כן ערבו אישית לחובות אלה.
            </p>

            <h2>שלב 5: קבלת צו ירושה או צו קיום צוואה</h2>
            <p>
              כדי לבצע פעולות פורמליות בנכסי העיזבון, יש לקבל צו ירושה (אם אין צוואה) או צו קיום צוואה (אם יש צוואה). הצו מונפק על ידי הרשם לענייני ירושה ומאפשר פנייה לבנקים, רשויות, חברות ביטוח ועוד.
            </p>

            <h2>שלב 6: חלוקת הנכסים</h2>
            <p>לאחר קבלת הצו ופירעון החובות, ניתן לחלק את הנכסים. ישנן מספר דרכים לחלוקה:</p>
            <ul>
              <li><strong>חלוקה בעין</strong> — כל יורש מקבל נכסים ספציפיים.</li>
              <li><strong>פירוק שיתוף ומכירה</strong> — הנכסים נמכרים, והתמורה מחולקת.</li>
              <li><strong>הסכם חלוקה</strong> — היורשים מסכמים ביניהם על אופן החלוקה, עם אישור בית המשפט.</li>
            </ul>

            <h2>שלב 7: רישום הנכסים על שם היורשים</h2>
            <p>
              לאחר החלוקה, יש לרשום את הנכסים על שם הבעלים החדשים: העברת בעלות בטאבו לגבי נדל״ן, שינוי בעלות ברשות הרישוי לגבי רכבים, עדכון חשבונות בנק וכדומה.
            </p>

            <h2>כמה זמן לוקח ניהול עיזבון?</h2>
            <p>
              משך הזמן תלוי במורכבות: עיזבון פשוט עם מספר נכסים ויורשים מסכימים עשוי להסתיים תוך 6–12 חודשים. עיזבון מורכב עם נכסים רבים, חובות, מחלוקות בין יורשים, או נכסים בחו״ל עשוי להימשך שנים.
            </p>

            <h2>למה חשוב להיעזר בעורך דין?</h2>
            <p>ניהול עיזבון ללא ייצוג משפטי עלול להוביל לטעויות יקרות. עורך דין המתמחה בדיני ירושה יסייע ב:</p>
            <ul>
              <li>איתור ואיגום כל הנכסים והחובות.</li>
              <li>הגשת הבקשות הנכונות לבית המשפט ולרשם הירושות.</li>
              <li>ניהול מו״מ בין יורשים ומניעת סכסוכים.</li>
              <li>עמידה בלוחות הזמנים ובדרישות הפורמליות.</li>
              <li>חיסכון במסים ובאגרות.</li>
            </ul>

            <div className="article-cta" data-animate="fade-up">
              <div className="article-cta-text">
                <h3>זקוקים לליווי בניהול עיזבון?</h3>
                <p>משרד עו״ד טל נתן אבילביץ מלווה משפחות בכל שלבי ניהול העיזבון — מהשלב הראשון ועד חלוקה מסודרת ותיעוד מלא.</p>
              </div>
              <Link href="/appointment" className="btn btn-primary">לקביעת פגישת ייעוץ</Link>
            </div>
          </div>

          <section className="related-articles" aria-labelledby="related-title">
            <h2 id="related-title">מאמרים נוספים</h2>
            <div className="related-grid">
              <Link href="/blog/inheritance-order" className="blog-card" style={{ textDecoration: 'none' }}>
                <div className="blog-card-content">
                  <h3 className="blog-card-title">צו ירושה: המדריך המלא</h3>
                  <p className="blog-card-excerpt">כל מה שצריך לדעת על הגשת בקשה לצו ירושה — מי זכאי, מסמכים, עלויות ולוחות זמנים.</p>
                  <span className="blog-card-link">קראו עוד</span>
                </div>
              </Link>
              <Link href="/blog/no-will" className="blog-card" style={{ textDecoration: 'none' }}>
                <div className="blog-card-content">
                  <h3 className="blog-card-title">מה קורה כשאין צוואה?</h3>
                  <p className="blog-card-excerpt">סדר הירושה הקבוע בחוק, חלקו של בן הזוג, זכויות הילדים ומקרים מיוחדים.</p>
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
