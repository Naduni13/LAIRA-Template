import { Product } from '@/types/product';
import productSerum from '@/assets/product-serum.jpg';
import productCream from '@/assets/product-cream.jpg';
import productCleanser from '@/assets/product-cleanser.jpg';
import productToner from '@/assets/product-toner.jpg';

export const products: Product[] = [
  {
    id: '1',
    name: 'Hydrating Vitamin C Serum',
    description: 'Brightening serum with natural vitamin C and hyaluronic acid for radiant, youthful skin.',
    price: 1500,
    originalPrice: 3000,
    image: productSerum,
    category: 'serum',
    skinType: ['dry', 'normal', 'combination'],
    isBestseller: true,
    isOnSale: true,
    rating: 4.8,
    reviews: 124
  },
  {
    id: '2',
    name: 'Regenerating Night Cream',
    description: 'Rich, nourishing night cream with organic botanicals to repair and restore while you sleep.',
    price: 1500,
    image: productCream,
    category: 'moisturizer',
    skinType: ['dry', 'mature', 'normal'],
    isBestseller: true,
    isOnSale: false,
    rating: 4.9,
    reviews: 89
  },
  {
    id: '3',
    name: 'Gentle Herbal Cleanser',
    description: 'Mild, sulfate-free cleanser with chamomile and green tea for all skin types.',
    price: 1500,
    image: productCleanser,
    category: 'cleanser',
    skinType: ['sensitive', 'dry', 'normal'],
    isBestseller: false,
    isOnSale: false,
    rating: 4.6,
    reviews: 156
  },
  {
    id: '4',
    name: 'Balancing Rose Toner',
    description: 'Alcohol-free toner with rose water and witch hazel to balance and refresh your skin.',
    price: 1500,
    originalPrice: 1900,
    image: productToner,
    category: 'toner',
    skinType: ['oily', 'combination', 'normal'],
    isBestseller: false,
    isOnSale: true,
    rating: 4.5,
    reviews: 78
  },
  {
    id: '5',
    name: 'Nourishing Face Oil',
    description: 'Lightweight blend of jojoba, rosehip, and argan oils for deep hydration.',
    price:  1500,
    image: productSerum,
    category: 'serum',
    skinType: ['dry', 'mature', 'normal'],
    isBestseller: true,
    isOnSale: false,
    rating: 4.7,
    reviews: 203
  },
  {
    id: '6',
    name: 'Daily Moisture Lotion',
    description: 'Lightweight, fast-absorbing moisturizer with SPF 30 for daily protection.',
    price: 1500,
    image: productCream,
    category: 'moisturizer',
    skinType: ['normal', 'combination', 'oily'],
    isBestseller: true,
    isOnSale: false,
    rating: 4.4,
    reviews: 167
  }
];

export const featuredProducts = products.filter(p => p.isBestseller).slice(0, 4);
export const saleProducts = products.filter(p => p.isOnSale);