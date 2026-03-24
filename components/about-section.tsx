'use client';

import { CheckCircle } from 'lucide-react';
import Image from 'next/image';
import { motion, easeInOut } from 'framer-motion';

const features = [
  'Professional property management team with 10+ years experience',
  'Trusted by 500+ property owners across Sri Lanka',
  'Transparent and fair pricing with no hidden charges',
  '24/7 customer support and emergency services',
  'Advanced property management software',
  'Fully licensed and compliant with all regulations',
];

export default function AboutSection() {

  const imageAnimation = {
    hidden: { x: -120, opacity: 0, scale: 0.9 },
    show: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 1.1, ease: easeInOut }
    }
  };

  const textContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.18
      }
    }
  };

  const textItem = {
    hidden: { x: 120, opacity: 0, filter: "blur(8px)" },
    show: {
      x: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: easeInOut }
    }
  };

  return (
    <section className="py-24 px-4 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

          {/* IMAGE SIDE */}
          <motion.div
            variants={imageAnimation}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="relative group"
          >

            <div className="aspect-square rounded-3xl bg-linear-to-br from-primary/20 via-white to-secondary/80 p-10 overflow-hidden flex items-center justify-center shadow-xl transition-all duration-500 group-hover:shadow-2xl group-hover:scale-105">

              <Image
                src="/trust.jpg"
                alt="Trust SoulRoots"
                width={1000}
                height={1000}
                className="object-contain rounded-xl"
              />

            </div>

            {/* Glow effect */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary/30 rounded-full blur-3xl opacity-70 group-hover:opacity-100 transition-opacity duration-300" />

          </motion.div>


          {/* TEXT SIDE */}
          <motion.div
            variants={textContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
          >

            <motion.div
              variants={textItem}
              className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
            >
              <span className="text-primary font-semibold text-sm">
                About Us
              </span>
            </motion.div>

            <motion.h2
              variants={textItem}
              className="text-5xl md:text-7xl  font-bold text-foreground mb-6 leading-tight"
            >
              Your Trusted Property Partner
            </motion.h2>

            <motion.p
              variants={textItem}
              className="text-muted-foreground text-base leading-relaxed mb-8"
            >
              SoulRoots is Sri Lanka's leading property management company,
              dedicated to providing comprehensive and professional property
              solutions. We understand that managing properties requires
              expertise, reliability, and attention to detail.
            </motion.p>

            <motion.ul
              variants={textContainer}
              className="space-y-4"
            >
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  variants={textItem}
                  className="flex items-start gap-3 group"
                >
                  <CheckCircle className="w-5 h-5 icon-brown shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span className="text-foreground text-sm leading-relaxed">
                    {feature}
                  </span>
                </motion.li>
              ))}
            </motion.ul>

          </motion.div>

        </div>

      </div>
    </section>
  );
}