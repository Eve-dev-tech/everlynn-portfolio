'use client'
import { motion } from 'framer-motion'
import { Code2, Brain, MessageSquare } from 'lucide-react'
import { skillGroups } from '@/lib/data/skills'

const iconMap: Record<string, React.FC<{size?:number;color?:string}>> = { Code2, Brain, MessageSquare }

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  return (
    <motion.div initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay }}
      style={{ marginBottom: 16 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
        <span style={{ fontSize: 13, fontWeight: 500, color: 'var(--text)' }}>{name}</span>
        <span style={{ fontSize: 12, color: 'var(--teal)', fontFamily: 'var(--font-mono)' }}>{level}%</span>
      </div>
      <div style={{ height: 6, background: 'var(--teal-dim)', borderRadius: 100, overflow: 'hidden' }}>
        <motion.div initial={{ width: 0 }} whileInView={{ width: `${level}%` }} viewport={{ once: true }} transition={{ duration: 0.8, delay: delay + 0.2, ease: 'easeOut' }}
          style={{ height: '100%', borderRadius: 100, background: 'linear-gradient(90deg, var(--teal), var(--teal-l))' }} />
      </div>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="section" style={{ background: 'var(--bg2)' }}>
      <div className="wrap">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: 64 }}>
          <span className="lbl">Skills & Expertise</span>
          <h2 style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)', marginBottom: 16 }}>
            Technical depth. <span className="grad-text">Strategic breadth.</span>
          </h2>
          <p style={{ color: 'var(--text2)', maxWidth: 500, margin: '0 auto', fontSize: 16 }}>
            The tools I use are secondary. The thinking I bring is the advantage.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 28 }}>
          {skillGroups.map((g, gi) => {
            const Icon = iconMap[g.icon]
            return (
              <motion.div key={g.category} className="card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: gi * 0.1 }}
                style={{ padding: '32px 28px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 28 }}>
                  <div style={{ width: 46, height: 46, borderRadius: 12, background: 'var(--teal-dim)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border)', flexShrink: 0 }}>
                    {Icon && <Icon size={22} color="var(--teal)" />}
                  </div>
                  <div>
                    <h3 style={{ fontSize: 15, fontWeight: 700, fontFamily: 'var(--font-sora)', marginBottom: 2 }}>{g.category}</h3>
                    <p style={{ fontSize: 12, color: 'var(--text2)' }}>{g.description}</p>
                  </div>
                </div>
                {g.skills.map((s, si) => (
                  <SkillBar key={s.name} name={s.name} level={s.level} delay={gi * 0.1 + si * 0.04} />
                ))}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
