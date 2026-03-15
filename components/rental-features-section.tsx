'use client'

import { useState } from "react"
import Image from "next/image"
import { ArrowRight, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const features = [
  {
    title: "Easy Payment Processing",
    description: "Secure online rental payments with multiple options",
    details: "Our platform supports credit cards, bank transfers, and digital wallets. Payments are encrypted and processed securely with instant confirmation.",
    image: "/payment.jpg",
    points: [
      "Multiple payment methods supported",
      "Instant payment confirmation",
      "Encrypted transactions",
      "Automated receipts and tracking"
    ]
  },
  {
    title: "Timely Rent Collection",
    description: "Automated reminders and reliable rent collection",
    details: "Automated reminders notify tenants before due dates, reducing late payments and keeping your cash flow steady.",
    image: "/collection.jpg",
    points: [
      "Automated rent reminders",
      "Real-time payment tracking",
      "Reduced late payments",
      "Consistent cash flow"
    ]
  },
  {
    title: "Deposit Protection",
    description: "Safe and secure deposit handling with documentation",
    details: "We securely manage tenant deposits with full documentation, ensuring transparency and compliance.",
    image: "/deposit.jpg",
    points: [
      "Secure deposit management",
      "Full documentation",
      "Transparency for tenants and landlords",
      "Compliance with regulations"
    ]
  },
  {
    title: "Tenant Screening",
    description: "Complete tenant background checks and verification",
    details: "Screen tenants with background checks, credit analysis, and verification to find reliable renters.",
    image: "/tenant.jpg",
    points: [
      "Background checks",
      "Credit analysis",
      "Identity verification",
      "Reliable tenant selection"
    ]
  },
  {
    title: "Market Analysis",
    description: "Smart pricing based on local market trends",
    details: "Get data-driven rental price suggestions based on local demand and property performance.",
    image: "/market.jpg",
    points: [
      "Data-driven pricing",
      "Local market insights",
      "Maximize profitability",
      "Performance-based suggestions"
    ]
  },
  {
    title: "Legal Documentation",
    description: "Professional lease agreements and legal support",
    details: "Generate legally compliant lease agreements and manage documents digitally.",
    image: "/legal.jpg",
    points: [
      "Legally compliant agreements",
      "Digital document management",
      "Professional legal support",
      "Protect landlords and tenants"
    ]
  },
]

export default function RentalFeaturesSection() {
  const [selectedFeature, setSelectedFeature] = useState<any>(null)

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
              onClick={() => setSelectedFeature(feature)}
              className="group relative h-[320px] rounded-3xl overflow-hidden cursor-pointer"
            >
              <Image
                src={feature.image}
                alt={feature.title}
                fill
                className="object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-white/80 mb-4">{feature.description}</p>
                <div className="flex items-center text-sm font-medium">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition"/>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal with Framer Motion */}
      <AnimatePresence>
        {selectedFeature && (
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-6"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="bg-white max-w-3xl w-full rounded-3xl overflow-hidden relative"
            >
              <button
                type="button"
                onClick={() => setSelectedFeature(null)}
                className="absolute top-4 right-4 z-10 bg-white/80 p-2 rounded-full"
              >
                <X size={20}/>
              </button>

              <div className="relative h-64">
                <Image
                  src={selectedFeature.image}
                  alt={selectedFeature.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-8">
                <h3 className="text-3xl font-bold mb-4">{selectedFeature.title}</h3>
                <p className="text-muted-foreground mb-6">{selectedFeature.details}</p>
                {selectedFeature.points && (
                  <ul className="mb-6 text-left list-disc list-inside text-primary">
                    {selectedFeature.points.map((point: string, idx: number) => (
                      <li key={idx} className="mb-1 text-base">{point}</li>
                    ))}
                  </ul>
                )}
                <button
                  onClick={() => setSelectedFeature(null)}
                  className="px-6 py-3 rounded-xl bg-primary text-white"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}