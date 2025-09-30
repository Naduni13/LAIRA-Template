import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronRight, Sun, Moon, Plus, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import Video from '@/assets/vid.mp4';
import Thumbnail from '@/assets/screenshot.png';

const availableProducts = [
  { id: 1, name: 'Gentle Cleanser', category: 'cleanser', description: 'Removes impurities without stripping', price: 34.99 },
  { id: 2, name: 'Balancing Toner', category: 'toner', description: 'Restores pH and preps skin', price: 42.99 },
  { id: 3, name: 'Vitamin C Serum', category: 'serum', description: 'Brightens and protects from damage', price: 89.99 },
  { id: 4, name: 'Hyaluronic Serum', category: 'serum', description: 'Intense hydration boost', price: 75.99 },
  { id: 5, name: 'Daily Moisturizer SPF', category: 'moisturizer', description: 'Hydrates with sun protection', price: 48.99 },
  { id: 6, name: 'Night Cream', category: 'moisturizer', description: 'Rich overnight repair', price: 75.99 },
  { id: 7, name: 'Nourishing Face Oil', category: 'oil', description: 'Deep nourishment and repair', price: 65.99 },
  { id: 8, name: 'Eye Cream', category: 'eye', description: 'Targets fine lines and puffiness', price: 54.99 }
];

const RoutineBuilder = () => {
  const [activeRoutine, setActiveRoutine] = useState<'morning' | 'evening'>('morning');
  const [morningRoutine, setMorningRoutine] = useState<typeof availableProducts>([]);
  const [eveningRoutine, setEveningRoutine] = useState<typeof availableProducts>([]);

  const currentRoutine = activeRoutine === 'morning' ? morningRoutine : eveningRoutine;
  const setCurrentRoutine = activeRoutine === 'morning' ? setMorningRoutine : setEveningRoutine;

  const addToRoutine = (product: typeof availableProducts[0]) => {
    if (!currentRoutine.find(p => p.id === product.id)) {
      setCurrentRoutine([...currentRoutine, product]);
    }
  };

  const removeFromRoutine = (productId: number) => {
    setCurrentRoutine(currentRoutine.filter(p => p.id !== productId));
  };

  const getTotalPrice = () => {
    return currentRoutine.reduce((sum, product) => sum + product.price, 0);
  };

  const getFilteredProducts = () => {
    if (activeRoutine === 'morning') {
      return availableProducts.filter(p => p.category !== 'oil' && p.name !== 'Night Cream');
    }
    return availableProducts.filter(p => p.name !== 'Daily Moisturizer SPF');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="section-padding bg-gradient-subtle">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
              Build Your Perfect Routine
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Create a personalized skincare routine tailored to your needs. 
              Choose products for your morning and evening rituals.
            </p>
          </div>
        </section>

        {/* Video & Routine Section */}
        <section className="section-padding">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left Side - Video */}
              <div className="lg:sticky lg:top-8">
                <div className="card-premium overflow-hidden">
                  <div className="bg-black">
                    <video
                      className="w-full h-auto max-h-80"
                      autoPlay
                      muted
                      loop
                      playsInline
                      controls
                    >
                      <source
                        src={Video}
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-serif font-bold text-primary mb-2">
                      How to Build Your Perfect Routine
                    </h3>
                    <p className="text-muted-foreground">
                      Watch our skincare expert guide you through creating a personalized 
                      routine that works for your unique skin needs.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Side - Routine Builder */}
              <div>
                {/* Routine Toggle */}
                <div className="flex justify-center mb-8">
                  <div className="bg-secondary rounded-full p-1 flex">
                    <Button
                      variant={activeRoutine === 'morning' ? 'default' : 'ghost'}
                      className={`rounded-full px-6 py-2 flex items-center space-x-2 ${
                        activeRoutine === 'morning' ? 'bg-primary text-primary-foreground' : ''
                      }`}
                      onClick={() => setActiveRoutine('morning')}
                    >
                      <Sun className="h-4 w-4" />
                      <span>Morning Routine</span>
                    </Button>
                    <Button
                      variant={activeRoutine === 'evening' ? 'default' : 'ghost'}
                      className={`rounded-full px-6 py-2 flex items-center space-x-2 ${
                        activeRoutine === 'evening' ? 'bg-primary text-primary-foreground' : ''
                      }`}
                      onClick={() => setActiveRoutine('evening')}
                    >
                      <Moon className="h-4 w-4" />
                      <span>Evening Routine</span>
                    </Button>
                  </div>
                </div>

                {/* Available Products */}
                <div className="mb-8">
                  <h2 className="text-2xl font-serif font-bold text-primary mb-6">
                    Available Products
                  </h2>
                  <div className="space-y-4 max-h-96 overflow-y-auto">
                    {getFilteredProducts().map((product) => (
                      <Card key={product.id} className="card-premium">
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex-1">
                              <h3 className="font-semibold text-foreground mb-1">
                                {product.name}
                              </h3>
                              <p className="text-sm text-muted-foreground mb-2">
                                {product.description}
                              </p>
                              <span className="text-primary font-semibold">
                                ${product.price.toFixed(2)}
                              </span>
                            </div>
                            <Button
                              size="sm"
                              onClick={() => addToRoutine(product)}
                              disabled={currentRoutine.find(p => p.id === product.id) !== undefined}
                              className="ml-4"
                            >
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Current Routine */}
                <div>
                  <h2 className="text-2xl font-serif font-bold text-primary mb-6">
                    Your {activeRoutine} Routine
                  </h2>
                  
                  {currentRoutine.length === 0 ? (
                    <Card className="card-premium">
                      <CardContent className="p-8 text-center">
                        <p className="text-muted-foreground">
                          Start building your {activeRoutine} routine by adding products from above.
                        </p>
                      </CardContent>
                    </Card>
                  ) : (
                    <div className="space-y-4 mb-6">
                      {currentRoutine.map((product, index) => (
                        <Card key={product.id} className="card-premium">
                          <CardContent className="p-4">
                            <div className="flex items-center space-x-4">
                              <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold text-sm">
                                {index + 1}
                              </div>
                              <div className="flex-1">
                                <h3 className="font-semibold text-foreground mb-1">
                                  {product.name}
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                  {product.description}
                                </p>
                              </div>
                              <span className="text-primary font-semibold">
                                ${product.price.toFixed(2)}
                              </span>
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => removeFromRoutine(product.id)}
                                className="ml-2"
                              >
                                <X className="h-4 w-4" />
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  )}

                  {/* Summary */}
                  {currentRoutine.length > 0 && (
                    <div className="bg-gradient-card p-6 rounded-2xl">
                      <div className="text-center mb-4">
                        <Badge variant="secondary" className="mb-2">
                          {activeRoutine} routine ({currentRoutine.length} products)
                        </Badge>
                        <h3 className="text-2xl font-serif font-bold text-primary mb-2">
                          Total: ${getTotalPrice().toFixed(2)}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          Save 15% when you purchase the complete routine
                        </p>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Button className="btn-hero">
                          Add Routine to Cart
                        </Button>
                        <Link to="/products">
                          <Button variant="outline" className="btn-secondary w-full sm:w-auto">
                            Browse More Products
                          </Button>
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default RoutineBuilder;