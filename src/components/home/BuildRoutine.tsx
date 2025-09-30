import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ChevronRight, Sun, Moon } from 'lucide-react';
import { Link } from 'react-router-dom';

const routineSteps = {
  morning: [
    { step: 1, name: 'Gentle Cleanser', description: 'Start with a clean canvas', price: 'LKR1500' },
    { step: 2, name: 'Vitamin C Serum', description: 'Brighten and protect', price: 'LKR1500' },
    { step: 3, name: 'Daily Moisturizer', description: 'Hydrate with SPF protection', price: 'LKR1500' },
  ],
  evening: [
    { step: 1, name: 'Gentle Cleanser', description: 'Remove the day away', price: 'LKR1500' },
    { step: 2, name: 'Balancing Toner', description: 'Refresh and balance', price: 'LKR1500' },
    { step: 3, name: 'Nourishing Face Oil', description: 'Deep overnight repair', price: 'LKR1500' },
    { step: 4, name: 'Night Cream', description: 'Regenerate while you sleep', price: 'LKR1500' },
  ]
};

const BuildRoutine = () => {
  const [activeRoutine, setActiveRoutine] = useState<'morning' | 'evening'>('morning');

  const currentRoutine = routineSteps[activeRoutine];
  const totalPrice = currentRoutine.reduce((sum, item) => sum + parseFloat(item.price.replace('$', '')), 0);

  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
            Build Your Perfect Routine
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let us guide you through a personalized skincare routine tailored to your needs.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
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

          {/* Routine Steps */}
          <div className="space-y-6 mb-8">
            {currentRoutine.map((item, index) => (
              <div 
                key={index}
                className="flex items-center space-x-6 p-6 card-premium"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold">
                    {item.step}
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {item.name}
                  </h3>
                  <p className="text-muted-foreground">
                    {item.description}
                  </p>
                </div>
                
                <div className="flex-shrink-0 text-right">
                  <span className="text-lg font-semibold text-primary">
                    {item.price}
                  </span>
                </div>
                
                <ChevronRight className="h-5 w-5 text-muted-foreground" />
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="bg-gradient-card p-8 rounded-2xl text-center">
            <div className="mb-4">
              <Badge variant="secondary" className="mb-2">
                Complete {activeRoutine} routine
              </Badge>
              <h3 className="text-2xl font-serif font-bold text-primary mb-2">
                Total: LKR 1500              </h3>
              <p className="text-muted-foreground">
                Save 15% when you purchase the complete routine
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-hero">
                Add Complete Routine to Cart
              </Button>
              <Link to="/skincare-routine">
                <Button variant="outline" className="btn-secondary">
                  Customize Your Routine
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuildRoutine;