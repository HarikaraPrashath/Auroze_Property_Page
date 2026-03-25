'use client'

import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import ContactForm from '@/components/contact-form';
import { Phone, Mail, MapPin, Clock, MessageCircle, CheckCircle, ArrowRight, Building2, Users } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const contactCards = [
    {
      icon: Phone,
      title: 'Phone',
      value: '+94 XXXXXXXXX',
      description: 'Available during business hours',
      bg: 'bg-primary/5',
      border: 'border-primary/20',
      link: 'tel:+94771299675',
      colorClass: 'text-destructive',
      gradient: 'from-primary/20 to-transparent',
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'info@SoulRoots.lk',
      description: 'Response within 24 hours',
      bg: 'bg-secondary/5',
      border: 'border-secondary/20',
      link: 'support.soulroots@gmail.com',
      colorClass: 'text-destructive',
      gradient: 'from-secondary/20 to-transparent',
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      value: '+94 XXXXXXXXX',
      description: 'Quick responses 24/7',
      bg: 'bg-green-500/5',
      border: 'border-green-500/20',
      link: 'https://wa.me/94771299675',
      colorClass: 'text-destructive',
      gradient: 'from-green-500/20 to-transparent',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'No-09,Pioneer road, Batticaloa',
      description: 'Visit our office',
      bg: 'bg-foreground/5',
      border: 'border-border',
      link: null,
      colorClass: 'text-destructive',
      gradient: 'from-foreground/10 to-transparent',
    },
  ];

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardReveal = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 80,
        damping: 15
      }
    }
  };

  return (
    <main className="min-h-screen bg-background font-sans overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Professional gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px]" />

        <div className="max-w-4xl mx-auto text-center text-destructive relative z-10">
          {/* Professional badge */}
            <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
          >
            <Building2 className="w-4 h-4 text-primary dark:text-white" />
            <span className="text-primary dark:text-white font-medium text-sm">Contact Us</span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary dark:text-white mb-4"
          >
            Get In Touch{' '}
            <span className="text-primary">With Us</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-primary dark:text-white max-w-2xl mx-auto"
          >
            We're here to help. Reach out through any of our contact channels
          </motion.p>

          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-0.5 w-20 bg-primary/30 mx-auto mt-8"
          />
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {contactCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={index}
                  variants={cardReveal}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <div className={`relative p-6 rounded-xl border ${card.border} ${card.bg} hover:shadow-lg transition-all duration-300`}>
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-lg  border border-border flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className={`w-5 h-5 text-primary dark:text-white`} />
                    </div>

                    {/* Content */}
                    <h3 className="text-lg font-semibold mb-1 text-primary dark:text-white">{card.title}</h3>
                    {card.link ? (
                      <a 
                        href={card.link} 
                        className={`text-base font-medium text-primary dark:text-white hover:underline inline-flex items-center gap-1`}
                      >
                        {card.value}
                        <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                      </a>
                    ) : (
                      <p className={`text-base font-medium text-primary dark:text-white`}>{card.value}</p>
                    )}
                    <p className="text-sm text-muted-foreground mt-2">{card.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Form Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-card rounded-xl border border-border p-8">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-primary dark:text-white mb-2">Send Us a Message</h2>
                  <p className="text-primary dark:text-white text-sm">
                    Fill out the form below and we'll get back to you as soon as possible
                  </p>
                </div>
                <ContactForm />
              </div>
            </motion.div>

            {/* Info Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Business Hours Card */}
              <div className="bg-card rounded-xl border border-border p-8">
                  <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-primary dark:text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary dark:text-white">Business Hours</h3>
                </div>
                
                <div className="space-y-4">
                    <div className="flex justify-between items-center pb-2 border-b border-border">
                    <span className="font-medium text-primary dark:text-white">Monday - Friday</span>
                    <span className="text-primary dark:text-white">8:30 AM - 5:30 PM</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-border">
                    <span className="font-medium text-primary dark:text-white">Saturday</span>
                    <span className="text-primary dark:text-white">9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-border">
                    <span className="font-medium text-primary dark:text-white">Sunday</span>
                    <span className="text-muted-foreground">Closed</span>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/10">
                  <p className="text-sm text-muted-foreground flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Emergency services available 24/7 for tenants and property owners</span>
                  </p>
                </div>
              </div>

              {/* Quick Response Card */}
              <div className="bg-card rounded-xl border border-secondary/20 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                    <Users className="w-5 h-5 text-secondary dark:text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary dark:text-white">Quick Response</h3>
                </div>

                <div className="space-y-3">
                  {[
                    'Phone: Response within 30 minutes',
                    'Email: Response within 24 hours',
                    'WhatsApp: Immediate response',
                    'Emergencies: 24/7 support hotline'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-secondary dark:text-white flex-shrink-0" />
                      <span className="text-primary dark:text-white text-sm">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-sm text-primary dark:text-white">
                    Our team is ready to assist you with any questions
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}