export type SkillCard = {
  id: string; category: string; icon: string; tagline: string
  description: string; tools: string[]; color: string
}

export const skillCards: SkillCard[] = [
  {
    id: 'analytics', category: 'Behavioral Analytics', icon: 'Brain', color: '#00B5AD',
    tagline: 'Why customers do what they do.',
    description: 'I analyze customer behavior patterns to surface the human motivations behind the numbers — turning raw data into retention strategies.',
    tools: ['Customer Segmentation', 'Churn Prediction', 'Cohort Analysis', 'Behavioral Economics', 'Decision Intelligence', 'KPI Design'],
  },
  {
    id: 'technical', category: 'Data & Engineering', icon: 'Code2', color: '#00B5AD',
    tagline: 'Building the analytical backbone.',
    description: 'I write clean, purposeful code that extracts insights and powers the models behind customer intelligence.',
    tools: ['Python', 'SQL', 'Pandas / NumPy', 'Scikit-learn', 'Power BI', 'Looker Studio'],
  },
  {
    id: 'product', category: 'Product & Systems', icon: 'Layers', color: '#D4AF37',
    tagline: 'From insight to working system.',
    description: 'I build products and workflows that operationalize data — from chatbots to dashboards to engagement platforms.',
    tools: ['Product Strategy', 'MVP Development', 'Systems Design', 'Typebot', 'REST APIs', 'Git / GitHub'],
  },
  {
    id: 'strategy', category: 'Strategy & Communication', icon: 'Target', color: '#D4AF37',
    tagline: 'Data that leaders actually act on.',
    description: 'I translate complex analytics into clear executive narratives — bridging the gap between technical findings and business decisions.',
    tools: ['Data Storytelling', 'Executive Reporting', 'Business Strategy', 'Systems Thinking', 'Stakeholder Engagement', 'Problem Framing'],
  },
]
