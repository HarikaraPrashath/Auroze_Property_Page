'use client';

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

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
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">

      <AnimatePresence mode="wait">
        <motion.div
          key={slides[current].id}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${slides[current].bgImage})`,
          }}
          initial={{ opacity: 0, scale: 1.15 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{
            duration: 1.4,
            ease: [0.22, 1, 0.36, 1],
          }}
        >

          {/* Dark cinematic overlay */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]" />

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
              className="text-lg md:text-xl text-white/90 max-w-2xl mb-10"
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
                className="bg-white text-black hover:bg-white/90 px-8 py-6 text-lg rounded-full shadow-xl"
              >
                Learn More
              </Button>
            </motion.div>

          </div>
        </motion.div>
      </AnimatePresence>

      {/* DOT NAVIGATION */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3 z-20">
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
      <div className="absolute bottom-28 left-1/2 -translate-x-1/2 text-white/70 animate-bounce">
        <svg width="24" height="24" fill="none" stroke="currentColor">
          <path
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 5v14M12 19l-6-6M12 19l6-6"
          />
        </svg>
      </div>

    </div>
  );
}