'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Mail, Phone, MapPin, Facebook, Linkedin, 
  ArrowRight, Heart, Sparkles, Zap, Shield, 
  TrendingUp, Home, Users, FileText
} from 'lucide-react';
import { useState, useEffect } from 'react';
import Image from "next/image"

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setTimeout(() => setSubscribed(false), 3000);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const floatingIcons = [
    { Icon: Sparkles, delay: 0, duration: 3, top: '10%', left: '5%' },
    { Icon: Zap, delay: 0.5, duration: 4, top: '20%', right: '8%' },
    { Icon: Shield, delay: 1, duration: 3.5, bottom: '15%', left: '10%' },
    { Icon: TrendingUp, delay: 1.5, duration: 4.5, top: '40%', right: '12%' },
    { Icon: Home, delay: 2, duration: 5, bottom: '25%', right: '15%' },
    { Icon: Users, delay: 2.5, duration: 4, top: '60%', left: '8%' },
  ];

  const quickLinks = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Services', href: '/services', icon: Zap },
    { name: 'About Us', href: '/about', icon: Users },
    { name: 'Contact', href: '/contact', icon: Mail },
    { name: 'Blog', href: '/blog', icon: FileText },
  ];

  const serviceLinks = [
    { name: 'Rent & Payment', href: '/services#rent-payment', icon: TrendingUp },
    { name: 'Maintenance', href: '/services#maintenance', icon: Shield },
    { name: 'Tenant Management', href: '/services#tenant', icon: Users },
    { name: 'Housekeeping', href: '/services#housekeeping', icon: Sparkles },
    { name: 'Legal & Compliance', href: '/services#legal', icon: FileText },
  ];

  const contactInfo = [
    { icon: Phone, text: '+94 77 123 4567', href: 'tel:+94771234567' },
    { icon: Mail, text: 'info@soulroots.lk', href: 'mailto:info@soulroots.lk' },
    { icon: MapPin, text: 'Colombo 03, Sri Lanka', href: '#' },
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook', color: 'hover:text-blue-600' },
    { 
      icon: () => (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.946 1.265c-1.524.756-2.925 1.785-4.056 3.025C1.07 10.768.427 12.534.427 14.405c0 1.87.542 3.636 1.571 5.157L.973 23.5l5.289-1.379c1.452.792 3.1 1.206 4.719 1.206h.004c5.442 0 9.867-4.414 9.868-9.832.001-2.63-.997-5.101-2.808-6.967A9.885 9.885 0 0011.551 6.98z" />
        </svg>
      ),
      href: 'https://wa.me/94771234567',
      label: 'WhatsApp',
      color: 'hover:text-green-500'
    },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn', color: 'hover:text-blue-700' },
  ];

  return (
    <footer className="relative bg-linear-to-b from-background to-background/95 border-t border-border/50 mt-4 overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0">
      
      
      
      </div>

      {/* Floating icons */}
      {floatingIcons.map((item, index) => {
        const Icon = item.Icon;
        return (
          <motion.div
            key={index}
            className="absolute icon-brown opacity-10 z-0 hidden lg:block"
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

      {/* Main footer content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 gap-8 lg:grid-cols-10 lg:gap-10 mb-8"
        >
          {/* Company Info - Large column */}
          <motion.div variants={itemVariants} className="lg:col-span-5 lg:col-start-2">
            <div className="flex items-center gap-3 mb-6">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="w-12 h-12 bg-linear-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-primary/30"
              >
                <Image
                                src="/logo.png"
                                alt="SoulRoots Logo"
                                width={48}
                                height={48}
                                className="w-14 h-14 lg:w-12 lg:h-12 rounded-xl shadow-lg  object-contain"
                                priority
                              />
              </motion.div>
              <span className="font-bold text-2xl text-foreground">SoulRoots</span>
            </div>
            
            <p className="text-muted-foreground text-base leading-relaxed mb-6 max-w-md">
              Professional property management and rental services in Sri Lanka. 
              We handle everything so you can focus on what matters most.
            </p>

            {/* Newsletter signup */}
            {/* <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-5">
              <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-primary" />
                Subscribe to Newsletter
              </h4>
              <form onSubmit={handleSubscribe} className="flex flex-col gap-2 sm:flex-row">
                <input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-2 rounded-xl bg-background border border-border focus:border-primary focus:outline-none transition-colors"
                  required
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="px-4 py-2 bg-primary text-white rounded-xl hover:bg-primary/90 transition-colors"
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </form>
              {/* {subscribed && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-500 text-sm mt-2"
                >
                  Thanks for subscribing! 🎉
                </motion.p>
              )} 
            </div> */}
          </motion.div>

      
          {/* Contact Info */}
          <motion.div variants={itemVariants} className="lg:col-span-4">
            <h3 className="font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-primary rounded-full" />
              Contact Us
            </h3>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <li key={index}>
                    {item.href !== '#' ? (
                      <a
                        href={item.href}
                        className="group inline-flex items-start gap-3"
                      >
                        <Icon className="w-5 h-5 icon-brown text-destructive  shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                        <span className="text-muted-foreground group-hover:text-primary transition-colors text-sm">
                          {item.text}
                        </span>
                      </a>
                    ) : (
                      <div className="inline-flex text-destructive items-start gap-3">
                        <Icon className="w-5 h-5 icon-brown shrink-0 mt-0.5" />
                        <span className="text-muted-foreground text-sm">
                          {item.text}
                        </span>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>

            {/* Live chat or status indicator */}
            <div className="mt-6 flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-xs text-muted-foreground">Support available 24/7</span>
            </div>
          </motion.div>
        </motion.div>

      

        {/* Copyright and Legal */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row justify-between items-center gap-3 border-t border-border/60 pt-6"
        >
          <p className="text-muted-foreground text-sm text-center lg:text-left">
            © {currentYear} SoulRoots. All rights reserved.
          </p>
          
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-muted-foreground hover:text-primary transition-colors">
              Cookie Policy
            </Link>
          </div>

          <p className="text-xs  text-center lg:text-right text-destructive ">
            Made with  Auroze, Sri Lanka.
          </p>
        </motion.div>
      </div>

      {/* Animated gradient line at bottom */}
      <motion.div
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="h-1 w-full bg-linear-to-r from-primary/0 via-primary to-primary/0 bg-size-[200%_100%]"
      />
    </footer>
  );
}