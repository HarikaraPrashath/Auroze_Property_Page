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

  // Check if mobile view
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)

    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Mobile animation variants
  const getMobileAnimation = (index: number) => {
    // Even indices (0,2,4) - come from left
    if (index % 2 === 0) {
      return {
        initial: { opacity: 0, x: -100, y: 50 },
        animate: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: -100, y: 50 }
      }
    }
    // Odd indices (1,3,5) - come from right
    else {
      return {
        initial: { opacity: 0, x: 100, y: 50 },
        animate: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: 100, y: 50 }
      }
    }
  }

  // Desktop animation variants
  const desktopAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 }
  }

  return (
    <section className="relative py-32 px-6 overflow-hidden bg-background">
      {/* Animated background elements - Adjusted for dark/light mode */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full mix-blend-normal filter blur-xl opacity-50 animate-blob" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/20 rounded-full mix-blend-normal filter blur-xl opacity-50 animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent/20 rounded-full mix-blend-normal filter blur-xl opacity-50 animate-blob animation-delay-4000" />
      </div>

      <div className="relative max-w-7xl mx-auto z-10">

        {/* Header with modern typography - Using theme colors */}
        <motion.div
          key="header-container" // Add a key to force re-render on refresh
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mb-20"
        >
          {/* First line with character animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden"
          >
            <motion.h2
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{
                duration: 0.8,
                type: "spring",
                stiffness: 70,
                damping: 12
              }}
              className="text-5xl md:text-7xl font-bold mb-2"
            >
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary/60"
              >
                Complete Rental
              </motion.span>
            </motion.h2>
          </motion.div>

          {/* Second line with slide-up */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="overflow-hidden"
          >
            <motion.h2
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                type: "spring",
                stiffness: 70,
                damping: 12
              }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80"
              >
                Management Solutions
              </motion.span>
            </motion.h2>
          </motion.div>

          {/* Description with fade and slide */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.8,
              ease: "easeOut"
            }}
          >
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Experience the future of property management with our cutting-edge platform.
            </p>
          </motion.div>

          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="h-0.5 w-24 bg-gradient-to-r from-primary via-primary/50 to-transparent mx-auto mt-8"
          />
        </motion.div>
        {/* Feature Grid - Asymmetrical Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[minmax(200px,auto)]">
          {features.map((feature, index) => {
            const Icon = feature.icon
            const isLarge = index === 0 || index === 3 || index === 5
            const colSpan = isLarge ? "md:col-span-2" : "md:col-span-1"
            const rowSpan = index === 1 ? "md:row-span-2" : ""

            // Choose animation based on device
            const animationVariant = isMobile ? getMobileAnimation(index) : desktopAnimation

            return (
              <motion.div
                key={index}
                variants={animationVariant}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.3 }}
                exit="exit"
                transition={{
                  duration: 0.6,
                  delay: isMobile ? 0 : index * 0.1,
                  type: "spring",
                  stiffness: 100,
                  damping: 20
                }}
                className={`group relative ${colSpan} ${rowSpan}`}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                onClick={() => setSelectedFeature(feature)}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="relative h-full min-h-[280px] rounded-3xl overflow-hidden cursor-pointer border border-border/50 shadow-lg"
                >
                  {/* Background Image with Parallax */}
                  <motion.div
                    animate={{
                      scale: hoveredIndex === index ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-cover"
                    />
                  </motion.div>

                  {/* Gradient Overlay - Adjusted for better visibility */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${feature.color} opacity-80 mix-blend-overlay`} />

                  {/* Content */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                    {/* Icon */}
                    <motion.div
                      animate={{
                        y: hoveredIndex === index ? -10 : 0,
                        rotate: hoveredIndex === index ? 360 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="mb-4"
                    >
                      <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                        <Icon className="w-7 h-7" />
                      </div>
                    </motion.div>

                    <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-sm text-white/80 mb-4 line-clamp-2">{feature.description}</p>

                    {/* Animated Button */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{
                        opacity: hoveredIndex === index ? 1 : 0,
                        x: hoveredIndex === index ? 0 : -20
                      }}
                      transition={{ duration: 0.2 }}
                      className="flex items-center text-sm font-medium text-white"
                    >
                      Explore Feature
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition" />
                    </motion.div>
                  </div>

                  {/* Hover Border Effect */}
                  <motion.div
                    animate={{
                      opacity: hoveredIndex === index ? 1 : 0,
                    }}
                    className="absolute inset-0 border-2 border-white/50 rounded-3xl"
                    style={{ pointerEvents: "none" }}
                  />
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Super Modern Modal - Theme compatible */}
      <AnimatePresence>
        {selectedFeature && (
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
            onClick={() => setSelectedFeature(null)}
          >
            <motion.div
              initial={{ scale: 0.5, rotateX: -90, opacity: 0 }}
              animate={{ scale: 1, rotateX: 0, opacity: 1 }}
              exit={{ scale: 0.5, rotateX: 90, opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 25,
                duration: 0.5
              }}
              className="relative max-w-4xl w-full bg-card rounded-3xl overflow-hidden border border-border shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Floating particles effect - Using theme colors */}
              <div className="absolute inset-0 overflow-hidden">
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-primary rounded-full"
                    initial={{
                      x: Math.random() * 100 + "%",
                      y: Math.random() * 100 + "%",
                      scale: 0
                    }}
                    animate={{
                      y: [null, "-30%"],
                      scale: [0, 1, 0],
                      opacity: [0, 1, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: Math.random() * 2
                    }}
                  />
                ))}
              </div>

              <button
                onClick={() => setSelectedFeature(null)}
                className="absolute top-4 right-4 z-20 w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center text-foreground hover:bg-accent transition-colors"
              >
                <X size={20} />
              </button>

              <div className="relative h-96">
                <Image
                  src={selectedFeature.image}
                  alt={selectedFeature.title}
                  fill
                  className="object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${selectedFeature.color} opacity-60 mix-blend-overlay`} />
              </div>

              <div className="relative p-10">
                {/* Icon with animation */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className={`absolute -top-12 left-10 w-20 h-20 rounded-2xl bg-gradient-to-br ${selectedFeature.color} flex items-center justify-center shadow-xl border-2 border-border`}
                >
                  {selectedFeature.icon && <selectedFeature.icon className="w-10 h-10 text-white" />}
                </motion.div>

                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-4xl font-bold text-foreground mb-4 mt-4"
                >
                  {selectedFeature.title}
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-muted-foreground text-lg mb-8 leading-relaxed"
                >
                  {selectedFeature.details}
                </motion.p>

                {selectedFeature.points && (
                  <motion.ul
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="grid grid-cols-2 gap-4 mb-8"
                  >
                    {selectedFeature.points.map((point: string, idx: number) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + idx * 0.1 }}
                        className="flex items-center gap-3 text-foreground/80"
                      >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${selectedFeature.color}`} />
                        {point}
                      </motion.li>
                    ))}
                  </motion.ul>
                )}

                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  onClick={() => setSelectedFeature(null)}
                  className="px-8 py-4 rounded-xl bg-primary text-foreground font-semibold hover:bg-primary/90 transition-all transform hover:scale-105 shadow-lg hover:shadow-primary/30"
                >
                  Get Started
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