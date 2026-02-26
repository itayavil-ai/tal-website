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
          <span className="logo-name">
            <span className="logo-first">טל</span>
            <span className="logo-rest"> נתן אבילביץ</span>
          </span>
          <span className="logo-rule" />
          <span className="logo-sub">עורכת דין</span>
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
