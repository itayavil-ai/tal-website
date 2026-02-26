import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'מה קורה כשאין צוואה? ירושה לפי חוק בישראל',
  description: 'סדר הירושה הקבוע בחוק, חלקו של בן הזוג, זכויות הילדים ומקרים מיוחדים — הסבר מלא על ירושה ללא צוואה בישראל.',
  alternates: { canonical: 'https://www.tal-law.co.il/blog/no-will' },
  openGraph: { title: 'מה קורה כשאין צוואה? ירושה לפי חוק', type: 'article', images: [{ url: '/images/blog-no-will.jpg' }] },
  twitter: { card: 'summary_large_image', title: 'ירושה ללא צוואה', images: ['/images/blog-no-will.jpg'] },
}

const articleSchema = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: 'מה קורה כשאין צוואה? ירושה לפי חוק בישראל',
  author: { '@type': 'Person', name: 'טל נתן אבילביץ', jobTitle: 'עורכת דין' },
  datePublished: '2026-01-10', dateModified: '2026-02-24',
  publisher: { '@type': 'Organization', name: 'משרד עו״ד טל נתן אבילביץ' },
  description: 'סדר הירושה הקבוע בחוק, חלקו של בן הזוג, זכויות הילדים ומקרים מיוחדים — הסבר מלא על ירושה ללא צוואה בישראל.',
}

