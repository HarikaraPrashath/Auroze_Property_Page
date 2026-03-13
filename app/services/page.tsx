import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import ServiceCard from '@/components/service-card';
import PricingSection from '@/components/pricing-section';

export const metadata = {
  title: 'Our Services - ProManage',
  description: 'Comprehensive property management services including rent management, maintenance, tenant management, housekeeping, legal compliance, and more.',
};

interface Service {
  id: string;
  title: string;
  image: string;
  description: string;
  details: string[];
}

interface ExtraService {
  title: string;
  image: string;
  description: string;
}

const services: Service[] = [
  {
    id: 'rent-management',
    title: 'Rent Management',
    image: '/rent.jpg',
    description: 'Timely rent collection, invoicing, and transparent reporting.',
    details: [
      'Automated rent reminders',
      'Online payment options',
      'Monthly statements',
      'Late payment follow-up',
    ],
  },
  {
    id: 'tenant-management',
    title: 'Tenant Management',
    image: 'tenant_1.jpg',
    description: 'Tenant screening, onboarding, and relationship management.',
    details: [
      'Background checks',
      'Lease agreements',
      'Move-in/move-out coordination',
      'Tenant support',
    ],
  },
  {
    id: 'maintenance',
    title: 'Maintenance',
    image: '/maintenance.jpg',
    description: 'Regular maintenance, repairs, and emergency response.',
    details: [
      'Scheduled inspections',
      '24/7 emergency repairs',
      'Vendor management',
      'Cleaning services',
    ],
  },
  {
    id: 'housekeeping',
    title: 'Housekeeping',
    image: '/housekeeping.jpg',
    description: 'Professional cleaning and housekeeping for your property.',
    details: [
      'Routine cleaning',
      'Deep cleaning',
      'Laundry services',
      'Restocking supplies',
    ],
  },
  {
    id: 'legal-compliance',
    title: 'Legal Compliance',
    image: '/legal_1.jpg',
    description: 'Ensuring all legal and regulatory requirements are met.',
    details: [
      'Lease compliance',
      'Eviction handling',
      'Legal documentation',
      'Regulatory updates',
    ],
  },
  {
    id: 'property-inspections',
    title: 'Property Inspections',
    image: '/apartment.jpg',
    description: 'Routine and special inspections for property upkeep.',
    details: [
      'Move-in/move-out inspections',
      'Annual inspections',
      'Condition reports',
      'Photo documentation',
    ],
  },
];

const extraServices: ExtraService[] = [
  {
    title: 'Utility Bill Payments',
    image: '/Bill.jpg',
    description: 'Managing and paying all utility bills on your behalf.',
  },
  {
    title: 'Furnishing & Setup',
    image: '/setup.jpg',
    description: 'Coordinating furnishing and setup for new properties.',
  },
  {
    title: 'Renovation Management',
    image: '/repaire.jpg',
    description: 'Overseeing renovations and upgrades for your property.',
  },
  {
    title: 'Key Holding',
    image: '/hold.jpg',
    description: 'Secure key holding and handover services.',
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background font-sans">
      <Navbar />

      {/* Hero Section here */}
      <section className="relative pt-32 pb-24 px-6 bg-linear-to-r from-primary/20 via-secondary/10 to-primary/10 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold text-foreground mb-6 leading-tight">
            Our Complete Service Suite
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need for professional property management
          </p>
        </div>
        {/* Decorative shapes */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-secondary/10 rounded-full blur-3xl animate-pulse"></div>
      </section>

      {/* Main Services */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service) => (
              <div
                key={service.id}
                className="hover:scale-105 transition-transform duration-300 shadow-lg border border-border rounded-2xl overflow-hidden bg-white"
              >
                <ServiceCard service={service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Extra Services */}
      <section className="py-24 px-6 bg-foreground/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Additional Services
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Specialized services to complete your property management needs
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {extraServices.map((service, index) => (
              <div
                key={index}
                className="p-8 rounded-3xl bg-white border border-border hover:border-primary/50 hover:shadow-2xl transition-all duration-300 text-center"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-20 h-20 mx-auto mb-5"
                />
                <h3 className="font-semibold text-foreground text-xl mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm md:text-base">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 px-6 bg-background">
        <PricingSection />
      </section>

      <Footer />
    </main>
  );
}