'use client'

import { useState, useEffect } from "react"
import Image from "next/image"
import { ArrowRight, X, Sparkles, Zap, Shield, TrendingUp, FileText, Users } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const features = [
  {
    title: "Easy Payment Processing",
    description: "Secure online rental payments with multiple options",
    details: "Our platform supports credit cards, bank transfers, and digital wallets. Payments are encrypted and processed securely with instant confirmation.",
    image: "/payment.jpg",
    icon: Zap,
    color: "from-blue-500 to-cyan-500",
    points: [
      "Multiple payment methods supported",
      "Instant payment confirmation",
      "Encrypted transactions",
      "Automated receipts and tracking"
    ]
  },
  {
    title: "Timely Rent Collection",
    description: "Automated reminders and reliable rent collection",
    details: "Automated reminders notify tenants before due dates, reducing late payments and keeping your cash flow steady.",
    image: "/collection.jpg",
    icon: TrendingUp,
    color: "from-green-500 to-emerald-500",
    points: [
      "Automated rent reminders",
      "Real-time payment tracking",
      "Reduced late payments",
      "Consistent cash flow"
    ]
  },
  {
    title: "Deposit Protection",
    description: "Safe and secure deposit handling with documentation",
    details: "We securely manage tenant deposits with full documentation, ensuring transparency and compliance.",
    image: "/deposit.jpg",
    icon: Shield,
    color: "from-purple-500 to-pink-500",
    points: [
      "Secure deposit management",
      "Full documentation",
      "Transparency for tenants and landlords",
      "Compliance with regulations"
    ]
  },
  {
    title: "Tenant Screening",
    description: "Complete tenant background checks and verification",
    details: "Screen tenants with background checks, credit analysis, and verification to find reliable renters.",
    image: "/tenant.jpg",
    icon: Users,
    color: "from-orange-500 to-red-500",
    points: [
      "Background checks",
      "Credit analysis",
      "Identity verification",
      "Reliable tenant selection"
    ]
  },
  {
    title: "Market Analysis",
    description: "Smart pricing based on local market trends",
    details: "Get data-driven rental price suggestions based on local demand and property performance.",
    image: "/market.jpg",
    icon: TrendingUp,
    color: "from-indigo-500 to-purple-500",
    points: [
      "Data-driven pricing",
      "Local market insights",
      "Maximize profitability",
      "Performance-based suggestions"
    ]
  },
  {
    title: "Legal Documentation",
    description: "Professional lease agreements and legal support",
    details: "Generate legally compliant lease agreements and manage documents digitally.",
    image: "/legal.jpg",
    icon: FileText,
    color: "from-amber-500 to-yellow-500",
    points: [
      "Legally compliant agreements",
      "Digital document management",
      "Professional legal support",
      "Protect landlords and tenants"
    ]
  },
]

