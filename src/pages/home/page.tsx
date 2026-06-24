import Navbar from '@/components/feature/Navbar';
import HeroSection from '@/components/feature/HeroSection';
import ProblemSection from '@/components/feature/ProblemSection';
import SolutionSection from '@/components/feature/SolutionSection';
import ImpactSection from '@/components/feature/ImpactSection';
import HowItWorksSection from '@/components/feature/HowItWorksSection';
import TestimonialsSection from '@/components/feature/TestimonialsSection';
import BlogSection from '@/components/feature/BlogSection';
import CTASection from '@/components/feature/CTASection';
import Footer from '@/components/feature/Footer';
import CookieBanner from '@/components/feature/CookieBanner';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background-50">
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <ImpactSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <BlogSection />
        <CTASection />
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
}
