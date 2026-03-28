'use client'

import { useEffect, useMemo, useRef, useState } from "react"
import type { MouseEvent } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Sparkles, Zap, Shield, Home, Gavel, Key, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"

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
  // Simple vertical stacked layout for mobile — no special scroll handling
  return (
    <section className="relative bg-background px-4 pb-8 sm:px-6 lg:hidden">
      <div className="mx-auto max-w-3xl space-y-6">
        {services.map((svc, idx) => {
          const Icon = svc.icon
          return (
            <div key={svc.id} className="w-full">
              <button
                type="button"
                onClick={() => onSelect(svc.id)}
                className="relative block w-full overflow-hidden rounded-2xl border border-border/60 bg-card/40 text-left shadow-md"
                aria-label={`Open details for ${svc.title}`}
              >
                <div className="relative h-52 w-full">
                  <Image src={svc.image} alt={svc.title} fill className="object-cover" sizes="100vw" />
                  <div className={`absolute inset-0 bg-linear-to-br ${svc.accent} opacity-40 mix-blend-overlay`} />
                  <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
                </div>

                <div className="px-4 py-4">
                  <div className="flex items-center justify-between gap-3">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-destructive/20 bg-destructive/8">
                      <Icon className="h-5 w-5 text-destructive" />
                    </div>
                    <span className="text-sm font-semibold text-white/90">{String(idx + 1).padStart(2, '0')}</span>
                  </div>

                  <h3 className="mt-3 text-lg font-semibold text-foreground">{svc.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{svc.description}</p>
                </div>
              </button>
            </div>
          )
        })}
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
            className="fixed inset-x-0 bottom-0 z-50 mx-auto w-full max-w-lg rounded-t-4xl border border-border/60 bg-background px-4 pb-6 pt-4 shadow-[0_-20px_70px_-35px_rgba(0,0,0,0.65)] lg:hidden"
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

            <div className="relative mb-5 h-48 overflow-hidden rounded-3xl">
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

            <Button asChild size="lg" className="mt-6 w-full rounded-xl text-base font-semibold text-white bg-primary hover:bg-primary/90 px-8 py-6">
              <Link href="/services/management" onClick={onClose}>
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
  const [anchorRect, setAnchorRect] = useState<DOMRect | null>(null)

  const selectedService = useMemo(
    () => services.find((service) => service.id === selectedServiceId) ?? null,
    [selectedServiceId]
  )

  function openFromCard(e: MouseEvent<HTMLButtonElement>, id: string) {
    const target = e.currentTarget as HTMLElement
    const rect = target.getBoundingClientRect()
    setAnchorRect(rect)
    setSelectedServiceId(id)
  }

  function closeModal() {
    setSelectedServiceId(null)
    setAnchorRect(null)
  }

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
                  <button
                    onClick={(e) => openFromCard(e, service.id)}
                    className="block h-full w-full text-left"
                    aria-label={`Open details for ${service.title}`}
                  >
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
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl destructive border-destructive bg-destructive/15 backdrop-blur-sm">
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
                  </button>
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

      {/* Desktop modal that animates from card rect to centered modal */}
      <AnimatePresence>
        {selectedService && anchorRect && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center"
          >
            <motion.button
              onClick={closeModal}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            />

            <motion.div
              initial={{
                left: anchorRect.left,
                top: anchorRect.top,
                width: anchorRect.width,
                height: anchorRect.height,
                position: 'fixed',
                borderRadius: 12,
                overflow: 'hidden'
              }}
              animate={{
                left: '50%',
                top: '50%',
                x: '-50%',
                y: '-50%',
                width: Math.min(920, window.innerWidth - 80),
                height: 'auto',
                position: 'fixed'
              }}
              exit={{ opacity: 0 }}
              transition={{ type: 'spring', stiffness: 200, damping: 30 }}
              className="z-50 max-w-3xl w-full bg-background rounded-2xl shadow-2xl border border-border overflow-hidden"
            >
              <div className="relative h-48 w-full">
                <Image src={selectedService.image} alt={selectedService.title} fill className="object-cover" />
                <div className={`absolute inset-0 bg-linear-to-br ${selectedService.accent} opacity-30 mix-blend-overlay`} />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />
                <button onClick={closeModal} className="absolute top-4 right-4 z-50 inline-flex h-10 w-10 items-center justify-center rounded-full bg-card border border-border">
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-destructive">Service details</p>
                <h3 className="mt-2 text-2xl font-semibold text-foreground">{selectedService.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{selectedService.description}</p>

                <div className="mt-6 flex gap-3">
                  <Button asChild size="default" className="rounded-lg px-4 py-2 bg-primary text-white">
                    <Link href="services/management" onClick={closeModal}>View on services</Link>
                  </Button>
                  <Button onClick={closeModal} size="default" className="rounded-lg px-4 py-2 border text-white">Close</Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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

            <Button asChild size="lg" className="group rounded-xl px-8 py-6 text-base font-semibold text-white">
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