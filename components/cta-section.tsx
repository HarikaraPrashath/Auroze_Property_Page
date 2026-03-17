'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Zap, Shield, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function CTASection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleMouseMove = (e: MouseEvent) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      };
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  // Floating icons data
  const floatingIcons = [
    { Icon: Sparkles, delay: 0, duration: 3, top: '10%', left: '5%' },
    { Icon: Zap, delay: 0.5, duration: 4, top: '70%', right: '8%' },
    { Icon: Shield, delay: 1, duration: 3.5, bottom: '15%', left: '10%' },
    { Icon: TrendingUp, delay: 1.5, duration: 4.5, top: '30%', right: '15%' },
  ];

  // Stats data with animations
  const stats = [
    { value: '500+', label: 'Properties Managed', icon: TrendingUp },
    { value: '1,200+', label: 'Happy Clients', icon: Sparkles },
    { value: '10+', label: 'Years Experience', icon: Shield },
  ];

  return (
    <section className="relative py-32 px-4 overflow-hidden bg-linear-to-br from-background via-background to-background">
      {/* Modern animated background pattern */}
      <div className="absolute inset-0">
        {/* Grid pattern */}
        <div className="absolute inset-0 " />
        
        {/* Animated gradient orbs */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-20 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-20 -left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
        />
      </div>

      {/* Floating Icons with animation */}
      {floatingIcons.map((item, index) => {
        const Icon = item.Icon;
        return (
          <motion.div
            key={index}
            className="absolute z-10 text-primary/20"
            style={{
              top: item.top,
              left: item.left,
              right: item.right,
              bottom: item.bottom,
            }}
            animate={{
              y: [0, -20, 0, 20, 0],
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1, 0.9, 1],
            }}
            transition={{
              duration: item.duration,
              delay: item.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Icon className="w-8 h-8 md:w-12 md:h-12" />
          </motion.div>
        );
      })}

      <div className="relative max-w-4xl mx-auto z-20">
        {/* Main content with staggered animations */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center"
        >

          {/* Main heading with letter animation */}
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 }
            }}
            className="overflow-hidden mb-6"
          >
            <motion.h2
              variants={{
                hidden: { y: 50 },
                visible: { y: 0 }
              }}
              transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground"
            >
              Ready to Transform Your{' '}
              <motion.span
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{ duration: 5, repeat: Infinity }}
                className="bg-clip-text text-transparent bg-linear-to-r from-primary via-primary/80 to-primary bg-size-[200%_auto]"
              >
                Property Management?
              </motion.span>
            </motion.h2>
          </motion.div>

          {/* Description with fade animation */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Join hundreds of satisfied property owners who trust ProManage for professional, 
            reliable, and comprehensive property management services.
          </motion.p>

          {/* Buttons with hover animations */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            {/* Primary Button */}
            <motion.div
              onHoverStart={() => setHoveredButton('primary')}
              onHoverEnd={() => setHoveredButton(null)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <Button 
                size="lg" 
                className="relative overflow-hidden bg-primary hover:bg-primary/90 text-white gap-2 group px-8 py-6 text-lg rounded-xl shadow-lg shadow-primary/25"
              >
                {/* Button shine effect */}
                <motion.div
                  className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.5 }}
                />
                
                <span className="relative z-10 flex items-center gap-2">
                  Get Started Today
                  <motion.div
                    animate={{ x: hoveredButton === 'primary' ? [0, 5, 0] : 0 }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </span>
              </Button>
            </motion.div>

            {/* Secondary Button */}
            <motion.div
              onHoverStart={() => setHoveredButton('secondary')}
              onHoverEnd={() => setHoveredButton(null)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary/30 text-primary hover:bg-primary/10 hover:border-primary px-8 py-6 text-lg rounded-xl transition-all duration-300"
              >
                <Link href="/contact" className="flex items-center gap-2">
                  Schedule a Consultation
                  <motion.div
                    animate={{ rotate: hoveredButton === 'secondary' ? 360 : 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats with counting animation */}
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 }
            }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  transition={{ delay: 1 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-linear-to-t from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative p-6 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm">
                    {/* Icon */}
                    <motion.div
                      animate={{
                        rotate: [0, 10, -10, 0],
                      }}
                      transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
                      className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center"
                    >
                      <Icon className="w-6 h-6 text-primary" />
                    </motion.div>

                    {/* Value with counting effect */}
                    <motion.p
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 200, delay: 1.2 + index * 0.1 }}
                      className="text-3xl md:text-4xl font-bold text-primary mb-2"
                    >
                      {stat.value}
                    </motion.p>

                    {/* Label */}
                    <p className="text-sm text-muted-foreground font-medium">
                      {stat.label}
                    </p>

                    {/* Decorative line */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1.4 + index * 0.1, duration: 0.5 }}
                      className="h-0.5 w-12 bg-primary/30 mx-auto mt-4"
                    />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Animated bottom line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.5 }}
            className="h-px bg-linear-to-r from-transparent via-primary/50 to-transparent w-full max-w-md mx-auto mt-16"
          />
        </motion.div>
      </div>

      {/* Mouse follower effect (subtle) */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(124,58,237,0.03), transparent 80%)`,
        }}
        transition={{ duration: 0.1 }}
      />
    </section>
  );
}