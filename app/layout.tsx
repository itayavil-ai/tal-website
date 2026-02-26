import type { Metadata } from 'next'
import { Heebo, Noto_Serif_Hebrew } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import A11yToolbar from '@/components/A11yToolbar'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import AnimateOnScroll from '@/components/AnimateOnScroll'

const heebo = Heebo({
  subsets: ['hebrew', 'latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
  variable: '--font-heebo',
  display: 'swap',
})

const notoSerifHe = Noto_Serif_Hebrew({
  subsets: ['hebrew'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-noto-serif-he',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.tal-law.co.il'),
  title: {
    default: 'עו״ד טל נתן אבילביץ | עורכת דין ירושות וצוואות, דיני משפחה',
    template: '%s | עו״ד טל נתן אבילביץ',
  },
  description: 'עו״ד טל נתן אבילביץ — עורכת דין מומחית בדיני ירושה, צוואות, עיזבונות ודיני משפחה בישראל.',
  robots: { index: true, follow: true },
  openGraph: {
    locale: 'he_IL',
    type: 'website',
    siteName: 'עו״ד טל נתן אבילביץ',
  },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['Attorney', 'LocalBusiness'],
  name: 'משרד עו״ד טל נתן אבילביץ',
  description: 'עורכת דין מומחית בדיני ירושה, צוואות, עיזבונות ודיני משפחה בישראל',
  url: 'https://www.tal-law.co.il',
  telephone: '+972542233127',
  email: 'talnatan10@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'התעשיה 15',
    addressLocality: 'רעננה',
    addressCountry: 'IL',
  },
  openingHours: ['Su-Th 09:00-18:00', 'Fr 09:00-13:00'],
  priceRange: '$$',
  areaServed: { '@type': 'Country', name: 'Israel' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl" className={`${heebo.variable} ${notoSerifHe.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Nav />
        <main id="main-content">{children}</main>
        <Footer />
        <A11yToolbar />
        <WhatsAppFloat />
        <AnimateOnScroll />
      </body>
    </html>
  )
}
