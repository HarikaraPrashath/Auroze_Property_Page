'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
          Ready to Transform Your Property Management?
        </h2>
        <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
          Join hundreds of satisfied property owners who trust ProManage for professional, reliable, and comprehensive property management services.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white gap-2 group">
            Get Started Today
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-primary/20 text-primary hover:bg-primary/10"
          >
            <Link href="/contact">Schedule a Consultation</Link>
          </Button>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-12 text-center">
          <div>
            <p className="text-2xl font-bold text-primary">500+</p>
            <p className="text-sm text-muted-foreground">Properties Managed</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-primary">1,200+</p>
            <p className="text-sm text-muted-foreground">Happy Clients</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-primary">10+</p>
            <p className="text-sm text-muted-foreground">Years Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
}
