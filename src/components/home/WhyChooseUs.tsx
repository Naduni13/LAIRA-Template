import { Leaf, Heart, Award, Recycle } from 'lucide-react';

const features = [
  {
    icon: Leaf,
    title: 'Organic Ingredients',
    description: 'Carefully sourced natural and organic botanicals for pure, effective skincare.'
  },
  {
    icon: Heart,
    title: 'Cruelty-Free',
    description: 'Never tested on animals. Our commitment to ethical beauty practices.'
  },
  {
    icon: Award,
    title: 'Dermatologist Tested',
    description: 'Clinically tested and approved by skin health professionals for safety and efficacy.'
  },
  {
    icon: Recycle,
    title: 'Sustainable',
    description: 'Eco-friendly packaging and sustainable practices for a better planet.'
  }
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-secondary/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
            Why Our Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're committed to creating skincare that's not just effective, but also ethical and sustainable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center group hover-lift"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6 group-hover:bg-accent/20 transition-colors">
                <feature.icon className="h-8 w-8 text-accent" />
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block p-8 bg-gradient-card rounded-2xl shadow-[var(--shadow-soft)]">
            <h3 className="text-2xl font-serif font-bold text-primary mb-4">
              Join Thousands of Happy Customers
            </h3>
            <p className="text-muted-foreground mb-6">
              "The best skincare I've ever used. My skin feels amazing!" - Sarah M.
            </p>
            <div className="flex justify-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-xl">★</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;