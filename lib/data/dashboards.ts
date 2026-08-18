export type Dashboard = {
  id: string
  title: string
  description: string
  imageFile: string
}

export const dashboards: Dashboard[] = [
  {
    id: 'customer-insights',
    title: 'Customer Insights',
    description: 'Behavioral and demographic breakdown of the customer base, surfaced for executive decision-making.',
    imageFile: 'customerinsights.png',
  },
  {
    id: 'customer-behaviour-patterns',
    title: 'Customer Behaviour Patterns',
    description: 'Purchase and engagement patterns tracked over time to reveal what drives customer decisions.',
    imageFile: 'customerbehaviour patterns.png',
  },
  {
    id: 'product-performance-overview',
    title: 'Product Performance Overview',
    description: 'A consolidated view of product-level performance across revenue, volume, and growth metrics.',
    imageFile: 'productperformanceoverview.png',
  },
  {
    id: 'product-lifecycle-performance',
    title: 'Product Lifecycle Performance',
    description: 'Tracking how products perform across each stage of their lifecycle, from launch to decline.',
    imageFile: 'productlifecycleperformance.png',
  },
  {
    id: 'profitability-and-churn',
    title: 'Profitability & Customer Churn',
    description: 'Connecting profitability trends to churn risk, so retention efforts focus where they matter most.',
    imageFile: 'profitabilityandcustomerchurn.png',
  },
]
