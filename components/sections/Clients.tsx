'use client'
import { motion } from 'framer-motion'
import { clients } from '@/lib/data/clients'

export default function Clients() {
  return (
    <section id="clients" className="section" style={{ background: 'var(--bg2)' }}>
      <div className="wrap">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: 48 }}>
          <span className="lbl">Trusted By</span>
          <h2 style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)', marginBottom: 14 }}>
            Businesses and brands <span className="grad-text">that trust me.</span>
          </h2>
          <p style={{ color: 'var(--text2)', maxWidth: 480, margin: '0 auto', fontSize: 15 }}>
            A snapshot of the companies I've partnered with on data strategy and analytics.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 16 }}>
          {clients.map((c, i) => (
            <motion.div key={c.id} className="card" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.06 }}
              style={{ padding: '22px 18px', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 90 }}>
              {c.logo ? (
                <img src={c.logo} alt={c.name} style={{ maxWidth: '100%', maxHeight: 44, objectFit: 'contain', filter: 'grayscale(1)', opacity: 0.85 }}
                  onError={e => { (e.target as HTMLImageElement).style.display = 'none' }} />
              ) : (
                <span style={{ fontFamily: 'var(--font-sora)', fontWeight: 700, fontSize: 15, color: 'var(--text2)', textAlign: 'center', letterSpacing: '-0.01em' }}>
                  {c.name}
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
