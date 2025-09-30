import { Star, ShoppingCart } from 'lucide-react';
import { Product } from '@/types/product';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
}

const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  return (
    <div className="product-card group p-6">
      <div className="relative mb-4">
        <img
          src={product.image}
          alt={product.name}
          className="product-image w-full h-64 object-cover rounded-lg"
        />
        {product.isOnSale && (
          <Badge className="absolute top-2 left-2 bg-accent text-accent-foreground">
            Sale
          </Badge>
        )}
        {product.isBestseller && (
          <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">
            Bestseller
          </Badge>
        )}
      </div>

      <div className="space-y-3">
        <div>
          <h3 className="font-semibold text-foreground text-lg leading-tight">
            {product.name}
          </h3>
          <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
            {product.description}
          </p>
        </div>

        <div className="flex items-center space-x-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(product.rating)
                    ? 'text-yellow-400 fill-current'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">
            ({product.reviews})
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-lg font-semibold text-primary">
              LKR{product.price}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                LKR {product.originalPrice}
              </span>
            )}
          </div>
        </div>

        <Button
          onClick={() => onAddToCart?.(product)}
          className="w-full btn-secondary group"
        >
          <ShoppingCart className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;