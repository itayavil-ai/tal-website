import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'סוגי צוואות בישראל: איך בוחרים את הצוואה המתאימה?',
  description: 'מדריך מקיף על ארבעת סוגי הצוואות המוכרים בחוק הירושה הישראלי: צוואה בכתב יד, בעדים, בפני רשות ובעל פה. יתרונות, חסרונות ודגשים משפטיים.',
  alternates: { canonical: 'https://www.tal-law.co.il/blog/types-of-wills' },
  openGraph: { title: 'סוגי צוואות בישראל', description: 'מדריך מקיף על ארבעת סוגי הצוואות בחוק הישראלי', type: 'article', images: [{ url: '/images/blog-wills.jpg' }] },
  twitter: { card: 'summary_large_image', title: 'סוגי צוואות בישראל', images: ['/images/blog-wills.jpg'] },
}

const articleSchema = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: 'סוגי צוואות בישראל – המדריך המלא',
  author: { '@type': 'Person', name: 'טל נתן אבילביץ', jobTitle: 'עורכת דין' },
  datePublished: '2026-01-15', dateModified: '2026-02-18',
  publisher: { '@type': 'Organization', name: 'משרד עו״ד טל נתן אבילביץ' },
}

export default function TypesOfWillsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <section className="page-hero">
        <div className="container">
          <p className="section-eyebrow" data-animate="fade-up">מאמרים</p>
          <h1 className="section-title" data-animate="fade-up" data-delay="1">סוגי צוואות בישראל – המדריך המלא</h1>
        </div>
      </section>

      <section className="article-section">
        <div className="container">
          <nav className="article-breadcrumbs" aria-label="מיקום באתר">
            <Link href="/">ראשי</Link>
            <span aria-hidden="true">›</span>
            <Link href="/blog">מאמרים</Link>
            <span aria-hidden="true">›</span>
            <span aria-current="page">סוגי צוואות בישראל</span>
          </nav>

          <div className="article-hero-image">
            <Image src="/images/blog-wills.jpg" alt="מסמכים משפטיים על שולחן עבודה" width={900} height={400} loading="lazy" />
          </div>

          <div className="article-meta">
            <span className="article-meta-author">מאת עו״ד טל נתן אבילביץ</span>
            <time className="article-meta-date" dateTime="2026-01-15">15 בינואר, 2026</time>
            <span className="article-meta-category">צוואות</span>
            <span>זמן קריאה: 8 דקות</span>
          </div>

          <div className="article-body">
            <p><strong>
              חוק הירושה, התשכ״ה-1965, מכיר בארבעה סוגי צוואות שונים. לכל סוג יתרונות וחסרונות, ובחירת הסוג המתאים תלויה בנסיבות האישיות של המצווה.
            </strong></p>

            <h2>למה חשוב לערוך צוואה?</h2>
            <p>
              רבים מאיתנו נוטים לדחות את העיסוק בנושא הצוואה, אך עריכת צוואה היא אחת ההחלטות החשובות ביותר שאדם יכול לקבל. ללא צוואה, הרכוש יחולק לפי סדר הירושה הקבוע בחוק – שלא בהכרח משקף את רצונותיכם.
            </p>

            <h2>1. צוואה בכתב יד (סעיף 19)</h2>
            <p>צוואה בכתב יד היא הצורה הפשוטה ביותר. היא נכתבת כולה בכתב ידו של המצווה.</p>
            <h3>דרישות מהותיות</h3>
            <ul>
              <li><strong>כתיבה בכתב יד</strong> – הצוואה כולה חייבת להיכתב בכתב יד המצווה.</li>
              <li><strong>תאריך</strong> – חובה לציין את התאריך בכתב ידו של המצווה.</li>
              <li><strong>חתימה</strong> – המצווה חייב לחתום בתחתית הצוואה.</li>
            </ul>
            <h3>יתרונות וחסרונות</h3>
            <ul>
              <li>פשוטה לעריכה — אין צורך בעדים.</li>
              <li>שמירה על פרטיות מלאה.</li>
              <li>קל יותר לטעון שהצוואה זויפה — נדרש עורך דין לניסוח נכון.</li>
            </ul>

            <h2>2. צוואה בעדים (סעיף 20)</h2>
            <p>צוואה בעדים היא הסוג הנפוץ ביותר בישראל. היא יכולה להיכתב בכל צורה — בכתב יד, מודפסת, או מוקלדת — אך חייבת להיחתם בפני שני עדים.</p>
            <h3>דרישות מהותיות</h3>
            <ul>
              <li><strong>מסמך כתוב</strong> – הצוואה חייבת להיות כתובה.</li>
              <li><strong>חתימה בפני עדים</strong> – המצווה חותם בפני שני עדים לאחר שהצהיר שזו צוואתו.</li>
              <li><strong>חתימת העדים</strong> – שני עדים חותמים על הצוואה באותו מעמד.</li>
            </ul>
            <h3>מי כשיר להיות עד?</h3>
            <p>
              כל אדם מעל גיל 18 שאינו פסול דין, <strong>למעט</strong> מי שעתיד לרשת לפי הצוואה. חשוב מאוד להקפיד — עד שהוא נהנה מהצוואה עלול לפסול אותה כולה.
            </p>

            <h2>3. צוואה בפני רשות (סעיף 22)</h2>
            <p>
              צוואה בפני רשות נעשית בפני שופט, רשם לענייני ירושה, או חבר בית דין דתי. היא בעלת תוקף משפטי חזק מאוד וקשה לערער עליה.
            </p>
            <ul>
              <li>מתאימה לאנשים שאינם יכולים לכתוב.</li>
              <li>הצוואה נשמרת ברשות — אין חשש שתיעלם.</li>
              <li>דורשת תיאום ביורוקרטי מול הרשות.</li>
            </ul>

            <h2>4. צוואה בעל פה – &quot;צוואת שכיב מרע&quot; (סעיף 23)</h2>
            <p>
              צוואה בעל פה שמורה למצבים חריגים בלבד — כאשר אדם רואה את עצמו מול פני המוות. היא נאמרת בפני שני עדים ומתועדת מיד לאחר מכן.
            </p>
            <div className="article-info-box">
              <p><strong>חשוב:</strong> צוואה בעל פה בטלה כעבור חודש ימים מהיום שחלפו הנסיבות שהצדיקו אותה, והמצווה עודנו בחיים.</p>
            </div>

            <h2>איזו צוואה מתאימה לכם?</h2>
            <p>
              הבחירה בין סוגי הצוואות תלויה בנסיבות: גיל, מצב בריאותי, מורכבות הרכוש, ורצון לפרטיות. ייעוץ עם עורך דין מתמחה יסייע לבחור את הצוואה המתאימה ביותר ולנסח אותה בצורה שתמנע סכסוכים עתידיים.
            </p>

            <div className="article-cta" data-animate="fade-up">
              <div className="article-cta-text">
                <h3>רוצים לערוך צוואה?</h3>
                <p>פנו אלינו לפגישת ייעוץ ראשונית ללא עלות — נעזור לכם לבחור ולנסח את הצוואה הנכונה.</p>
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
                  <p className="blog-card-excerpt">כל מה שצריך לדעת על הגשת בקשה לצו ירושה — מי זכאי, אילו מסמכים נדרשים, כמה זמן לוקח.</p>
                  <span className="blog-card-link">קראו עוד</span>
                </div>
              </Link>
              <Link href="/blog/young-will" className="blog-card" style={{ textDecoration: 'none' }}>
                <div className="blog-card-content">
                  <h3 className="blog-card-title">למה חשוב לערוך צוואה — גם אם אתם צעירים</h3>
                  <p className="blog-card-excerpt">רבים דוחים את עריכת הצוואה. מדוע זהו צעד חיוני בכל גיל.</p>
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
