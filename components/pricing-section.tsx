'use client';

import { Check, Zap, Sparkles, Shield, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const plans = [
  {
    name: 'Monthly',
    price: 'Rs. 3000',
    period: 'per month',
    description: 'Perfect for short-term needs',
    features: [
      'Rent collection and management',
      'Basic property maintenance',
      'Email support',
      'Monthly reports',
      'Tenant communication support',
    ],
    highlight: false,
    icon: Sparkles,
  },
  {
    name: '6 Months',
    price: 'Rs. 16,000',
    period: 'for 6 months',
    description: 'Best value with 11% savings',
    features: [
      'All Monthly features',
      'Priority phone support',
      'Advanced property maintenance',
      'Bi-weekly reports',
      'Dedicated account manager',
      'Legal document support',
      'Tenant screening included',
    ],
    highlight: true,
    icon: Zap,
    savings: 'Save 11%',
  },
  {
    name: 'Yearly',
    price: 'Rs. 32,000',
    period: 'for 12 months',
    description: 'Maximum savings at 12% discount',
    features: [
      'All 6-Month features',
      '24/7 priority support',
      'Full service suite included',
      'Weekly reports',
      'Strategic planning sessions',
      'Free emergency services (up to 5)',
      'Housekeeping services',
      'Custom integrations',
    ],
    highlight: false,
    icon: Shield,
    savings: 'Save 12%',
  },
];

export default function PricingSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Lightning effect positions
  const lightningBolts = [
    { top: '10%', left: '5%', delay: 0 },
    { top: '20%', right: '8%', delay: 0.5 },
    { bottom: '15%', left: '10%', delay: 1 },
    { bottom: '25%', right: '12%', delay: 1.5 },
    { top: '40%', left: '15%', delay: 2 },
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative py-28 px-4 bg-linear-to-b from-background via-background to-background/95 overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]" />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/20 rounded-full"
            initial={{
              x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : 0,
              y: typeof window !== 'undefined' ? Math.random() * window.innerHeight : 0,
            }}
            animate={{
              y: [null, -30, -60, -30, 0],
              opacity: [0, 1, 1, 1, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Header with animated entrance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
         
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6 text-primary"
          >
            Flexible Subscription{' '}
            <span className="bg-clip-text text-foreground">
              Plans
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Choose the perfect plan for your property management needs
          </motion.p>
        </motion.div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            const isHovered = hoveredCard === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
                className="relative group"
              >
                {/* Thunder/Lightning Effect for Center Card */}
                {plan.highlight && (
                  <>
                    {/* Animated border with lightning effect */}
                    <motion.div
                      animate={{
                        boxShadow: [
                          '0 0 0 0 rgba(124, 58, 237, 0)',
                          '0 0 30px 5px rgba(124, 58, 237, 0.3)',
                          '0 0 60px 10px rgba(124, 58, 237, 0.2)',
                          '0 0 30px 5px rgba(124, 58, 237, 0.3)',
                          '0 0 0 0 rgba(124, 58, 237, 0)',
                        ],
                        scale: [1, 1.02, 1, 1.02, 1],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute -inset-1 bg-linear-to-r from-primary via-primary/50 to-primary rounded-3xl opacity-75 blur-xl"
                    />

                    {/* Floating lightning bolts */}
                    {lightningBolts.map((bolt, i) => (
                      <motion.div
                        key={i}
                        className="absolute text-primary/30 z-20"
                        style={{
                          top: bolt.top,
                          left: bolt.left,
                          right: bolt.right,
                          bottom: bolt.bottom,
                        }}
                        animate={{
                          opacity: [0, 1, 0],
                          scale: [0.5, 1.2, 0.5],
                          rotate: [0, 15, -15, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: bolt.delay,
                          ease: "easeInOut",
                        }}
                      >
                        <Zap className="w-6 h-6 fill-primary/20" />
                      </motion.div>
                    ))}

                    {/* Popular badge with animation */}
                    <motion.div
                      animate={{
                        y: [0, -3, 0],
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute -top-4 left-1/2 -translate-x-1/2 z-30"
                    >
                      <div className="px-4 py-1.5 rounded-full bg-linear-to-r from-primary to-primary/80 text-white text-xs font-semibold whitespace-nowrap shadow-lg shadow-primary/30 flex items-center gap-1">
                        <Star className="w-3 h-3 fill-white" />
                        Most Popular
                      </div>
                    </motion.div>
                  </>
                )}

                {/* Main Card */}
                <motion.div
                  animate={{
                    scale: isHovered ? 1.02 : plan.highlight ? 1.05 : 1,
                    y: isHovered ? -5 : 0,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={`relative rounded-2xl transition-all duration-300 h-full ${
                    plan.highlight
                      ? 'bg-linear-to-b from-primary/5 via-background to-background border-2 border-primary shadow-2xl'
                      : 'border border-border bg-card hover:border-primary/50 hover:shadow-xl'
                  }`}
                >
                  <div className="p-8 h-full flex flex-col relative">
                    {/* Floating icon */}
                    <motion.div
                      animate={{
                        rotate: isHovered ? 360 : 0,
                        scale: isHovered ? 1.1 : 1,
                      }}
                      transition={{ duration: 0.5 }}
                      className="absolute top-8 right-8"
                    >
                      <div className={`p-2 rounded-xl ${
                        plan.highlight ? 'bg-primary/20' : 'bg-primary/10'
                      }`}>
                        <Icon className={`w-5 h-5 ${
                          plan.highlight ? 'text-primary' : 'text-primary/70'
                        }`} />
                      </div>
                    </motion.div>

                    {/* Header */}
                    <div className="mb-8">
                      <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                      <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                      
                      {/* Price with animation */}
                      <motion.div
                        animate={{ scale: isHovered ? 1.05 : 1 }}
                        className="flex items-baseline gap-2"
                      >
                        <span className="text-4xl font-bold text-primary">{plan.price}</span>
                        <span className="text-muted-foreground text-sm">{plan.period}</span>
                      </motion.div>

                      {/* Savings badge */}
                      {plan.savings && (
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 }}
                          className="mt-2 inline-block px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium"
                        >
                          {plan.savings}
                        </motion.div>
                      )}
                    </div>

                    {/* Features */}
                    <ul className="space-y-4 mb-8 grow">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3 group/item">
                          <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: featureIndex * 0.1 }}
                            whileHover={{ scale: 1.2, rotate: 360 }}
                          >
                            <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          </motion.div>
                          <span className="text-foreground/80 text-sm group-hover/item:text-foreground transition-colors">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Button with hover effect */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        className={`w-full relative overflow-hidden group/btn ${
                          plan.highlight
                            ? 'bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/30'
                            : 'bg-primary/90 hover:bg-primary text-white'
                        }`}
                        size="lg"
                      >
                        <span className="relative z-10 flex items-center gap-2">
                          Choose {plan.name} Plan
                          <motion.div
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            <Zap className="w-4 h-4" />
                          </motion.div>
                        </span>
                        
                        {/* Button shine effect */}
                        <motion.div
                          className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent"
                          initial={{ x: '-100%' }}
                          whileHover={{ x: '100%' }}
                          transition={{ duration: 0.5 }}
                        />
                      </Button>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Mouse follower glow effect for center card */}
                {plan.highlight && (
                  <motion.div
                    className="absolute inset-0 pointer-events-none rounded-2xl"
                    animate={{
                      background: `radial-gradient(300px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(124,58,237,0.1), transparent 80%)`,
                    }}
                    transition={{ duration: 0.1 }}
                  />
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Additional Info with animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-card border border-border rounded-2xl p-10 text-center relative overflow-hidden group"
        >
          {/* Animated background pattern */}
          <div className="absolute inset-0 bg-linear-to-r from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <motion.div
            animate={{
              scale: [1, 1.02, 1],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <p className="text-foreground mb-4 text-lg">
              <span className="font-semibold text-primary">Need a custom plan?</span>{' '}
              Contact our team for tailored solutions
            </p>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              variant="outline" 
              className="border-primary/30 text-primary hover:bg-primary/10 hover:border-primary transition-all duration-300"
            >
              Contact Sales
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}