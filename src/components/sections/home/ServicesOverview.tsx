"use client";

import { SectionHeading } from '@/components/ui/SectionHeading';
import { motion } from 'framer-motion';
import { Monitor, Smartphone, TrendingUp, Paintbrush, Briefcase, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function ServicesOverview() {
  const serviceGroups = [
    {
      title: 'Digital Experiences',
      icon: <Monitor className="w-6 h-6 text-primary-accent" />,
      items: ['Corporate Websites', 'Landing Pages', 'E-commerce', 'UI/UX Design', 'Customer Portals'],
      desc: 'High-converting digital experiences that turn visitors into loyal customers.',
    },
    {
      title: 'Software & AI',
      icon: <Smartphone className="w-6 h-6 text-primary-accent" />,
      items: ['Business Platforms', 'Mobile Apps', 'AI Solutions', 'Automation', 'CRM & ERP'],
      desc: 'Scalable applications and intelligent systems to streamline operations.',
    },
    {
      title: 'Digital Marketing',
      icon: <TrendingUp className="w-6 h-6 text-primary-accent" />,
      items: ['SEO Optimization', 'Google Ads', 'Meta & TikTok Ads', 'Analytics', 'Conversion Optimization'],
      desc: 'Data-driven marketing strategies that drive qualified traffic and generate revenue.',
    },
    {
      title: 'Branding & Creative',
      icon: <Paintbrush className="w-6 h-6 text-primary-accent" />,
      items: ['Brand Identity', 'Graphic Design', 'Motion Graphics', 'Product Photography', 'Video Production', 'Social Content'],
      desc: 'Compelling visual narratives that elevate your brand perception and trust.',
    },
    {
      title: 'Business Growth',
      icon: <Briefcase className="w-6 h-6 text-primary-accent" />,
      items: ['Digital Strategy', 'Business Consulting', 'Product Strategy', 'Digital Transformation'],
      desc: 'Strategic roadmaps to modernize your business and outpace the competition.',
    }
  ];

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
          {serviceGroups.map((group, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
              className="group bg-primary-bg rounded-2xl p-8 border border-white/5 hover:border-primary-accent/30 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:-translate-y-2 group-hover:shadow-[0_0_30px_rgba(100,210,30,0.2)] transition-all duration-300">
                {group.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">{group.title}</h3>
              <p className="text-muted-text mb-8">{group.desc}</p>
              
              <ul className="space-y-3">
                {group.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-white/80">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary-accent/60"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
