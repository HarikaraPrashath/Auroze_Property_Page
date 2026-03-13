'use client';

import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
  },
];

export default function PricingSection() {
  return (
    <section className="py-20 px-4 bg-foreground/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="text-primary font-semibold text-sm">Pricing Plans</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Flexible Subscription Plans
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose the perfect plan for your property management needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl transition-all duration-300 ${
                plan.highlight
                  ? 'ring-2 ring-primary scale-105 shadow-2xl'
                  : 'border border-border hover:border-primary/50'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-white text-xs font-semibold whitespace-nowrap">
                  Most Popular
                </div>
              )}

              <div className={`p-8 rounded-2xl h-full flex flex-col ${
                plan.highlight ? 'bg-primary/5' : 'bg-background'
              }`}>
                {/* Header */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-primary">{plan.price}</span>
                    <span className="text-muted-foreground text-sm">{plan.period}</span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <Button
                  className={`w-full ${
                    plan.highlight
                      ? 'bg-primary hover:bg-primary/90 text-white'
                      : 'border border-primary/20 text-white hover:bg-primary/90'
                  }`}
                  size="lg"
                >
                  Choose {plan.name} Plan
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="bg-background border border-border rounded-xl p-8 text-center">
          <p className="text-foreground mb-4">
            <span className="font-semibold">Need a custom plan?</span> Contact our team for tailored solutions
          </p>
          <Button variant="outline" className="border-primary/20 text-primary hover:bg-primary/10">
            Contact Sales
          </Button>
        </div>
      </div>
    </section>
  );
}
