import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const { name, email, company, enquiryType, budget, message, source } = await req.json()

    if (!name || !email || !message || !enquiryType) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const notificationEmail = process.env.NOTIFICATION_EMAIL || ''
    const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/'

    // Email A → Everlynn's inbox
    await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: notificationEmail,
      subject: `New ${enquiryType} enquiry from ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#0D0D1A;color:#F0F0F0;border-radius:12px;overflow:hidden;">
          <div style="background:#00B5AD;padding:20px 32px;">
            <h2 style="margin:0;color:#fff;font-size:20px;">New Portfolio Enquiry</h2>
          </div>
          <div style="padding:32px;">
            <table style="width:100%;border-collapse:collapse;">
              <tr><td style="padding:8px 0;color:#8892A4;font-size:13px;width:140px;">Name</td><td style="padding:8px 0;font-size:15px;">${name}</td></tr>
              <tr><td style="padding:8px 0;color:#8892A4;font-size:13px;">Email</td><td style="padding:8px 0;font-size:15px;"><a href="mailto:${email}" style="color:#00B5AD;">${email}</a></td></tr>
              ${company ? `<tr><td style="padding:8px 0;color:#8892A4;font-size:13px;">Company</td><td style="padding:8px 0;font-size:15px;">${company}</td></tr>` : ''}
              <tr><td style="padding:8px 0;color:#8892A4;font-size:13px;">Enquiry Type</td><td style="padding:8px 0;font-size:15px;">${enquiryType}</td></tr>
              ${budget ? `<tr><td style="padding:8px 0;color:#8892A4;font-size:13px;">Budget</td><td style="padding:8px 0;font-size:15px;">${budget}</td></tr>` : ''}
              ${source ? `<tr><td style="padding:8px 0;color:#8892A4;font-size:13px;">Found via</td><td style="padding:8px 0;font-size:15px;">${source}</td></tr>` : ''}
            </table>
            <div style="margin-top:24px;padding:20px;background:#16213E;border-radius:10px;border-left:3px solid #00B5AD;">
              <p style="margin:0 0 8px;color:#8892A4;font-size:12px;text-transform:uppercase;letter-spacing:0.1em;">Message</p>
              <p style="margin:0;font-size:15px;line-height:1.75;">${message}</p>
            </div>
            <div style="margin-top:24px;">
              <a href="mailto:${email}" style="display:inline-block;background:#00B5AD;color:#fff;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:600;font-size:14px;">Reply to ${name}</a>
            </div>
          </div>
        </div>
      `,
    })

    // Email B → Client auto-reply
    await resend.emails.send({
      from: 'Everlynn Muthoni <onboarding@resend.dev>',
      to: email,
      subject: `Got your message, ${name}! Here's what's next.`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#0D0D1A;color:#F0F0F0;border-radius:12px;overflow:hidden;">
          <div style="background:#00B5AD;padding:20px 32px;">
            <h2 style="margin:0;color:#fff;font-size:20px;">Message received!</h2>
          </div>
          <div style="padding:32px;">
            <p style="font-size:16px;line-height:1.8;margin-bottom:20px;">Hi ${name},</p>
            <p style="font-size:15px;line-height:1.8;color:#8892A4;margin-bottom:20px;">
              Thank you for reaching out — I've received your message and will get back to you within <strong style="color:#F0F0F0;">24 hours</strong>.
            </p>
            <p style="font-size:15px;line-height:1.8;color:#8892A4;margin-bottom:32px;">
              In the meantime, you're welcome to book a free 30-minute discovery call directly in my calendar:
            </p>
            <a href="${calendlyUrl}" style="display:inline-block;background:#00B5AD;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-weight:700;font-size:14px;letter-spacing:0.05em;text-transform:uppercase;">Book a Discovery Call</a>
            <div style="margin-top:40px;padding-top:24px;border-top:1px solid #16213E;">
              <p style="font-size:14px;color:#8892A4;margin:0;">Warm regards,<br/><strong style="color:#F0F0F0;">Everlynn Muthoni</strong><br/><span style="color:#00B5AD;">Behavioral Data Strategist</span></p>
            </div>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Email error:', error)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}
