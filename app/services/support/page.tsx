'use client'

import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import ServiceCard from '@/components/service-card'
import PricingSection from '@/components/pricing-section'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import {
  Sparkles, ArrowRight, CheckCircle, Zap, Shield,
  Home, Key, Wrench, FileText, Star, Award,
  Clock, Users, TrendingUp, Briefcase
} from 'lucide-react'
import { useRouter } from "next/navigation"

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

const additionalServices: Service[] = [
  {
    id: 'housekeeping',
    title: 'Housekeeping',
    image: '/housekeeping.jpg',
    description: 'Professional cleaning and housekeeping for your property.',
    icon: Home,
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
    icon: Shield,
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
    icon: Award,
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
      duration: 0.8
    }
  }
}

const fadeInScale = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6
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
      type: 'spring',
      stiffness: 70,
      damping: 15
    }
  }
}

export default function ServicesPage() {
  const router = useRouter()
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
      <section ref={heroRef} className="relative pt-24 pb-16 px-4 sm:px-6 overflow-hidden">
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
            {/* Animated Badge with floating effect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20 mb-8"
            >

              <span className="dark:text-destructive text-primary font-medium text-sm tracking-wide">Premium Property Management</span>
            </motion.div>

            {/* Main heading with staggered reveal */}
            <div className="space-y-2">
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl"
              >
                Our Complete
              </motion.h1>

              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mb-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl"
              >
                <span className="bg-clip-text text-transparent bg-linear-to-r from-primary to-secondary">
                  Service Suite
                </span>
              </motion.h1>
            </div>

            {/* Description with fade */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto mt-2"
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
              className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-10 p-5 rounded-2xl bg-card/50 backdrop-blur-sm border border-border"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="text-center"
                >
                  <stat.icon className="w-6 h-6 dark:text-destructive text-primary mx-auto mb-2" />
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

      {/* Section 1: Premium Services - Asymmetrical Layout */}
      <section className="py-10 px-4 sm:px-6 bg-linear-to-b from-background to-muted/20">
        <div className="max-w-7xl mx-auto">
          {/* Section header with staggered animation */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-7"
          >
            <motion.div variants={fadeInScale} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <Zap className="w-4 h-4 dark:text-destructive text-primary" />
              <span className="dark:text-destructive text-primary font-medium text-sm">Premium Services</span>
            </motion.div>

            <motion.h2 variants={fadeInUp} className="mb-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl text-foreground">
              Support & Extra Services
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-muted-foreground text-base max-w-lg mx-auto">
              Specialized services to complement your property management needs
            </motion.p>
          </motion.div>

          {/* Asymmetrical card grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 auto-rows-fr"
          >
            {additionalServices.map((service, index) => {
              const Icon = service.icon;
              const isHousekeeping = index === 0;
              return (
                <motion.div
                  key={service.id}
                  variants={cardReveal}
                  whileHover={{ y: -6 }}
                  className={`group relative ${isHousekeeping ? 'lg:col-span-2 lg:row-span-2' : ''}`}
                >
                  <div className="relative h-full bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-500">
                    {/* Housekeeping: image fills entire card, content overlays absolutely */}
                    {isHousekeeping ? (
                      <>
                        <img
                          src={service.image}
                          alt={service.title}
                          className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 z-0"
                        />
                        {/* Strong gradient overlay for readability */}
                        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/60 to-transparent z-10" />
                        {/* Icon overlay */}
                        <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-white/20 dark:bg-black/20 backdrop-blur-sm border border-white/30 dark:border-white/10 flex items-center justify-center z-20">
                          {Icon && <Icon className="w-5 h-5 text-white drop-shadow-md" />}
                        </div>
                        {/* Content overlay */}
                        <div className="absolute sm:bottom-0 -bottom-30  left-0 right-0 p-6 pb-16 md:pb-6 z-10">
                          <h3 className="font-bold text-white mb-2 drop-shadow-md text-2xl">{service.title}</h3>
                          <p className="text-gray-100 dark:text-gray-200 mb-3 drop-shadow text-sm">{service.description}</p>
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileHover={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-2"
                          >
                            {service.details.map((detail, i) => (
                              <div key={i} className="flex items-center gap-2 text-white">
                                <CheckCircle className="w-5 h-5 text-primary dark:text-primary-400 shrink-0" />
                                <span className="drop-shadow-sm text-sm">{detail}</span>
                              </div>
                            ))}

                          </motion.div>
                        </div>
                        {/* Premium hover indicator */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-primary-500 to-secondary-500 dark:from-primary-400 dark:to-secondary-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-30" />
                      </>
                    ) : (
                      <>
                        {/* Standard card layout for other services */}
                        <div className="relative h-56 overflow-hidden">
                          <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" />
                          <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-white/20 dark:bg-black/20 backdrop-blur-sm border border-white/30 dark:border-white/10 flex items-center justify-center">
                            {Icon && <Icon className="w-5 h-5 text-white drop-shadow-md" />}
                          </div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-linear-to-t from-black/90 via-black/60 to-transparent">
                          <h3 className="font-bold text-white mb-2 drop-shadow-md text-2xl">{service.title}</h3>
                          <p className="text-gray-100 dark:text-gray-200 mb-2 drop-shadow text-sm">{service.description}</p>
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileHover={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-2"
                          >
                            {service.details.slice(0, 2).map((detail, i) => (
                              <div key={i} className="flex items-center gap-2 text-white">
                                <CheckCircle className="w-4 h-4 text-primary dark:text-primary-400 shrink-0" />
                                <span className="drop-shadow-sm text-xs">{detail}</span>
                              </div>
                            ))}
                          </motion.div>
                        </div>
                        <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-primary-500 to-secondary-500 dark:from-primary-400 dark:to-secondary-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                      </>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Section 2: Extra Value Services - Minimal Design */}
      <section className="py-10 px-4 sm:px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          {/* Section header with clean animation */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-7"
          >
            <motion.div
              variants={fadeInScale}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-4"
            >
              <CheckCircle className="w-4 h-4 text-secondary" />
              <span className="text-secondary font-medium text-sm">Value Added</span>
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="mb-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl text-foreground"
            >
              Additional Value Services
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-muted-foreground text-base max-w-lg mx-auto"
            >
              Extra services designed to maximize efficiency and convenience
            </motion.p>
          </motion.div>

          {/* Minimal card grid with clean animations */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
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
                    {/* Simple image */}
                    <div className="relative h-40 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>

                    {/* Clean content */}
                    <div className="p-5">
                      <div className="flex items-start justify-between mb-3">
                        {Icon && <Icon className="w-5 h-5 text-primary" />}
                      </div>
                      <h3 className="text-base font-semibold text-foreground mb-2">{service.title}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>
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
            transition={{ delay: 0.6 }}
            className="text-center mt-8"
          >
            <motion.button
              onClick={() => router.push("/services/support")}
              whileHover={{ x: 5 }}
              className="inline-flex items-center gap-2 text-primary font-medium group"
            >
              <span>Explore All Services</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section with minimal design */}
      <section className="py-10 px-4 sm:px-6 bg-linear-to-b from-muted/20 to-background">
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