"use client";

import { SectionHeading } from '@/components/ui/SectionHeading';
import { motion } from 'framer-motion';
import { Monitor, Smartphone, Briefcase, Cpu, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface ServiceData {
  id: number;
  name: string;
  slug: string;
  overview: string;
}

export function ServicesOverview({ services = [] }: { services?: ServiceData[] }) {
  const getIcon = (slug: string) => {
    switch (slug) {
      case 'web': return <Monitor className="w-6 h-6 text-primary-accent" />;
      case 'mobile': return <Smartphone className="w-6 h-6 text-primary-accent" />;
      case 'platforms': return <Briefcase className="w-6 h-6 text-primary-accent" />;
      case 'ai': return <Cpu className="w-6 h-6 text-primary-accent" />;
      default: return <Monitor className="w-6 h-6 text-primary-accent" />;
    }
  };

  return (
    <section className="py-32 bg-secondary-bg relative">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <SectionHeading 
              title="We Build, Launch, Market, and Grow Digital Businesses" 
              subtitle="Stop managing multiple agencies. We deliver the complete spectrum of digital solutions required to launch your ideas and scale your revenue under one roof."
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="hidden md:block pb-8"
          >
            <Link href="/services" className="group flex items-center gap-2 text-white font-semibold hover:text-primary-accent transition-colors">
              Explore All Solutions
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary-accent/20 transition-colors">
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <Link href={`/services/${service.slug}`} key={i} className="block group bg-primary-bg rounded-2xl p-8 border border-white/5 hover:border-primary-accent/30 transition-all duration-300 relative overflow-hidden h-full">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                className="h-full flex flex-col"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:-translate-y-2 group-hover:shadow-[0_0_30px_rgba(100,210,30,0.2)] transition-all duration-300">
                  {getIcon(service.slug)}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{service.name}</h3>
                <p className="text-muted-text mb-8">{service.overview}</p>
                
                <div className="mt-auto flex items-center gap-2 text-white font-medium opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <span className="text-sm tracking-wider uppercase">Explore Service</span>
                  <ArrowRight className="w-4 h-4 text-primary-accent" />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