export default function RentalFeaturesSection() {
  const [selectedFeature, setSelectedFeature] = useState<any>(null)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [isMobile, setIsMobile] = useState(false)
  const [shouldAnimate, setShouldAnimate] = useState(false)

  // Check if mobile view
  useEffect(() => {
    const checkMobile = () => {
      if (typeof window !== 'undefined') {
        setIsMobile(window.innerWidth < 750)
      }
    }

    checkMobile()
    
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', checkMobile)
      return () => window.removeEventListener('resize', checkMobile)
    }
  }, [])

  // Trigger animation on page load/refresh for mobile
  useEffect(() => {
    // Always trigger animation on mount for mobile
    if (isMobile) {
      // Small delay to ensure DOM is ready
      const timer = setTimeout(() => {
        setShouldAnimate(true)
      }, 100)
      
      return () => clearTimeout(timer)
    } else {
      setShouldAnimate(false)
    }
  }, [isMobile])

  // Mobile animation variants with alternating directions
  const getMobileAnimation = (index: number) => {
    // Even indices (0,2,4) - come from right
    if (index % 2 === 0) {
      return {
        hidden: { opacity: 0, x: 100 },
        visible: { 
          opacity: 1, 
          x: 0,
          transition: {
            type: "spring",
            stiffness: 50,
            damping: 20,
            duration: 0.6,
            delay: index * 0.15 // Stagger the animations
          }
        }
      }
    }
    // Odd indices (1,3,5) - come from left
    else {
      return {
        hidden: { opacity: 0, x: -100 },
        visible: { 
          opacity: 1, 
          x: 0,
          transition: {
            type: "spring",
            stiffness: 50,
            damping: 20,
            duration: 0.6,
            delay: index * 0.15 // Stagger the animations
          }
        }
      }
    }
  }

  // Desktop animation variants (scroll-triggered)
  const desktopAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 80,
        damping: 15
      }
    }
  }

  // Stagger container for desktop
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  return (
    <section className="relative py-16 md:py-32 px-4 md:px-6 overflow-hidden bg-background">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full mix-blend-normal filter blur-xl opacity-50 animate-blob" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/20 rounded-full mix-blend-normal filter blur-xl opacity-50 animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent/20 rounded-full mix-blend-normal filter blur-xl opacity-50 animate-blob animation-delay-4000" />
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Header - No animations on mobile to prevent conflicts */}
        <div className="text-center mb-12 md:mb-20">
          <motion.div
            initial={!isMobile ? { opacity: 0 } : { opacity: 1 }}
            whileInView={!isMobile ? { opacity: 1 } : {}}
            viewport={!isMobile ? { once: true, amount: 0.2 } : undefined}
          >
            <div className="overflow-hidden">
              <motion.h2
                initial={!isMobile ? { y: 100 } : { y: 0 }}
                whileInView={!isMobile ? { y: 0 } : {}}
                viewport={!isMobile ? { once: true } : undefined}
                transition={{
                  duration: 0.8,
                  type: "spring",
                  stiffness: 70,
                  damping: 12
                }}
                className="text-3xl sm:text-4xl md:text-7xl font-bold mb-2"
              >
                <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary/60">
                  Complete Rental
                </span>
              </motion.h2>
            </div>

            <div className="overflow-hidden">
              <motion.h2
                initial={!isMobile ? { y: 100 } : { y: 0 }}
                whileInView={!isMobile ? { y: 0 } : {}}
                viewport={!isMobile ? { once: true } : undefined}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                  type: "spring",
                  stiffness: 70,
                  damping: 12
                }}
                className="text-3xl sm:text-4xl md:text-7xl font-bold mb-4 md:mb-6"
              >
                <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">
                  Management Solutions
                </span>
              </motion.h2>
            </div>

            <motion.p
              initial={!isMobile ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
              whileInView={!isMobile ? { opacity: 1, y: 0 } : {}}
              viewport={!isMobile ? { once: true } : undefined}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-muted-foreground text-sm md:text-lg max-w-2xl mx-auto px-4"
            >
              Experience the future of property management with our cutting-edge platform.
            </motion.p>
          </motion.div>
        </div>

        {/* Feature Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[160px] md:auto-rows-[200px]"
          initial="hidden"
          animate={shouldAnimate && isMobile ? "visible" : !isMobile ? "visible" : "hidden"}
          whileInView={!isMobile ? "visible" : undefined}
          viewport={!isMobile ? { once: true, amount: 0.1 } : undefined}
          variants={!isMobile ? staggerContainer : {}}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            const isLarge = !isMobile && (index === 0 || index === 3 || index === 5)
            const colSpan = isLarge ? "md:col-span-2" : "md:col-span-1"
            const rowSpan = !isMobile && index === 1 ? "md:row-span-2" : ""
            
            // Mobile specific sizing - smaller cards
            const mobileHeight = index === 1 ? "h-[170px]" : "h-[150px]"

            return (
              <motion.div
                key={index}
                variants={isMobile ? getMobileAnimation(index) : desktopAnimation}
                className={`group relative ${!isMobile ? colSpan : ''} ${!isMobile ? rowSpan : ''}`}
                onHoverStart={() => !isMobile && setHoveredIndex(index)}
                onHoverEnd={() => !isMobile && setHoveredIndex(null)}
                onClick={() => setSelectedFeature(feature)}
              >
                <motion.div
                  whileHover={!isMobile ? { scale: 1.02 } : {}}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className={`relative h-full ${isMobile ? mobileHeight : 'min-h-[200px]'} rounded-xl md:rounded-3xl overflow-hidden cursor-pointer border border-border/50 shadow-md md:shadow-lg`}
                >
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 33vw"
                    />
                  </div>

                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${feature.color} opacity-80 mix-blend-overlay`} />

                  {/* Content */}
                  <div className="absolute inset-0 p-3 md:p-8 flex flex-col justify-end text-white">
                    {/* Icon */}
                    <div className="mb-1 md:mb-4">
                      <div className="w-8 h-8 md:w-14 md:h-14 rounded-lg md:rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                        <Icon className="w-4 h-4 md:w-7 md:h-7" />
                      </div>
                    </div>

                    <h3 className="text-sm md:text-2xl font-bold mb-0.5 md:mb-2 line-clamp-1">{feature.title}</h3>
                    <p className="text-[10px] md:text-sm text-white/80 mb-1 md:mb-4 line-clamp-2">{feature.description}</p>

                    {/* Button - Always visible on mobile */}
                    <div className="flex items-center text-[10px] md:text-sm font-medium text-white">
                      Explore
                      <ArrowRight className="ml-1 md:ml-2 w-2 h-2 md:w-4 md:h-4 group-hover:translate-x-1 transition" />
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>

      {/* Modal - Smaller for mobile */}
      <AnimatePresence>
        {selectedFeature && (
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-2 bg-background/80 backdrop-blur-sm"
            onClick={() => setSelectedFeature(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 25
              }}
              className="relative w-full max-w-[95%] md:max-w-4xl max-h-[85vh] overflow-y-auto bg-card rounded-xl md:rounded-3xl border border-border shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedFeature(null)}
                className="absolute top-2 right-2 z-20 w-6 h-6 md:w-12 md:h-12 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center text-foreground hover:bg-accent transition-colors"
              >
                <X size={isMobile ? 14 : 20} />
              </button>

              <div className="relative h-32 md:h-96">
                <Image
                  src={selectedFeature.image}
                  alt={selectedFeature.title}
                  fill
                  className="object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${selectedFeature.color} opacity-60 mix-blend-overlay`} />
              </div>

              <div className="relative p-3 md:p-10">
                {/* Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className={`absolute -top-5 md:-top-12 left-3 md:left-10 w-10 h-10 md:w-20 md:h-20 rounded-lg md:rounded-2xl bg-gradient-to-br ${selectedFeature.color} flex items-center justify-center shadow-xl border-2 border-border`}
                >
                  {selectedFeature.icon && <selectedFeature.icon className="w-5 h-5 md:w-10 md:h-10 text-white" />}
                </motion.div>

                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-base md:text-4xl font-bold text-foreground mb-1 md:mb-4 mt-6 md:mt-4"
                >
                  {selectedFeature.title}
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-xs md:text-lg text-muted-foreground mb-3 md:mb-8 leading-relaxed"
                >
                  {selectedFeature.details}
                </motion.p>

                {selectedFeature.points && (
                  <motion.ul
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="grid grid-cols-1 gap-1 md:gap-4 mb-3 md:mb-8"
                  >
                    {selectedFeature.points.map((point: string, idx: number) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + idx * 0.1 }}
                        className="flex items-center gap-1 md:gap-3 text-[10px] md:text-base text-foreground/80"
                      >
                        <div className={`w-1 h-1 md:w-2 md:h-2 rounded-full bg-gradient-to-r ${selectedFeature.color}`} />
                        {point}
                      </motion.li>
                    ))}
                  </motion.ul>
                )}

                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  onClick={() => setSelectedFeature(null)}
                  className="w-full md:w-auto px-4 md:px-8 py-2 md:py-4 rounded-lg md:rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all text-xs md:text-base"
                >
                  Close
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  )
}