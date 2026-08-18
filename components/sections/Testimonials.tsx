'use client'
import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'
import { testimonials } from '@/lib/data/testimonials'

function initials(name: string) {
  return name.split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase()
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="section">
      <div className="wrap">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: 56 }}>
          <span className="lbl">Client Reviews</span>
          <h2 style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)', marginBottom: 14 }}>
            What clients <span className="grad-text">say.</span>
          </h2>
          <p style={{ color: 'var(--text2)', maxWidth: 480, margin: '0 auto', fontSize: 15 }}>
            Feedback from the people I've worked with directly.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
          {testimonials.map((t, i) => (
            <motion.div key={t.id} className="card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{ padding: '32px 28px', display: 'flex', flexDirection: 'column' }}>
              <Quote size={26} color="var(--teal)" style={{ opacity: 0.5, marginBottom: 14 }} />

              <div style={{ display: 'flex', gap: 3, marginBottom: 14 }}>
                {Array.from({ length: 5 }).map((_, si) => (
                  <Star key={si} size={14} color="var(--gold)" fill={si < t.rating ? 'var(--gold)' : 'none'} />
                ))}
              </div>

              <p style={{ color: 'var(--text2)', fontSize: 15, lineHeight: 1.8, marginBottom: 24, flex: 1 }}>&ldquo;{t.quote}&rdquo;</p>

              <div style={{ display: 'flex', alignItems: 'center', gap: 12, borderTop: '1px solid var(--border)', paddingTop: 18 }}>
                {t.avatar ? (
                  <img src={t.avatar} alt={t.name} style={{ width: 42, height: 42, borderRadius: '50%', objectFit: 'cover' }}
                    onError={e => { (e.target as HTMLImageElement).style.display = 'none' }} />
                ) : (
                  <div style={{ width: 42, height: 42, borderRadius: '50%', background: 'var(--teal-dim)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-sora)', fontWeight: 700, fontSize: 13, color: 'var(--teal)', flexShrink: 0 }}>
                    {initials(t.name)}
                  </div>
                )}
                <div>
                  <div style={{ fontFamily: 'var(--font-sora)', fontWeight: 700, fontSize: 14 }}>{t.name}</div>
                  <div style={{ color: 'var(--text2)', fontSize: 12.5 }}>{t.role} · {t.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
