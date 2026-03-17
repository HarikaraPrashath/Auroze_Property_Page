'use client'

import { useEffect, useState } from "react"
import Image from "next/image"
import { ArrowRight, FileText, Shield, TrendingUp, Users, X, Zap } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"

const features = [
  {
    title: "Easy Payment Processing",
    description: "Secure online rental payments with multiple options",
    details:
      "Our platform supports credit cards, bank transfers, and digital wallets. Payments are encrypted and processed securely with instant confirmation.",
    image: "/payment.jpg",
    icon: Zap,
    color: "from-blue-500 to-cyan-500",
    points: [
      "Multiple payment methods supported",
      "Instant payment confirmation",
      "Encrypted transactions",
      "Automated receipts and tracking",
    ],
  },
  {
    title: "Timely Rent Collection",
    description: "Automated reminders and reliable rent collection",
    details:
      "Automated reminders notify tenants before due dates, reducing late payments and keeping your cash flow steady.",
    image: "/collection.jpg",
    icon: TrendingUp,
    color: "from-green-500 to-emerald-500",
    points: [
      "Automated rent reminders",
      "Real-time payment tracking",
      "Reduced late payments",
      "Consistent cash flow",
    ],
  },
  {
    title: "Deposit Protection",
    description: "Safe and secure deposit handling with documentation",
    details:
      "We securely manage tenant deposits with full documentation, ensuring transparency and compliance.",
    image: "/deposit.jpg",
    icon: Shield,
    color: "from-purple-500 to-pink-500",
    points: [
      "Secure deposit management",
      "Full documentation",
      "Transparency for tenants and landlords",
      "Compliance with regulations",
    ],
  },
  {
    title: "Tenant Screening",
    description: "Complete tenant background checks and verification",
    details:
      "Screen tenants with background checks, credit analysis, and verification to find reliable renters.",
    image: "/tenant.jpg",
    icon: Users,
    color: "from-orange-500 to-red-500",
    points: [
      "Background checks",
      "Credit analysis",
      "Identity verification",
      "Reliable tenant selection",
    ],
  },
  {
    title: "Market Analysis",
    description: "Smart pricing based on local market trends",
    details:
      "Get data-driven rental price suggestions based on local demand and property performance.",
    image: "/market.jpg",
    icon: TrendingUp,
    color: "from-indigo-500 to-purple-500",
    points: [
      "Data-driven pricing",
      "Local market insights",
      "Maximize profitability",
      "Performance-based suggestions",
    ],
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
      "Protect landlords and tenants",
    ],
  },
]

type Feature = (typeof features)[number]

