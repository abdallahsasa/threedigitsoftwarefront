"use client";

import { SectionHeading } from '@/components/ui/SectionHeading';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  ArrowUpRight, HeartPulse, Microscope, Building, 
  Map, Utensils, ShoppingBag, Car, HardHat, 
  Briefcase, GraduationCap, Landmark, Bed, 
  Factory, Handshake, Cpu 
} from 'lucide-react';

interface IndustryData {
  id: number;
  name: string;
  slug: string;
}

export function Industries({ industries = [] }: { industries?: IndustryData[] }) {
  const getIcon = (slug: string) => {
    switch (slug) {
      case 'healthcare': return <HeartPulse className="w-8 h-8 stroke-[1.5]" />;
      case 'medical-engineering': return <Microscope className="w-8 h-8 stroke-[1.5]" />;
      case 'real-estate': return <Building className="w-8 h-8 stroke-[1.5]" />;
      case 'tourism': return <Map className="w-8 h-8 stroke-[1.5]" />;
      case 'restaurants': return <Utensils className="w-8 h-8 stroke-[1.5]" />;
      case 'retail': return <ShoppingBag className="w-8 h-8 stroke-[1.5]" />;
      case 'automotive': return <Car className="w-8 h-8 stroke-[1.5]" />;
      case 'construction': return <HardHat className="w-8 h-8 stroke-[1.5]" />;
      case 'professional-services': return <Briefcase className="w-8 h-8 stroke-[1.5]" />;
      case 'education': return <GraduationCap className="w-8 h-8 stroke-[1.5]" />;
      case 'government': return <Landmark className="w-8 h-8 stroke-[1.5]" />;
      case 'hospitality': return <Bed className="w-8 h-8 stroke-[1.5]" />;
      case 'manufacturing': return <Factory className="w-8 h-8 stroke-[1.5]" />;
      case 'b2b': return <Handshake className="w-8 h-8 stroke-[1.5]" />;
      case 'technology': return <Cpu className="w-8 h-8 stroke-[1.5]" />;
      default: return <Briefcase className="w-8 h-8 stroke-[1.5]" />;
    }
  };

  return (
    <section className="py-32 bg-primary-bg relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <SectionHeading 
            title="Industries We Empower" 
            subtitle="We engineer specialized digital solutions tailored to the unique regulatory, scaling, and operational challenges of complex industries."
            align="center" 
          />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-16">
          {industries.map((industry, i) => (
            <motion.div
              key={industry.slug}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: "easeOut" }}
            >
              <Link 
                href={`/industries/${industry.slug}`}
                className="group block relative h-40 rounded-2xl border border-white/10 bg-secondary-bg/50 p-6 overflow-hidden transition-all duration-300 hover:border-primary-accent/50 hover:bg-secondary-bg shadow-sm hover:shadow-[0_10px_30px_rgba(100,210,30,0.05)]"
              >
                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative h-full flex flex-col justify-between">
                  {/* Icon */}
                  <div className="text-white/40 group-hover:text-primary-accent transition-colors duration-500 group-hover:scale-110 transform origin-left">
                    {getIcon(industry.slug)}
                  </div>

                  <div className="flex justify-between items-end">
                    <h3 className="text-sm md:text-base font-semibold text-white/90 group-hover:text-white transition-colors pr-4">{industry.name}</h3>
                    <ArrowUpRight className="w-5 h-5 text-muted-text group-hover:text-primary-accent transition-colors duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
