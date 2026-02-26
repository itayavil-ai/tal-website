import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'הסכמי ממון | עו״ד טל נתן אבילביץ',
  description: 'ניסוח הסכמי ממון לפני ובמהלך נישואין — הגנה על נכסים מלפני הנישואין, ילדים מנישואים קודמים ועסקים משפחתיים.',
  alternates: { canonical: 'https://www.tal-law.co.il/services/prenup' },
}

export default function PrenupServicePage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="section-eyebrow" data-animate="fade-up">תחומי שירות</p>
          <h1 className="section-title" data-animate="fade-up" data-delay="1">הסכמי ממון</h1>
        </div>
      </section>

      <section className="article-section">
        <div className="container">
          <nav className="article-breadcrumbs" aria-label="מיקום באתר">
            <Link href="/">ראשי</Link>
            <span aria-hidden="true">›</span>
            <span aria-current="page">הסכמי ממון</span>
          </nav>

          <div className="article-body">
            <p><strong>
              הסכם ממון אינו רק הגנה מגירושין — הוא כלי מרכזי בתכנון ירושה. הסכם ממון נכון יכול להבטיח שנכסים שצברתם לפני הנישואין, ירשתם, או רציתם להעביר לילדיכם — יגיעו ליעדם, ולא יהפכו לנושא סכסוך.
            </strong></p>

            <h2>מה הסכם ממון יכול לעשות?</h2>
            <ul>
              <li><strong>הגנה על נכסים מלפני הנישואין</strong> — דירה שירשתם, עסק שהקמתם, כסף שקיבלתם במתנה — יישארו שלכם.</li>
              <li><strong>הגנה על ילדים מנישואים קודמים</strong> — קביעה ברורה אילו נכסים מיועדים לילדים מנישואים קודמים ולא יועברו לבן/בת הזוג החדשים.</li>
              <li><strong>הגנה על עסק משפחתי</strong> — הבטחה שעסק שבניתם יישאר בשליטתכם ובשליטת יורשיכם.</li>
              <li><strong>הסדרת מה ייחשב "משותף"</strong> — הבהרת גבולות ברורים כדי למנוע מחלוקות עתידיות.</li>
              <li><strong>קביעת הוראות לפטירה</strong> — מה יקרה לרכושכם בפטירת אחד מבני הזוג, מעבר למה שקובע חוק הירושה.</li>
            </ul>

            <h2>מתי כדאי לשקול הסכם ממון?</h2>
            <ul>
              <li>לפני נישואין שניים, כשיש ילדים מנישואים ראשונים.</li>
              <li>כשאחד מבני הזוג מביא נכסים משמעותיים לנישואין.</li>
              <li>כשיש עסק משפחתי שחשוב לשמור.</li>
              <li>כשיש פער גדול בנכסים או בהכנסות בין בני הזוג.</li>
              <li>כשרוצים להגן על נכסים מפני חובות עתידיים של בן/בת הזוג.</li>
            </ul>

            <h2>הסכם ממון + צוואה = תכנון עיזבון מלא</h2>
            <p>
              הסכם ממון וצוואה הם שני מסמכים משלימים. הסכם הממון קובע מה שייך לכם (ומה לא). הצוואה קובעת למי יועברו הנכסים שלכם לאחר פטירתכם. שילוב של שניהם יוצר הגנה מקיפה על הרכוש המשפחתי לדורות הבאים.
            </p>

            <h2>מה חשוב לדעת לפני החתימה?</h2>
            <p>
              הסכם ממון חייב לעמוד בתנאים מחמירים כדי להיות תקף: גילוי נאות הדדי של כל הנכסים, חתימה מרצון חופשי, ואישור של בית משפט לענייני משפחה או נוטריון. טל נתן אבילביץ מוודאת שהתהליך מבוצע נכון — כדי שההסכם לא יבוטל כשהוא יידרש.
            </p>

            <h2>כיצד אנחנו עובדים?</h2>
            <p>
              טל מייצגת כל אחד מבני הזוג בנפרד (אך לא בו-זמנית), מסבירה את המשמעויות לכל צד, ומנסחת הסכם שמגן על האינטרסים שלכם — תוך שמירה על הגינות ועל תקפות משפטית.
            </p>

            <div className="article-cta" data-animate="fade-up">
              <div className="article-cta-text">
                <h3>רוצים לערוך הסכם ממון?</h3>
                <p>פגישת ייעוץ ראשונית ללא עלות. נסביר, ניעץ ונדריך.</p>
              </div>
              <Link href="/appointment" className="btn btn-primary">לקביעת פגישת ייעוץ</Link>
            </div>
          </div>

          <section className="related-articles" aria-labelledby="related-title">
            <h2 id="related-title">שירותים נוספים</h2>
            <div className="related-grid">
              <Link href="/services/wills" className="blog-card" style={{ textDecoration: 'none' }}>
                <div className="blog-card-content">
                  <h3 className="blog-card-title">עריכת צוואות</h3>
                  <p className="blog-card-excerpt">ניסוח מקצועי של צוואה שתשקף את רצונכם ותעמוד בחוק.</p>
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
