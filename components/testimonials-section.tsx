'use client'

import { Star, Quote } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

export default function TestimonialsSection() {
  const topicBodyGap = "mb-3"
  const headingContentGap = "mt-2"

  return (
    <section className="py-6 px-4 bg-background overflow-x-hidden lg:py-8 ">
      {/* ❌ removed min-h-screen → fixes big white space */}

      <div className="mx-auto w-full max-w-5xl">
        {/* 🔹 HEADER */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className={`text-center ${topicBodyGap}`}
        >

          {/* ✅ TOPIC LABEL (clean & visible) */}
          <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1">
            <Quote className="h-3.5 w-3.5 text-primary" />
            <p className="text-xs font-semibold text-primary uppercase tracking-wider">
              Client Reviews
            </p>
          </div>

          {/* ✅ MAIN HEADING (matched with other component topics) */}
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            What Our Clients Say
          </h2>

          {/* ✅ DESCRIPTION (tighter spacing) */}
          <p className={`text-sm text-muted-foreground max-w-xl mx-auto ${headingContentGap}`}>
            Trusted by property owners across Sri Lanka.
          </p>
        </motion.div>

        {/* 🔹 FEATURED CARD (smaller padding) */}
        <div className={`mx-auto max-w-3xl ${topicBodyGap}`}>
          <div className="relative p-4 rounded-xl bg-card border border-border">

            <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/10" />

            <div className="flex flex-col gap-3">

              <div className="flex items-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
                <span className="text-xs text-muted-foreground">2 months ago</span>
              </div>

              <p className="text-sm text-foreground/90 leading-relaxed line-clamp-3">
                “SoulRoots has been handling my apartment for over 2 years...”
              </p>

              <div>
                <p className="font-medium text-sm">Rajesh Kumar</p>
                <p className="text-xs text-muted-foreground">Property Owner</p>
              </div>

            </div>
          </div>
        </div>

        {/* 🔹 GRID (tighter cards) */}
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-3 md:grid-cols-2">
          {[1, 2].map((_, i) => (
            <div key={i} className="p-3 rounded-lg border bg-card">

              <div className="flex justify-between mb-2">
                <p className="text-sm font-medium">Client Name</p>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-3 h-3 fill-primary text-primary" />
                  ))}
                </div>
              </div>

              <p className="text-xs text-muted-foreground line-clamp-2">
                “Excellent service and very professional team...”
              </p>

            </div>
          ))}
        </div>

        {/* 🔹 STATS (smaller + tighter) */}
        <div className="mt-4 text-center">
          <div className="inline-flex border rounded-md bg-card/50 divide-x">
            <div className="px-4 py-2">
              <p className="text-lg font-semibold text-primary">4.9</p>
              <p className="text-[10px] text-muted-foreground">Rating</p>
            </div>
            <div className="px-4 py-2">
              <p className="text-lg font-semibold text-primary">200+</p>
              <p className="text-[10px] text-muted-foreground">Reviews</p>
            </div>
            <div className="px-4 py-2">
              <p className="text-lg font-semibold text-primary">98%</p>
              <p className="text-[10px] text-muted-foreground">Satisfaction</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}