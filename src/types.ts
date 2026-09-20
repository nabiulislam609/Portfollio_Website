export type ServiceCategory = 'seo' | 'ads' | 'social' | 'creative' | 'local';

export interface ServiceItem {
  id: string;
  name: string;
  focus: string;
  category: ServiceCategory;
  description: string;
  deliverables: string[];
  iconName: string;
  metricHighlight: string;
}

export interface MetricStat {
  label: string;
  value: string;
  subtext: string;
  change?: string;
  positive?: boolean;
}

export interface PortfolioProject {
  id: string;
  title: string;
  client: string;
  industry: string;
  category: 'seo' | 'ads' | 'social' | 'design' | 'local';
  objective: string;
  servicesProvided: string[];
  strategy: string[];
  metrics: {
    label: string;
    value: string;
    trend: string;
    description: string;
  }[];
  duration: string;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  mockupType: 'dashboard' | 'social' | 'ads' | 'seo' | 'local' | 'brand';
  imageUrl: string;
  aspectRatio: string;
  isSample?: boolean;
}

export interface ToolItem {
  id: string;
  name: string;
  category: string;
  proficiency: number; // 0 to 100
  yearsOfExperience: string;
  description: string;
  certification?: string;
  keyUseCases: string[];
  iconType: string;
}

export interface AnalyticsDataPoint {
  month: string;
  organicTraffic: number;
  paidImpressions: number;
  roas: number;
  conversions: number;
  cpa: number;
}
