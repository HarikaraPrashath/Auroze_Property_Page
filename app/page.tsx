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
  const viewportSection = 'relative isolate w-full overflow-x-hidden lg:min-h-[90vh]';
  const compactSection = 'relative isolate w-full overflow-x-hidden';

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <section className={viewportSection}>
        <HeroCarousel />
      </section>
      <section className={viewportSection}>
        <AboutSection />
      </section>
      <section className={compactSection}>
        <TrustSection />
      </section>
      <section className={compactSection}>
        <RentalFeaturesSection />
      </section>
      <section className={viewportSection}>
        <ServiceOverviewSection />
      </section>
      <section className={compactSection}>
        <TestimonialsSection />
      </section>
      <section className={compactSection}>
        <PricingSection />
      </section>
      <section className={compactSection}>
        <CTASection />
      </section>
      <Footer />
    </main>
  );
}
