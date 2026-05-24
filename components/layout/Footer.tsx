'use client'
import { Linkedin, Github, BookOpen, Mail, ArrowUp } from 'lucide-react'

const navLinks = [
  { href: '#value', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Work' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

const socials = [
  { href: 'https://www.linkedin.com/in/everlynn-muthoni/', icon: Linkedin, label: 'LinkedIn' },
  { href: 'https://github.com/Eve-dev-tech', icon: Github, label: 'GitHub' },
  { href: 'https://medium.com/', icon: BookOpen, label: 'Medium' },
  { href: 'mailto:everlynn@example.com', icon: Mail, label: 'Email' },
]

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
  const handleNav = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer style={{ background: 'var(--bg2)', borderTop: '1px solid var(--border)', paddingTop: 64, paddingBottom: 32 }}>
      <div className="wrap">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 48, marginBottom: 56 }}>
          {/* Brand column */}
          <div style={{ gridColumn: 'span 1' }}>
            <div style={{ fontFamily: 'var(--font-sora)', fontWeight: 800, fontSize: 22, letterSpacing: '-0.02em', marginBottom: 14, color: 'var(--text)' }}>
              Everlynn<span style={{ color: 'var(--teal)' }}>.</span>
            </div>
            <p style={{ color: 'var(--text2)', fontSize: 14, lineHeight: 1.8, maxWidth: 280, marginBottom: 24 }}>
              Behavioral Data Strategist helping consumer businesses understand, predict, and improve customer behavior.
            </p>
            <div style={{ display: 'flex', gap: 10 }}>
              {socials.map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}
                  style={{ width: 38, height: 38, borderRadius: 10, background: 'var(--card)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text2)', transition: 'all .2s' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--teal)'; e.currentTarget.style.color = 'var(--teal)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text2)' }}>
                  <s.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick nav */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-sora)', fontSize: 13, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text2)', marginBottom: 18 }}>Navigation</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {navLinks.map(l => (
                <button key={l.href} onClick={() => handleNav(l.href)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text2)', fontSize: 14, textAlign: 'left', padding: 0, transition: 'color .2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--teal)')} onMouseLeave={e => (e.currentTarget.style.color = 'var(--text2)')}>
                  {l.label}
                </button>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-sora)', fontSize: 13, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text2)', marginBottom: 18 }}>Services</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {['Customer Insights Audit','Churn Analysis','Customer Segmentation','Analytics Retainer','Dashboard Build'].map(s => (
                <button key={s} onClick={() => handleNav('#services')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text2)', fontSize: 14, textAlign: 'left', padding: 0, transition: 'color .2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--teal)')} onMouseLeave={e => (e.currentTarget.style.color = 'var(--text2)')}>
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* CTA card with photo placeholder */}
          <div className="card" style={{ padding: '28px 24px' }}>
            <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'var(--bg)', border: '2px solid var(--teal)', marginBottom: 14, overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src="/images/profile/profile-cta.jpg" alt="Everlynn" style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={e => { (e.target as HTMLImageElement).style.display='none' }} />
            </div>
            <h4 style={{ fontFamily: 'var(--font-sora)', fontWeight: 700, fontSize: 15, marginBottom: 8 }}>Ready to work together?</h4>
            <p style={{ color: 'var(--text2)', fontSize: 13, lineHeight: 1.7, marginBottom: 20 }}>Let's turn your customer data into competitive advantage.</p>
            <button onClick={() => handleNav('#contact')} className="btn btn-p" style={{ width: '100%', justifyContent: 'center', padding: '12px 16px', fontSize: 12 }}>
              Start a Conversation
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid var(--border)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ color: 'var(--text2)', fontSize: 13 }}>
            © {new Date().getFullYear()} Everlynn Muthoni. All rights reserved.
          </p>
          <p style={{ color: 'var(--text2)', fontSize: 13, fontStyle: 'italic' }}>GOD BLESS AND GUIDE ME.</p>
          <button onClick={scrollToTop}
            style={{ width: 38, height: 38, borderRadius: 10, background: 'var(--card)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'var(--teal)', transition: 'all .2s' }}
            aria-label="Back to top">
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  )
}
