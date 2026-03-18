'use client'

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Sparkles, Zap, Shield, Home, Gavel, Key } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { useState, useEffect, useRef } from "react"

const services = [
  {
    id: "rent-payment",
    title: "Rent & Payment Management",
    description: "Streamlined rental collection and secure payment processing.",
    image: "/money.jpg",
    icon: Zap,
    size: "large",
  },
  {
    id: "maintenance",
    title: "Property Maintenance",
    description: "Professional repairs and maintenance with certified staff.",
    image: "/maintenance.jpg",
    icon: Home,
    size: "medium",
  },
  {
    id: "tenant",
    title: "Tenant Management",
    description: "Complete tenant screening and relationship management.",
    image: "/tenant_1.jpg",
    icon: Shield,
    size: "medium",
  },
  {
    id: "housekeeping",
    title: "Housekeeping",
    description: "Daily cleaning and operational management.",
    image: "/housekeeping.jpg",
    icon: Sparkles,
    size: "small",
  },
  {
    id: "legal",
    title: "Legal & Compliance",
    description: "Full legal documentation and compliance services.",
    image: "/legal_1.jpg",
    icon: Gavel,
    size: "small",
  },
  {
    id: "pickup",
    title: "Pickup & Dropoff",
    description: "Convenient key management and property access.",
    image: "/pickup.jpg",
    icon: Key,
    size: "small",
  },
]

