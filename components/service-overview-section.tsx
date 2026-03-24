'use client'

import { useEffect, useMemo, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Sparkles, Zap, Shield, Home, Gavel, Key, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatePresence, motion } from "framer-motion"

const services = [
  {
    id: "rent-payment",
    title: "Rent & Payment Management",
    description: "Automated billing, secure collections, and real-time payment intelligence.",
    image: "/money.jpg",
    icon: Zap,
    accent: "from-sky-500/70 to-cyan-400/60",
  },
  {
    id: "maintenance",
    title: "Property Maintenance",
    description: "Scheduled and emergency maintenance with vendor orchestration.",
    image: "/maintenance.jpg",
    icon: Home,
    accent: "from-emerald-500/70 to-teal-400/60",
  },
  {
    id: "tenant",
    title: "Tenant Management",
    description: "Screening, onboarding, and lifecycle support in one tenant hub.",
    image: "/tenant_1.jpg",
    icon: Shield,
    accent: "from-violet-500/70 to-fuchsia-400/60",
  },
  {
    id: "housekeeping",
    title: "Housekeeping",
    description: "Premium cleaning workflows with quality tracking and audit logs.",
    image: "/housekeeping.jpg",
    icon: Sparkles,
    accent: "from-amber-500/70 to-orange-400/60",
  },
  {
    id: "legal",
    title: "Legal & Compliance",
    description: "Lease automation, document control, and compliance-ready templates.",
    image: "/legal_1.jpg",
    icon: Gavel,
    accent: "from-rose-500/70 to-pink-400/60",
  },
  {
    id: "pickup",
    title: "Pickup & Dropoff",
    description: "Key exchange and access coordination with verified handoffs.",
    image: "/pickup.jpg",
    icon: Key,
    accent: "from-indigo-500/70 to-blue-400/60",
  },
]

type ServiceItem = (typeof services)[number]

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max)
}

