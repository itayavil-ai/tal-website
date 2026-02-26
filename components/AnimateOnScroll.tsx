'use client'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function AnimateOnScroll() {
  const pathname = usePathname()

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // Reset all elements on the new page so they can animate in
    document.querySelectorAll('[data-animate]').forEach(el => el.classList.remove('visible'))

    if (prefersReduced) {
      document.querySelectorAll('[data-animate]').forEach(el => el.classList.add('visible'))
      return
    }

    // Hero elements above fold — visible immediately
    document.querySelectorAll('.hero [data-animate], .page-hero [data-animate]').forEach(el => el.classList.add('visible'))

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    )

    document.querySelectorAll('[data-animate]').forEach(el => {
      if (!el.classList.contains('visible')) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [pathname])

  return null
}
