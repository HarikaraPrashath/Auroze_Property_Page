'use client'

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    id: "rent-payment",
    title: "Rent & Payment Management",
    description: "Streamlined rental collection and secure payment processing.",
    image: "/money.jpg",
    size: "large",
  },
  {
    id: "maintenance",
    title: "Property Maintenance",
    description: "Professional repairs and maintenance with certified staff.",
    image: "/maintenance.jpg",
    size: "medium",
  },
  {
    id: "tenant",
    title: "Tenant Management",
    description: "Complete tenant screening and relationship management.",
    image: "/tenant_1.jpg",
    size: "medium",
  },
  {
    id: "housekeeping",
    title: "Housekeeping",
    description: "Daily cleaning and operational management.",
    image: "/housekeeping.jpg",
    size: "small",
  },
  {
    id: "legal",
    title: "Legal & Compliance",
    description: "Full legal documentation and compliance services.",
    image: "/legal_1.jpg",
    size: "small",
  },
  {
    id: "pickup",
    title: "Pickup & Dropoff",
    description: "Convenient key management and property access.",
    image: "/pickup.jpg",
    size: "small",
  },
]

export default function ServiceOverviewSection() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Comprehensive Service Suite
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need for professional property management.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[220px] gap-6 mb-16">

          {services.map((service) => {

            let span = ""

            if (service.size === "large")
              span = "md:col-span-2 md:row-span-2"

            if (service.size === "medium")
              span = "md:col-span-1 md:row-span-1"

            if (service.size === "small")
              span = "md:col-span-1 md:row-span-1"

            return (
              <Link
                key={service.id}
                href={`/services#${service.id}`}
                className={`group relative rounded-3xl overflow-hidden ${span}`}
              >

                {/* Image */}
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                {/* Content */}
                <div className="absolute bottom-6 left-6 right-6 text-white">

                  <h3 className="text-2xl font-bold mb-2">
                    {service.title}
                  </h3>

                  <p className="text-sm text-white/80 mb-3 max-w-xs">
                    {service.description}
                  </p>

                  <div className="flex items-center text-sm font-semibold">
                    Learn more
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition"/>
                  </div>

                </div>

              </Link>
            )
          })}

        </div>

        {/* Button */}
        <div className="text-center">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white">
            <Link href="/services">Explore All Services</Link>
          </Button>
        </div>

      </div>
    </section>
  )
}