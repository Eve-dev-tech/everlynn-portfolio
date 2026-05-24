export type Project = {
  id: string; title: string; businessFrame: string; description: string
  tags: string[]; githubUrl: string; liveUrl?: string; imageFile?: string
}
export const projects: Project[] = [
  {
    id: 'sales-insights', title: 'Sales & Customer Insights',
    businessFrame: 'Uncovering buying patterns & revenue drivers',
    description: 'Analyzed and predicted customer behavior for an e-commerce business — identifying key purchase triggers, seasonal patterns, and high-value customer segments that directly inform retention strategy.',
    tags: ['Python','Pandas','Scikit-learn','EDA','Customer Analytics'],
    githubUrl: 'https://github.com/Eve-dev-tech/Sales-and-customer-insights',
    imageFile: 'project-sales-insights.png',
  },
  {
    id: 'credit-segmentation', title: 'Credit Card Customer Segmentation',
    businessFrame: 'Revealing financial personas to drive retention',
    description: 'Segmented credit card customers using clustering analysis — revealing 5 distinct financial personas that enable targeted retention and upsell strategies.',
    tags: ['Python','K-Means','Seaborn','Behavioral Segmentation','RFM'],
    githubUrl: 'https://github.com/Eve-dev-tech/credit-card-Customer-data-segmentation',
    imageFile: 'project-credit-segmentation.png',
  },
  {
    id: 'car-prediction', title: 'Used Car Price Prediction',
    businessFrame: 'Forecasting market behavior with predictive modeling',
    description: 'Built a predictive pricing model for used vehicles — demonstrating how behavioral economics and market signals can be translated into actionable business forecasts.',
    tags: ['Python','Regression','Feature Engineering','Forecasting','Scikit-learn'],
    githubUrl: 'https://github.com/Eve-dev-tech/Predicting-used-car-prices',
    imageFile: 'project-car-prediction.png',
  },
]
