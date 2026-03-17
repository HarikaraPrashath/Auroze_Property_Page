'use client'

import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import ServiceCard from '@/components/service-card'
import PricingSection from '@/components/pricing-section'
import { motion, useScroll, useTransform } from 'framer-motion'
import { easeInOut } from 'framer-motion'
import { useRef } from 'react'
import { 
  Sparkles, ArrowRight, CheckCircle, Zap, Shield, 
  Home, Key, Wrench, FileText, Award, 
  Clock, Users, TrendingUp 
} from 'lucide-react'

interface Service {
  id: string
  title: string
  image: string
  description: string
  details: string[]
  icon?: any
}

interface ExtraService {
  title: string
  image: string
  description: string
  icon?: any
}

const managementServices: Service[] = [
  {
    id: 'rent-management',
    title: 'Rent Management',
    image: '/rent.jpg',
    description: 'Timely rent collection, invoicing, and transparent reporting.',
    icon: TrendingUp,
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
    image: '/tenant_1.jpg',
    description: 'Tenant screening, onboarding, and relationship management.',
    icon: Users,
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
    icon: Wrench,
    details: [
      'Scheduled inspections',
      '24/7 emergency repairs',
      'Vendor management',
      'Cleaning services',
    ],
  },
]

const extraServices: ExtraService[] = [
  {
    title: 'Housekeeping',
    image: '/housekeeping.jpg',
    description: 'Professional cleaning and housekeeping for your property.',
    icon: Home,
  },
  {
    title: 'Legal Compliance',
    image: '/legal_1.jpg',
    description: 'Ensuring all legal and regulatory requirements are met.',
    icon: Shield,
  },
  {
    title: 'Property Inspections',
    image: '/apartment.jpg',
    description: 'Routine and special inspections for property upkeep.',
    icon: Award,
  },
  {
    title: 'Utility Bill Payments',
    image: '/Bill.jpg',
    description: 'Managing and paying all utility bills on your behalf.',
    icon: FileText,
  },
  {
    title: 'Furnishing & Setup',
    image: '/setup.jpg',
    description: 'Coordinating furnishing and setup for new properties.',
    icon: Home,
  },
  {
    title: 'Renovation Management',
    image: '/repaire.jpg',
    description: 'Overseeing renovations and upgrades for your property.',
    icon: Wrench,
  },
  {
    title: 'Key Holding',
    image: '/hold.jpg',
    description: 'Secure key holding and handover services.',
    icon: Key,
  },
]

const stats = [
  { label: 'Properties Managed', value: '500+', icon: Home },
  { label: 'Happy Clients', value: '1,200+', icon: Users },
  { label: 'Years Experience', value: '10+', icon: Clock },
  { label: 'Services Offered', value: '24/7', icon: TrendingUp },
]

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: easeInOut
    }
  }
}

const fadeInScale = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.6,
      ease: easeInOut
    }
  }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
}

const cardReveal = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 80,
      damping: 15
    }
  }
}

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      type: "spring" as const,
      stiffness: 70,
      damping: 15
    }
  }
}

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      type: "spring" as const,
      stiffness: 70,
      damping: 15
    }
  }
}

