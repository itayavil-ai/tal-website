import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="footer-logo" aria-label="דף הבית">
              <span><span className="logo-first">טל</span> נתן אבילביץ</span>
              <span className="logo-sub">עורכת דין</span>
            </Link>
            <p>מומחית בדיני ירושה, צוואות ועיזבונות בישראל.<br />ליווי משפטי אישי, רגיש ומקצועי.</p>
            <div className="footer-social">
              <a href="https://wa.me/972542233127" aria-label="וואטסאפ">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
              <a href="mailto:talnatan10@gmail.com" aria-label="דוא״ל">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 4L12 13 2 4"/></svg>
              </a>
              <a href="tel:+972542233127" aria-label="טלפון">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
              </a>
            </div>
          </div>

          <nav className="footer-col" aria-label="ניווט באתר">
            <h4>ניווט</h4>
            <Link href="/">דף הבית</Link>
            <Link href="/about">אודות</Link>
            <Link href="/blog">מאמרים</Link>
            <Link href="/appointment">קביעת פגישה</Link>
          </nav>

          <div className="footer-col">
            <h4>תחומי טיפול</h4>
            <Link href="/#services">עריכת צוואות</Link>
            <Link href="/#services">צו ירושה</Link>
            <Link href="/#services">ניהול עיזבונות</Link>
            <Link href="/#services">התנגדות לצוואה</Link>
            <Link href="/#services">הסכמי ממון</Link>
          </div>

          <div className="footer-col">
            <h4>צרו קשר</h4>
            <a href="tel:+972542233127"><span className="sr-only">טלפון: </span>054-223-3127</a>
            <a href="mailto:talnatan10@gmail.com"><span className="sr-only">דוא״ל: </span>talnatan10@gmail.com</a>
            <address>התעשיה 15, רעננה</address>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 עו&quot;ד טל נתן אבילביץ. כל הזכויות שמורות.</p>
          <div className="footer-bottom-links">
            <Link href="/accessibility">הצהרת נגישות</Link>
          </div>
          <p className="footer-disclaimer">האתר מהווה מידע כללי בלבד ואינו מהווה ייעוץ משפטי. כל מקרה נבחן לגופו.</p>
        </div>
      </div>
    </footer>
  )
}