export default function NoWillPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <section className="page-hero">
        <div className="container">
          <p className="section-eyebrow" data-animate="fade-up">מאמרים</p>
          <h1 className="section-title" data-animate="fade-up" data-delay="1">מה קורה כשאין צוואה? ירושה לפי חוק בישראל</h1>
        </div>
      </section>

      <section className="article-section">
        <div className="container">
          <nav className="article-breadcrumbs" aria-label="מיקום באתר">
            <Link href="/">ראשי</Link>
            <span aria-hidden="true">›</span>
            <Link href="/blog">מאמרים</Link>
            <span aria-hidden="true">›</span>
            <span aria-current="page">ירושה ללא צוואה</span>
          </nav>

          <div className="article-hero-image">
            <Image src="/images/blog-no-will.jpg" alt="ספרי חוק וקלסר ירושה" width={900} height={400} loading="lazy" />
          </div>

          <div className="article-meta">
            <span className="article-meta-author">מאת עו״ד טל נתן אבילביץ</span>
            <time className="article-meta-date" dateTime="2026-01-10">10 בינואר, 2026</time>
            <span className="article-meta-category">ירושה</span>
            <span>זמן קריאה: 9 דקות</span>
          </div>

          <div className="article-body">
            <p><strong>
              מה קורה לרכוש שלנו כשאנו נפטרים ללא צוואה? שאלה שרבים מהססים לשאול, אך חיונית להבנה. בישראל, חוק הירושה, התשכ״ה-1965 קובע בצורה ברורה את סדר הירושה וחלקו של כל יורש — ולא תמיד זה תואם את הציפיות של המשפחה.
            </strong></p>

            <h2>סדר הירושה לפי החוק</h2>
            <p>
              חוק הירושה מגדיר שלוש קבוצות של יורשים (&quot;יורשים על פי דין&quot;), לפי קרבה משפחתית:
            </p>

            <h3>קבוצה ראשונה: ילדי המנוח וצאצאיהם</h3>
            <p>
              הילדים הם היורשים העיקריים. הם חולקים ביניהם בשווה. אם ילד נפטר לפני המנוח — חלקו עובר לילדיו (נכדי המנוח). כלל זה נקרא &quot;ירושה ייצוגית&quot;.
            </p>

            <h3>קבוצה שנייה: הורי המנוח וצאצאיהם</h3>
            <p>
              אם למנוח אין ילדים — הוריו יורשים. אם אחד ההורים נפטר — חלקו עובר לילדיו (אחי המנוח ואחיותיו). אם גם אחד האחים נפטר — חלקו עובר לילדיו (אחייניו ואחייניות).
            </p>

            <h3>קבוצה שלישית: הורי ההורים וצאצאיהם</h3>
            <p>
              אם אין יורשים בשתי הקבוצות הקודמות — הירושה עוברת לסבים וסבתות ולצאצאיהם (דודים, בני דודים).
            </p>

            <h2>מה קורה עם בן/בת הזוג?</h2>
            <p>
              בן הזוג עומד בפני עצמו — הוא אינו שייך לאף אחת מ&quot;שלוש הקבוצות&quot;, אלא יורש יחד עם כל קבוצה. הנה הפירוט:
            </p>
            <ul>
              <li><strong>יש ילדים:</strong> בן הזוג מקבל מחצית (1/2) מהעיזבון, בנוסף לזכות לדירת המגורים, מיטלטלי הבית, והרכב המשפחתי. הילדים חולקים ביניהם את המחצית השנייה.</li>
              <li><strong>אין ילדים, יש הורים:</strong> בן הזוג מקבל שני שלישים (2/3), ההורים מקבלים שליש.</li>
              <li><strong>אין ילדים ואין הורים:</strong> בן הזוג יורש את הכול.</li>
            </ul>
            <p>
              <strong>חשוב:</strong> &quot;בן זוג&quot; לפי חוק הירושה הוא מי שנשוי כחוק למנוח. ידועים בציבור זכאים לרשת רק אם יוכיחו את מעמדם בבית המשפט — הליך שאינו פשוט.
            </p>

            <h2>ויתור על ירושה</h2>
            <p>
              יורש רשאי לוותר על חלקו בירושה. הוויתור הוא תמיד כולל — לא ניתן לוותר על חלק ולקחת חלק אחר. חלקו של מי שוויתר יעבור ליורשים האחרים לפי הכללים הרגילים.
            </p>

            <h2>האם ניתן לשנות את סדר הירושה על פי דין?</h2>
            <p>
              כן — רק באמצעות צוואה. צוואה חוקית תגבר תמיד על סדר הירושה על פי דין. לכן, אם ברצונכם שרכושכם יתחלק אחרת — חובה לערוך צוואה בהקדם.
            </p>

            <h2>נכסים שאינם חלק מהעיזבון</h2>
            <p>לא כל הנכסים של המנוח בהכרח יהיו חלק מהעיזבון:</p>
            <ul>
              <li><strong>כספי פנסיה וביטוח מנהלים</strong> — מועברים ישירות למוטבים שנקבעו בפוליסה, לא לפי צוואה או חוק ירושה.</li>
              <li><strong>פוליסות ביטוח חיים עם מוטב מוגדר</strong> — אותו עיקרון.</li>
              <li><strong>נכסים בנאמנות</strong> — אינם חלק מהעיזבון.</li>
            </ul>

            <h2>מה עם נכסים משותפים של בני הזוג?</h2>
            <p>
              בישראל קיים &quot;הסדר השיתוף&quot; — נכסים שנצברו במהלך הנישואין שייכים בשווה לשני בני הזוג. מחצית מהם שייכת לבן הזוג שנותר בחיים ואינה חלק מהעיזבון. רק המחצית של המנוח עוברת בירושה.
            </p>

            <h2>מקרים מיוחדים</h2>

            <h3>ילדים לא ביולוגיים</h3>
            <p>
              ילד מאומץ יורש כאילו היה ילד ביולוגי. ילד חורג אינו יורש אוטומטית — אלא אם כן אומץ או נקבעה לו ירושה בצוואה.
            </p>

            <h3>ירושת מי שנפטר לפני המוריש</h3>
            <p>
              אם יורש נפטר לפני המוריש — חלקו עובר לצאצאיו. אם אין לו צאצאים — חלקו מתווסף ליורשים האחרים.
            </p>

            <h3>מה אם אין יורשים בכלל?</h3>
            <p>
              אם מת אדם ללא צוואה ואין לו יורשים כלל — העיזבון עובר למדינת ישראל. זהו מצב נדיר, אך חשוב לדעת שהמדינה היא &quot;היורשת האחרונה&quot;.
            </p>

            <h2>הצעד הבא: קבלת צו ירושה</h2>
            <p>
              כאשר לא קיימת צוואה, על היורשים להגיש בקשה לצו ירושה לרשם לענייני ירושה. הצו הוא המסמך המשפטי שמאפשר לפעול עם נכסי המנוח — לבנקים, לטאבו, לרשויות. ניתן להגישו גם שנים לאחר הפטירה, אך מומלץ לא לדחות.
            </p>

            <div className="article-cta" data-animate="fade-up">
              <div className="article-cta-text">
                <h3>יש לכם שאלות על ירושה?</h3>
                <p>משרד עו״ד טל נתן אבילביץ מסביר, מייעץ ומלווה בכל הנוגע לירושות וצוואות. פגישת ייעוץ ראשונית ללא עלות.</p>
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
                  <p className="blog-card-excerpt">כיצד מוציאים צו ירושה, אילו מסמכים נדרשים וכמה זמן לוקח התהליך.</p>
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
