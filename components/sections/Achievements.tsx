'use client'
import { motion } from 'framer-motion'
import { Star, Code2, Map } from 'lucide-react'
import { achievements } from '@/lib/data/achievements'

const iconMap: Record<string, React.ElementType> = { Star, Code2, Map }

export default function Achievements() {
  return (
    <section id="achievements" className="section" style={{ background: 'var(--bg2)' }}>
      <div className="wrap">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: 60 }}>
          <span className="lbl">Accolades & Milestones</span>
          <h2 style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)', marginBottom: 16 }}>
            Recognition earned, <span className="grad-text">not given.</span>
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
          {achievements.map((a, i) => {
            const Icon = iconMap[a.icon]
            return (
              <motion.div key={a.id} className="card" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{ padding: '32px 28px', borderColor: a.type === 'award' ? 'var(--gold)' : 'var(--border)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 18 }}>
                  <div style={{ width: 48, height: 48, borderRadius: 14, background: a.type === 'award' ? 'var(--gold-dim)' : 'var(--teal-dim)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: `1px solid ${a.type === 'award' ? 'rgba(212,175,55,0.2)' : 'var(--border)'}` }}>
                    {Icon && <Icon size={22} color={a.type === 'award' ? 'var(--gold)' : 'var(--teal)'} />}
                  </div>
                  <span className="gold-badge">{a.year}</span>
                </div>
                <h3 style={{ fontSize: 15, fontWeight: 700, fontFamily: 'var(--font-sora)', marginBottom: 8, lineHeight: 1.4 }}>{a.title}</h3>
                <p style={{ color: 'var(--text2)', fontSize: 13, lineHeight: 1.7, marginBottom: 14 }}>{a.description}</p>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text2)', letterSpacing: '0.08em' }}>{a.issuer}</span>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
