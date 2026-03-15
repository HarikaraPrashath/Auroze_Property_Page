'use client'

import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import ServiceCard from '@/components/service-card'
import PricingSection from '@/components/pricing-section'
import { motion } from 'framer-motion'

interface Service {
  id: string
  title: string
  image: string
  description: string
  details: string[]
}

interface ExtraService {
  title: string
  image: string
  description: string
}

const managementServices: Service[] = [
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
]

const additionalServices: Service[] = [
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
]

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
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-6 bg-gradient-to-r from-primary/20 via-secondary/10 to-primary/10 overflow-hidden">
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

      {/* Section 1: Management Services */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Core Management Services
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Streamline rent, tenants, and maintenance with our professional solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {managementServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50, rotateX: 15 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ delay: index * 0.15, type: 'spring', stiffness: 120 }}
              className="hover:scale-105 transition-transform duration-300 shadow-lg border border-border rounded-2xl overflow-hidden bg-white"
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section 2: Additional Services */}
      <section className="py-24 px-6 bg-foreground/5">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Support & Extra Services
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Specialized services to complement your property management needs
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {additionalServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, type: 'spring', stiffness: 120 }}
              className="hover:scale-105 transition-transform duration-300 shadow-lg border border-border rounded-2xl overflow-hidden bg-white"
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section 3: Extra Small Services */}
 <section className="py-24 px-6 bg-background">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-foreground">
        Additional Value Services
      </h2>
      <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
        Extra services designed to maximize efficiency and convenience
      </p>
    </div>

    {/* Clustered / Staggered Cards Layout */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {extraServices.map((service, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50, rotate: index % 2 === 0 ? -3 : 3 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ delay: index * 0.15, type: "spring", stiffness: 120 }}
          className={`relative bg-white rounded-3xl shadow-2xl overflow-hidden cursor-pointer hover:scale-105 hover:-translate-y-2 transition-all duration-300 ${
            index === 0 ? "md:col-span-2 lg:col-span-1" : ""
          }`}
        >
          {/* Image Top */}
          <div className="relative h-48 w-full">
            <img
              src={service.image}
              alt={service.title}
              className="object-cover w-full h-full rounded-t-3xl"
            />
          </div>

          {/* Content */}
          <div className="p-6 flex flex-col items-center text-center">
            <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-2">
              {service.title}
            </h3>
            <p className="text-muted-foreground text-sm md:text-base">
              {service.description}
            </p>
          </div>

          {/* Decorative floating circle */}
          <div className="absolute -top-5 -right-5 w-14 h-14 bg-primary/20 rounded-full animate-pulse"></div>
        </motion.div>
      ))}
    </div>
  </div>
</section>
      {/* Pricing */}
      <section className="py-24 px-6 bg-background">
        <PricingSection />
      </section>

      <Footer />
    </main>
  )
}