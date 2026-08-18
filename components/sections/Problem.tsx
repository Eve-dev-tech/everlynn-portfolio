'use client'
import { motion } from 'framer-motion'
import { Megaphone, UserMinus, Frown, Puzzle, PieChart } from 'lucide-react'
import { problems } from '@/lib/data/problems'

const iconMap: Record<string, React.ElementType> = { Megaphone, UserMinus, Frown, Puzzle, PieChart }

export default function Problem() {
  return (
    <section id="problem" className="section">
      <div className="wrap">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: 44 }}>
          <span className="lbl" style={{ justifyContent: 'center' }}>Where Businesses Struggle</span>
          <h2 style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)', marginBottom: 20 }}>
            When Data Is <span className="grad-text">Not Enough.</span>
          </h2>
          <p style={{ color: 'var(--text2)', maxWidth: 620, margin: '0 auto 14px', fontSize: 15.5, lineHeight: 1.85 }}>
            You may already have the data, the customers, and the product, but still struggle to understand what's driving your business forward or holding it back.
          </p>
          <p style={{ color: 'var(--text2)', maxWidth: 620, margin: '0 auto', fontSize: 15.5, lineHeight: 1.85 }}>
            Whether you're starting, growing, or scaling, the challenge is often the same: you have information about your customers, but not enough clarity to turn that information into better decisions.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 18 }}>
          {problems.map((p, i) => {
            const Icon = iconMap[p.icon]
            return (
              <motion.div key={p.id} className="card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
                style={{ padding: '26px 24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 18 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 13, background: 'var(--teal-dim)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border)' }}>
                    {Icon && <Icon size={20} color="var(--teal)" />}
                  </div>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text3)', letterSpacing: '0.1em' }}>0{i + 1}</span>
                </div>
                <h3 style={{ fontSize: 15, fontWeight: 700, fontFamily: 'var(--font-sora)', marginBottom: 8, lineHeight: 1.4 }}>{p.title}</h3>
                <p style={{ color: 'var(--text2)', fontSize: 13.5, lineHeight: 1.75 }}>{p.description}</p>
              </motion.div>
            )
          })}
        </div>

        <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
          style={{ textAlign: 'center', color: 'var(--text2)', fontSize: 15.5, lineHeight: 1.85, maxWidth: 700, margin: '44px auto 0' }}>
          These are some of the critical challenges and risks across the entire business lifecycle. There are actions, solutions, and mitigations that can be implemented — not just to solve the challenges, but to accelerate business growth.
        </motion.p>
      </div>
    </section>
  )
}
