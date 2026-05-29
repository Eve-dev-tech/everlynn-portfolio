'use client'
import { motion } from 'framer-motion'
import { Linkedin, Github, BookOpen, User, ArrowRight } from 'lucide-react'

const ethos = ['Systems thinking over quick fixes', 'Evidence-informed decisions', 'Human-centered innovation', 'Technology in service of people']

export default function About() {
  return (
    <section id="about" className="section">
      <div className="wrap">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 64, alignItems: 'center' }}>
          {/* Photo */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            style={{ position: 'relative' }}>
            <div style={{ width: '100%', maxWidth: 420, aspectRatio: '4/5', borderRadius: 28, background: 'var(--card)', border: '1px solid var(--border)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
              <img src="/images/profile/profile-hero.jpg" alt="Everlynn Muthoni" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }} onError={e => { (e.target as HTMLImageElement).style.display = 'none' }} />
              <User size={80} color="var(--border2)" />
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text3)', marginTop: 12, letterSpacing: '0.1em', textAlign: 'center' }}>Add profile-hero.jpg<br />to public/images/profile/</p>
              {/* Feminine gradient bar */}
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 4, background: 'linear-gradient(90deg, var(--teal), var(--teal-l), var(--gold))' }} />
            </div>
            {/* Floating credential */}
            <div style={{ position: 'absolute', bottom: -20, right: -10, background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 16, padding: '14px 18px', boxShadow: 'var(--shadow)' }}>
              <div style={{ fontFamily: 'var(--font-sora)', fontWeight: 800, fontSize: 13, color: 'var(--teal)', marginBottom: 2 }}>MIT MicroMasters</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text2)', letterSpacing: '0.08em' }}>DATA SCIENCE & ML · 2022</div>
            </div>
            {/* Award float */}
            <div style={{ position: 'absolute', top: 20, right: -14, background: 'var(--gold-dim)', border: '1px solid rgba(212,175,55,0.3)', borderRadius: 14, padding: '10px 16px', boxShadow: 'var(--shadow)' }}>
              <div style={{ fontFamily: 'var(--font-sora)', fontWeight: 700, fontSize: 11, color: 'var(--gold)', lineHeight: 1.4 }}>Top 30 Women<br />in Digital Health</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text2)', marginTop: 3 }}>Africa · 2025</div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
            <span className="lbl">About Everlynn</span>
            <h2 style={{ fontSize: 'clamp(1.7rem,3.5vw,2.4rem)', marginBottom: 24 }}>
              A builder who believes <span className="teal">impact</span> is the only metric that matters.
            </h2>
            <p style={{ color: 'var(--text2)', marginBottom: 16, lineHeight: 1.85, fontSize: 15 }}>
              I'm Everlynn — a Behavioral Data Strategist based in Nairobi, Kenya. My work sits at the intersection of software development, behavioral analytics, customer intelligence, and business strategy. I've worked across M-Pesa Africa, the Kenya National Bureau of Statistics, and multiple startups, building an end-to-end picture of what it takes to turn data into decisions.
            </p>
            <p style={{ color: 'var(--text2)', marginBottom: 16, lineHeight: 1.85, fontSize: 15 }}>
              I don't just build models. I answer the questions businesses are actually asking: <em style={{ color: 'var(--text)', fontStyle: 'normal', fontWeight: 500 }}>Why are customers leaving? What makes them stay? Where should we invest to grow?</em>
            </p>
            <p style={{ color: 'var(--text2)', marginBottom: 28, lineHeight: 1.85, fontSize: 15 }}>
              I hold an MIT MicroMasters in Data Science & Machine Learning, a Bachelor's in Applied Computing from KCA University, and was recognised as one of Africa's <strong style={{ color: 'var(--gold)', fontWeight: 600 }}>Top 30 Women in Digital Health 2025</strong>.
            </p>

            {/* Ethos pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 32 }}>
              {ethos.map(e => (
                <span key={e} style={{ fontFamily: 'var(--font-dm)', fontSize: 13, color: 'var(--text2)', background: 'var(--card)', border: '1px solid var(--border)', padding: '6px 14px', borderRadius: 100 }}>{e}</span>
              ))}
            </div>

            {/* Dual track CTA boxes */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 32 }}>
              <div style={{ background: 'var(--teal-dim)', border: '1px solid var(--border)', borderRadius: 14, padding: '16px 18px' }}>
                <div style={{ fontFamily: 'var(--font-sora)', fontWeight: 700, fontSize: 13, color: 'var(--teal)', marginBottom: 4 }}>Hire Me</div>
                <p style={{ fontSize: 12, color: 'var(--text2)', lineHeight: 1.6 }}>Open to full-time analytics, product, and strategy roles at companies building for impact.</p>
              </div>
              <div style={{ background: 'var(--gold-dim)', border: '1px solid rgba(212,175,55,0.2)', borderRadius: 14, padding: '16px 18px' }}>
                <div style={{ fontFamily: 'var(--font-sora)', fontWeight: 700, fontSize: 13, color: 'var(--gold)', marginBottom: 4 }}>Co-Build With Me</div>
                <p style={{ fontSize: 12, color: 'var(--text2)', lineHeight: 1.6 }}>Available to co-create analytics systems, data products, and customer strategies with founders and SMEs.</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <a href="https://www.linkedin.com/in/everlynn-muthoni/" target="_blank" rel="noreferrer" className="btn btn-p" style={{ padding: '12px 20px' }}>
                <Linkedin size={16} /> LinkedIn
              </a>
              <a href="https://github.com/Eve-dev-tech" target="_blank" rel="noreferrer" className="btn btn-o" style={{ padding: '12px 20px' }}>
                <Github size={16} /> GitHub
              </a>
              <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="btn btn-o" style={{ padding: '12px 20px' }}>
                Let's Talk <ArrowRight size={15} />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
