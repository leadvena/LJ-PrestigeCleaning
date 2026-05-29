export interface Service {
  id: string;
  title: string;
  description: string;
  details: string[];
  iconName: string;
  imageUrl?: string;
}

export interface TrustBadge {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  serviceType: string;
  comment: string;
  location: string;
}

export interface EstimateFormData {
  name: string;
  phone: string;
  email: string;
  serviceType: string;
  preferredContact: string;
  message: string;
}
