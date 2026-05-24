'use client'
import { motion } from 'framer-motion'
import { Brain, TrendingUp, Target } from 'lucide-react'

const cards = [
  { icon: Brain, title: 'Customer Intelligence', body: "I decode why customers behave the way they do — using data, psychology, and systems thinking to answer questions your dashboards can't.", accent: 'var(--teal)' },
  { icon: TrendingUp, title: 'Predictive Strategy', body: "From churn risk to purchase prediction, I build models that forecast behavior so you can act before problems become revenue losses.", accent: 'var(--teal)' },
  { icon: Target, title: 'Decision-Ready Insights', body: "I translate complex data into clear strategic recommendations. No jargon. Just the insight your leadership team needs to act with confidence.", accent: 'var(--gold)' },
]

export default function ValueProp() {
  return (
    <section id="value" className="section" style={{ background: 'var(--bg2)' }}>
      <div className="wrap">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: 60 }}>
          <span className="lbl">What I Deliver</span>
          <h2 style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)', marginBottom: 16 }}>
            Not just data. <span className="grad-text">Decisions.</span>
          </h2>
          <p style={{ color: 'var(--text2)', maxWidth: 520, margin: '0 auto', fontSize: 17 }}>
            Most companies have data. Few have clarity. I bridge that gap.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
          {cards.map((c, i) => (
            <motion.div key={i} className="card" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.12 }}
              style={{ padding: '36px 32px' }}>
              <div style={{ width: 52, height: 52, borderRadius: 14, background: 'var(--teal-dim)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 22, border: '1px solid var(--border)' }}>
                <c.icon size={24} color={c.accent} />
              </div>
              <h3 style={{ fontSize: 19, fontWeight: 700, marginBottom: 12, fontFamily: 'var(--font-sora)' }}>{c.title}</h3>
              <p style={{ color: 'var(--text2)', lineHeight: 1.75, fontSize: 15 }}>{c.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