export default function ServiceOverviewSection() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const [isMobile, setIsMobile] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const horizontalRef = useRef<HTMLDivElement>(null)
  const [horizontalWidth, setHorizontalWidth] = useState(0)
  const [activeCardIndex, setActiveCardIndex] = useState(0)

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

  // Calculate horizontal scroll width
  useEffect(() => {
    const updateHorizontalWidth = () => {
      if (horizontalRef.current) {
        setHorizontalWidth(horizontalRef.current.scrollWidth - horizontalRef.current.clientWidth)
      }
    }

    updateHorizontalWidth()
    window.addEventListener("resize", updateHorizontalWidth)
    return () => window.removeEventListener("resize", updateHorizontalWidth)
  }, [])

  // Scroll progress for horizontal movement
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // Smooth spring animation
  const smoothX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  const x = useTransform(smoothX, [0, 1], ["0%", `-${horizontalWidth}px`])

  // Track active card
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((value) => {
      const cardIndex = Math.floor(value * services.length)
      setActiveCardIndex(Math.min(cardIndex, services.length - 1))
    })
    return () => unsubscribe()
  }, [scrollYProgress, services.length])

  // Cinematic heading animations
  const headingVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3,
      }
    }
  }

  const wordVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      rotateX: -90,
      scale: 0.8
    },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200
      }
    }
  }

  const glowVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { 
      opacity: [0.2, 0.5, 0.2],
      scale: [0.8, 1.2, 0.8],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  // Card entrance animations
  const cardVariants = {
    initial: (index: number) => ({
      opacity: 0,
      x: 100,
      scale: 0.8,
      rotateY: 45,
      filter: "blur(10px)"
    }),
    visible: (index: number) => ({
      opacity: 1,
      x: 0,
      scale: 1,
      rotateY: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
        delay: index * 0.15,
        duration: 0.8
      }
    }),
    hover: {
      scale: 1.05,
      rotateY: 5,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 300
      }
    }
  }

  const titleWords = ["Comprehensive", "Service", "Suite"]

  return (
    <>
      {/* Heading Section - Now with cinematic animations */}
      <section className="relative overflow-hidden bg-background px-4 pt-16 pb-8 sm:px-6 md:pt-20 md:pb-10 lg:pt-24">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            variants={glowVariants}
            initial="initial"
            animate="animate"
            className="absolute -top-40 -right-40 w-80 h-80 bg-primary/30 rounded-full mix-blend-normal blur-3xl opacity-50"
          />
          <motion.div 
            variants={glowVariants}
            initial="initial"
            animate="animate"
            transition={{ delay: 1 }}
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/30 rounded-full mix-blend-normal blur-3xl opacity-50"
          />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
          <motion.div
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="mx-auto max-w-4xl text-center"
          >
            <motion.div className="flex justify-center mb-4">
              <Sparkles className="w-6 h-6 text-primary md:w-8 md:h-8" />
            </motion.div>

            <h2 className="mb-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              {titleWords.map((word, wordIndex) => (
                <motion.span 
                  key={wordIndex} 
                  variants={wordVariants}
                  className={`inline-block mr-2 md:mr-4 last:mr-0 ${
                    wordIndex < 2 ? 'text-primary' : 'text-foreground'
                  }`}
                  style={{
                    textShadow: "0 0 30px rgba(59, 130, 246, 0.3)"
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </h2>

            <motion.p
              variants={wordVariants}
              className="mx-auto max-w-2xl text-sm text-muted-foreground sm:text-base"
            >
              Everything you need for professional property management, delivered with excellence.
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

      {/* Horizontal Scroll Section */}
      <section ref={containerRef} className="relative h-[220vh] bg-background -mt-2">
        <div className="sticky top-0 h-screen overflow-hidden">
          {/* Progress indicator */}
          <motion.div 
            className="absolute top-4 left-1/2 -translate-x-1/2 z-20 flex gap-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {services.map((_, index) => (
              <motion.div
                key={index}
                className={`h-1 rounded-full transition-all duration-300 ${
                  index === activeCardIndex ? 'w-8 bg-primary' : 'w-2 bg-primary/30'
                }`}
                animate={{
                  scale: index === activeCardIndex ? 1.2 : 1,
                }}
              />
            ))}
          </motion.div>

          <motion.div 
            ref={horizontalRef}
            style={{ x }}
            className="flex h-full items-center gap-4 px-4 sm:gap-6 sm:px-6 lg:gap-8 lg:px-8"
          >
            {services.map((service, index) => {
              const Icon = service.icon
              const isHovered = hoveredId === service.id

              return (
                <motion.div
                  key={service.id}
                  custom={index}
                  variants={cardVariants}
                  initial="initial"
                  whileInView="visible"
                  whileHover="hover"
                  viewport={{ once: true, amount: 0.5 }}
                  className="relative h-[400px] min-w-[85vw] sm:h-[450px] sm:min-w-[400px] md:h-[500px] md:min-w-[450px] lg:h-[550px] lg:min-w-[500px] group"
                  onHoverStart={() => setHoveredId(service.id)}
                  onHoverEnd={() => setHoveredId(null)}
                >
                  {/* Card glow effect */}
                  <motion.div
                    className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />

                  <Link href={`/services#${service.id}`} className="block h-full w-full">
                    <div className="relative h-full w-full rounded-2xl overflow-hidden border border-border/50 shadow-lg cursor-pointer">
                      {/* Image with zoom on hover */}
                      <motion.div
                        className="absolute inset-0"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.4 }}
                      >
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 85vw, 500px"
                          priority={index < 3}
                        />
                      </motion.div>

                      {/* Gradient overlays */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                      
                      {/* Colored overlay on hover */}
                      <motion.div
                        animate={{ opacity: isHovered ? 0.3 : 0 }}
                        className={`absolute inset-0 bg-gradient-to-br ${
                          index === 0 ? 'from-blue-500/30 to-cyan-500/30' :
                          index === 1 ? 'from-green-500/30 to-emerald-500/30' :
                          index === 2 ? 'from-purple-500/30 to-pink-500/30' :
                          index === 3 ? 'from-orange-500/30 to-red-500/30' :
                          index === 4 ? 'from-indigo-500/30 to-purple-500/30' :
                          'from-amber-500/30 to-yellow-500/30'
                        }`}
                      />

                      {/* Content */}
                      <div className="absolute inset-0 flex flex-col justify-end p-6 text-white sm:p-7 md:p-8">
                        <motion.div
                          initial={{ y: 20, opacity: 0 }}
                          whileInView={{ y: 0, opacity: 1 }}
                          transition={{ delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="mb-3"
                        >
                          <motion.div 
                            className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                          >
                            <Icon className="w-6 h-6" />
                          </motion.div>
                        </motion.div>

                        <motion.h3 
                          className="mb-1.5 text-xl font-bold leading-snug tracking-tight sm:text-2xl"
                          initial={{ x: -20, opacity: 0 }}
                          whileInView={{ x: 0, opacity: 1 }}
                          transition={{ delay: index * 0.1 + 0.2 }}
                        >
                          {service.title}
                        </motion.h3>
                        
                        <motion.p 
                          className="mb-4 max-w-[32ch] text-xs text-white/85 line-clamp-2 sm:text-sm"
                          initial={{ x: -20, opacity: 0 }}
                          whileInView={{ x: 0, opacity: 1 }}
                          transition={{ delay: index * 0.1 + 0.3 }}
                        >
                          {service.description}
                        </motion.p>

                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 + 0.4 }}
                          className="flex items-center text-xs font-medium text-white group-hover:translate-x-2 transition-transform duration-300 sm:text-sm"
                        >
                          Learn more
                          <ArrowRight className="ml-2 w-3.5 h-3.5" />
                        </motion.div>
                      </div>

                      {/* Hover border */}
                      <motion.div
                        animate={{ opacity: isHovered ? 1 : 0 }}
                        className="absolute inset-0 border-2 border-white/30 rounded-2xl pointer-events-none"
                      />
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-background px-4 py-16 sm:px-6 md:py-20 lg:px-8 lg:py-24">
        <div className="relative z-10 mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-block mb-6"
            >
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                Complete Property Solutions
              </span>
            </motion.div>

            <Button 
              asChild 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 group"
            >
              <Link href="/services" className="flex items-center gap-2">
                <span>Explore All Services</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

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