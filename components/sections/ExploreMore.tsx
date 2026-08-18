'use client'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export default function ExploreMore() {
  return (
    <section style={{ padding: '56px 0 32px', textAlign: 'center' }}>
      <div className="wrap">
        <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--text2)', letterSpacing: '0.04em', lineHeight: 1.8, maxWidth: 560, margin: '0 auto 14px' }}>
          Explore below to view experience, client testimonials, recognitions, and data stories.
        </motion.p>
        <div className="anim-float" style={{ display: 'inline-flex', color: 'var(--text3)' }}>
          <ChevronDown size={20} />
        </div>
      </div>
    </section>
  )
}
