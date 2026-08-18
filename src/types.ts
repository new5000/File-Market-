export type ProductCategory =
  | 'Video Bundles'
  | 'Online Courses'
  | 'E-Books'
  | 'Premium Apps'
  | 'Premium PC Software'
  | 'AI Prompts'
  | 'PHP Scripts'
  | 'Blogger Templates'
  | 'Others';

export type Currency = 'BDT' | 'USD';

export interface Product {
  id: string;
  title: string;
  category: ProductCategory;
  priceBDT: number;
  priceUSD: number;
  originalPriceBDT: number;
  thumbnail: string;
  badge?: string;
  rating: number;
  reviewsCount: number;
  fileSize: string;
  fileFormat: string;
  license: string;
  version?: string;
  instantDownloadLink: string;
  description: string;
  features: string[];
  demoUrl?: string;
  updatedDate: string;
  downloadsCount: number;
}

export type PaymentMethod = 'bKash' | 'Nagad' | 'Binance';

export interface OrderState {
  product: Product | null;
  paymentMethod: PaymentMethod;
  customerPhone: string;
  customerEmail: string;
  trxId: string;
  isVerified: boolean;
}
