'use client'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Download, ChevronDown, Sparkles } from 'lucide-react'

const stats = [
  { value: 3, suffix: '+', label: 'Published Projects' },
  { value: 5, suffix: '+', label: 'Years Building' },
  { value: 4, suffix: '', label: 'Industries Served' },
  { value: 1, suffix: '', label: 'MIT MicroMasters' },
]

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true
        let s = 0
        const step = Math.ceil(value / 40)
        const t = setInterval(() => {
          s += step
          if (s >= value) { setCount(value); clearInterval(t) } else setCount(s)
        }, 35)
      }
    }, { threshold: 0.5 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [value])
  return <span ref={ref}>{count}{suffix}</span>
}

export default function Hero() {
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="hero" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', overflow: 'hidden', paddingTop: 100, paddingBottom: 60 }}>
      {/* Radial glow */}
      <div style={{ position: 'absolute', top: '-15%', left: '50%', transform: 'translateX(-50%)', width: '80vw', height: '60vh', background: 'radial-gradient(ellipse at center, rgba(0,181,173,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />
      {/* Soft rose accent — femininity touch */}
      <div style={{ position: 'absolute', top: '20%', right: '-10%', width: '40vw', height: '40vw', background: 'radial-gradient(ellipse at center, rgba(212,175,55,0.04) 0%, transparent 65%)', pointerEvents: 'none' }} />
      <div className="bg-grid" style={{ position: 'absolute', inset: 0, opacity: 1, pointerEvents: 'none' }} />

      <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
        {/* Eyebrow with award badge */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28, flexWrap: 'wrap' }}>
          <span className="lbl">Behavioral Data Strategist · Nairobi, Kenya</span>
          <span style={{ background: 'var(--gold-dim)', color: 'var(--gold)', border: '1px solid rgba(212,175,55,0.3)', fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '4px 12px', borderRadius: 100, display: 'flex', alignItems: 'center', gap: 5 }}>
            <Sparkles size={10} /> Top 30 Women in Digital Health — Africa 2025
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
          style={{ fontSize: 'clamp(2.4rem, 6vw, 5rem)', fontWeight: 800, lineHeight: 1.08, marginBottom: 28, maxWidth: 860 }}>
          I Turn Customer{' '}
          <span className="grad-text">Behavior</span>
          <br />Into Business Strategy.
        </motion.h1>

        {/* Sub */}
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
          style={{ fontSize: 'clamp(1rem, 2vw, 1.18rem)', color: 'var(--text2)', maxWidth: 600, lineHeight: 1.85, marginBottom: 20 }}>
          Behavioral Data Strategist with an MIT MicroMasters and experience across M-Pesa Africa, multiple startups, and independent analytics consulting.
        </motion.p>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }}
          style={{ fontSize: 'clamp(0.95rem, 1.8vw, 1.1rem)', color: 'var(--text2)', maxWidth: 600, lineHeight: 1.85, marginBottom: 40 }}>
          I help businesses understand <em style={{ color: 'var(--text)', fontStyle: 'normal', fontWeight: 500 }}>why customers buy, stay, and leave</em> — and build the data strategy to act on it.
        </motion.p>

        {/* Dual CTA — hire + co-create clearly stated */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
          {/* Dual track message */}
          <div style={{ display: 'flex', gap: 10, marginBottom: 18, flexWrap: 'wrap' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--teal)', letterSpacing: '0.12em', textTransform: 'uppercase', background: 'var(--teal-dim)', border: '1px solid var(--border)', padding: '5px 12px', borderRadius: 100 }}>Open to full-time roles</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--gold)', letterSpacing: '0.12em', textTransform: 'uppercase', background: 'var(--gold-dim)', border: '1px solid rgba(212,175,55,0.25)', padding: '5px 12px', borderRadius: 100 }}>Available for consulting projects</span>
          </div>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 80 }}>
            <button className="btn btn-p" onClick={() => go('services')}>
              Work With Me <ArrowRight size={16} />
            </button>
            <button className="btn btn-o" onClick={() => go('projects')}>
              See My Work
            </button>
            <a href="/cv/everlynn-cv.pdf" download className="btn btn-o" style={{ gap: 8 }}>
              <Download size={15} /> Download CV
            </a>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 1, background: 'var(--border)', border: '1px solid var(--border)', borderRadius: 16, overflow: 'hidden' }}>
          {stats.map((s, i) => (
            <div key={i} style={{ background: 'var(--card)', padding: '24px 20px', textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-sora)', fontWeight: 800, fontSize: 'clamp(1.8rem,4vw,2.8rem)', color: 'var(--teal)', lineHeight: 1, letterSpacing: '-0.03em', marginBottom: 6 }}>
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text2)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="anim-float" style={{ position: 'absolute', bottom: 28, left: '50%', transform: 'translateX(-50%)', color: 'var(--text3)', cursor: 'pointer' }} onClick={() => go('value')}>
        <ChevronDown size={22} />
      </div>
    </section>
  )
}
