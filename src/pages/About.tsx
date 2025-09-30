import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Leaf, Award, Heart, Recycle } from 'lucide-react';
import about from '@/assets/about.jpg';

const About = () => {
  const values = [
    {
      icon: Leaf,
      title: 'Natural Ingredients',
      description:
        'We source the finest natural and organic ingredients from sustainable farms worldwide to create products that nourish your skin naturally.',
    },
    {
      icon: Award,
      title: 'Dermatologist Tested',
      description:
        'All our products undergo rigorous testing by certified dermatologists to ensure they are safe and effective for all skin types.',
    },
    {
      icon: Heart,
      title: 'Cruelty-Free',
      description:
        'We are committed to ethical beauty practices and never test our products on animals. Beauty should never come at the cost of animal welfare.',
    },
    {
      icon: Recycle,
      title: 'Sustainable Packaging',
      description:
        'Our eco-friendly packaging is designed to minimize environmental impact while maintaining the integrity of our premium products.',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="section-padding bg-gradient-subtle">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
              About LAIRA Sri Lanka
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Founded with a vision to revolutionize skincare through the power of nature, 
              we are dedicated to creating premium, natural beauty solutions that honor both 
              your skin and our planet.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="section-padding">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Born from a passion for natural wellness and years of research into 
                    traditional herbal remedies, Miracle Natural Herbal Care began as a 
                    quest to bridge ancient wisdom with modern skincare science.
                  </p>
                  <p>
                    Our founders, inspired by their grandmother's time-tested herbal recipes, 
                    embarked on a journey to create a skincare line that would harness the 
                    healing power of nature without compromising on luxury or effectiveness.
                  </p>
                  <p>
                    Today, we continue to honor this legacy by carefully crafting each 
                    product with premium natural ingredients, ensuring that every bottle 
                    delivers the transformative results your skin deserves.
                  </p>
                </div>
              </div>

              {/* Image instead of quote */}
              <div className="flex justify-center">
                <img
                  src={about} 
                  alt="Our Story - Herbal Care"
                  className="rounded-2xl shadow-lg w-full max-w-md object-cover 
                             hover:scale-105 transition-transform duration-700 ease-out 
                             animate-fade-in"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
{/* Values Section */}
<section className="section-padding bg-gradient-card">
  <div className="container mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
        Our Core Values
      </h2>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
        Everything we do is guided by our commitment to natural beauty, 
        ethical practices, and exceptional quality.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {values.map((value, index) => (
        <Card
          key={index}
          className="card-premium transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
        >
          <CardContent className="p-6 text-center">
            <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 transition-transform duration-500 hover:rotate-12">
              <value.icon className="h-8 w-8 text-accent-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-3 hover:text-primary transition-colors">
              {value.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {value.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>


        {/* Mission Section */}
        <section className="section-padding">
          <div className="container mx-auto text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-8">
                Our Mission
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                To empower individuals with natural, effective skincare solutions that 
                celebrate the beauty of authentic ingredients while promoting sustainable 
                practices for a healthier planet.
              </p>
 
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;