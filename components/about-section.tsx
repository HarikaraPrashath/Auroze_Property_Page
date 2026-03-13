'use client';

import { CheckCircle } from 'lucide-react';
import Image from 'next/image';

const features = [
  'Professional property management team with 10+ years experience',
  'Trusted by 500+ property owners across Sri Lanka',
  'Transparent and fair pricing with no hidden charges',
  '24/7 customer support and emergency services',
  'Advanced property management software',
  'Fully licensed and compliant with all regulations',
];

export default function AboutSection() {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative group">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/20 via-white to-secondary/80 p-10 overflow-hidden flex items-center justify-center shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:scale-105">

              <Image
                src="/trust.jpg"
                alt="Trust ProManage"
                width={1000}
                height={1000}
                className="object-contain rounded-xl"
              />

            </div>

            {/* Glow effect */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary/30 rounded-full blur-3xl opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Content */}
          <div>
            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="text-primary font-semibold text-sm">About Us</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
              Your Trusted Property Partner
            </h2>

            <p className="text-muted-foreground text-base leading-relaxed mb-8">
              ProManage is Sri Lanka's leading property management company, dedicated to providing comprehensive and professional property solutions. We understand that managing properties requires expertise, reliability, and attention to detail.
            </p>

            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3 group">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span className="text-foreground text-sm leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