export default function RentalFeaturesSection() {
  const [selectedFeature, setSelectedFeature] = useState<Feature | null>(null)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [isMobile, setIsMobile] = useState(false)
  const [visibleCards, setVisibleCards] = useState<number[]>([])

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    if (!isMobile) {
      setVisibleCards([])
      return
    }

    const elements = document.querySelectorAll(".rental-feature-card")
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const idx = Number(entry.target.getAttribute("data-index"))
          setVisibleCards((prev) => (prev.includes(idx) ? prev : [...prev, idx]))
        })
      },
      { threshold: 0.2 }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [isMobile])

  return (
    <section className="relative py-32 px-6 overflow-hidden bg-background">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full mix-blend-normal blur-xl opacity-50 animate-blob" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/20 rounded-full mix-blend-normal blur-xl opacity-50 animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent/20 rounded-full mix-blend-normal blur-xl opacity-50 animate-blob animation-delay-4000" />
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="bg-clip-text text-transparent bg-linear-to-r from-primary via-primary/80 to-primary/60">
              Complete Rental
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-linear-to-r from-foreground to-foreground/80">
              Management Solutions
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Experience the future of property management with our cutting-edge platform.
          </motion.p>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="h-0.5 w-24 bg-linear-to-r from-primary via-primary/50 to-transparent mx-auto mt-8"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[minmax(200px,auto)]">
          {features.map((feature, index) => {
            const Icon = feature.icon
            const isLarge = index === 0 || index === 3 || index === 5
            const colSpan = isLarge ? "md:col-span-2" : "md:col-span-1"
            const rowSpan = index === 1 ? "md:row-span-2" : ""

            const fromLeft = index % 2 === 0
            const mobileInitial = { opacity: 0, x: fromLeft ? -140 : 140 }
            const mobileAnimate = {
              opacity: 1,
              x: 0,
              transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: (index % 3) * 0.06 },
            }

            const desktopInitial = { opacity: 0, y: 30 }
            const desktopAnimate = { opacity: 1, y: 0, transition: { duration: 0.45 } }

            const hasEntered = visibleCards.includes(index)
            const initial = isMobile ? mobileInitial : desktopInitial
            const animate = isMobile ? (hasEntered ? mobileAnimate : mobileInitial) : desktopAnimate

            return (
              <motion.div
                key={index}
                data-index={index}
                className={`rental-feature-card group relative ${colSpan} ${rowSpan}`}
                initial={initial}
                animate={animate}
                whileInView={isMobile ? undefined : desktopAnimate}
                viewport={isMobile ? undefined : { once: true, amount: 0.2 }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                onClick={() => setSelectedFeature(feature)}
              >
                <motion.div
                  whileHover={{ scale: isMobile ? 1 : 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="relative h-full min-h-[250px] md:min-h-70 rounded-3xl overflow-hidden cursor-pointer border border-border/50 shadow-lg"
                >
                  <motion.div
                    animate={{ scale: hoveredIndex === index ? 1.1 : 1 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0"
                  >
                    <Image src={feature.image} alt={feature.title} fill className="object-cover" />
                  </motion.div>

                  <div className={`absolute inset-0 bg-linear-to-t ${feature.color} opacity-80 mix-blend-overlay`} />

                  <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end text-white">
                    <motion.div
                      animate={{ y: hoveredIndex === index ? -10 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="mb-4"
                    >
                      <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                        <Icon className="w-6 h-6 md:w-7 md:h-7" />
                      </div>
                    </motion.div>

                    <h3 className="text-xl md:text-2xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-xs md:text-sm text-white/80 mb-4 line-clamp-2">{feature.description}</p>

                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{
                        opacity: hoveredIndex === index ? 1 : 0,
                        x: hoveredIndex === index ? 0 : -20,
                      }}
                      transition={{ duration: 0.2 }}
                      className="flex items-center text-sm font-medium text-white"
                    >
                      Explore Feature
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition" />
                    </motion.div>
                  </div>

                  <motion.div
                    animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                    className="absolute inset-0 border-2 border-white/50 rounded-3xl pointer-events-none"
                  />
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>

      <AnimatePresence>
        {selectedFeature && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
            onClick={() => setSelectedFeature(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-4xl w-full bg-card rounded-3xl overflow-hidden border border-border shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedFeature(null)}
                className="absolute top-4 right-4 z-20 w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center text-foreground hover:bg-accent transition-colors"
              >
                <X size={20} />
              </button>

              <div className="relative h-64 md:h-96">
                <Image src={selectedFeature.image} alt={selectedFeature.title} fill className="object-cover" />
                <div className={`absolute inset-0 bg-linear-to-t ${selectedFeature.color} opacity-60 mix-blend-overlay`} />
              </div>

              <div className="relative p-6 md:p-10">
                <div
                  className={`absolute -top-12 left-6 md:left-10 w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-linear-to-br ${selectedFeature.color} flex items-center justify-center shadow-xl border-2 border-border`}
                >
                  {selectedFeature.icon && <selectedFeature.icon className="w-8 h-8 md:w-10 md:h-10 text-white" />}
                </div>

                <h3 className="text-2xl md:text-4xl font-bold text-foreground mb-4 mt-8 md:mt-4">
                  {selectedFeature.title}
                </h3>

                <p className="text-muted-foreground text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
                  {selectedFeature.details}
                </p>

                {selectedFeature.points && (
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8">
                    {selectedFeature.points.map((point, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm md:text-base text-foreground/80">
                        <div className={`w-2 h-2 rounded-full bg-linear-to-r ${selectedFeature.color}`} />
                        {point}
                      </li>
                    ))}
                  </ul>
                )}

                <button
                  onClick={() => setSelectedFeature(null)}
                  className="w-full md:w-auto px-6 md:px-8 py-3 md:py-4 rounded-xl bg-primary text-foreground font-semibold hover:bg-primary/90 transition-all transform hover:scale-105 shadow-lg hover:shadow-primary/30"
                >
                  Get Started
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        @keyframes blob {
          0%,
          100% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
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