function MobileServicesJourney({
  onSelect,
}: {
  onSelect: (serviceId: string) => void
}) {
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [isLocked, setIsLocked] = useState(false)

  const touchStartY = useRef(0)
  const isAnimating = useRef(false)

  const lastIndex = services.length - 1

  useEffect(() => {
    const checkLockZone = () => {
      if (!sectionRef.current || window.innerWidth >= 1024) return

      const rect = sectionRef.current.getBoundingClientRect()
      const vh = window.innerHeight

      // lock when section is around viewport center
      const shouldLock =
        rect.top <= vh * 0.18 &&
        rect.bottom >= vh * 0.82

      setIsLocked(shouldLock)
    }

    checkLockZone()
    window.addEventListener("scroll", checkLockZone, { passive: true })
    window.addEventListener("resize", checkLockZone)

    return () => {
      window.removeEventListener("scroll", checkLockZone)
      window.removeEventListener("resize", checkLockZone)
    }
  }, [])

  useEffect(() => {
    if (!isLocked || window.innerWidth >= 1024) return

    const sectionEl = sectionRef.current
    if (!sectionEl) return

    const lockBody = () => {
      document.body.style.overscrollBehavior = "none"
      document.documentElement.style.overscrollBehavior = "none"
    }

    const unlockBody = () => {
      document.body.style.overscrollBehavior = ""
      document.documentElement.style.overscrollBehavior = ""
    }

    const moveNext = () => {
      if (isAnimating.current) return false
      if (activeIndex >= lastIndex) return false

      isAnimating.current = true
      setActiveIndex((prev) => Math.min(prev + 1, lastIndex))
      setTimeout(() => {
        isAnimating.current = false
      }, 420)
      return true
    }

    const movePrev = () => {
      if (isAnimating.current) return false
      if (activeIndex <= 0) return false

      isAnimating.current = true
      setActiveIndex((prev) => Math.max(prev - 1, 0))
      setTimeout(() => {
        isAnimating.current = false
      }, 420)
      return true
    }

    const onWheel = (e: WheelEvent) => {
      if (!isLocked) return

      const goingDown = e.deltaY > 8
      const goingUp = e.deltaY < -8

      if (goingDown && activeIndex < lastIndex) {
        e.preventDefault()
        moveNext()
        return
      }

      if (goingUp && activeIndex > 0) {
        e.preventDefault()
        movePrev()
        return
      }

      // release only at edges
      if ((goingDown && activeIndex === lastIndex) || (goingUp && activeIndex === 0)) {
        unlockBody()
        return
      }

      e.preventDefault()
    }

    const onTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY
    }

    const onTouchMove = (e: TouchEvent) => {
      if (!isLocked) return

      const currentY = e.touches[0].clientY
      const diff = touchStartY.current - currentY

      if (Math.abs(diff) < 18) return

      const goingDown = diff > 0
      const goingUp = diff < 0

      if (goingDown && activeIndex < lastIndex) {
        e.preventDefault()
        touchStartY.current = currentY
        moveNext()
        return
      }

      if (goingUp && activeIndex > 0) {
        e.preventDefault()
        touchStartY.current = currentY
        movePrev()
        return
      }

      // allow page to continue only at first/last edge
      if ((goingDown && activeIndex === lastIndex) || (goingUp && activeIndex === 0)) {
        unlockBody()
        return
      }

      e.preventDefault()
    }

    lockBody()

    window.addEventListener("wheel", onWheel, { passive: false })
    window.addEventListener("touchstart", onTouchStart, { passive: true })
    window.addEventListener("touchmove", onTouchMove, { passive: false })

    return () => {
      unlockBody()
      window.removeEventListener("wheel", onWheel)
      window.removeEventListener("touchstart", onTouchStart)
      window.removeEventListener("touchmove", onTouchMove)
    }
  }, [isLocked, activeIndex, lastIndex])

  const currentService = services[activeIndex]
  const Icon = currentService.icon

  return (
    <section
      ref={sectionRef}
      className="relative bg-background px-4 pb-4 sm:px-6 lg:hidden"
    >
      <div className="sticky top-0 flex min-h-[80svh] items-center justify-center overflow-hidden py-3">
        <div className="w-full">
          <div className="mx-auto w-full max-w-[22rem] overflow-hidden rounded-[1.75rem]">
            <motion.div
              key={currentService.id}
              initial={{ x: 60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -60, opacity: 0 }}
              transition={{ duration: 0.35 }}
            >
              <button
                type="button"
                onClick={() => onSelect(currentService.id)}
                className="relative block h-[27rem] w-full overflow-hidden rounded-[1.75rem] border border-border/60 bg-card/40 text-left shadow-[0_24px_80px_-40px_rgba(0,0,0,0.55)] backdrop-blur-sm"
                aria-label={`Open details for ${currentService.title}`}
              >
                <Image
                  src={currentService.image}
                  alt={currentService.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1023px) 88vw, 360px"
                  priority
                />
                <div className={`absolute inset-0 bg-linear-to-br ${currentService.accent} opacity-45 mix-blend-overlay`} />
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/45 to-black/10" />

                <div className="absolute inset-0 flex flex-col justify-between p-5 text-white">
                  <div className="flex items-start justify-between gap-3">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/20 bg-white/12 backdrop-blur-md">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/85">
                      {String(activeIndex + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="space-y-3">
                    <h3 className="max-w-[14ch] text-[1.7rem] font-semibold leading-[1.05] tracking-tight">
                      {currentService.title}
                    </h3>
                    <p className="max-w-[28ch] text-sm leading-6 text-white/88">
                      {currentService.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-white">
                      View details
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </button>
            </motion.div>
          </div>

          <div className="mt-4 flex items-center justify-center gap-2">
            {services.map((service, index) => (
              <span
                key={service.id}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === activeIndex ? "w-8 bg-primary" : "w-2.5 bg-border"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function MobileServiceSheet({
  service,
  onClose,
}: {
  service: ServiceItem | null
  onClose: () => void
}) {
  useEffect(() => {
    if (!service) return

    const previousOverflow = document.body.style.overflow
    const previousTouchAction = document.body.style.touchAction

    document.body.style.overflow = "hidden"
    document.body.style.touchAction = "none"

    return () => {
      document.body.style.overflow = previousOverflow
      document.body.style.touchAction = previousTouchAction
    }
  }, [service])

  return (
    <AnimatePresence>
      {service && (
        <>
          <motion.button
            type="button"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/55 backdrop-blur-[2px] lg:hidden"
            aria-label="Close service details"
          />

          <motion.div
            initial={{ y: "100%", opacity: 0.92 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0.96 }}
            transition={{ type: "spring", stiffness: 240, damping: 28 }}
            className="fixed inset-x-0 bottom-0 z-50 mx-auto w-full max-w-lg rounded-t-[2rem] border border-border/60 bg-background px-4 pb-6 pt-4 shadow-[0_-20px_70px_-35px_rgba(0,0,0,0.65)] lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-labelledby="service-details-title"
          >
            <div className="mx-auto mb-4 h-1.5 w-14 rounded-full bg-muted" />

            <div className="mb-4 flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-destructive">
                  Service details
                </p>
                <h3 id="service-details-title" className="mt-2 text-2xl font-semibold tracking-tight text-foreground">
                  {service.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/70 bg-card text-foreground"
                aria-label="Close service details"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="relative mb-5 h-48 overflow-hidden rounded-[1.5rem]">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div className={`absolute inset-0 bg-linear-to-br ${service.accent} opacity-35 mix-blend-overlay`} />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
            </div>

            <p className="text-sm leading-7 text-muted-foreground">
              {service.description}
            </p>

            <Button asChild size="lg" className="mt-6 w-full rounded-xl text-base font-semibold">
              <Link href={`/services#${service.id}`} onClick={onClose}>
                Explore service
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default function ServiceOverviewSection() {
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null)

  const selectedService = useMemo(
    () => services.find((service) => service.id === selectedServiceId) ?? null,
    [selectedServiceId]
  )

  return (
    <>
      <section className="relative overflow-hidden bg-background px-4 pt-12 pb-2 sm:px-6 lg:px-8 lg:pt-16 lg:pb-12">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 right-[-10%] h-72 w-72 rounded-full bg-primary-500/10 blur-3xl" />
          <div className="absolute bottom-[-20%] left-[-8%] h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-primary/25 to-transparent" />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-6 lg:grid-cols-1 lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true }}
            className=""
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-destructive/30 bg-destructive/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-destructive">
              Service Excellence Suite
            </div>

            <h2 className="max-w-4xl text-3xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              <span className="text-primary">Premium operations for every </span>
              <span className="block">
                stage of property management
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              From rent automation to legal support, our services are designed to elevate tenant experience and maximize owner returns.
            </p>
          </motion.div>
        </div>
      </section>

      <MobileServicesJourney onSelect={setSelectedServiceId} />

      <section className="relative hidden bg-background px-4 pb-12 sm:px-6 lg:block lg:px-8 lg:pb-14">
        <div className="mx-auto max-w-7xl">
          <div className="hidden auto-rows-[110px] grid-cols-12 gap-5 lg:grid">
            {services.map((service, index) => {
              const Icon = service.icon

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.05, y: -8 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true, amount: 0.25 }}
                  className="group relative overflow-hidden rounded-3xl border border-border/60 bg-card/30 transition-shadow duration-300 hover:shadow-xl lg:col-span-4 lg:row-span-2"
                >
                  <Link href={`/services#${service.id}`} className="block h-full w-full">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      sizes="(max-width: 1536px) 40vw, 560px"
                    />
                    <div className={`absolute inset-0 bg-linear-to-br ${service.accent} opacity-50 mix-blend-overlay`} />
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />

                    <div className="absolute inset-0 flex flex-col justify-between p-5 text-white">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl destructive border-icon bg-icon/15 backdrop-blur-sm">
                        <Icon className="h-5 w-5 text-destructive" />
                      </div>

                      <div>
                        <h3 className="mb-2 text-xl font-semibold leading-tight tracking-tight">
                          {service.title}
                        </h3>
                        <p className="mb-3 max-w-[40ch] text-sm leading-relaxed text-white/90">
                          {service.description}
                        </p>
                        <span className="inline-flex items-center gap-2 text-sm font-medium text-white/95">
                          View service
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <MobileServiceSheet
        service={selectedService}
        onClose={() => setSelectedServiceId(null)}
      />

      <section className="relative overflow-hidden bg-background px-4 pb-12 sm:px-6 lg:px-8 lg:pb-16">
        <div className="mx-auto max-w-5xl rounded-3xl border border-border/70 bg-card/30 p-7 shadow-[0_20px_70px_-35px_rgba(0,0,0,0.45)] backdrop-blur-sm sm:p-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-destructive">Ready to upgrade operations?</p>
            <h3 className="mb-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Build a premium experience for owners and tenants
            </h3>
            <p className="mx-auto mb-8 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Activate the full service stack and run your rentals with consistency, speed, and confidence.
            </p>

            <Button asChild size="lg" className="group rounded-xl px-8 py-6 text-base font-semibold">
              <Link href="/services" className="inline-flex items-center gap-2">
                Explore all services
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  )
}