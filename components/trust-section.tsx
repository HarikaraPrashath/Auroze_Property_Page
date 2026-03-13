'use client';

import { Building2, Users, Award, Zap } from 'lucide-react';

const stats = [
  {
    icon: Building2,
    value: '500+',
    label: 'Properties Managed',
    description: 'Across Sri Lanka',
  },
  {
    icon: Users,
    value: '1,200+',
    label: 'Happy Clients',
    description: 'Trust us daily',
  },
  {
    icon: Award,
    value: '10+',
    label: 'Years Experience',
    description: 'Industry expertise',
  },
  {
    icon: Zap,
    value: '99.9%',
    label: 'Uptime',
    description: 'Service reliability',
  },
];

export default function TrustSection() {
  return (
    <section className="py-20 px-4 bg-primary/5 border-y border-border">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Trust ProManage?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We're dedicated to delivering exceptional property management services with proven results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="group p-6 rounded-xl bg-background border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                  {stat.value}
                </h3>
                <p className="font-semibold text-foreground text-sm mb-1">
                  {stat.label}
                </p>
                <p className="text-muted-foreground text-xs">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
