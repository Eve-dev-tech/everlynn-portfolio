export type Achievement = { id: string; title: string; issuer: string; year: string; description: string; icon: string; type: 'award'|'cert'|'recognition'|'milestone' }
export const achievements: Achievement[] = [
  { id:'jasiri', title:'Jasiri Talent Investor — Selected Entrepreneur', issuer:'Jasiri', year:'2022', type:'award', icon:'Star',
    description:"Selected from a highly competitive pool as one of Africa's emerging entrepreneurial talents for Jasiri's investment program." },
  { id:'projects', title:'3 End-to-End Analytics Projects', issuer:'GitHub', year:'2024–2025', type:'milestone', icon:'Code2',
    description:'Delivered 3 published analytical projects combining behavioral psychology, predictive modeling, and business strategy.' },
  { id:'vision', title:'5-Year Strategic Roadmap in Execution', issuer:'Self-directed', year:'2025', type:'milestone', icon:'Map',
    description:'Executing a structured 5-year plan from Business Analytics Practitioner to globally recognized Behavioral Data Strategist.' },
]
