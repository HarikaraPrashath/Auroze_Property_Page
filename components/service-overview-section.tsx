'use client'

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Sparkles, Zap, Shield, Home, Gavel, Key } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const services = [
  {
    id: "rent-payment",
    title: "Rent & Payment Management",
    description: "Automated billing, secure collections, and real-time payment intelligence.",
    image: "/money.jpg",
    icon: Zap,
    accent: "from-sky-500/70 to-cyan-400/60",
    layout: "lg:col-span-7 lg:row-span-3",
  },
  {
    id: "maintenance",
    title: "Property Maintenance",
    description: "Scheduled and emergency maintenance with vendor orchestration.",
    image: "/maintenance.jpg",
    icon: Home,
    accent: "from-emerald-500/70 to-teal-400/60",
    layout: "lg:col-span-5 lg:row-span-2",
  },
  {
    id: "tenant",
    title: "Tenant Management",
    description: "Screening, onboarding, and lifecycle support in one tenant hub.",
    image: "/tenant_1.jpg",
    icon: Shield,
    accent: "from-violet-500/70 to-fuchsia-400/60",
    layout: "lg:col-span-4 lg:row-span-2",
  },
  {
    id: "housekeeping",
    title: "Housekeeping",
    description: "Premium cleaning workflows with quality tracking and audit logs.",
    image: "/housekeeping.jpg",
    icon: Sparkles,
    accent: "from-amber-500/70 to-orange-400/60",
    layout: "lg:col-span-3 lg:row-span-2",
  },
  {
    id: "legal",
    title: "Legal & Compliance",
    description: "Lease automation, document control, and compliance-ready templates.",
    image: "/legal_1.jpg",
    icon: Gavel,
    accent: "from-rose-500/70 to-pink-400/60",
    layout: "lg:col-span-5 lg:row-span-2",
  },
  {
    id: "pickup",
    title: "Pickup & Dropoff",
    description: "Key exchange and access coordination with verified handoffs.",
    image: "/pickup.jpg",
    icon: Key,
    accent: "from-indigo-500/70 to-blue-400/60",
    layout: "lg:col-span-5 lg:row-span-2",
  },
]

export default function ServiceOverviewSection() {
  return (
    <>
      <section className="relative overflow-hidden bg-background px-4 pt-20 pb-12 sm:px-6 lg:px-8 lg:pt-28 lg:pb-16">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 right-[-10%] h-72 w-72 rounded-full bg-primary-500/10 blur-3xl" />
          <div className="absolute bottom-[-20%] left-[-8%] h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-primary/25 to-transparent" />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-12 lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true }}
            className="lg:col-span-8"
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
              Service Excellence Suite
            </div>

            <h2 className="max-w-4xl  text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              <span className="text-primary">Premium operations for every </span>
              <span className="block">
                stage of property management
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              From rent automation to legal support, our services are designed to elevate tenant experience and maximize owner returns.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            viewport={{ once: true }}
            className="grid grid-cols-3 gap-3 rounded-3xl border border-border/70 bg-card/35 p-4 backdrop-blur-sm lg:col-span-4"
          >
            <div className="rounded-2xl border border-border/70 bg-background/70 px-3 py-4 text-center">
              <p className="text-2xl font-semibold tracking-tight">24/7</p>
              <p className="mt-1 text-xs text-muted-foreground">Support Coverage</p>
            </div>
            <div className="rounded-2xl border border-border/70 bg-background/70 px-3 py-4 text-center">
              <p className="text-2xl font-semibold tracking-tight">99.9%</p>
              <p className="mt-1 text-xs text-muted-foreground">Payment Uptime</p>
            </div>
            <div className="rounded-2xl border border-border/70 bg-background/70 px-3 py-4 text-center">
              <p className="text-2xl font-semibold tracking-tight">2K+</p>
              <p className="mt-1 text-xs text-muted-foreground">Units Managed</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative bg-background px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="hidden auto-rows-[110px] grid-cols-12 gap-5 lg:grid">
            {services.map((service, index) => {
              const Icon = service.icon

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: index * 0.07 }}
                  viewport={{ once: true, amount: 0.25 }}
                  className={`group relative overflow-hidden rounded-3xl border border-border/60 bg-card/30 ${service.layout}`}
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
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/25 bg-white/15 backdrop-blur-sm">
                        <Icon className="h-5 w-5" />
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

          <div className="space-y-4 lg:hidden">
            {services.map((service, index) => {
              const Icon = service.icon

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="group relative overflow-hidden rounded-2xl border border-border/60"
                >
                  <Link href={`/services#${service.id}`} className="block">
                    <div className="relative h-52 w-full sm:h-60">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                        sizes="100vw"
                      />
                      <div className={`absolute inset-0 bg-linear-to-br ${service.accent} opacity-45 mix-blend-overlay`} />
                      <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/25 to-transparent" />

                      <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                        <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/25 bg-white/15 backdrop-blur-sm">
                          <Icon className="h-5 w-5" />
                        </div>
                        <h3 className="text-lg font-semibold leading-tight">{service.title}</h3>
                        <p className="mt-1 text-sm text-white/90">{service.description}</p>
                        <span className="mt-3 inline-flex items-center gap-2 text-sm font-medium">
                          Explore service
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

      <section className="relative overflow-hidden bg-background px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28">
        <div className="mx-auto max-w-5xl rounded-3xl border border-border/70 bg-card/30 p-7 shadow-[0_20px_70px_-35px_rgba(0,0,0,0.45)] backdrop-blur-sm sm:p-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-primary">Ready to upgrade operations?</p>
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