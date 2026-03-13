'use client'

import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Property Owner, Colombo",
    content:
      "ProManage has been handling my apartment for over 2 years. They are professional, reliable, and always responsive to any issues.",
    rating: 5,
    featured: true,
  },
  {
    name: "Sarah Johnson",
    role: "Real Estate Investor",
    content:
      "The best property management service I've used. They handle everything seamlessly from tenant screening to maintenance.",
    rating: 5,
  },
  {
    name: "Keerthi Silva",
    role: "Building Owner, Kandy",
    content:
      "Excellent service! The team goes above and beyond. My properties are in perfect condition and rentals are collected on time.",
    rating: 5,
  },
  {
    name: "Anita Patel",
    role: "Multiple Properties Owner",
    content:
      "Professional team, transparent reporting, and great customer service. I recommend ProManage to all my friends.",
    rating: 5,
  },
]

export default function TestimonialsSection() {
  const featured = testimonials.find((t) => t.featured)
  const others = testimonials.filter((t) => !t.featured)

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Trusted by property owners across Sri Lanka.
          </p>
        </div>

        {/* Featured Testimonial */}
        {featured && (
          <div className="mb-12">
            <div className="p-10 rounded-3xl bg-primary/5 border border-primary/20 relative">

              <div className="flex gap-1 mb-6">
                {[...Array(featured.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-xl md:text-2xl leading-relaxed mb-8 max-w-4xl">
                “{featured.content}”
              </p>

              <div>
                <p className="font-semibold text-lg">{featured.name}</p>
                <p className="text-muted-foreground">{featured.role}</p>
              </div>

            </div>
          </div>
        )}

        {/* Smaller Testimonials */}
        <div className="grid md:grid-cols-3 gap-6">

          {others.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl border border-border bg-background hover:shadow-xl hover:border-primary/40 transition-all duration-300"
            >

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-sm leading-relaxed mb-5">
                “{testimonial.content}”
              </p>

              <div className="border-t pt-4">
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-xs text-muted-foreground">
                  {testimonial.role}
                </p>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  )
}