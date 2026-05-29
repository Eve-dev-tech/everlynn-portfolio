'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Brain, Code2, Layers, Target, ChevronLeft, ChevronRight } from 'lucide-react'
import { skillCards } from '@/lib/data/skills'

const iconMap: Record<string, React.ElementType> = { Brain, Code2, Layers, Target }

export default function Skills() {
  const [active, setActive] = useState(0)
  const total = skillCards.length

  const prev = () => setActive(i => (i - 1 + total) % total)
  const next = () => setActive(i => (i + 1) % total)

  const card = skillCards[active]
  const Icon = iconMap[card.icon]
  const isGold = card.color === '#D4AF37'

  return (
    <section id="skills" className="section" style={{ background: 'var(--bg2)', overflow: 'hidden' }}>
      <div className="wrap">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: 56 }}>
          <span className="lbl">Skills & Expertise</span>
          <h2 style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)', marginBottom: 14 }}>
            Four things I do <span className="grad-text">exceptionally well.</span>
          </h2>
          <p style={{ color: 'var(--text2)', maxWidth: 500, margin: '0 auto', fontSize: 15, lineHeight: 1.8 }}>
            Not a generalist. Not a specialist. A strategist who can go deep and come back up with something the business can actually use.
          </p>
        </motion.div>

        {/* Tab pills */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginBottom: 40, flexWrap: 'wrap' }}>
          {skillCards.map((s, i) => {
            const SI = iconMap[s.icon]
            return (
              <button key={s.id} onClick={() => setActive(i)}
                style={{ display: 'flex', alignItems: 'center', gap: 7, padding: '9px 18px', borderRadius: 100, border: `1.5px solid ${active === i ? s.color : 'var(--border)'}`, background: active === i ? `${s.color}18` : 'var(--card)', color: active === i ? s.color : 'var(--text2)', fontFamily: 'var(--font-sora)', fontWeight: 600, fontSize: 13, cursor: 'pointer', transition: 'all .2s' }}>
                {SI && <SI size={14} />}
                {s.category}
              </button>
            )
          })}
        </div>

        {/* Main card */}
        <div style={{ position: 'relative', maxWidth: 900, margin: '0 auto' }}>
          <AnimatePresence mode="wait">
            <motion.div key={active}
              initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.35 }}
              style={{ background: 'var(--card)', border: `1px solid ${isGold ? 'rgba(212,175,55,0.22)' : 'var(--border)'}`, borderRadius: 24, padding: 'clamp(28px, 5vw, 52px)', position: 'relative', overflow: 'hidden' }}>

              {/* Background glow */}
              <div style={{ position: 'absolute', top: -60, right: -60, width: 280, height: 280, borderRadius: '50%', background: `radial-gradient(circle, ${card.color}10 0%, transparent 70%)`, pointerEvents: 'none' }} />

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 40, alignItems: 'start', position: 'relative', zIndex: 1 }}>
                {/* Left */}
                <div>
                  <div style={{ width: 60, height: 60, borderRadius: 18, background: isGold ? 'var(--gold-dim)' : 'var(--teal-dim)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 22, border: `1px solid ${isGold ? 'rgba(212,175,55,0.2)' : 'var(--border)'}` }}>
                    {Icon && <Icon size={28} color={card.color} />}
                  </div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: card.color, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 8 }}>{card.category}</div>
                  <h3 style={{ fontFamily: 'var(--font-sora)', fontWeight: 800, fontSize: 'clamp(1.4rem,3vw,2rem)', marginBottom: 16, lineHeight: 1.2 }}>{card.tagline}</h3>
                  <p style={{ color: 'var(--text2)', fontSize: 15, lineHeight: 1.8 }}>{card.description}</p>
                </div>

                {/* Right — tool pills */}
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text2)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 18 }}>Core tools & approaches</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                    {card.tools.map((t, ti) => (
                      <motion.span key={t} initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.25, delay: ti * 0.06 }}
                        style={{ display: 'inline-flex', alignItems: 'center', fontFamily: 'var(--font-dm)', fontSize: 13, fontWeight: 500, color: 'var(--text)', background: 'var(--bg)', border: `1px solid ${isGold ? 'rgba(212,175,55,0.18)' : 'var(--border)'}`, padding: '8px 16px', borderRadius: 100 }}>
                        <span style={{ width: 6, height: 6, borderRadius: '50%', background: card.color, marginRight: 8, display: 'inline-block', flexShrink: 0 }} />
                        {t}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Progress dots */}
              <div style={{ display: 'flex', justifyContent: 'center', gap: 7, marginTop: 36 }}>
                {skillCards.map((_, i) => (
                  <button key={i} onClick={() => setActive(i)}
                    style={{ width: active === i ? 24 : 7, height: 7, borderRadius: 100, background: active === i ? card.color : 'var(--border)', border: 'none', cursor: 'pointer', transition: 'all .3s', padding: 0 }} />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Arrow nav */}
          <button onClick={prev} style={{ position: 'absolute', left: -22, top: '45%', transform: 'translateY(-50%)', width: 42, height: 42, borderRadius: '50%', background: 'var(--card)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'var(--text2)', boxShadow: 'var(--shadow)', transition: 'all .2s', zIndex: 2 }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--teal)'; e.currentTarget.style.color = 'var(--teal)' }} onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text2)' }}>
            <ChevronLeft size={18} />
          </button>
          <button onClick={next} style={{ position: 'absolute', right: -22, top: '45%', transform: 'translateY(-50%)', width: 42, height: 42, borderRadius: '50%', background: 'var(--card)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'var(--text2)', boxShadow: 'var(--shadow)', transition: 'all .2s', zIndex: 2 }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--teal)'; e.currentTarget.style.color = 'var(--teal)' }} onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text2)' }}>
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Bottom note */}
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}
          style={{ textAlign: 'center', color: 'var(--text3)', fontSize: 13, marginTop: 36, fontFamily: 'var(--font-mono)', letterSpacing: '0.06em' }}>
          Full technical stack: Python · SQL · Scikit-learn · XGBoost · SHAP · Power BI · Tableau · Git · REST APIs · Typebot
        </motion.p>
      </div>
    </section>
  )
}
