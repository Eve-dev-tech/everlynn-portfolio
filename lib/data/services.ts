export type Service = {
  id: string; tier: 'Starter'|'Core'|'Growth'|'Custom'
  name: string; description: string; deliverables: string[]
  price: string; popular?: boolean; icon: string
}
export const services: Service[] = [
  { id:'audit', tier:'Starter', name:'Customer Insights Audit', icon:'Search',
    description:'One-time deep dive into your customer data. I surface what your numbers are actually telling you about why people buy — and why they leave.',
    deliverables:['Full data audit report','Key findings presentation','Strategic recommendations','Priority action roadmap'],
    price:'From $300' },
  { id:'segmentation', tier:'Core', name:'Customer Segmentation', icon:'Users',
    description:'RFM or behavioral segmentation. Know exactly who your customers are, what drives each group, and how to communicate with precision.',
    deliverables:['Segmentation model','Behavioral persona profiles','Targeting strategy','Interactive dashboard'],
    price:'From $600' },
  { id:'churn', tier:'Core', name:'Churn & Retention Analysis', icon:'TrendingDown',
    description:'Identify at-risk customers before they leave. I build the predictive model and dashboard your team needs to act before revenue walks out the door.',
    deliverables:['Churn prediction model','At-risk customer list','Retention playbook','Power BI dashboard'],
    price:'From $800' },
  { id:'retainer', tier:'Growth', name:'Behavioral Analytics Retainer', icon:'Repeat', popular:true,
    description:'Your ongoing analytics partner. Monthly insights, forecasts, and strategic guidance as your customer base grows and evolves.',
    deliverables:['Monthly analytics report','Predictive forecasts','Strategic recommendations','Priority Slack access'],
    price:'From $1,500/mo' },
  { id:'dashboard', tier:'Custom', name:'Custom Dashboard Build', icon:'BarChart2',
    description:'A Power BI or Looker Studio dashboard built specifically around your business metrics — so your team always knows what\'s happening and what to do next.',
    deliverables:['Custom dashboard','Training session','Full documentation','30-day support'],
    price:'Quote-based' },
  { id:'advisory', tier:'Custom', name:'Strategic Advisory', icon:'Lightbulb',
    description:'Executive-level consultation on customer strategy and data roadmap. For leaders who need clear direction, fast.',
    deliverables:['2-hour strategy session','Written recommendations','Data roadmap','Follow-up Q&A'],
    price:'Quote-based' },
]
