import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/home/HeroSection';
import WeeklyDeals from '@/components/home/WeeklyDeals';
import TrendingProducts from '@/components/home/TrendingProducts';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import BuildRoutine from '@/components/home/BuildRoutine';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <WeeklyDeals />
        <TrendingProducts />
        <WhyChooseUs />
        <BuildRoutine />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
