'use client'

import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Property Owner, Colombo",
    content: "SoulRoots has been handling my apartment for over 2 years. They are professional, reliable, and always responsive to any issues. The peace of mind I get knowing my property is in good hands is invaluable.",
    rating: 5,
    featured: true,
    date: "2 months ago",
    response: "Thank you Rajesh! We're honored to manage your property.",
  },
  {
    name: "Sarah Johnson",
    role: "Real Estate Investor",
    content: "The best property management service I've used. They handle everything seamlessly from tenant screening to maintenance. The reporting is transparent and the team is always available.",
    rating: 5,
    date: "1 week ago",
  },
  {
    name: "Keerthi Silva",
    role: "Building Owner, Kandy",
    content: "Excellent service! The team goes above and beyond. My properties are in perfect condition and rentals are collected on time. Highly recommended!",
    rating: 5,
    date: "3 weeks ago",
  },
  {
    name: "Anita Patel",
    role: "Multiple Properties Owner",
    content: "Professional team, transparent reporting, and great customer service. I recommend SoulRoots to all my friends looking for reliable property management.",
    rating: 5,
    date: "1 month ago",
  },
  {
    name: "Michael Fernando",
    role: "Commercial Property Owner",
    content: "Their commercial property management is top-notch. They understand the unique challenges and handle everything professionally.",
    rating: 5,
    date: "2 weeks ago",
  },
  {
    name: "Priya Nimal",
    role: "First-time Landlord",
    content: "As a new landlord, SoulRoots made everything easy. They guided me through the process and took care of all the details. Couldn't be happier!",
    rating: 5,
    date: "5 days ago",
  },
]

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  const featured = testimonials.find((t) => t.featured)
  const others = testimonials.filter((t) => !t.featured)

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % others.length)
  }

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + others.length) % others.length)
  }

  return (
    <section className="py-24 px-6 bg-background">
      <div className="relative max-w-7xl mx-auto">
        {/* Header with minimal animation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16 relative"
        >
          {/* Ground-breaking effect - elements rise from earth */}
          <motion.div
            initial={{ y: "100%", opacity: 0 }}
            whileInView={{ y: "0%", opacity: 0.8 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-primary/20 to-transparent -z-10"
          />

          {/* Particles rising from bottom */}
          <motion.div
            className="absolute inset-0 overflow-hidden -z-10"
          >
            {[...Array(20)].map((_, i) => (
              (() => {
                const startX = (i * 137) % 800
                const driftX = ((i % 7) - 3) * 35
                return (
              <motion.div
                key={i}
                initial={{ y: 400, x: startX, opacity: 0 }}
                whileInView={{
                  y: -200,
                  opacity: [0, 0.5, 0],
                  x: startX + driftX
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 3,
                  delay: i * 0.1,
                  repeat: Infinity,
                  ease: "easeOut"
                }}
                className="absolute w-1 h-1 bg-primary/30 rounded-full"
              />
                )
              })()
            ))}
          </motion.div>

          {/* Badge rises first */}
          <motion.div
            initial={{ y: 200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              type: "spring",
              stiffness: 60,
              damping: 15
            }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <span className="w-2 h-2 bg-primary rounded-full" />
            </motion.div>
            <span className="text-primary font-medium text-sm">Client Stories</span>
          </motion.div>

          {/* Main heading with layered rise */}
          <div className="relative perspective-1000">
            {/* Background text shadow that rises */}
            <motion.div
              initial={{ y: 300, opacity: 0, rotateX: 45 }}
              whileInView={{ y: 0, opacity: 0.1, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.3 }}
              className="absolute inset-0 text-7xl md:text-8xl font-bold text-primary/10 -z-10"
              style={{ transform: "translateY(20px)" }}
            >
              What Our Clients Say
            </motion.div>

            {/* Main text rises with 3D effect */}
            <motion.div
              initial={{ y: 400, opacity: 0, rotateX: 30 }}
              whileInView={{ y: 0, opacity: 1, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1.5,
                delay: 0.5,
                type: "spring",
                stiffness: 40,
                damping: 12
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <h2 className="text-5xl md:text-7xl font-bold">
                <span className="text-primary">What Our Clients</span>
                <br />
                <motion.span
                  animate={{
                    textShadow: [
                      "0 0 0 rgba(0,0,0,0)",
                      "0 0 30px rgba(124,58,237,0.5)",
                      "0 0 0 rgba(0,0,0,0)"
                    ]
                  }}
                  transition={{ duration: 3, delay: 2, repeat: Infinity }}
                  className="text-foreground"
                >
                  Say
                </motion.span>
              </h2>
            </motion.div>
          </div>

          {/* Description rises with bounce */}
          <motion.div
            initial={{ y: 200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 1.2,
              delay: 1,
              type: "spring",
              stiffness: 50,
              damping: 14
            }}
            className="mt-8"
          >
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Trusted by property owners across Sri Lanka.
            </p>
          </motion.div>

          {/* Rising decorative line with glow */}
          <motion.div
            initial={{ y: 100, opacity: 0, scaleX: 0 }}
            whileInView={{ y: 0, opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 1.3 }}
            className="h-0.5 w-32 bg-linear-to-r from-transparent via-primary to-transparent mx-auto mt-8 relative"
          >
            <motion.div
              animate={{
                x: [-50, 50],
                opacity: [0, 1, 0]
              }}
              transition={{ duration: 2, delay: 2, repeat: Infinity }}
              className="absolute inset-0 w-16 h-full bg-linear-to-r from-transparent via-white to-transparent"
            />
          </motion.div>

          {/* Floating elements that rise and float */}
          <div className="flex justify-center gap-4 mt-8">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                initial={{ y: 200, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                animate={{
                  y: [-5, 5, -5],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{
                  duration: 3,
                  delay: 2 + i * 0.2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="w-2 h-2 rounded-full bg-primary/40"
              />
            ))}
          </div>

          {/* Final cinematic light sweep from bottom to top */}
          <motion.div
            initial={{ y: "100%" }}
            whileInView={{ y: "-100%" }}
            viewport={{ once: true }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
            className="absolute inset-0 bg-linear-to-t from-primary/20 via-transparent to-transparent pointer-events-none -z-5"
          />
        </motion.div>

        {/* Featured Review - Minimal Design */}
        {featured && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <div className="relative p-8 rounded-2xl bg-card border border-border hover:border-primary/20 transition-colors">
              {/* Simple quote icon */}
              <Quote className="absolute top-6 right-6 w-12 h-12 text-primary/10" />

              <div className="flex flex-col md:flex-row gap-6 items-start">
                {/* Avatar placeholder with primary color */}
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-xl shrink-0 border border-primary/20">
                  {featured.name.charAt(0)}
                </div>

                <div className="flex-1">
                  {/* Rating and date */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex gap-1">
                      {[...Array(featured.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">{featured.date}</span>
                  </div>

                  {/* Content */}
                  <p className="text-lg md:text-xl leading-relaxed mb-4 text-foreground/90">
                    “{featured.content}”
                  </p>

                  {/* Author info */}
                  <div className="mb-4">
                    <p className="font-semibold text-foreground">{featured.name}</p>
                    <p className="text-sm text-muted-foreground">{featured.role}</p>
                  </div>

                  {/* Owner response - subtle design */}
                  {featured.response && (
                    <div className="mt-4 pl-4 border-l-2 border-primary/30 bg-primary/5 p-4 rounded-r-lg">
                      <p className="text-sm font-medium text-primary mb-1">Response:</p>
                      <p className="text-sm text-muted-foreground">{featured.response}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Grid of Reviews - Clean Design */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {others.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="group"
            >
              <div className="h-full p-6 rounded-xl border border-border bg-card hover:border-primary/30 transition-all duration-200">

                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    {/* Simple avatar */}
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm">
                      {testimonial.name.charAt(0)}
                    </div>

                    <div>
                      <p className="font-medium text-sm text-foreground">{testimonial.name}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.date}</p>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex gap-0.5">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" />
                    ))}
                  </div>
                </div>

                {/* Content */}
                <p className="text-sm leading-relaxed mb-3 line-clamp-3 text-muted-foreground">
                  “{testimonial.content}”
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-3 border-t border-border">
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>

                  <button className="text-xs font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    Read more →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>




        {/* Simple Stats */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center divide-x divide-border border border-border rounded-lg bg-card/50">
            <div className="px-6 py-3">
              <p className="text-xl font-semibold text-primary">4.9</p>
              <p className="text-xs text-muted-foreground">Avg Rating</p>
            </div>
            <div className="px-6 py-3">
              <p className="text-xl font-semibold text-primary">200+</p>
              <p className="text-xs text-muted-foreground">Reviews</p>
            </div>
            <div className="px-6 py-3">
              <p className="text-xl font-semibold text-primary">98%</p>
              <p className="text-xs text-muted-foreground">Satisfaction</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}