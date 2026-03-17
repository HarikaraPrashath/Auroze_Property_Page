'use client'

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Sparkles, Zap, Shield, Home, Gavel, Key } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

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
  const [visibleCards, setVisibleCards] = useState<number[]>([])

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

  useEffect(() => {
    if (!isMobile) {
      setVisibleCards([])
      return
    }

    const elements = document.querySelectorAll(".service-overview-card")
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

  // Clean asymmetrical layout
  const getGridPosition = (index: number) => {
    const positions = [
      "md:col-span-2 md:row-span-2", // Large - first card
      "md:col-span-1 md:row-span-2", // Tall - second card
      "md:col-span-1 md:row-span-1", // Medium - third card
      "md:col-span-1 md:row-span-1", // Small - fourth card
      "md:col-span-1 md:row-span-1", // Small - fifth card
      "md:col-span-2 md:row-span-1", // Wide - sixth card
    ]
    return positions[index]
  }

  // Mobile cards enter from opposite sides only on small screens.
  const getMobileInitial = (index: number) => {
    const fromLeft = index % 2 === 0
    return { opacity: 0, x: fromLeft ? -140 : 140 }
  }

  return (
    <section className="py-24 px-6 bg-background">
      <div className="relative max-w-7xl mx-auto">
        {/* Header with clean rise animation - only animate on desktop */}
        <motion.div 
          initial={!isMobile ? { opacity: 0 } : undefined}
          animate={isMobile ? { opacity: 1 } : undefined}
          whileInView={!isMobile ? { opacity: 1 } : undefined}
          viewport={!isMobile ? { once: true } : undefined}
          className="text-center mb-16 relative"
        >
          {/* Cinematic spotlight that grows - only on desktop */}
          {!isMobile && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 2, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2 }}
              className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--primary)/10%,transparent_70%)] -z-10"
            />
          )}

          {/* Text with dramatic staggered entrance - only animate on desktop */}
          <div className="space-y-4">
            <motion.h2 
              initial={!isMobile ? { opacity: 0, y: 100 } : undefined}
              animate={isMobile ? { opacity: 1, y: 0 } : undefined}
              whileInView={!isMobile ? { opacity: 1, y: 0 } : undefined}
              viewport={!isMobile ? { once: true } : undefined}
              transition={{ 
                duration: 1.2,
                type: "spring",
                stiffness: 50,
                damping: 12
              }}
              className="text-5xl md:text-7xl font-bold"
            >
              <motion.span
                initial={!isMobile ? { opacity: 0 } : undefined}
                animate={isMobile ? { opacity: 1 } : undefined}
                whileInView={!isMobile ? { opacity: 1 } : undefined}
                viewport={!isMobile ? { once: true } : undefined}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-primary"
              >
                Comprehensive
              </motion.span>{' '}
              <motion.span
                initial={!isMobile ? { opacity: 0 } : undefined}
                animate={isMobile ? { opacity: 1 } : undefined}
                whileInView={!isMobile ? { opacity: 1 } : undefined}
                viewport={!isMobile ? { once: true } : undefined}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-primary"
              >
                Service
              </motion.span>{' '}
              <motion.span
                initial={!isMobile ? { scale: 0 } : undefined}
                animate={isMobile ? { scale: 1 } : undefined}
                whileInView={!isMobile ? { scale: 1 } : undefined}
                viewport={!isMobile ? { once: true } : undefined}
                transition={{ 
                  duration: 0.8,
                  delay: 0.9,
                  type: "spring"
                }}
                className="text-foreground inline-block"
              >
                Suite
              </motion.span>
            </motion.h2>

            <motion.p 
              initial={!isMobile ? { opacity: 0, y: 50 } : undefined}
              animate={isMobile ? { opacity: 1, y: 0 } : undefined}
              whileInView={!isMobile ? { opacity: 1, y: 0 } : undefined}
              viewport={!isMobile ? { once: true } : undefined}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="text-muted-foreground text-lg max-w-2xl mx-auto"
            >
              Everything you need for professional property management, delivered with excellence.
            </motion.p>
          </div>

          {/* Cinematic line with light sweep - only on desktop */}
          {!isMobile && (
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "5rem" }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 1.5 }}
              className="h-0.5 bg-primary/30 mx-auto mt-8 relative overflow-hidden"
            >
              <motion.div
                animate={{ x: [-100, 100] }}
                transition={{ duration: 2, delay: 2, repeat: Infinity }}
                className="absolute inset-0 w-20 bg-linear-to-r from-transparent via-primary to-transparent"
              />
            </motion.div>
          )}
        </motion.div>

        {/* Clean Bento Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 auto-rows-[200px] gap-5 mb-16"
        >
          {services.map((service, index) => {
            const Icon = service.icon
            const isHovered = hoveredId === service.id
            const gridPosition = getGridPosition(index)
            const hasEntered = visibleCards.includes(index)

            const mobileInitial = getMobileInitial(index)
            const mobileAnimate = {
              opacity: 1,
              x: 0,
              transition: {
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1] as const,
                delay: (index % 3) * 0.06,
              },
            }

            const desktopInitial = { opacity: 0, y: 15 }
            const desktopAnimate = {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.4,
                type: "spring" as const,
                stiffness: 80,
                damping: 15,
              },
            }

            const initial = isMobile ? mobileInitial : desktopInitial
            const animate = isMobile ? (hasEntered ? mobileAnimate : mobileInitial) : desktopAnimate

            return (
              <motion.div
                key={service.id}
                data-index={index}
                initial={initial}
                animate={animate}
                whileInView={isMobile ? undefined : desktopAnimate}
                viewport={isMobile ? undefined : { once: true, amount: 0.2 }}
                onHoverStart={() => setHoveredId(service.id)}
                onHoverEnd={() => setHoveredId(null)}
                className={`service-overview-card ${gridPosition}`}
              >
                <Link
                  href={`/services#${service.id}`}
                  className="relative block h-full w-full group"
                >
                  <div className="relative h-full w-full rounded-xl overflow-hidden border border-border bg-card hover:border-primary/30 transition-all duration-300">
                    {/* Image with overlay */}
                    <div className="absolute inset-0">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        priority={index < 3}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      {/* Simple gradient overlay */}
                      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="absolute inset-0 p-5 flex flex-col justify-end">
                      {/* Icon */}
                      <motion.div
                        animate={{ y: isHovered ? -3 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="mb-2"
                      >
                        <div className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                      </motion.div>

                      {/* Title */}
                      <h3 className="text-lg font-semibold text-white mb-1">
                        {service.title}
                      </h3>
                      
                      {/* Description - appears on hover */}
                      <motion.p 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ 
                          opacity: isMobile || isHovered ? 1 : 0,
                          height: isMobile || isHovered ? "auto" : 0
                        }}
                        transition={{ duration: 0.2 }}
                        className="text-xs text-white/80 mb-2 overflow-hidden"
                      >
                        {service.description}
                      </motion.p>

                      {/* Learn more link */}
                      <motion.div
                        animate={{ opacity: isMobile || isHovered ? 1 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="flex items-center gap-1 text-xs font-medium text-white/90"
                      >
                        <span>Learn more</span>
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </motion.div>
                    </div>

                    {/* Simple hover border */}
                    <motion.div
                      animate={{ opacity: isHovered ? 1 : 0 }}
                      className="absolute inset-0 border border-primary/50 rounded-xl pointer-events-none"
                    />
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Clean CTA Button */}
        <motion.div 
          initial={!isMobile ? { opacity: 0, y: 10 } : { opacity: 1, y: 0 }}
          whileInView={!isMobile ? { opacity: 1, y: 0 } : {}}
          viewport={!isMobile ? { once: true } : undefined}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-center"
        >
          <Button 
            asChild 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
          >
            <Link href="/services" className="flex items-center gap-2">
              <span>Explore All Services</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}