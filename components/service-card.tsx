'use client';

import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Service {
  id: string;
  title: string;
  image: string;
  description: string;
  details: string[];
}
interface Service {
  id: string;
  title: string;
  image: string;
  description: string;
  details: string[];
}

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <div id={service.id} className="group rounded-xl overflow-hidden border border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300 bg-background scroll-mt-20">
      {/* Header */}
      <div className="p-0">
        <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
        <div className="p-6 bg-gradient-to-br from-primary/10 to-secondary/10 group-hover:from-primary/15 group-hover:to-secondary/15 transition-all">
          <h3 className="text-2xl font-bold text-foreground mb-2">{service.title}</h3>
          <p className="text-muted-foreground">{service.description}</p>
        </div>
      </div>

      {/* Details */}
      <div className="p-6">
        <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wide">
          What's Included
        </h4>
        <ul className="space-y-3 mb-6">
          {service.details.map((detail, index) => (
            <li key={index} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-foreground text-sm">{detail}</span>
            </li>
          ))}
        </ul>

        <Button className="w-full bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 group-hover:bg-primary group-hover:text-white transition-all">
          Learn More
        </Button>
      </div>
    </div>
  );
}
