import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { content } from '@/content'

const { blog } = content

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

// Images stay here — not part of editable content
const cardImages: Record<string, { img: string; alt: string }> = {
  'inheritance-order':  { img: '/images/blog-inheritance.jpg', alt: 'מאזני צדק משפטיים' },
  'contesting-a-will':  { img: '/images/blog-contesting.jpg',  alt: 'פטיש שופט בבית משפט' },
  'estate-management':  { img: '/images/blog-estate.jpg',      alt: 'ניהול עיזבון — מסמכים ומפתחות' },
  'young-will':         { img: '/images/blog-young-will.jpg',  alt: 'זוג צעיר חותם על מסמכים' },
  'no-will':            { img: '/images/blog-no-will.jpg',     alt: 'ספרי חוק וקלסר ירושה' },
  'prenup-inheritance': { img: '/images/blog-prenup.jpg',      alt: 'חתימה על הסכם ממון' },
  'lasting-poa':        { img: '/images/blog-estate.jpg',      alt: 'מסמכים משפטיים וייפוי כח' },
}

export default function BlogPage() {
  const { featured } = blog
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="section-eyebrow" data-animate="fade-up" data-delay="0">{blog.hero.eyebrow}</p>
          <h1 className="section-title" data-animate="fade-up" data-delay="1">{blog.hero.titleLine1}<br />{blog.hero.titleLine2}</h1>
        </div>
      </section>

      <section className="blog-grid-section">
        <div className="container">
          {/* Featured */}
          <Link href={`/blog/${featured.slug}`} className="blog-featured" data-animate="fade-up">
            <div className="blog-featured-image" aria-hidden="true">
              <Image src="/images/blog-wills.jpg" alt="ספרי חוק וצוואות" width={600} height={400} loading="lazy" />
            </div>
            <div className="blog-featured-content">
              <span className="blog-featured-category">{featured.category}</span>
              <h2 className="blog-featured-title">{featured.title}</h2>
              <p className="blog-featured-excerpt">{featured.excerpt}</p>
              <span className="blog-featured-date">{featured.date}</span>
            </div>
          </Link>

          <div className="blog-grid">
            {blog.cards.map((c, i) => {
              const { img, alt } = cardImages[c.slug] ?? { img: '/images/blog-estate.jpg', alt: '' }
              return (
                <article key={c.slug} className="blog-card" data-animate="fade-up" data-delay={String(i % 3)}>
                  <div className="blog-card-image" aria-hidden="true">
                    <Image src={img} alt={alt} width={400} height={200} loading="lazy" />
                    <span className="blog-card-category">{c.category}</span>
                  </div>
                  <div className="blog-card-content">
                    <div className="blog-card-date">{c.date}</div>
                    <h3 className="blog-card-title">{c.title}</h3>
                    <p className="blog-card-excerpt">{c.excerpt}</p>
                    <Link href={`/blog/${c.slug}`} className="blog-card-link">קראו עוד</Link>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
