'use client'
import { motion } from 'framer-motion'
import { Calendar, Clock, CheckCircle } from 'lucide-react'

const benefits = ['30-minute discovery call', 'No commitment required', 'Get a clear direction for your analytics', 'Walk away with at least one actionable insight']

export default function BookSession() {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/'

  return (
    <section id="book" className="section" style={{ background: 'var(--bg2)' }}>
      <div className="wrap">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 48, alignItems: 'center' }}>
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="lbl">Book a Session</span>
            <h2 style={{ fontSize: 'clamp(1.8rem,4vw,2.6rem)', marginBottom: 20 }}>
              Let's talk about <span className="grad-text">your customers.</span>
            </h2>
            <p style={{ color: 'var(--text2)', lineHeight: 1.85, marginBottom: 32, fontSize: 16 }}>
              Book a free 30-minute discovery call. We'll look at your customer data challenges and I'll give you a clear picture of what's possible.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 36 }}>
              {benefits.map((b, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                  <CheckCircle size={18} color="var(--teal)" style={{ marginTop: 1, flexShrink: 0 }} />
                  <span style={{ color: 'var(--text2)', fontSize: 15 }}>{b}</span>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--text2)', fontSize: 13 }}>
                <Clock size={16} color="var(--teal)" /> 30 minutes
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--text2)', fontSize: 13 }}>
                <Calendar size={16} color="var(--teal)" /> Available Mon–Fri
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
            <div className="card" style={{ padding: '40px 36px', textAlign: 'center' }}>
              <div style={{ width: 64, height: 64, borderRadius: 18, background: 'var(--teal-dim)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', border: '1px solid var(--border)' }}>
                <Calendar size={28} color="var(--teal)" />
              </div>
              <h3 style={{ fontFamily: 'var(--font-sora)', fontSize: 18, fontWeight: 700, marginBottom: 10 }}>Book Your Free Call</h3>
              <p style={{ color: 'var(--text2)', fontSize: 14, lineHeight: 1.7, marginBottom: 28 }}>
                Choose a time that works for you. The call is free and there's no obligation to commit.
              </p>
              <a href={calendlyUrl} target="_blank" rel="noreferrer" className="btn btn-p" style={{ width: '100%', justifyContent: 'center', fontSize: 14 }}>
                <Calendar size={16} /> Schedule on Calendly
              </a>
              <p style={{ color: 'var(--text3)', fontSize: 12, marginTop: 16, fontFamily: 'var(--font-mono)' }}>
                Update NEXT_PUBLIC_CALENDLY_URL in .env.local
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
