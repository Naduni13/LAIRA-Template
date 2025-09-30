import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, Star } from 'lucide-react';
import { saleProducts } from '@/data/products';
import { Link } from 'react-router-dom';
import productToner from '@/assets/product-v.jpg';


// Temporary inline product data for testing
const temporarySaleProducts = [
  ...saleProducts,
  {
    id: 4,
    name: "Vitamin C Brightening Serum",
    description: "Powerful antioxidant serum that brightens skin tone and reduces dark spots with 20% vitamin C.",
    price: 32.99,
    originalPrice: 45.99,
    rating: 4.8,
    reviews: 142,
    image: productToner
  }
];

const WeeklyDeals = () => {
  return (
    <section className="section-padding bg-gradient-subtle">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Clock className="h-6 w-6 text-accent mr-2" />
            <Badge variant="secondary" className="text-sm font-medium">
              Limited Time Offers
            </Badge>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
            Weekly Deals
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't miss out on these exclusive savings on our premium skincare essentials.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {temporarySaleProducts.map((product) => (
            <div key={product.id} className="card-premium p-6 relative overflow-hidden">
              {/* Sale Badge */}
              <div className="absolute top-4 right-4 z-10">
                <Badge className="bg-accent text-accent-foreground font-semibold">
                  {Math.round(((product.originalPrice! - product.price) / product.originalPrice!) * 100)}% OFF
                </Badge>
              </div>

              <div className="mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-lg hover-lift"
                />
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold text-lg text-foreground">
                  {product.name}
                </h3>
                
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

                <div className="flex items-center space-x-3">
                  <span className="text-2xl font-bold text-primary">
                    ${product.price}
                  </span>
                  <span className="text-lg text-muted-foreground line-through">
                    ${product.originalPrice}
                  </span>
                </div>

                <p className="text-sm text-muted-foreground line-clamp-2">
                  {product.description}
                </p>

                <Button className="w-full btn-secondary mt-4">
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/products?filter=sale">
            <Button variant="outline" className="btn-secondary">
              View All Deals
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WeeklyDeals;