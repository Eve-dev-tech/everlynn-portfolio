'use client'
import { motion } from 'framer-motion'
import { Search, Users, TrendingDown, Repeat, BarChart2, Lightbulb, ArrowRight, Zap } from 'lucide-react'
import { services } from '@/lib/data/services'

const iconMap: Record<string, React.ElementType> = { Search, Users, TrendingDown, Repeat, BarChart2, Lightbulb }
const tierColor: Record<string, string> = { Starter:'var(--text2)', Core:'var(--teal)', Growth:'var(--gold)', Custom:'var(--text2)' }

export default function Services() {
  const handleContact = (service: string) => {
    const el = document.getElementById('contact')
    if (el) { el.scrollIntoView({ behavior: 'smooth' }); (window as any).__prefillService = service }
  }

  return (
    <section id="services" className="section" style={{ background: 'var(--bg2)' }}>
      <div className="wrap">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          style={{ marginBottom: 60, maxWidth: 640 }}>
          <span className="lbl">Services & Pricing</span>
          <h2 style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)', marginBottom: 16 }}>
            What can I build <span className="grad-text">for your business?</span>
          </h2>
          <p style={{ color: 'var(--text2)', fontSize: 16, lineHeight: 1.8 }}>
            From one-time audits to ongoing strategic partnerships. Every engagement ends with decisions, not just deliverables.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
          {services.map((s, i) => {
            const Icon = iconMap[s.icon]
            return (
              <motion.div key={s.id} className="card" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
                style={{ padding: '32px 28px', position: 'relative', ...(s.popular ? { border: '1px solid var(--teal)', boxShadow: '0 0 40px rgba(0,181,173,0.12)' } : {}) }}>
                {s.popular && (
                  <div style={{ position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)' }}>
                    <span className="gold-badge"><Zap size={10} style={{ display: 'inline', marginRight: 4 }} />Most Popular</span>
                  </div>
                )}
                {/* Tier badge */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: tierColor[s.tier], border: `1px solid ${tierColor[s.tier]}33`, padding: '3px 10px', borderRadius: 100 }}>{s.tier}</span>
                  <div style={{ width: 42, height: 42, borderRadius: 12, background: 'var(--teal-dim)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border)' }}>
                    {Icon && <Icon size={20} color="var(--teal)" />}
                  </div>
                </div>

                <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 10, fontFamily: 'var(--font-sora)' }}>{s.name}</h3>
                <p style={{ color: 'var(--text2)', fontSize: 14, lineHeight: 1.75, marginBottom: 20 }}>{s.description}</p>

                <ul style={{ marginBottom: 24, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 6 }}>
                  {s.deliverables.map((d, j) => (
                    <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 13, color: 'var(--text2)' }}>
                      <span style={{ color: 'var(--teal)', marginTop: 2 }}>✓</span> {d}
                    </li>
                  ))}
                </ul>

                <div style={{ borderTop: '1px solid var(--border)', paddingTop: 20, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap' }}>
                  <span style={{ fontFamily: 'var(--font-sora)', fontWeight: 800, fontSize: 18, color: s.popular ? 'var(--gold)' : 'var(--teal)' }}>{s.price}</span>
                  <button onClick={() => handleContact(s.name)} className="btn btn-p" style={{ padding: '10px 18px', fontSize: 12 }}>
                    Get Started <ArrowRight size={14} />
                  </button>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          style={{ marginTop: 56, textAlign: 'center', padding: '48px 32px', background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 20 }}>
          <h3 style={{ fontSize: 22, marginBottom: 12, fontFamily: 'var(--font-sora)' }}>Not sure where to start?</h3>
          <p style={{ color: 'var(--text2)', marginBottom: 28, maxWidth: 480, margin: '0 auto 28px' }}>
            Book a free 30-minute discovery call. We'll identify exactly what your business needs.
          </p>
          <button onClick={() => document.getElementById('book')?.scrollIntoView({ behavior: 'smooth' })} className="btn btn-p">
            Book a Free Call <ArrowRight size={16} />
          </button>
        </motion.div>
      </div>
    </section>
  )
}
