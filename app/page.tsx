import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import HeroCarousel from '@/components/hero-carousel';
import AboutSection from '@/components/about-section';
import TrustSection from '@/components/trust-section';
import RentalFeaturesSection from '@/components/rental-features-section';
import ServiceOverviewSection from '@/components/service-overview-section';
import TestimonialsSection from '@/components/testimonials-section';
import PricingSection from '@/components/pricing-section';
import CTASection from '@/components/cta-section';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="relative w-full min-h-screen">
        <HeroCarousel />
      </div>
      <AboutSection />
      <TrustSection />
      <RentalFeaturesSection />
      <ServiceOverviewSection />
      <TestimonialsSection />
      <PricingSection />
      <CTASection />
      <Footer />
    </main>
  );
}
