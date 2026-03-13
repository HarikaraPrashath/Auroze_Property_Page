'use client'

import Image from "next/image"
import { ArrowRight } from "lucide-react"

const features = [
  {
    title: "Easy Payment Processing",
    description: "Secure online rental payments with multiple options",
    image: "/payment.jpg",
  },
  {
    title: "Timely Rent Collection",
    description: "Automated reminders and reliable rent collection",
    image: "/collection.jpg",
  },
  {
    title: "Deposit Protection",
    description: "Safe and secure deposit handling with documentation",
    image: "/deposit.jpg",
  },
  {
    title: "Tenant Screening",
    description: "Complete tenant background checks and verification",
    image: "/tenant.jpg",
  },
  {
    title: "Market Analysis",
    description: "Smart pricing based on local market trends",
    image: "/market.jpg",
  },
  {
    title: "Legal Documentation",
    description: "Professional lease agreements and legal support",
    image: "/legal.jpg",
  },
];

export default function RentalFeaturesSection() {
  return (
    <section className="py-24 px-6 bg-primary/5 border-y border-border">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Complete Rental Management Solutions
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to manage rental properties professionally and efficiently.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative h-[320px] rounded-3xl overflow-hidden cursor-pointer"
            >

              {/* Background Image */}
              <Image
                src={feature.image}
                alt={feature.title}
                fill
                className="object-cover group-hover:scale-110 transition duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-6 left-6 right-6 text-white">

                <h3 className="text-2xl font-bold mb-2">
                  {feature.title}
                </h3>

                <p className="text-sm text-white/80 mb-4">
                  {feature.description}
                </p>

                <div className="flex items-center text-sm font-medium">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition"/>
                </div>

              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  )
}