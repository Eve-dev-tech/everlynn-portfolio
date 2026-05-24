'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink, BarChart2, ImageOff } from 'lucide-react'
import { projects } from '@/lib/data/projects'

export default function Projects() {
  const [tab, setTab] = useState<'code'|'dashboards'>('code')

  return (
    <section id="projects" className="section">
      <div className="wrap">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          style={{ marginBottom: 48 }}>
          <span className="lbl">Work & Projects</span>
          <h2 style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)', marginBottom: 16 }}>
            Proof, not <span className="grad-text">promises.</span>
          </h2>
          <p style={{ color: 'var(--text2)', maxWidth: 560, fontSize: 16, lineHeight: 1.8 }}>
            Each project solves a real business problem. The code is the evidence — the insight is the product.
          </p>
        </motion.div>

        {/* Tab Toggle */}
        <div style={{ display: 'flex', gap: 4, marginBottom: 40, background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 12, padding: 4, width: 'fit-content' }}>
          {[{id:'code',label:'Code Projects'},{id:'dashboards',label:'Dashboards'}].map(t => (
            <button key={t.id} onClick={() => setTab(t.id as any)}
              style={{ padding: '10px 22px', borderRadius: 9, border: 'none', cursor: 'pointer', fontFamily: 'var(--font-sora)', fontWeight: 600, fontSize: 13, transition: 'all .2s',
                background: tab === t.id ? 'var(--teal)' : 'transparent',
                color: tab === t.id ? '#fff' : 'var(--text2)' }}>
              {t.label}
            </button>
          ))}
        </div>

        {tab === 'code' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
            {projects.map((p, i) => (
              <motion.div key={p.id} className="card" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{ overflow: 'hidden' }}>
                {/* Project image / placeholder */}
                <div style={{ aspectRatio: '16/9', background: 'var(--bg)', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', position: 'relative' }}>
                  <img src={`/images/projects/${p.imageFile}`} alt={p.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    onError={e => { (e.target as HTMLImageElement).style.display = 'none' }} />
                  <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
                    <BarChart2 size={40} color="var(--border2)" />
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text3)', letterSpacing: '0.1em' }}>ADD SCREENSHOT</span>
                  </div>
                  {/* Teal gradient overlay */}
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--card) 0%, transparent 60%)' }} />
                </div>

                <div style={{ padding: '24px 24px 28px' }}>
                  <div style={{ marginBottom: 8 }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--teal)', letterSpacing: '0.08em' }}>{p.businessFrame}</span>
                  </div>
                  <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 10, fontFamily: 'var(--font-sora)' }}>{p.title}</h3>
                  <p style={{ color: 'var(--text2)', fontSize: 14, lineHeight: 1.75, marginBottom: 18 }}>{p.description}</p>

                  <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 24 }}>
                    {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
                  </div>

                  <div style={{ display: 'flex', gap: 10 }}>
                    <a href={p.githubUrl} target="_blank" rel="noreferrer" className="btn btn-o" style={{ padding: '10px 18px', fontSize: 12, flex: 1, justifyContent: 'center' }}>
                      <Github size={15} /> View Code
                    </a>
                    {p.liveUrl && (
                      <a href={p.liveUrl} target="_blank" rel="noreferrer" className="btn btn-p" style={{ padding: '10px 18px', fontSize: 12 }}>
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {tab === 'dashboards' && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
              {[1, 2, 3].map(n => (
                <div key={n} className="card" style={{ padding: '40px 32px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 14, minHeight: 260, textAlign: 'center' }}>
                  <ImageOff size={40} color="var(--border2)" />
                  <div>
                    <p style={{ fontFamily: 'var(--font-sora)', fontWeight: 700, fontSize: 15, marginBottom: 6 }}>Dashboard Coming Soon</p>
                    <p style={{ color: 'var(--text2)', fontSize: 13, lineHeight: 1.7 }}>Add your Power BI screenshot to<br /><span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--teal)' }}>public/images/dashboards/</span></p>
                  </div>
                </div>
              ))}
            </div>
            <p style={{ color: 'var(--text2)', fontSize: 14, marginTop: 32, textAlign: 'center', maxWidth: 500, margin: '32px auto 0' }}>
              Power BI dashboards are currently in progress. Add screenshot exports to <code style={{ color: 'var(--teal)', fontFamily: 'var(--font-mono)', fontSize: 12 }}>public/images/dashboards/</code> to display them here.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  )
}
