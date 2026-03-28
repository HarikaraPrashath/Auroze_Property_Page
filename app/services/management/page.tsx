'use client'

import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import PricingSection from '@/components/pricing-section'
import { motion, useScroll, useTransform } from 'framer-motion'
import { easeInOut } from 'framer-motion'
import { useRef } from 'react'
import {
  Sparkles, ArrowRight, CheckCircle, Zap, Shield,
  Home, Key, Wrench, FileText, Award,
  Clock, Users, TrendingUp
} from 'lucide-react'
import { siteConfig } from '@/lib/site-config'

interface Service {
  id: string
  title: string
  image: string
  description: string
  details: string[]
  icon?: any
}

interface ExtraService {
  id?: string
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
    id: 'land-cleaning',
    title: 'Land Cleaning',
    image: '/land.jpg',
    description: 'Clearing, debris removal and basic land preparation services.',
    icon: Sparkles,
  },
  {
    id: 'legal-compliance',
    title: 'Legal Compliance',
    image: '/legal_1.jpg',
    description: 'Ensuring all legal and regulatory requirements are met.',
    icon: Shield,
  },
  {
    id: 'property-inspections',
    title: 'Property Inspections',
    image: '/apartment.jpg',
    description: 'Routine and special inspections for property upkeep.',
    icon: Award,
  },
  {
    id: 'utility-bill-payments',
    title: 'Utility Bill Payments',
    image: '/Bill.jpg',
    description: 'Managing and paying all utility bills on your behalf.',
    icon: FileText,
  },
  {
    id: 'furnishing-setup',
    title: 'Furnishing & Setup',
    image: '/setup.jpg',
    description: 'Coordinating furnishing and setup for new properties.',
    icon: Home,
  },
  {
    id: 'renovation-management',
    title: 'Renovation Management',
    image: '/repaire.jpg',
    description: 'Overseeing renovations and upgrades for your property.',
    icon: Wrench,
  },
  {
    id: 'key-holding',
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

      {/* Hero Section with Parallax - compacted */}
      <section ref={heroRef} className="relative pt-16 md:pt-30 pb-10 px-2 md:px-4 overflow-hidden">
        <motion.div
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="relative z-10"
        >
          {/* Premium background pattern */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[60px_60px]" />
          </div>

          <div className="max-w-6xl mx-auto text-center relative z-20">
            {/* Animated Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 border border-primary/20 mb-4"
            >
              <span className="text-destructive font-medium text-xs tracking-wide">Premium Property Management</span>
            </motion.div>

            {/* Main heading with staggered reveal */}
            <div className="space-y-2">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mb-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl text-primary "
              >
                Our Complete
              </motion.h1>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl "
              >
                <span className="bg-clip-text text-transparent bg-linear-to-r from-black via-black-600 to-secondary">
                  Service Suite
                </span>
              </motion.h1>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto mt-2"
            >
              Everything you need for professional property management
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-2 mt-6"
            >
              <motion.button
                onClick={() => window.open(siteConfig.whatsappUrl, "_blank")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-primary text-white rounded-full font-medium flex items-center gap-2 shadow-md shadow-primary/20 cursor-pointer"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>

            {/* Stats Bar */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-2  md:grid-cols-4 gap-3 max-w-3xl mx-auto mt-6 p-3 rounded-xl bg-card/40 backdrop-blur border border-border"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -3 }}
                  className="text-center"
                >
                  <stat.icon className="w-5 h-5 text-primary mx-auto mb-1" />
                  <p className="text-lg font-bold text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Decorative elements */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute top-10 left-10 w-40 h-40 border border-primary/10 rounded-full -z-10"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-10 right-10 w-32 h-32 border border-secondary/10 rounded-full -z-10"
          />
        </motion.div>
      </section>

      {/* Section 1: Core Management Services - compact grid */}
      <section className="py-10 px-2 md:px-4 bg-linear-to-b from-background to-muted/10">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainer}
            className="text-center mb-7"
          >
            <motion.div variants={fadeInScale} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-3">
              <Zap className="w-4 h-4 dark:text-destructive text-primary" />
              <span className="dark:text-destructive text-primary font-medium text-xs">Core Services</span>
            </motion.div>

            <motion.h2 variants={fadeInUp} className="mb-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl ">
              <span className='text-primary'>Core Management </span>Services
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-muted-foreground text-base max-w-lg mx-auto">
              Streamline rent, tenants, and maintenance with our professional solutions.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex justify-center gap-1 mt-3"
            >
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 1.5, delay: i * 0.2, repeat: Infinity }}
                  className="w-1 h-1 rounded-full bg-primary/40"
                />
              ))}
            </motion.div>
          </motion.div>

          {/* Compact card grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-30px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-3 auto-rows-fr"
          >
            {managementServices.map((service, index) => {
              const Icon = service.icon;
              const isFirst = index === 0;
              return (
                <motion.div
                  key={service.id}
                  variants={cardReveal}
                  whileHover={{ y: -8 }}
                  className={`group relative ${isFirst ? 'lg:col-span-2 lg:row-span-2' : ''}`}
                >
                  <div className="relative h-full bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-500">
                    {isFirst ? (
                      <>
                        <img
                          src={service.image}
                          alt={service.title}
                          className="absolute inset-0 w-full h-full object-cover group-hover:scale-110   transition-transform duration-700 z-0"
                        />
                        <div className="absolute  inset-0 bg-linear-to-t from-black/90 via-black/60 to-transparent z-10" />
                        <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-primary/20 dark:bg-destructive/20 backdrop-blur-sm border border-white/30 dark:border-white/10 flex items-center justify-center z-20">
                          {Icon && <Icon className="w-6 h-6  drop-shadow-md dark:text-destructive text-primary" />}
                        </div>
                        <div className="absolute sm:bottom-0 -bottom-37  left-0 right-0 p-6 pb-16 md:pb-6 z-10">
                          <h3 className="font-bold text-white mb-2 drop-shadow-md text-2xl ">{service.title}</h3>
                          <p className="text-gray-100 dark:text-gray-200 mb-4 drop-shadow text-base">{service.description}</p>
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileHover={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-3"
                          >
                            {service.details.map((detail, i) => (
                              <div key={i} className="flex items-center gap-2 text-white">
                                <CheckCircle className="w-5 h-5 text-primary dark:text-primary-400 shrink-0" />
                                <span className="drop-shadow-sm text-base">{detail}</span>
                              </div>
                            ))}
                          </motion.div>
                        </div>
                        <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-primary-500 to-secondary-500 dark:from-primary-400 dark:to-secondary-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-30" />
                      </>
                    ) : (
                      <>
                        <div className="relative h-56 overflow-hidden">
                          <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" />
                          <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-primary/20 dark:bg-destructive/20 backdrop-blur-sm border border-white/30 dark:border-white/10 flex items-center justify-center">
                            {Icon && <Icon className="w-6 h-6  drop-shadow-md dark:text-destructive text-primary" />}
                          </div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-linear-to-t from-black/90 via-black/60 to-transparent">
                          <h3 className="font-bold text-white mb-2 drop-shadow-md text-2xl">{service.title}</h3>
                          <p className="text-gray-100 dark:text-gray-200 mb-4 drop-shadow text-sm">{service.description}</p>
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileHover={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-3"
                          >
                            {service.details.slice(0, 2).map((detail, i) => (
                              <div key={i} className="flex items-center gap-2 text-white">
                                <CheckCircle className="w-4 h-4 text-primary dark:text-primary-400 shrink-0" />
                                <span className="drop-shadow-sm text-sm">{detail}</span>
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

      {/* Section 2: Additional Value Services - compact grid */}
      <section className="py-10 px-2 md:px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainer}
            className="text-center mb-7"
          >
            <motion.div variants={fadeInScale} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 mb-3">
              <Award className="w-4 h-4 text-secondary" />
              <span className="text-secondary font-medium text-xs">Value Added</span>
            </motion.div>

            <motion.h2 variants={fadeInUp} className="mb-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl text-foreground">
              <span className='text-primary'>Additional Value</span> Services
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-muted-foreground text-base max-w-lg mx-auto">
              Extra services designed to maximize efficiency and convenience
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex justify-center gap-1 mt-3"
            >
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 1.5, delay: i * 0.2, repeat: Infinity }}
                  className="w-1 h-1 rounded-full bg-secondary/40"
                />
              ))}
            </motion.div>
          </motion.div>

          {/* Compact card grid (redesigned for balanced layout) */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-30px" }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-fr items-stretch"
          >
            {extraServices.map((service, index) => {
              const Icon = service.icon;
              const isHousekeeping = service.id === 'housekeeping';
              return (
                <motion.div
                  key={service.id || index}
                  variants={slideInLeft}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="group relative"
                >
                  <div className="relative bg-card rounded-lg overflow-hidden border border-border hover:border-primary/30 transition-all duration-300 h-full flex flex-col">
                    {isHousekeeping ? (
                      <>
                        <img
                          src={service.image}
                          alt={service.title}
                          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-400 z-0"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/60 to-transparent z-10" />
                        <div className="absolute top-4 left-4 w-10 h-10 rounded-lg bg-white/20 backdrop-blur-sm border border-white/20 flex items-center justify-center z-20">
                          {Icon && <Icon className="w-5 h-5 text-white" />}
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                          <h3 className="text-lg font-bold text-white mb-1 drop-shadow-md">{service.title}</h3>
                          <p className="text-white/80 text-xs mb-2 drop-shadow">{service.description}</p>
                        </div>
                        <motion.div
                          initial={{ scaleX: 0 }}
                          whileHover={{ scaleX: 1 }}
                          transition={{ duration: 0.2 }}
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary origin-left z-30"
                        />
                      </>
                    ) : (
                      <>
                        <div className="relative h-36 overflow-hidden">
                          <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-400"
                          />
                        </div>
                        <div className="p-4 flex-1 flex flex-col justify-between">
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              {Icon && <Icon className="w-4 h-4 text-primary" />}
                              <h3 className="text-sm font-semibold text-foreground">{service.title}</h3>
                            </div>
                            <p className="text-xs text-muted-foreground leading-relaxed">
                              {service.description}
                            </p>
                          </div>

                        </div>
                        <motion.div
                          initial={{ scaleX: 0 }}
                          whileHover={{ scaleX: 1 }}
                          transition={{ duration: 0.2 }}
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary origin-left"
                        />
                      </>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* View all link */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center mt-6"
          >

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
          className="max-w-6xl mx-auto"
        >
          <PricingSection />
        </motion.div>
      </section>

      <Footer />
    </main>
  )
}