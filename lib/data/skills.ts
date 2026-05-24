export type SkillGroup = { category: string; icon: string; description: string; skills: { name: string; level: number }[] }
export const skillGroups: SkillGroup[] = [
  { category:'Technical', icon:'Code2', description:'Tools that power the analysis',
    skills:[{name:'Python',level:85},{name:'SQL',level:80},{name:'Power BI',level:78},{name:'Pandas / NumPy',level:83},{name:'Scikit-learn',level:75},{name:'Matplotlib / Seaborn',level:80},{name:'Jupyter Notebooks',level:88},{name:'Looker Studio',level:72}] },
  { category:'Strategic & Analytical', icon:'Brain', description:'How I think about problems',
    skills:[{name:'Behavioral Economics',level:85},{name:'Systems Thinking',level:82},{name:'Predictive Modeling',level:76},{name:'Customer Journey Analysis',level:84},{name:'A/B Testing',level:70},{name:'Forecasting',level:75},{name:'Business Strategy',level:80}] },
  { category:'Communication', icon:'MessageSquare', description:'How I deliver impact',
    skills:[{name:'Data Storytelling',level:88},{name:'Executive Presentations',level:82},{name:'Client Advisory',level:80},{name:'Written Communication',level:85},{name:'Problem Framing',level:84}] },
]
