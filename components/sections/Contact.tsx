'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { Send, Mail, Linkedin, Github } from 'lucide-react'
import toast from 'react-hot-toast'

type FormData = {
  name: string; email: string; company?: string
  enquiryType: string; budget?: string; message: string; source?: string
}

export default function Contact() {
  const [loading, setLoading] = useState(false)
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    setLoading(true)
    try {
      const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })
      if (res.ok) { toast.success("Message sent! I'll be in touch within 24 hours."); reset() }
      else toast.error('Something went wrong. Please try again or email me directly.')
    } catch { toast.error('Network error. Please try again.') }
    finally { setLoading(false) }
  }

  const inp = { className: 'form-input' }

  return (
    <section id="contact" className="section">
      <div className="wrap">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 64, alignItems: 'start' }}>
          {/* Left info */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="lbl">Get In Touch</span>
            <h2 style={{ fontSize: 'clamp(1.8rem,4vw,2.6rem)', marginBottom: 20 }}>
              Ready to understand your <span className="grad-text">customers better?</span>
            </h2>
            <p style={{ color: 'var(--text2)', lineHeight: 1.85, marginBottom: 36, fontSize: 16 }}>
              Whether you have a specific project, a question, or just want to explore what's possible with your data — I'd love to hear from you.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 18, marginBottom: 40 }}>
              <a href="mailto:everlynn@example.com" style={{ display: 'flex', alignItems: 'center', gap: 14, color: 'var(--text)', textDecoration: 'none' }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: 'var(--teal-dim)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border)', flexShrink: 0 }}>
                  <Mail size={20} color="var(--teal)" />
                </div>
                <div>
                  <div style={{ fontSize: 12, color: 'var(--text2)', fontFamily: 'var(--font-mono)', marginBottom: 2 }}>EMAIL</div>
                  <div style={{ fontSize: 15, fontWeight: 500 }}>Update in contact section</div>
                </div>
              </a>
              <a href="https://www.linkedin.com/in/everlynn-muthoni/" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 14, color: 'var(--text)', textDecoration: 'none' }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: 'var(--teal-dim)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border)', flexShrink: 0 }}>
                  <Linkedin size={20} color="var(--teal)" />
                </div>
                <div>
                  <div style={{ fontSize: 12, color: 'var(--text2)', fontFamily: 'var(--font-mono)', marginBottom: 2 }}>LINKEDIN</div>
                  <div style={{ fontSize: 15, fontWeight: 500 }}>everlynn-muthoni</div>
                </div>
              </a>
              <a href="https://github.com/Eve-dev-tech" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 14, color: 'var(--text)', textDecoration: 'none' }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: 'var(--teal-dim)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border)', flexShrink: 0 }}>
                  <Github size={20} color="var(--teal)" />
                </div>
                <div>
                  <div style={{ fontSize: 12, color: 'var(--text2)', fontFamily: 'var(--font-mono)', marginBottom: 2 }}>GITHUB</div>
                  <div style={{ fontSize: 15, fontWeight: 500 }}>Eve-dev-tech</div>
                </div>
              </a>
            </div>

            {/* Photo placeholder for CTA */}
            <div className="card" style={{ padding: '24px 22px', display: 'flex', alignItems: 'center', gap: 16 }}>
              <div style={{ width: 52, height: 52, borderRadius: '50%', background: 'var(--bg2)', border: '2px solid var(--teal)', overflow: 'hidden', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src="/images/profile/profile-small.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={e => { (e.target as HTMLImageElement).style.display='none' }} />
              </div>
              <div>
                <p style={{ fontSize: 14, fontWeight: 600, marginBottom: 2 }}>Everlynn Muthoni</p>
                <p style={{ fontSize: 13, color: 'var(--text2)' }}>Typically responds within 24 hours</p>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
            <div className="card" style={{ padding: '36px 32px' }}>
              <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                  <div>
                    <label style={{ display: 'block', fontSize: 13, color: 'var(--text2)', marginBottom: 6, fontWeight: 500 }}>Name *</label>
                    <input {...register('name', { required: true })} {...inp} placeholder="Your name" />
                    {errors.name && <span style={{ color: '#f87171', fontSize: 12, marginTop: 4, display: 'block' }}>Required</span>}
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: 13, color: 'var(--text2)', marginBottom: 6, fontWeight: 500 }}>Email *</label>
                    <input {...register('email', { required: true })} {...inp} type="email" placeholder="you@company.com" />
                    {errors.email && <span style={{ color: '#f87171', fontSize: 12, marginTop: 4, display: 'block' }}>Required</span>}
                  </div>
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: 13, color: 'var(--text2)', marginBottom: 6, fontWeight: 500 }}>Company / Organisation</label>
                  <input {...register('company')} {...inp} placeholder="Optional" />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                  <div>
                    <label style={{ display: 'block', fontSize: 13, color: 'var(--text2)', marginBottom: 6, fontWeight: 500 }}>Enquiry Type *</label>
                    <select {...register('enquiryType', { required: true })} {...inp} style={{ cursor: 'pointer' }}>
                      <option value="">Select...</option>
                      <option>Project Consultation</option>
                      <option>Dashboard Build</option>
                      <option>Strategic Advisory</option>
                      <option>Job Opportunity</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: 13, color: 'var(--text2)', marginBottom: 6, fontWeight: 500 }}>Budget Range</label>
                    <select {...register('budget')} {...inp} style={{ cursor: 'pointer' }}>
                      <option value="">Select...</option>
                      <option>Under $500</option>
                      <option>$500 – $2,000</option>
                      <option>$2,000+</option>
                      <option>Let's discuss</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: 13, color: 'var(--text2)', marginBottom: 6, fontWeight: 500 }}>Message *</label>
                  <textarea {...register('message', { required: true, maxLength: 500 })} {...inp} rows={5} placeholder="Tell me about your project, your data challenges, or what you're trying to understand about your customers..." style={{ resize: 'vertical' }} />
                  {errors.message && <span style={{ color: '#f87171', fontSize: 12, marginTop: 4, display: 'block' }}>Required (max 500 chars)</span>}
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: 13, color: 'var(--text2)', marginBottom: 6, fontWeight: 500 }}>How did you find me?</label>
                  <input {...register('source')} {...inp} placeholder="LinkedIn, referral, Google..." />
                </div>
                <button type="submit" disabled={loading} className="btn btn-p" style={{ justifyContent: 'center', opacity: loading ? 0.7 : 1 }}>
                  {loading ? 'Sending...' : <><Send size={15} /> Send Message</>}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
