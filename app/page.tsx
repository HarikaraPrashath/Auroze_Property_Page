import dynamic from 'next/dynamic'
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import HeroCarousel from '@/components/hero-carousel';

// Lazy load components below the fold for better performance
const AboutSection = dynamic(() => import('@/components/about-section'), {
  loading: () => <div className="min-h-[50vh] flex items-center justify-center">Loading...</div>
})
const TrustSection = dynamic(() => import('@/components/trust-section'), {
  loading: () => <div className="min-h-[30vh] flex items-center justify-center">Loading...</div>
})
const ServiceOverviewSection = dynamic(() => import('@/components/service-overview-section'), {
  loading: () => <div className="min-h-[60vh] flex items-center justify-center">Loading...</div>
})
const TestimonialsSection = dynamic(() => import('@/components/testimonials-section'), {
  loading: () => <div className="min-h-[40vh] flex items-center justify-center">Loading...</div>
})
const PricingSection = dynamic(() => import('@/components/pricing-section'), {
  loading: () => <div className="min-h-[50vh] flex items-center justify-center">Loading...</div>
})
const CTASection = dynamic(() => import('@/components/cta-section'), {
  loading: () => <div className="min-h-[30vh] flex items-center justify-center">Loading...</div>
})

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
