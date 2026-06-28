export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: Category;
  image: string;
  isPopular?: boolean;
  tags?: string[];
}

export type Category =
  | 'Custom Cakes'
  | 'Birthday Cakes'
  | 'Wedding Cakes'
  | 'Cupcakes'
  | 'Cookies'
  | 'Donuts'
  | 'Cheesecakes'
  | 'Brownies'
  | 'Macarons'
  | 'Fresh Bread'
  | 'Croissants'
  | 'Muffins';

export interface CartItem {
  product: Product;
  quantity: number;
  customNotes?: string;
  cakeCustomization?: CakeCustomization;
}

export interface CakeCustomization {
  tiers: number;
  flavor: string;
  frosting: string;
  hasGoldLeaf: boolean;
  hasFlowers: boolean;
  inscription: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  rating: number;
  avatar: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface GalleryItem {
  id: string;
  image: string;
  title: string;
  category: string;
}
