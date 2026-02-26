import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'מאמרים בנושא ירושה וצוואות',
  description: 'מאמרים וכתבות מקצועיות בנושאי ירושה, צוואות, עיזבונות ודיני משפחה בישראל מאת עו״ד טל נתן אבילביץ. מידע משפטי נגיש ומעשי.',
  alternates: { canonical: 'https://www.tal-law.co.il/blog' },
  openGraph: {
    title: 'מאמרים בנושא ירושה וצוואות | עו״ד טל נתן אבילביץ',
    description: 'מידע משפטי נגיש בנושאי ירושה, צוואות ועיזבונות בישראל.',
    images: [{ url: '/tal-photo.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'מאמרים בנושא ירושה וצוואות | עו״ד טל נתן אבילביץ',
    description: 'מידע משפטי נגיש בנושאי ירושה, צוואות ועיזבונות בישראל.',
    images: ['/tal-photo.png'],
  },
}

const cards = [
  {
    slug: 'inheritance-order',
    img: '/images/blog-inheritance.jpg',
    alt: 'מאזני צדק משפטיים',
    category: 'צו ירושה',
    date: '8 בפברואר, 2026',
    title: 'צו ירושה בישראל: המדריך המלא לשנת 2026',
    excerpt: 'כל מה שצריך לדעת על הגשת בקשה לצו ירושה — מי זכאי, אילו מסמכים נדרשים, כמה זה עולה וכמה זמן לוקח.',
  },
  {
    slug: 'contesting-a-will',
    img: '/images/blog-contesting.jpg',
    alt: 'פטיש שופט בבית משפט',
    category: 'התנגדות',
    date: '1 בפברואר, 2026',
    title: 'התנגדות לצוואה: מתי יש עילה ואיך מגישים?',
    excerpt: 'לא כל צוואה היא תקפה. סקירת העילות להתנגדות לצוואה, ההליך המשפטי ומה חשוב לדעת לפני שמגישים.',
  },
  {
    slug: 'estate-management',
    img: '/images/blog-estate.jpg',
    alt: 'ניהול עיזבון — מסמכים ומפתחות',
    category: 'עיזבון',
    date: '25 בינואר, 2026',
    title: 'ניהול עיזבון: הצעדים שצריך לעשות אחרי פטירה',
    excerpt: 'מדריך מעשי למשפחות שנמצאות בתהליך ניהול עיזבון — מאיתור נכסים וחובות ועד חלוקת הירושה בין היורשים.',
  },
  {
    slug: 'young-will',
    img: '/images/blog-young-will.jpg',
    alt: 'זוג צעיר חותם על מסמכים',
    category: 'צוואות',
    date: '18 בינואר, 2026',
    title: 'למה חשוב לערוך צוואה — גם אם אתם צעירים',
    excerpt: 'רבים דוחים את עריכת הצוואה. מדוע זהו צעד חיוני בכל גיל, ואיך צוואה פשוטה יכולה למנוע סכסוכים משפחתיים עתידיים.',
  },
  {
    slug: 'no-will',
    img: '/images/blog-no-will.jpg',
    alt: 'ספרי חוק וקלסר ירושה',
    category: 'ירושה',
    date: '10 בינואר, 2026',
    title: 'מה קורה כשאין צוואה? ירושה לפי חוק בישראל',
    excerpt: 'סדר הירושה הקבוע בחוק, חלקו של בן הזוג, זכויות הילדים ומקרים מיוחדים — הסבר מלא על ירושה ללא צוואה.',
  },
  {
    slug: 'prenup-inheritance',
    img: '/images/blog-prenup.jpg',
    alt: 'חתימה על הסכם ממון',
    category: 'הסכמי ממון',
    date: '3 בינואר, 2026',
    title: 'הסכם ממון וירושה: איך מגנים על הנכסים לדורות הבאים',
    excerpt: 'הקשר בין הסכמי ממון לדיני ירושה, ואיך תכנון נכון יכול להגן על הרכוש המשפחתי ולמנוע סכסוכים בעתיד.',
  },
  {
    slug: 'lasting-poa',
    img: '/images/blog-estate.jpg',
    alt: 'מסמכים משפטיים וייפוי כח',
    category: 'ייפוי כח מתמשך',
    date: '26 בפברואר, 2026',
    title: 'ייפוי כח מתמשך: מה זה, מי צריך ואיך עורכים',
    excerpt: 'הכלי שמאפשר לכם לקבוע מי יקבל החלטות עבורכם אם לא תוכלו — בענייני רפואה, מגורים וכסף. למה הוא עדיף על אפוטרופסות ולמה לא לדחות.',
  },
]

export default function BlogPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="section-eyebrow" data-animate="fade-up" data-delay="0">ידע משפטי נגיש</p>
          <h1 className="section-title" data-animate="fade-up" data-delay="1">מאמרים בנושא<br />ירושה וצוואות</h1>
        </div>
      </section>

      <section className="blog-grid-section">
        <div className="container">
          {/* Featured */}
          <Link href="/blog/types-of-wills" className="blog-featured" data-animate="fade-up">
            <div className="blog-featured-image" aria-hidden="true">
              <Image src="/images/blog-wills.jpg" alt="ספרי חוק וצוואות" width={600} height={400} loading="lazy" />
            </div>
            <div className="blog-featured-content">
              <span className="blog-featured-category">צוואות</span>
              <h2 className="blog-featured-title">סוגי צוואות בישראל: איך בוחרים את הצוואה המתאימה?</h2>
              <p className="blog-featured-excerpt">
                חוק הירושה מכיר בארבעה סוגי צוואות — בכתב יד, בעדים, בפני רשות ובעל פה. לכל סוג יתרונות וחסרונות. מדריך מקיף שיעזור לכם לבחור נכון.
              </p>
              <span className="blog-featured-date">15 בפברואר, 2026</span>
            </div>
          </Link>

          <div className="blog-grid">
            {cards.map((c, i) => (
              <article key={c.slug} className="blog-card" data-animate="fade-up" data-delay={String(i % 3)}>
                <div className="blog-card-image" aria-hidden="true">
                  <Image src={c.img} alt={c.alt} width={400} height={200} loading="lazy" />
                  <span className="blog-card-category">{c.category}</span>
                </div>
                <div className="blog-card-content">
                  <div className="blog-card-date">{c.date}</div>
                  <h3 className="blog-card-title">{c.title}</h3>
                  <p className="blog-card-excerpt">{c.excerpt}</p>
                  <Link href={`/blog/${c.slug}`} className="blog-card-link">קראו עוד</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
