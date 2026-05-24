export type Experience = { id: string; role: string; company: string; period: string; description: string; highlights: string[]; type: 'full-time'|'startup'|'freelance'|'education' }
export const experiences: Experience[] = [
  { id:'aperta', role:'Co-Founder & Data Strategist', company:'ApertaCura', period:'2023 – Present', type:'startup',
    description:'Co-founded a wellness startup, leading all data strategy, customer behavior analytics, and business intelligence to drive product and growth decisions.',
    highlights:['Built customer segmentation models guiding product targeting','Designed behavioral analytics framework for user retention','Led data-driven decision making across the founding team'] },
  { id:'orchard', role:'Business Analyst & Strategy Lead', company:'Little Orchard', period:'2022 – 2023', type:'startup',
    description:'Drove analytics and business strategy for a consumer-facing business, translating data into actionable commercial decisions.',
    highlights:['Developed customer insights dashboards in Power BI','Identified key retention levers through behavioral data analysis','Produced strategic reports for leadership and investors'] },
  { id:'jasiri', role:'Entrepreneur in Residence', company:'Jasiri Talent Investor', period:'2022', type:'education',
    description:"Selected as an entrepreneur through Jasiri's talent investment program — building ventures alongside Africa's top emerging founders.",
    highlights:['Developed venture strategy under expert mentorship','Applied systems thinking to market opportunity analysis','Built networks across the African startup ecosystem'] },
]
