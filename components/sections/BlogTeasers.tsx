'use client'
import { motion } from 'framer-motion'
import { ArrowRight, BookOpen } from 'lucide-react'

const posts = [
  { title: 'Why Customers Leave Before They Churn', excerpt: 'Churn rarely happens suddenly. There are behavioral signals that appear weeks before a customer cancels — and most businesses are missing them.', tag: 'Retention', readTime: '5 min read' },
  { title: 'The Psychology Behind Pricing Decisions', excerpt: "Price isn't just a number. It's a signal, a promise, and a psychological trigger. Here's what your pricing is actually communicating.", tag: 'Behavioral Economics', readTime: '6 min read' },
  { title: 'How Systems Thinking Improves Customer Analytics', excerpt: "Customers don't exist in isolation. They respond to incentives, design, trust, and timing. Analytics that ignores the system misses the story.", tag: 'Systems Thinking', readTime: '7 min read' },
]

export default function BlogTeasers() {
  return (
    <section id="blog" className="section">
      <div className="wrap">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48, flexWrap: 'wrap', gap: 20 }}>
          <div>
            <span className="lbl">Data Stories</span>
            <h2 style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)', marginBottom: 12 }}>
              Thinking out <span className="grad-text">loud.</span>
            </h2>
            <p style={{ color: 'var(--text2)', maxWidth: 480, fontSize: 16, lineHeight: 1.75 }}>
              Articles on behavioral analytics, customer psychology, and systems thinking.
            </p>
          </div>
          <a href="https://medium.com/" target="_blank" rel="noreferrer" className="btn btn-o">
            Read All Articles <ArrowRight size={15} />
          </a>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
          {posts.map((p, i) => (
            <motion.div key={i} className="card" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{ padding: '30px 28px', cursor: 'pointer' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                <span className="tag">{p.tag}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text2)' }}>{p.readTime}</span>
              </div>
              <h3 style={{ fontSize: 16, fontWeight: 700, fontFamily: 'var(--font-sora)', marginBottom: 10, lineHeight: 1.4 }}>{p.title}</h3>
              <p style={{ color: 'var(--text2)', fontSize: 14, lineHeight: 1.75, marginBottom: 20 }}>{p.excerpt}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--teal)', fontSize: 13, fontWeight: 600 }}>
                <BookOpen size={14} /> Read on Medium <ArrowRight size={13} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
