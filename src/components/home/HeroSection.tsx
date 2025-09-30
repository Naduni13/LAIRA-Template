import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-skincare.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury skincare products"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight">
          Elevate Your 
          <span className="block text-sage-green">Skincare Ritual</span>
        </h1>
        
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed opacity-90">
          Discover the power of nature with our premium herbal skincare collection. 
          Organic, cruelty-free, and dermatologist-tested for your daily wellness.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/products">
            <Button className="btn-hero px-8 py-4 text-lg">
              Shop Now
            </Button>
          </Link>
          <Link to="/skincare-routine">
            <Button 
              variant="outline" 
              className="px-8 py-4 text-lg border-white text-primary hover:bg-white hover:text-primary"
            >
              Build Your Routine
            </Button>
          </Link>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;