import type { Metadata } from 'next'
import { Sora, DM_Sans, JetBrains_Mono } from 'next/font/google'
import { ThemeProvider } from '@/components/layout/ThemeProvider'
import './globals.css'

const sora = Sora({ subsets:['latin'], variable:'--font-sora', display:'swap', weight:['300','400','600','700','800'] })
const dm = DM_Sans({ subsets:['latin'], variable:'--font-dm', display:'swap', weight:['300','400','500','600'] })
const mono = JetBrains_Mono({ subsets:['latin'], variable:'--font-mono', display:'swap', weight:['400','500'] })

export const metadata: Metadata = {
  title: 'Everlynn Muthoni — Behavioral Data Strategist',
  description: 'I help consumer businesses understand, predict, and influence customer behavior using behavioral analytics, systems thinking, and predictive data models.',
  keywords: ['behavioral analytics','customer behavior','data strategist','churn analysis','customer segmentation','Nairobi','Africa'],
  authors: [{ name: 'Everlynn Muthoni' }],
  openGraph: {
    title: 'Everlynn Muthoni — Behavioral Data Strategist',
    description: 'Helping consumer businesses understand why customers buy, stay, and leave.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${sora.variable} ${dm.variable} ${mono.variable}`}>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
