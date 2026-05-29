export type Project = {
  id: string; title: string; businessFrame: string; description: string
  tags: string[]; githubUrl: string; liveUrl?: string; imageFile?: string
}

export const projects: Project[] = [
  {
    id: 'sales-insights', title: 'Sales & Customer Insights',
    businessFrame: 'Uncovering buying patterns & revenue drivers',
    description: 'Analyzed customer behavior for an e-commerce business — identifying key purchase triggers, seasonal patterns, and high-value segments. Delivered executive HTML report deployed on Vercel.',
    tags: ['Python', 'Pandas', 'EDA', 'Customer Analytics', 'Power BI'],
    githubUrl: 'https://github.com/Eve-dev-tech/Sales-and-customer-insights',
    imageFile: 'project-sales-insights.png',
  },
  {
    id: 'credit-segmentation', title: 'Credit Card Customer Segmentation',
    businessFrame: 'Revealing financial personas to drive retention',
    description: 'Segmented credit card customers using clustering analysis — revealing 5 distinct behavioral personas that enable targeted retention and upsell strategies for financial services.',
    tags: ['Python', 'K-Means', 'Scikit-learn', 'RFM Analysis', 'Seaborn'],
    githubUrl: 'https://github.com/Eve-dev-tech/credit-card-Customer-data-segmentation',
    imageFile: 'project-credit-segmentation.png',
  },
  {
    id: 'car-prediction', title: 'Used Car Price Prediction',
    businessFrame: 'Translating market signals into pricing intelligence',
    description: 'Built a predictive pricing model using regression analysis and feature engineering — demonstrating how behavioral and market signals translate into confident, data-backed business forecasts.',
    tags: ['Python', 'Regression', 'Feature Engineering', 'Scikit-learn', 'Forecasting'],
    githubUrl: 'https://github.com/Eve-dev-tech/Predicting-used-car-prices',
    imageFile: 'project-car-prediction.png',
  },
]
