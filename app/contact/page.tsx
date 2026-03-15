'use client'

import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import ContactForm from '@/components/contact-form';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';


export default function ContactPage() {
  const contactCards = [
    {
      icon: <Phone className="w-6 h-6 text-primary" />,
      title: 'Phone',
      value: '+94 XXXXXXXXX',
      description: 'Available during business hours',
      bg: 'bg-primary/5',
      border: 'border-primary/20',
      link: 'tel:+94XXXXXXXXX',
      colorClass: 'text-primary',
    },
    {
      icon: <Mail className="w-6 h-6 text-secondary" />,
      title: 'Email',
      value: 'info@promanage.lk',
      description: 'Response within 24 hours',
      bg: 'bg-secondary/5',
      border: 'border-secondary/20',
      link: 'mailto:info@promanage.lk',
      colorClass: 'text-secondary',
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-green-500" />,
      title: 'WhatsApp',
      value: '+94 XXXXXXXXX',
      description: 'Quick responses 24/7',
      bg: 'bg-green-500/5',
      border: 'border-green-500/20',
      link: 'https://wa.me/94XXXXXXXXX',
      colorClass: 'text-green-500',
    },
    {
      icon: <MapPin className="w-6 h-6 text-foreground" />,
      title: 'Location',
      value: 'Colombo 3, Sri Lanka',
      description: 'Visit our office',
      bg: 'bg-foreground/5',
      border: 'border-border',
      link: null,
      colorClass: 'text-foreground',
    },
  ];

  return (
    <main className="min-h-screen bg-background font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 relative overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold text-foreground mb-4">
            Get In Touch With Us
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            We're here to help. Reach out through any of our contact channels
          </p>
        </div>
        {/* Decorative shapes */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-secondary/10 rounded-full blur-3xl animate-pulse"></div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: index % 2 === 0 ? -5 : 5 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ delay: index * 0.1, type: 'spring', stiffness: 120 }}
              className={`p-8 rounded-3xl shadow-2xl border ${card.border} ${card.bg} hover:shadow-3xl hover:-translate-y-2 transition-all cursor-pointer text-center`}
            >
              <div className="w-16 h-16 mx-auto rounded-lg flex items-center justify-center mb-4 bg-opacity-30 bg-white">
                {card.icon}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{card.title}</h3>
              {card.link ? (
                <a href={card.link} className={`text-lg font-medium ${card.colorClass} hover:opacity-80 transition`}>
                  {card.value}
                </a>
              ) : (
                <p className={`text-lg font-medium ${card.colorClass}`}>{card.value}</p>
              )}
              <p className="text-sm text-muted-foreground mt-2">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-6 bg-foreground/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Send Us a Message
            </h2>
            <p className="text-muted-foreground text-lg">
              Fill out the form below and we'll get back to you as soon as possible
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 120 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </section>

      {/* Business Hours & Quick Response */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 120 }}
            className="p-10 rounded-3xl shadow-2xl bg-primary/5 border border-primary/20"
          >
            <div className="flex items-center gap-3 mb-6">
              <Clock className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-semibold text-foreground">Business Hours</h3>
            </div>
            <div className="space-y-3 text-foreground">
              <p><span className="font-semibold">Monday - Friday:</span> 8:30 AM - 5:30 PM</p>
              <p><span className="font-semibold">Saturday:</span> 9:00 AM - 2:00 PM</p>
              <p><span className="font-semibold">Sunday:</span> Closed</p>
              <p className="text-sm text-muted-foreground mt-4">Emergency services available 24/7 for tenants and property owners</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 120, delay: 0.1 }}
            className="p-10 rounded-3xl shadow-2xl bg-secondary/5 border border-secondary/20"
          >
            <h3 className="text-2xl font-semibold text-foreground mb-6">Quick Response</h3>
            <ul className="space-y-3 text-foreground">
              <li>✓ Phone: Response within 30 minutes</li>
              <li>✓ Email: Response within 24 hours</li>
              <li>✓ WhatsApp: Immediate response</li>
              <li>✓ Emergencies: 24/7 support hotline</li>
            </ul>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}