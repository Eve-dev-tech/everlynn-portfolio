'use client'
import { motion } from 'framer-motion'
import { Star, Award, GraduationCap, Cloud, Globe, Shield } from 'lucide-react'
import { achievements } from '@/lib/data/achievements'

const iconMap: Record<string, React.ElementType> = { Star, Award, GraduationCap, Cloud, Globe, Shield }

export default function Achievements() {
  return (
    <section id="achievements" className="section" style={{ background: 'var(--bg2)' }}>
      <div className="wrap">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: 56 }}>
          <span className="lbl">Credentials & Recognition</span>
          <h2 style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)', marginBottom: 14 }}>
            Earned, not <span className="grad-text">assumed.</span>
          </h2>
          <p style={{ color: 'var(--text2)', maxWidth: 460, margin: '0 auto', fontSize: 15 }}>
            From MIT to Digital Health Africa — proof of consistent investment in depth and credibility.
          </p>
        </motion.div>

        {/* Feature the top award prominently */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          style={{ marginBottom: 28, background: 'var(--card)', border: '1px solid rgba(212,175,55,0.3)', borderRadius: 22, padding: 'clamp(24px, 4vw, 40px)', display: 'flex', gap: 28, alignItems: 'center', flexWrap: 'wrap', boxShadow: '0 0 48px rgba(212,175,55,0.06)' }}>
          <div style={{ width: 68, height: 68, borderRadius: 20, background: 'var(--gold-dim)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(212,175,55,0.25)', flexShrink: 0 }}>
            <Star size={30} color="var(--gold)" />
          </div>
          <div style={{ flex: 1, minWidth: 220 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6, flexWrap: 'wrap' }}>
              <h3 style={{ fontFamily: 'var(--font-sora)', fontSize: 18, fontWeight: 700 }}>Top 30 Women in Digital Health in Africa</h3>
              <span className="gold-badge">2025</span>
            </div>
            <p style={{ color: 'var(--text2)', fontSize: 14, lineHeight: 1.7 }}>Awarded by <strong style={{ color: 'var(--gold)', fontWeight: 600 }}>Digital Health Africa</strong> — recognising contribution and leadership in digital health innovation across the continent.</p>
          </div>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 18 }}>
          {achievements.filter(a => a.id !== 'digital-health').map((a, i) => {
            const Icon = iconMap[a.icon]
            return (
              <motion.div key={a.id} className="card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
                style={{ padding: '26px 24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 13, background: a.type === 'award' ? 'var(--gold-dim)' : 'var(--teal-dim)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: `1px solid ${a.type === 'award' ? 'rgba(212,175,55,0.2)' : 'var(--border)'}` }}>
                    {Icon && <Icon size={20} color={a.type === 'award' ? 'var(--gold)' : 'var(--teal)'} />}
                  </div>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text2)', background: 'var(--bg)', border: '1px solid var(--border)', padding: '3px 10px', borderRadius: 100 }}>{a.year}</span>
                </div>
                <h3 style={{ fontSize: 14, fontWeight: 700, fontFamily: 'var(--font-sora)', marginBottom: 6, lineHeight: 1.4 }}>{a.title}</h3>
                <p style={{ color: 'var(--text2)', fontSize: 13, lineHeight: 1.7, marginBottom: 10 }}>{a.description}</p>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text3)', letterSpacing: '0.06em' }}>{a.issuer}</span>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
