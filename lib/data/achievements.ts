export type Achievement = {
  id: string; title: string; issuer: string; year: string
  description: string; icon: string; type: 'award'|'cert'|'recognition'|'milestone'
}

export const achievements: Achievement[] = [
  {
    id: 'digital-health', title: 'Top 30 Women in Digital Health in Africa', issuer: 'Digital Health Africa', year: '2025', type: 'award', icon: 'Star',
    description: 'Recognised for contribution and leadership in digital health innovation across the African continent.',
  },
  {
    id: 'jasiri', title: 'Jasiri Talent Investor Fellow', issuer: 'Jasiri — Rwanda', year: '2022', type: 'award', icon: 'Award',
    description: 'Selected from a highly competitive pool as one of Africa\'s emerging entrepreneurial talents.',
  },
  {
    id: 'mit', title: 'MicroMasters — Data Science & Machine Learning', issuer: 'MIT Schwarzman College of Computing', year: '2022', type: 'cert', icon: 'GraduationCap',
    description: 'Completed MIT\'s rigorous program on making data-driven decisions through machine learning.',
  },
  {
    id: 'azure', title: 'Microsoft Azure Certified Practitioner', issuer: 'Microsoft', year: '2020', type: 'cert', icon: 'Cloud',
    description: 'Certified in Microsoft Azure cloud services and architecture.',
  },
  {
    id: 'yali', title: 'Young African Leaders Initiative', issuer: 'YALI / U.S. Government', year: '2021', type: 'recognition', icon: 'Globe',
    description: 'Selected for YALI\'s Servant Leadership program — recognising emerging leaders across Africa.',
  },
  {
    id: 'mit-cyber', title: 'MITx Cybersecurity for Critical Infrastructure', issuer: 'MIT via edX', year: '2019', type: 'cert', icon: 'Shield',
    description: 'Completed MIT\'s cybersecurity program focused on protecting critical digital infrastructure.',
  },
]
