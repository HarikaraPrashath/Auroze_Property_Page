'use client'

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import { ArrowRight, FileText, Shield, TrendingUp, Users, X, Zap } from "lucide-react"
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion"

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
  const containerRef = useRef<HTMLDivElement>(null)
  const horizontalRef = useRef<HTMLDivElement>(null)
  const [horizontalWidth, setHorizontalWidth] = useState(0)
  
  // Keep horizontal distance in sync with viewport and track size.
  useEffect(() => {
    const updateHorizontalWidth = () => {
      if (horizontalRef.current) {
        setHorizontalWidth(horizontalRef.current.scrollWidth - horizontalRef.current.clientWidth)
      }
    }

    updateHorizontalWidth()
    window.addEventListener("resize", updateHorizontalWidth)

    return () => {
      window.removeEventListener("resize", updateHorizontalWidth)
    }
  }, [])

  // Use scroll progress to transform the horizontal scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${horizontalWidth}px`])

  return (
    <>
      {/* Normal vertical section before horizontal scroll - REDUCED SPACING */}
      <section className="relative overflow-hidden bg-background px-4 pt-16 pb-8 sm:px-6 md:pt-20 md:pb-10 lg:pt-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full mix-blend-normal blur-xl opacity-50 animate-blob" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/20 rounded-full mix-blend-normal blur-xl opacity-50 animate-blob animation-delay-2000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent/20 rounded-full mix-blend-normal blur-xl opacity-50 animate-blob animation-delay-4000" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mx-auto max-w-4xl text-center"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary/60">
                Complete Rental
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">
                Management Solutions
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mx-auto max-w-2xl text-sm text-muted-foreground sm:text-base"
            >
              Experience the future of property management with our cutting-edge platform.
            </motion.p>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="mx-auto mt-6 h-0.5 w-20 bg-gradient-to-r from-primary via-primary/50 to-transparent"
            />
          </motion.div>
        </div>
      </section>

      {/* Horizontal scroll section - NOW DIRECTLY FOLLOWS WITH MINIMAL GAP */}
      <section ref={containerRef} className="relative h-[220vh] bg-background -mt-2">
        <div className="sticky top-0 h-screen overflow-hidden">
          <motion.div 
            ref={horizontalRef}
            style={{ x }}
            className="flex h-full items-center gap-4 px-4 sm:gap-6 sm:px-6 lg:gap-8 lg:px-8"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon
              
              return (
                <motion.div
                  key={index}
                  className="group relative h-[400px] min-w-[85vw] sm:h-[450px] sm:min-w-[400px] md:h-[500px] md:min-w-[450px] lg:h-[550px] lg:min-w-[500px]"
                  onClick={() => setSelectedFeature(feature)}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="relative h-full rounded-2xl overflow-hidden cursor-pointer border border-border/50 shadow-lg">
                    <motion.div
                      className="absolute inset-0"
                    >
                      <Image 
                        src={feature.image} 
                        alt={feature.title} 
                        fill 
                        className="object-cover"
                        sizes="(max-width: 768px) 85vw, 500px"
                      />
                    </motion.div>

                    <div className={`absolute inset-0 bg-gradient-to-t ${feature.color} opacity-80 mix-blend-overlay`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />

                    <div className="absolute inset-0 flex flex-col justify-end p-6 text-white sm:p-7 md:p-8">
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="mb-3"
                      >
                        <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                          <Icon className="w-6 h-6" />
                        </div>
                      </motion.div>

                      <h3 className="mb-1.5 text-xl font-bold leading-snug tracking-tight sm:text-2xl">{feature.title}</h3>
                      <p className="mb-4 max-w-[32ch] text-xs text-white/85 line-clamp-2 sm:text-sm">{feature.description}</p>

                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileHover={{ opacity: 1, x: 0 }}
                        className="flex items-center text-xs font-medium text-white sm:text-sm"
                      >
                        Explore Feature
                        <ArrowRight className="ml-2 w-3.5 h-3.5 group-hover:translate-x-1 transition" />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Normal vertical section after horizontal scroll */}
      <section className="relative overflow-hidden bg-background px-4 py-20 sm:px-6 md:py-24 lg:px-8 lg:py-28">
        <div className="relative z-10 mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              Ready to Get Started?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-sm text-muted-foreground sm:text-base md:text-lg">
              Join thousands of landlords who trust our platform for their property management needs.
            </p>
            <button className="px-6 py-3 rounded-xl bg-primary text-foreground font-semibold hover:bg-primary/90 transition-all transform hover:scale-105 shadow-lg hover:shadow-primary/30 text-sm sm:text-base sm:px-8 sm:py-4">
              Start Your Journey
            </button>
          </motion.div>
        </div>
      </section>

      {/* Modal remains the same */}
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
              className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-border bg-card shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedFeature(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center text-foreground hover:bg-accent transition-colors"
              >
                <X size={18} />
              </button>

              <div className="relative h-56 md:h-96">
                <Image 
                  src={selectedFeature.image} 
                  alt={selectedFeature.title} 
                  fill 
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 1200px"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${selectedFeature.color} opacity-60 mix-blend-overlay`} />
              </div>

              <div className="relative p-5 md:p-10">
                <div
                  className={`absolute -top-10 left-5 md:left-10 h-14 w-14 rounded-2xl border-2 border-border bg-gradient-to-br ${selectedFeature.color} flex items-center justify-center shadow-xl md:-top-12 md:h-20 md:w-20`}
                >
                  {selectedFeature.icon && <selectedFeature.icon className="w-6 h-6 md:w-10 md:h-10 text-white" />}
                </div>

                <h3 className="mb-3 mt-8 text-xl font-bold text-foreground md:mt-4 md:text-4xl">
                  {selectedFeature.title}
                </h3>

                <p className="text-muted-foreground text-sm md:text-lg mb-5 md:mb-8 leading-relaxed">
                  {selectedFeature.details}
                </p>

                {selectedFeature.points && (
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 mb-5 md:mb-8">
                    {selectedFeature.points.map((point, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs md:text-base text-foreground/80">
                        <div className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r ${selectedFeature.color}`} />
                        {point}
                      </li>
                    ))}
                  </ul>
                )}

                <button
                  onClick={() => setSelectedFeature(null)}
                  className="w-full md:w-auto px-5 md:px-8 py-2.5 md:py-4 rounded-xl bg-primary text-foreground font-semibold hover:bg-primary/90 transition-all transform hover:scale-105 shadow-lg hover:shadow-primary/30 text-sm md:text-base"
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
    </>
  )
}