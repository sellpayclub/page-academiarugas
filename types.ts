export interface Plan {
  title: string;
  price: string;
  period?: string;
  features: string[];
  cta: string;
  link: string;
  description?: string;
  isPopular?: boolean;
  highlight?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  id: number;
  name: string;
  text: string;
  image: string;
}