export default function ServicesPage() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })

  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.3])
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.95])

  return (
    <main className="min-h-screen bg-background font-sans overflow-x-hidden">
      <Navbar />

      {/* Hero Section with Parallax */}
      <section ref={heroRef} className="relative pt-36 pb-32 px-6 overflow-hidden">
        <motion.div 
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="relative z-10"
        >
          {/* Premium background pattern */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[80px_80px]" />
          </div>

          <div className="max-w-7xl mx-auto text-center relative z-20">
            {/* Animated Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20 mb-8"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-primary font-medium text-sm tracking-wide">Premium Property Management</span>
            </motion.div>

            {/* Main heading with staggered reveal */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-7xl font-extrabold text-foreground leading-[1.1]"
              >
                Our Complete
              </motion.h1>
              
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-5xl md:text-7xl font-extrabold"
              >
                <span className="bg-clip-text text-transparent bg-linear-to-r from-primary to-secondary">
                  Service Suite
                </span>
              </motion.h1>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mt-6"
            >
              Everything you need for professional property management
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap justify-center gap-4 mt-10"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-primary text-white rounded-full font-medium flex items-center gap-2 shadow-lg shadow-primary/25"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-background border border-border rounded-full font-medium hover:border-primary/50 transition-colors"
              >
                Learn More
              </motion.button>
            </motion.div>

            {/* Stats Bar */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-16 p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="text-center"
                >
                  <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Decorative elements */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute top-20 left-20 w-64 h-64 border border-primary/10 rounded-full -z-10"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-20 right-20 w-48 h-48 border border-secondary/10 rounded-full -z-10"
          />
        </motion.div>
      </section>

      {/* Section 1: Core Management Services - Asymmetrical Layout */}
      <section className="py-28 px-6 bg-linear-to-b from-background to-muted/20">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-20"
          >
            <motion.div variants={fadeInScale} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-primary font-medium text-sm">Core Services</span>
            </motion.div>

            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Core Management Services
            </motion.h2>
            
            <motion.p variants={fadeInUp} className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Streamline rent, tenants, and maintenance with our professional solutions.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex justify-center gap-2 mt-6"
            >
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
                  className="w-1.5 h-1.5 rounded-full bg-primary/40"
                />
              ))}
            </motion.div>
          </motion.div>

          {/* Asymmetrical card grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr"
          >
            {managementServices.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.id}
                  variants={cardReveal}
                  whileHover={{ y: -10 }}
                  className={`group relative ${
                    index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''
                  }`}
                >
                  <div className="relative h-full bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-500">
                    {/* Image container with overlay */}
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />
                      
                      {/* Icon overlay */}
                      <div className="absolute top-6 left-6 w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                        {Icon && <Icon className="w-6 h-6 text-white" />}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                      <p className="text-white/80 text-sm mb-4">{service.description}</p>
                      
                      {/* Features list */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileHover={{ opacity: 1, y: 0 }}
                        className="space-y-2"
                      >
                        {service.details.slice(0, 2).map((detail, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-primary" />
                            <span>{detail}</span>
                          </div>
                        ))}
                      </motion.div>
                    </div>

                    {/* Premium hover indicator */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Section 2: Additional Value Services - Grid Layout */}
      <section className="py-28 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-20"
          >
            <motion.div variants={fadeInScale} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
              <Award className="w-4 h-4 text-secondary" />
              <span className="text-secondary font-medium text-sm">Value Added</span>
            </motion.div>

            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Additional Value Services
            </motion.h2>
            
            <motion.p variants={fadeInUp} className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Extra services designed to maximize efficiency and convenience
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex justify-center gap-2 mt-6"
            >
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
                  className="w-1.5 h-1.5 rounded-full bg-secondary/40"
                />
              ))}
            </motion.div>
          </motion.div>

          {/* Clean card grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {extraServices.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={index}
                  variants={slideInLeft}
                  whileHover={{ y: -8 }}
                  className="group relative"
                >
                  <div className="relative bg-card rounded-xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-300">
                    {/* Image */}
                    <div className="relative h-40 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-3">
                        {Icon && <Icon className="w-4 h-4 text-primary" />}
                        <h3 className="text-base font-semibold text-foreground">{service.title}</h3>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Hover indicator */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary origin-left"
                    />
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* View all link */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="text-center mt-12"
          >
            <motion.button
              whileHover={{ x: 5 }}
              className="inline-flex items-center gap-2 text-primary font-medium group"
            >
              <span>Explore All Services</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-7xl mx-auto"
        >
          <PricingSection />
        </motion.div>
      </section>

      <Footer />
    </main>
  )
}