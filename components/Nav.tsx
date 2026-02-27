'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

export default function Nav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const isHome = pathname === '/'

  useEffect(() => {
    if (!isHome) { setScrolled(true); return }
    const onScroll = () => setScrolled(window.pageYOffset > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [isHome])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const links = [
    { href: '/', label: 'ראשי' },
    { href: '/about', label: 'אודות' },
    { href: '/blog', label: 'מאמרים' },
  ]

  return (
    <nav id="nav" className={`nav${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-inner">
        <Link href="/" className="nav-logo" aria-label="דף הבית">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true" className="logo-icon">
            <rect width="36" height="36" rx="9" fill="#2c5282"/>
            <line x1="18" y1="7" x2="18" y2="30" stroke="white" strokeWidth="1.6" strokeLinecap="round"/>
            <line x1="7" y1="13" x2="29" y2="13" stroke="white" strokeWidth="1.6" strokeLinecap="round"/>
            <circle cx="18" cy="13" r="1.8" fill="white"/>
            <line x1="7" y1="13" x2="7" y2="18" stroke="white" strokeWidth="1.4" strokeLinecap="round"/>
            <line x1="29" y1="13" x2="29" y2="18" stroke="white" strokeWidth="1.4" strokeLinecap="round"/>
            <path d="M3 18 Q7 24 11 18" stroke="white" strokeWidth="1.6" strokeLinecap="round" fill="rgba(255,255,255,0.1)"/>
            <path d="M25 18 Q29 24 33 18" stroke="white" strokeWidth="1.6" strokeLinecap="round" fill="rgba(255,255,255,0.1)"/>
            <line x1="14" y1="30" x2="22" y2="30" stroke="white" strokeWidth="1.6" strokeLinecap="round"/>
          </svg>
          <div className="logo-text-block">
            <span className="logo-name">טל נתן אבילביץ</span>
            <span className="logo-sub">עורכת דין</span>
          </div>
        </Link>

        <div className={`nav-links${open ? ' open' : ''}`} id="navLinks" aria-label="ניווט ראשי">
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className={`nav-link${pathname === l.href ? ' active' : ''}`}
              aria-current={pathname === l.href ? 'page' : undefined}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/appointment"
            className={`nav-link nav-link-cta${pathname === '/appointment' ? ' active' : ''}`}
            aria-current={pathname === '/appointment' ? 'page' : undefined}
            onClick={() => setOpen(false)}
          >
            קביעת פגישה
          </Link>
        </div>

        <div
          className={`nav-overlay${open ? ' open' : ''}`}
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />

        <button
          className={`nav-toggle${open ? ' active' : ''}`}
          onClick={() => setOpen(v => !v)}
          aria-expanded={open}
          aria-label={open ? 'סגור תפריט ניווט' : 'פתח תפריט ניווט'}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </div>
    </nav>
  )
}
