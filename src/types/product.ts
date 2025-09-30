export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  skinType: string[];
  isBestseller: boolean;
  isOnSale: boolean;
  rating: number;
  reviews: number;
}

export interface CartItem extends Product {
  quantity: number;
}

export type SkinType = 'dry' | 'oily' | 'combination' | 'sensitive' | 'normal';
export type Category = 'cleanser' | 'toner' | 'serum' | 'moisturizer' | 'mask' | 'sunscreen';
export type SortOption = 'popularity' | 'newest' | 'price-low' | 'price-high' | 'rating';