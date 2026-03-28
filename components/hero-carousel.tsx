'use client';

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Shield, Home, Gavel, Key, Sparkles, Wallet, Wrench, Users, FileCheck } from "lucide-react";
import { useRouter } from "next/navigation"

const slides = [
  {
    id: 1,
    title: "Professional Property Management",
    description:
      "Comprehensive solutions for all your property needs in Sri Lanka",
    bgImage: "/hero-1.jpg",
  },
  {
    id: 2,
    title: "Seamless Rental Management",
    description:
      "Efficient rental collection and tenant management services",
    bgImage: "/hero-2.jpg",
  },
  {
    id: 3,
    title: "Complete Maintenance Services",
    description:
      "Professional maintenance, cleaning, and daily operations",
    bgImage: "/hero-3.jpg",
  },
  {
    id: 4,
    title: "Legal Compliance & Security",
    description:
      "Full legal support and advanced security solutions",
    bgImage: "/hero-4.jpg",
  },

  
  {
    id: 5,
    title: "Smart Rent Collection & Payments",
    description:
      "Automated rent collection with secure online payment options and real-time tracking",
    bgImage: "/hero-5.jpg", // or /payment.jpg
  },
  {
    id: 6,
    title: "Tenant Screening & Legal Support",
    description:
      "Verified tenants, secure deposits, and fully compliant legal documentation",
    bgImage: "/hero-6.jpg", // or /legal.jpg
  },
];

const serviceTicker = [
  { name: "Rent Collection", icon: Wallet },
  { name: "Tenant Management", icon: Users },
  { name: "Property Maintenance", icon: Wrench },
  { name: "Legal Compliance", icon: Gavel },
  { name: "Security Monitoring", icon: Shield },
  { name: "Housekeeping", icon: Sparkles },
  { name: "Documentation", icon: FileCheck },
  { name: "Pickup & Dropoff", icon: Key },
  { name: "Facility Care", icon: Home },
];

const marqueeItems = [...serviceTicker, ...serviceTicker];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 9000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full min-h-[100svh] md:h-screen overflow-hidden bg-black">

      <AnimatePresence mode="wait">
        <motion.div
          key={slides[current].id}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.15 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{
            duration: 1.4,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <Image
            src={slides[current].bgImage}
            alt={slides[current].title}
            fill
            className="object-cover"
            priority={current === 0} // Only prioritize the first image
            quality={85}
            sizes="100vw"
          />

          {/* Dark cinematic overlay */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-[1px]"
            style={{ WebkitBackdropFilter: 'blur(1px)' }}
          />

          {/* CONTENT */}
          <div className="relative h-full flex flex-col items-center justify-center text-center px-6">

            {/* TITLE */}
            <motion.h1
              key={slides[current].title}
              initial={{ y: 120, opacity: 0, filter: "blur(10px)" }}
              animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              transition={{
                duration: 1,
                delay: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: `"Aleo", serif` }}
            >
              {slides[current].title}
            </motion.h1>

            {/* DESCRIPTION */}
            <motion.p
              key={slides[current].description}
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1,
                delay: 0.5,
                ease: "easeOut",
              }}
              className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-2xl mb-10 "
              style={{ fontFamily: `"Caveat", cursive` }}
            >
              {slides[current].description}
            </motion.p>

            {/* BUTTON */}
            <motion.div
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.9,
                delay: 0.8,
              }}
            >
              <Button
                size="lg"
                onClick={() => router.push("/services/management")}
                className="bg-white text-black hover:bg-white/90 px-8 py-6 text-lg rounded-full shadow-xl"
              >
                Learn More
              </Button>
            </motion.div>

          </div>
        </motion.div>
      </AnimatePresence>

      {/* FULL-WIDTH AUTO LOOP SERVICE TICKER */}
      <div
        className="absolute inset-x-0 z-20 w-full px-4 sm:px-6 lg:px-8"
        style={{ bottom: 'calc(4.5rem + env(safe-area-inset-bottom))' }}
      >
        <div className="relative mx-auto w-full max-w-6xl overflow-hidden rounded-2xl  ">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r from-white/60 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-white/60 to-transparent" />

          <div className="hero-service-marquee flex min-w-max items-center gap-3 px-3 sm:gap-4">
            {marqueeItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={`${item.name}-${index}`}
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/15 px-3 py-1.5 text-xs font-medium text-white sm:text-sm"
                >
                  <Icon className="h-3.5 w-3.5 text-white sm:h-4 sm:w-4" />
                  <span>{item.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* DOT NAVIGATION */}
      <div
        className="absolute left-1/2 z-20 flex -translate-x-1/2 gap-3"
        style={{ bottom: 'calc(3rem + env(safe-area-inset-bottom))' }}
      >
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`transition-all duration-300 rounded-full ${
              current === index
                ? "w-10 h-3 bg-white"
                : "w-3 h-3 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* SCROLL INDICATOR */}
     

      <style jsx>{`
        .hero-service-marquee {
          animation: heroTicker 22s linear infinite;
          width: max-content;
        }

        @keyframes heroTicker {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>

    </div>
  );
}
