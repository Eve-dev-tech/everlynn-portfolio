'use client'
import { motion } from 'framer-motion'
import { Zap, Target, Eye } from 'lucide-react'

const cards = [
  { icon: Zap, title: 'Supercharge Sales', body: "Customer behaviour analysis offers insights that extend beyond retaining your current customer base. It equips you to attract and convert new high-value customers more effectively. This alignment drives business value by providing your target audience precisely what they seek, and encourages repeat business.", accent: 'var(--teal)' },
  { icon: Target, title: 'Sharpen Marketing Strategy', body: "A deeper understanding allows for precise customer segmentation based on behavioral trends rather than just demographics. A strong grasp of these trends allows you to discern patterns in how customers shop, utilize your services, or engage with your brand. This helps you discover which marketing campaigns or value propositions resonate most effectively.", accent: 'var(--teal)' },
  { icon: Eye, title: 'Predict', body: "Ask yourself: are there specific times, seasons, or periods when customers are more likely to purchase? At which stage of your customer journey do customers tend to churn? By identifying the specific behaviors characteristic of your high-value customers, you can predict which prospective customers are likely to follow similar patterns. This foresight enables you to proactively deliver a customer experience designed to nurture potentially loyal customers from their very first interaction, and to maximize customer lifetime value.", accent: 'var(--gold)' },
]

export default function ValueProp() {
  return (
    <section id="value" className="section" style={{ background: 'var(--bg2)' }}>
      <div className="wrap">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: 60 }}>
          <span className="lbl">Value For Your Money</span>
          <h2 style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)', marginBottom: 16 }}>
            Better Business <span className="grad-text">Outcomes.</span>
          </h2>
          <p style={{ color: 'var(--text2)', maxWidth: 520, margin: '0 auto', fontSize: 17 }}>
            Optimize your operations to increase efficiency and profitability.
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
