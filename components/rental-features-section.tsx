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
    desktopSize: "large",
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
    desktopSize: "wide",
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
    desktopSize: "wide",
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
    desktopSize: "wide",
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
    desktopSize: "small",
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
    desktopSize: "small",
  },
]

type Feature = (typeof features)[number]

export default function RentalFeaturesSection() {
  const [selectedFeature, setSelectedFeature] = useState<Feature | null>(null)
  const [isHydrated, setIsHydrated] = useState(false)
  const [isMobileTablet, setIsMobileTablet] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const horizontalRef = useRef<HTMLDivElement>(null)
  const [horizontalWidth, setHorizontalWidth] = useState(0)

  useEffect(() => {
    setIsHydrated(true)

    const checkScreen = () => {
      setIsMobileTablet(window.innerWidth < 1024)
    }

    checkScreen()
    window.addEventListener("resize", checkScreen)

    return () => {
      window.removeEventListener("resize", checkScreen)
    }
  }, [])
  
  // Keep horizontal distance in sync with viewport and track size.
  useEffect(() => {
    if (!isMobileTablet) {
      setHorizontalWidth(0)
      return
    }

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
  }, [isMobileTablet])

  const shouldTrackHorizontal = isHydrated && isMobileTablet

  // Use scroll progress to transform the horizontal scroll
  const { scrollYProgress } = useScroll({
    target: shouldTrackHorizontal ? containerRef : undefined,
    offset: ["start start", "end end"]
  })

  const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${horizontalWidth}px`])

  const getDesktopCardClass = (size?: string) => {
    switch (size) {
      case "large":
        return "lg:col-span-2 lg:row-span-2"
      case "wide":
        return "lg:col-span-2 lg:row-span-1"
      case "tall":
        return "lg:col-span-1 lg:row-span-2"
      case "small":
      default:
        return "lg:col-span-1 lg:row-span-1"
    }
  }

  return (
    <>
      {/* Normal vertical section before horizontal scroll - REDUCED SPACING */}
      <section className="relative overflow-hidden bg-background px-4 pt-16 pb-8 sm:px-6 md:pt-20 md:pb-10 lg:pt-24">

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

      {/* Mobile + Tablet horizontal scroll section */}
      <section ref={containerRef} className="relative h-[220vh] bg-background -mt-6 sm:-mt-2 lg:hidden">
        <div className="sticky top-0 h-screen overflow-hidden">
          <motion.div 
            ref={horizontalRef}
            style={{ x }}
            className="flex h-full items-center gap-4 px-4 sm:gap-6 sm:px-6"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon
              
              return (
                <motion.div
                  key={index}
                  className="group relative h-[400px] min-w-[85vw] sm:h-[440px] sm:min-w-[400px] md:h-[480px] md:min-w-[460px]"
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

      {/* Desktop-only square card layout */}
      <section className="relative hidden overflow-hidden bg-background px-8 py-16 lg:block xl:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid auto-rows-[180px] grid-cols-1 gap-6 lg:grid-cols-4">
            {features.map((feature, index) => {
              const Icon = feature.icon

              return (
                <motion.button
                  key={index}
                  type="button"
                  onClick={() => setSelectedFeature(feature)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: index * 0.07 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -6, scale: 1.01 }}
                  className={`group relative overflow-hidden rounded-3xl border border-border/50 bg-card/40 text-left shadow-lg ${getDesktopCardClass(feature.desktopSize)}`}
                >
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 1536px) 30vw, 420px"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${feature.color} opacity-70 mix-blend-overlay`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

                  <div className="absolute inset-0 flex flex-col justify-between p-5 text-white">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/30 bg-white/15 backdrop-blur-sm">
                      <Icon className="h-5 w-5" />
                    </div>

                    <div>
                      <h3 className="mb-2 text-lg font-semibold leading-tight">{feature.title}</h3>
                      <p className="mb-3 line-clamp-2 text-sm text-white/90">{feature.description}</p>
                      <span className="inline-flex items-center text-xs font-medium uppercase tracking-wide text-white/95">
                        Explore
                        <ArrowRight className="ml-2 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </motion.button>
              )
            })}
          </div>
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
            <button className="px-6 py-3 rounded-xl bg-primary text-white font-semibold hover:bg-primary/90 transition-all transform hover:scale-105 shadow-lg hover:shadow-primary/30 text-sm sm:text-base sm:px-8 sm:py-4">
              Start Your Journey
            </button>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
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
              className="relative w-full max-w-[92vw] overflow-hidden rounded-3xl border border-border bg-card shadow-2xl md:max-w-2xl lg:max-w-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedFeature(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center text-foreground hover:bg-accent transition-colors"
              >
                <X size={18} />
              </button>

              <div className="relative h-52 md:h-64 lg:h-72">
                <Image 
                  src={selectedFeature.image} 
                  alt={selectedFeature.title} 
                  fill 
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 960px"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${selectedFeature.color} opacity-60 mix-blend-overlay`} />
              </div>

              <div className="relative p-5 md:p-7 lg:p-8">
                <div
                  className={`absolute -top-9 left-5 h-12 w-12 rounded-2xl border-2 border-border bg-gradient-to-br ${selectedFeature.color} flex items-center justify-center shadow-xl md:left-7 md:-top-10 md:h-14 md:w-14`}
                >
                  {selectedFeature.icon && <selectedFeature.icon className="h-5 w-5 text-white md:h-6 md:w-6" />}
                </div>

                <h3 className="mb-3 mt-7 text-xl font-bold text-foreground md:mt-6 md:text-2xl lg:text-3xl">
                  {selectedFeature.title}
                </h3>

                <p className="mb-5 text-sm leading-relaxed text-muted-foreground md:mb-6 md:text-base lg:text-lg">
                  {selectedFeature.details}
                </p>

                {selectedFeature.points && (
                  <ul className="mb-5 grid grid-cols-1 gap-2 md:mb-6 md:grid-cols-2 md:gap-3">
                    {selectedFeature.points.map((point, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-foreground/80 md:text-sm lg:text-base">
                        <div className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r ${selectedFeature.color}`} />
                        {point}
                      </li>
                    ))}
                  </ul>
                )}

                <button
                  onClick={() => setSelectedFeature(null)}
                  className="w-full rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-foreground shadow-lg transition-all hover:scale-105 hover:bg-primary/90 hover:shadow-primary/30 md:w-auto md:px-7 md:py-3 md:text-base"
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