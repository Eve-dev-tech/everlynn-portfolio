'use client'
import { motion } from 'framer-motion'
import { Briefcase, GraduationCap, Rocket } from 'lucide-react'
import { experiences } from '@/lib/data/experience'

const typeIcon: Record<string, React.ElementType> = { startup: Rocket, 'full-time': Briefcase, education: GraduationCap, freelance: Briefcase }
const typeColor: Record<string, string> = { startup: 'var(--teal)', 'full-time': 'var(--text2)', education: 'var(--gold)', freelance: 'var(--text2)' }

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="wrap">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          style={{ marginBottom: 64 }}>
          <span className="lbl">Experience</span>
          <h2 style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)', marginBottom: 16 }}>
            Built through <span className="grad-text">doing.</span>
          </h2>
          <p style={{ color: 'var(--text2)', maxWidth: 520, fontSize: 16, lineHeight: 1.8 }}>
            My expertise isn't theoretical. It comes from co-founding businesses, analyzing real customer data, and making decisions that move the needle.
          </p>
        </motion.div>

        <div style={{ position: 'relative', maxWidth: 780 }}>
          {/* Timeline line */}
          <div style={{ position: 'absolute', left: 22, top: 0, bottom: 0, width: 1, background: 'var(--border)' }} />

          {experiences.map((e, i) => {
            const Icon = typeIcon[e.type] || Briefcase
            return (
              <motion.div key={e.id} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{ display: 'flex', gap: 28, marginBottom: 48, position: 'relative' }}>
                {/* Dot */}
                <div style={{ position: 'relative', flexShrink: 0, zIndex: 1 }}>
                  <div style={{ width: 46, height: 46, borderRadius: 13, background: 'var(--card)', border: `1px solid ${typeColor[e.type]}44`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon size={20} color={typeColor[e.type]} />
                  </div>
                </div>

                <div className="card" style={{ flex: 1, padding: '28px 28px 24px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12, flexWrap: 'wrap', marginBottom: 8 }}>
                    <div>
                      <h3 style={{ fontSize: 17, fontWeight: 700, fontFamily: 'var(--font-sora)', marginBottom: 4 }}>{e.role}</h3>
                      <span style={{ fontSize: 14, color: typeColor[e.type], fontWeight: 600 }}>{e.company}</span>
                    </div>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text2)', flexShrink: 0, background: 'var(--teal-dim)', padding: '4px 12px', borderRadius: 100 }}>{e.period}</span>
                  </div>
                  <p style={{ color: 'var(--text2)', fontSize: 14, lineHeight: 1.75, marginBottom: 16 }}>{e.description}</p>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 6 }}>
                    {e.highlights.map((h, j) => (
                      <li key={j} style={{ display: 'flex', gap: 8, fontSize: 13, color: 'var(--text2)' }}>
                        <span style={{ color: 'var(--teal)', marginTop: 1, flexShrink: 0 }}>→</span> {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* LinkedIn CTA */}
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          style={{ marginTop: 16, paddingLeft: 74 }}>
          <a href="https://www.linkedin.com/in/everlynn-muthoni/" target="_blank" rel="noreferrer" className="btn btn-o">
            View Full LinkedIn Profile →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
