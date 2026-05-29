export type Experience = {
  id: string; role: string; company: string; period: string
  description: string; highlights: string[]; type: 'full-time'|'startup'|'freelance'|'education'|'institution'
}

export const experiences: Experience[] = [
  {
    id: 'aperta', role: 'Senior Software Developer & Product Lead', company: 'ApertaCura', period: '2023 – Present', type: 'startup',
    description: 'Health and wellness venture focused on digital engagement, behavioral data collection, and customer-centered health experiences. Led end-to-end product development from concept to deployed systems.',
    highlights: [
      'Built chatbot-driven engagement experiences using Typebot and Google Apps Script',
      'Designed behavioral data capture systems to support predictive insight initiatives',
      'Translated business requirements into technical implementation across the full product lifecycle',
      'Coordinated product iteration cycles driven by user feedback and behavioral signals',
    ],
  },
  {
    id: 'orchard', role: 'Founder · Product & Growth Lead', company: 'Little Orchard', period: '2022 – 2023', type: 'startup',
    description: 'Consumer brand venture focused on healthy food experiences. Built the venture from concept — leading product development, consumer research, and market testing.',
    highlights: [
      'Developed early go-to-market foundations and product identity',
      'Explored behavioral drivers of customer purchasing decisions',
      'Built brand strategy, packaging concepts, and operations coordination',
    ],
  },
  {
    id: 'consulting', role: 'Customer Behaviour Consultant', company: 'Independent Analytics Projects', period: '2023 – Present', type: 'freelance',
    description: 'Delivered end-to-end customer behavior and business analytics projects, producing executive-ready insights and interactive reporting.',
    highlights: [
      'Delivered EDA, customer behavior analysis, and retention recommendations',
      'Produced executive HTML reports and interactive analytics storytelling',
      'Applied segmentation, lifecycle analysis, and strategic recommendation frameworks',
    ],
  },
  {
    id: 'mpesa', role: 'Data Science Associate', company: 'M-Pesa Africa', period: '2022', type: 'institution',
    description: 'Exposure to analytical workflows, customer insight generation, and data-driven decision support inside one of Africa\'s most impactful fintech environments.',
    highlights: [
      'Supported customer insight generation and business reporting',
      'Gained deep exposure to fintech analytics environments and data workflows',
    ],
  },
  {
    id: 'knbs', role: 'Data Analyst Intern', company: 'Kenya National Bureau of Statistics', period: '2021', type: 'institution',
    description: 'Applied statistical analysis and data preparation within Kenya\'s national public-sector analytics infrastructure.',
    highlights: [
      'Data cleaning, statistical analysis, and dataset preparation',
      'Supported survey data analysis and evidence-based reporting',
    ],
  },
  {
    id: 'jasiri', role: 'Fellow · Entrepreneur in Residence', company: 'Jasiri Talent Investor — Rwanda', period: '2022', type: 'education',
    description: 'Selected from a competitive pool as one of Africa\'s emerging entrepreneurial talents. Built ventures and developed strategic thinking alongside the continent\'s top founders.',
    highlights: [
      'Focused on venture building, founder development, and ecosystem collaboration',
      'Developed strategic experimentation frameworks under expert mentorship',
      'Built networks across the pan-African startup and investor ecosystem',
    ],
  },
]
