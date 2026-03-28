'use client';

import { Building2, Users, Award, Zap, ShieldCheck } from 'lucide-react';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const stats = [
  {
    icon: Building2,
    value: 500,
    suffix: '+',
    label: 'Properties Managed',
    description: 'Across Sri Lanka',
  },
  {
    icon: Users,
    value: 1200,
    suffix: '+',
    label: 'Happy Clients',
    description: 'Trust us daily',
  },
  {
    icon: Award,
    value: 10,
    suffix: '+',
    label: 'Years Experience',
    description: 'Industry expertise',
  },
  {
    icon: Zap,
    value: 99.9,
    suffix: '%',
    label: 'Uptime',
    description: 'Service reliability',
  },
];

export default function TrustSection() {

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.35,
  });

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardAnimation = {
    hidden: {
      y: 120,
      opacity: 0,
      scale: 0.9
    },
    show: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.9
      }
    }
  };

  return (
    <section className="py-14 px-4 bg-primary/5 border-y border-border overflow-hidden lg:py-16">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >

          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 ">
            <span className='text-primary'>Why Trust</span> SoulRoots?
          </h2>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We're dedicated to delivering exceptional property management services with proven results
          </p>

        </motion.div>


        {/* Stats Grid */}
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >

          {stats.map((stat, index) => {

            const Icon = stat.icon;

            return (

              <motion.div
                key={index}
                variants={cardAnimation}

                whileHover={{
                  scale: 1.07,
                  rotate: [0, -1.5, 1.5, 0],
                }}

                transition={{
                  duration: 0.35
                }}

                className="relative group p-8 rounded-2xl bg-background border border-border
                hover:border-primary/40 shadow-md hover:shadow-xl
                transition-all duration-300"
              >

                {/* Glow background */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-br from-primary/10 to-secondary/20 blur-xl"></div>

                <div className="relative z-10">

                  {/* Icon */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ delay: index * 0.2, type: "spring" }}
                    className="w-14 h-14 rounded-xl  flex items-center justify-center mb-5"
                  >
                    <Icon className="w-7 h-7 text-destructive" />
                  </motion.div>


                  {/* Number */}
                  <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2">

                    {inView && (
                      <CountUp
                        start={0}
                        end={stat.value}
                        duration={2.6}
                        decimals={stat.value % 1 !== 0 ? 1 : 0}
                        suffix={stat.suffix}
                      />
                    )}

                  </h3>


                  {/* Label */}
                  <p className="font-semibold text-foreground text-sm mb-1">
                    {stat.label}
                  </p>


                  {/* Description */}
                  <p className="text-muted-foreground text-xs">
                    {stat.description}
                  </p>

                </div>

              </motion.div>

            );

          })}


        </motion.div>
        <div className="lg:mt-8 w-full">
          <div className="flex items-start gap-4 p-6 rounded-2xl bg-background border border-border">

            {/* Icon */}
            <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10">
              <ShieldCheck className="w-6 h-6 text-primary" />
            </div>

            {/* Text Content */}
            <div className="flex flex-col justify-center">
              <p className="text-sm font-semibold text-foreground leading-none">
                Formal Agreements
              </p>
              <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                We operate under formal agreements with all clients, outlining clear terms,
                responsibilities and service-level expectations to protect both parties.
              </p>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}