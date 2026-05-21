
export interface Service {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  benefits: string[];
  solutions: string[];
  icon: string;
  imageUrl: string;
  galleryImages?: string[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  location: string;
  year: string;
  imageUrl: string;
  gallery?: string[];
}

export interface Metric {
  label: string;
  value: string;
}

export interface Certification {
  id: string;
  name: string;
  description: string;
  logoUrl: string;
  process?: string;
  meaning?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  imageUrl: string;
}
