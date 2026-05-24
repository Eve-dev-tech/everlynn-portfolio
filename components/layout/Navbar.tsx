'use client'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Menu, X, Sun, Moon } from 'lucide-react'

const links = [
  { href: '#value', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Work' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const handleClick = (href: string) => {
    setOpen(false)
    setTimeout(() => {
      const el = document.querySelector(href)
      el?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? 'rgba(13,13,26,0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      transition: 'all 0.3s ease',
    }}>
      <div className="wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>
        {/* Logo */}
        <a href="#hero" onClick={e => { e.preventDefault(); handleClick('#hero') }}
          style={{ fontFamily: 'var(--font-sora)', fontWeight: 800, fontSize: 20, letterSpacing: '-0.02em', color: 'var(--text)', textDecoration: 'none' }}>
          Everlynn<span style={{ color: 'var(--teal)' }}>.</span>
        </a>

        {/* Desktop Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 36 }} className="hidden md:flex">
          {links.map(l => (
            <button key={l.href} onClick={() => handleClick(l.href)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-dm)', fontSize: 14, fontWeight: 500, color: 'var(--text2)', transition: 'color .2s', padding: 0 }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--teal)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text2)')}>
              {l.label}
            </button>
          ))}
        </div>

        {/* Right Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          {mounted && (
            <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              style={{ background: 'var(--teal-dim)', border: '1px solid var(--border)', borderRadius: 8, padding: '8px 10px', cursor: 'pointer', color: 'var(--teal)', display: 'flex', alignItems: 'center', transition: 'all .2s' }}
              aria-label="Toggle theme">
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          )}
          <button onClick={() => handleClick('#contact')}
            className="btn btn-p hidden md:inline-flex" style={{ padding: '10px 20px', fontSize: 12 }}>
            Work With Me
          </button>
          {/* Mobile hamburger */}
          <button onClick={() => setOpen(!open)} className="md:hidden"
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text)', padding: 4 }}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)', padding: '16px 24px 24px' }}>
          {links.map(l => (
            <button key={l.href} onClick={() => handleClick(l.href)}
              style={{ display: 'block', width: '100%', textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-dm)', fontSize: 16, color: 'var(--text)', padding: '12px 0', borderBottom: '1px solid var(--border)' }}>
              {l.label}
            </button>
          ))}
          <button onClick={() => handleClick('#contact')} className="btn btn-p" style={{ marginTop: 16, width: '100%', justifyContent: 'center' }}>
            Work With Me
          </button>
        </div>
      )}
    </nav>
  )
}
