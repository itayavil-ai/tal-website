'use client'
import { useState, useEffect } from 'react'

interface A11yState {
  fontSize: number
  highContrast: boolean
  highlightLinks: boolean
  grayscale: boolean
  readableFont: boolean
  bigCursor: boolean
}

const defaults: A11yState = {
  fontSize: 100,
  highContrast: false,
  highlightLinks: false,
  grayscale: false,
  readableFont: false,
  bigCursor: false,
}

type OptionKey = 'highContrast' | 'highlightLinks' | 'grayscale' | 'readableFont' | 'bigCursor'

export default function A11yToolbar() {
  const [open, setOpen] = useState(false)
  const [s, setS] = useState<A11yState>(defaults)

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem('a11y') || '{}')
      setS(prev => ({ ...prev, ...saved }))
    } catch { /* ignore */ }
  }, [])

  useEffect(() => {
    const html = document.documentElement
    html.style.fontSize = s.fontSize + '%'
    html.classList.toggle('a11y-high-contrast', s.highContrast)
    html.classList.toggle('a11y-highlight-links', s.highlightLinks)
    html.classList.toggle('a11y-grayscale', s.grayscale)
    html.classList.toggle('a11y-readable-font', s.readableFont)
    html.classList.toggle('a11y-big-cursor', s.bigCursor)
    try { localStorage.setItem('a11y', JSON.stringify(s)) } catch { /* ignore */ }
  }, [s])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const toggle = (key: OptionKey) => setS(prev => ({ ...prev, [key]: !prev[key] }))

  const A11Y_ICON = (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm3.5 7h-7a.5.5 0 0 0 0 1H11v3.5l-2.8 5.2a.5.5 0 1 0 .9.5l2.9-5.3 2.9 5.3a.5.5 0 1 0 .9-.5L13 13.5V10h2.5a.5.5 0 0 0 0-1Z"/>
    </svg>
  )

  const OPTIONS: { key: OptionKey; label: string; id: string; icon: React.ReactNode }[] = [
    {
      key: 'highContrast', label: 'ניגודיות גבוהה', id: 'a11y-lbl-contrast',
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>,
    },
    {
      key: 'highlightLinks', label: 'הדגשת קישורים', id: 'a11y-lbl-links',
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/></svg>,
    },
    {
      key: 'grayscale', label: 'גווני אפור', id: 'a11y-lbl-gray',
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>,
    },
    {
      key: 'readableFont', label: 'גופן קריא', id: 'a11y-lbl-font',
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/></svg>,
    },
    {
      key: 'bigCursor', label: 'סמן מוגדל', id: 'a11y-lbl-cursor',
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M5 3l3.5 3.5M2 5h5M12 22V12m0 0l-4 4m4-4l4 4"/><path d="M19 3l-3.5 3.5M22 5h-5"/></svg>,
    },
  ]

  return (
    <>
      <button
        className="a11y-toggle"
        onClick={() => setOpen(v => !v)}
        aria-expanded={open}
        aria-label="תפריט נגישות"
      >
        {A11Y_ICON}
      </button>

      {open && (
        <>
          <div className="a11y-overlay" onClick={() => setOpen(false)} />
          <div className="a11y-panel" role="dialog" aria-label="הגדרות נגישות" onClick={e => e.stopPropagation()}>
            <div className="a11y-header">
              <span className="a11y-header-title">
                {A11Y_ICON}
                הגדרות נגישות
              </span>
              <button className="a11y-close" onClick={() => setOpen(false)} aria-label="סגור תפריט נגישות">&times;</button>
            </div>

            <div className="a11y-body">
              <div className="a11y-font-section">
                <div className="a11y-font-label">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M4 7V4h16v3M9 20h6M12 4v16"/></svg>
                  גודל טקסט
                </div>
                <div className="a11y-font-controls">
                  <button className="a11y-font-btn" onClick={() => setS(p => ({ ...p, fontSize: Math.max(80, p.fontSize - 10) }))} aria-label="הקטן טקסט">א-</button>
                  <span className="a11y-font-value" aria-live="polite">{s.fontSize}%</span>
                  <button className="a11y-font-btn" onClick={() => setS(p => ({ ...p, fontSize: Math.min(150, p.fontSize + 10) }))} aria-label="הגדל טקסט">א+</button>
                </div>
              </div>

              {OPTIONS.map(opt => (
                <div key={opt.key} className="a11y-option">
                  <span className="a11y-option-label" id={opt.id}>
                    {opt.icon}
                    {opt.label}
                  </span>
                  <label className="a11y-switch">
                    <input
                      type="checkbox"
                      checked={s[opt.key] as boolean}
                      onChange={() => toggle(opt.key)}
                      role="switch"
                      aria-checked={s[opt.key] as boolean}
                      aria-labelledby={opt.id}
                    />
                    <span className="a11y-switch-track" />
                  </label>
                </div>
              ))}
            </div>

            <div className="a11y-footer">
              <button
                className="a11y-reset"
                onClick={() => { setS(defaults); localStorage.removeItem('a11y') }}
              >
                איפוס כל ההגדרות
              </button>
            </div>
          </div>
        </>
      )}
    </>
  )
}
