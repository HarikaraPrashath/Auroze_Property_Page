'use client'

import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PropertyCategories() {

  const categories = [
    {
      id:1,
      name:"Apartments",
      properties:"120+ Properties",
      image:"/apartment.jpg"
    },
    {
      id:2,
      name:"Luxury Villas",
      properties:"80+ Properties",
      image:"/villa.jpg"
    },
    {
      id:3,
      name:"Beach Houses",
      properties:"45+ Properties",
      image:"/beach.jpg"
    },
    {
      id:4,
      name:"Commercial Spaces",
      properties:"60+ Properties",
      image:"/commercial.jpg"
    },
  ]

  return (
    <section className="py-24 bg-background px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-5">
            Browse Property Categories
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover different types of properties we professionally manage across Sri Lanka.
          </p>
        </div>

        {/* Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {categories.map((cat) => (
            <div
              key={cat.id}
              className="group relative h-[320px] rounded-3xl overflow-hidden cursor-pointer"
            >

              {/* Image */}
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                className="object-cover group-hover:scale-110 transition duration-500"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition" />

              {/* Content */}
              <div className="absolute bottom-6 left-6 right-6 text-white">

                <h3 className="text-2xl font-bold mb-1">
                  {cat.name}
                </h3>

                <p className="text-sm text-white/80 mb-4">
                  {cat.properties}
                </p>

                <Button
                  size="sm"
                  className="bg-white text-black hover:bg-white/90"
                >
                  Contact Us
                  <ArrowRight size={16} className="ml-2"/>
                </Button>

              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  )
}