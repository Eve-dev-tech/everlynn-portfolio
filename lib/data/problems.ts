export type Problem = {
  id: string
  icon: string
  title: string
  description: string
}

export const problems: Problem[] = [
  {
    id: 'marketing', icon: 'Megaphone', title: 'Ineffective Marketing',
    description: 'Spending on campaigns without knowing which audiences, messages, or channels actually drive results.',
  },
  {
    id: 'churn', icon: 'UserMinus', title: 'High Customer Churn',
    description: 'Losing customers without understanding why they leave.',
  },
  {
    id: 'experience', icon: 'Frown', title: 'Poor Customer Experience',
    description: 'Knowing that customers are dropping off, but not exactly where, why, or what needs to change.',
  },
  {
    id: 'product', icon: 'Puzzle', title: 'Suboptimal Product Development',
    description: 'Building products, features, or services based on assumptions rather than what customers actually need, use, and value.',
  },
  {
    id: 'resources', icon: 'PieChart', title: 'Inefficient Resource Allocation',
    description: 'Investing time and money across customers and opportunities without knowing where the greatest value lies.',
  },
]
