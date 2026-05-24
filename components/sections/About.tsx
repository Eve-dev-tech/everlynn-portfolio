'use client'
import { motion } from 'framer-motion'
import { Linkedin, Github, BookOpen, User } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="wrap">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 64, alignItems: 'center' }}>
          {/* Photo column */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            style={{ position: 'relative' }}>
            {/* Photo placeholder — replace with actual image */}
            <div style={{
              width: '100%', maxWidth: 420, aspectRatio: '4/5', borderRadius: 24,
              background: 'var(--card)', border: '1px solid var(--border)',
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              position: 'relative', overflow: 'hidden',
            }}>
              {/* Try actual image first, fallback to placeholder */}
              <img src="/images/profile/profile-hero.jpg" alt="Everlynn Muthoni"
                style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }}
                onError={e => { (e.target as HTMLImageElement).style.display = 'none' }} />
              {/* Fallback */}
              <User size={80} color="var(--border2)" />
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text3)', marginTop: 12, letterSpacing: '0.1em' }}>
                ADD PHOTO →<br />public/images/profile/profile-hero.jpg
              </p>
              {/* Decorative teal bar */}
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 4, background: 'linear-gradient(90deg, var(--teal), var(--gold))' }} />
            </div>
            {/* Floating accent card */}
            <div style={{
              position: 'absolute', bottom: -20, right: -20,
              background: 'var(--card)', border: '1px solid var(--border)',
              borderRadius: 14, padding: '16px 20px', boxShadow: 'var(--shadow)',
            }}>
              <div style={{ fontFamily: 'var(--font-sora)', fontWeight: 800, fontSize: 22, color: 'var(--teal)' }}>5+</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text2)', letterSpacing: '0.08em' }}>YEARS BUILDING</div>
            </div>
          </motion.div>

          {/* Text column */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
            <span className="lbl">About Me</span>
            <h2 style={{ fontSize: 'clamp(1.7rem,3.5vw,2.4rem)', marginBottom: 24 }}>
              A builder who believes <span className="teal">impact</span> is the only metric that matters.
            </h2>
            <p style={{ color: 'var(--text2)', marginBottom: 18, lineHeight: 1.85, fontSize: 16 }}>
              I'm Everlynn — a Behavioral Data Strategist based in Nairobi, Kenya. My work sits at the intersection of data science, consumer psychology, and business strategy. I don't just build models. I answer the questions businesses are actually asking: <em style={{ color: 'var(--text)' }}>Why are customers leaving? What makes them stay? What should we do next?</em>
            </p>
            <p style={{ color: 'var(--text2)', marginBottom: 18, lineHeight: 1.85, fontSize: 16 }}>
              I've co-founded a wellness startup (ApertaCura), helped build a consumer business (Little Orchard), and been selected as an emerging entrepreneur through Jasiri. Everything I build is grounded in one belief: data without context is just noise. Data with strategy is a competitive advantage.
            </p>
            <p style={{ color: 'var(--text2)', marginBottom: 36, lineHeight: 1.85, fontSize: 16 }}>
              I'm currently executing a focused 5-year roadmap toward becoming a globally recognized Behavioral Data Strategist — available for consulting projects, strategic advisory, and the right full-time opportunities.
            </p>

            {/* Links */}
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a href="https://www.linkedin.com/in/everlynn-muthoni/" target="_blank" rel="noreferrer" className="btn btn-p" style={{ padding: '12px 22px' }}>
                <Linkedin size={16} /> LinkedIn
              </a>
              <a href="https://github.com/Eve-dev-tech" target="_blank" rel="noreferrer" className="btn btn-o" style={{ padding: '12px 22px' }}>
                <Github size={16} /> GitHub
              </a>
              <a href="https://medium.com/" target="_blank" rel="noreferrer" className="btn btn-o" style={{ padding: '12px 22px' }}>
                <BookOpen size={16} /> Blog
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
