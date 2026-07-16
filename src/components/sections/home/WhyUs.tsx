"use client";

import { SectionHeading } from '@/components/ui/SectionHeading';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { useTranslations } from 'next-intl';

export function WhyUs() {
  const t = useTranslations('WhyUs');
  const points = [
    { title: t('p1_title'), desc: t('p1_desc') },
    { title: t('p2_title'), desc: t('p2_desc') },
    { title: t('p3_title'), desc: t('p3_desc') },
    { title: t('p4_title'), desc: t('p4_desc') },
  ];

  return (
    <section className="py-32 bg-primary-bg overflow-hidden relative">
      {/* Background glow behind architecture visualization */}
      <div className="absolute right-[-10%] top-[20%] w-[50%] h-[60%] bg-primary-accent/5 blur-[150px] rounded-full pointer-events-none z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2"
          >
            <SectionHeading 
              title={t('title')} 
              subtitle={t('subtitle')}
            />
            
            <div className="space-y-8 mt-12">
              {points.map((point, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 + 0.3 }}
                  className="flex gap-4 group"
                >
                  <div className="mt-1">
                    <CheckCircle2 className="w-6 h-6 text-primary-accent opacity-80 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">{point.title}</h4>
                    <p className="text-muted-text leading-relaxed">{point.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2 relative"
          >
            {/* Premium Abstract Architecture Visualization */}
            <div className="relative aspect-square md:aspect-[4/3] w-full bg-secondary-bg/50 backdrop-blur-sm rounded-3xl border border-white/10 p-8 shadow-[0_0_50px_rgba(100,210,30,0.05)] overflow-hidden group">
              
              {/* Subtle Scanning Light Effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-accent/10 to-transparent h-[200%] w-full animate-scan pointer-events-none mix-blend-overlay"></div>
              
              {/* Architecture SVG */}
              <svg className="w-full h-full opacity-80 group-hover:opacity-100 transition-opacity duration-700" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Connecting Lines */}
                <path d="M100 150 L200 150" stroke="rgba(255,255,255,0.1)" strokeWidth="2" strokeDasharray="4 4" />
                <path d="M200 150 L300 100" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
                <path d="M200 150 L300 200" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
                <path d="M200 70 L200 230" stroke="rgba(100,210,30,0.3)" strokeWidth="1" />
                
                {/* Animated Data Pulses along lines */}
                <circle cx="150" cy="150" r="3" fill="#64D21E">
                  <animate attributeName="cx" values="100;200" dur="2s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
                </circle>

                <circle cx="250" cy="125" r="3" fill="#64D21E">
                  <animate attributeName="cx" values="200;300" dur="2s" repeatCount="indefinite" />
                  <animate attributeName="cy" values="150;100" dur="2s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
                </circle>

                <circle cx="250" cy="175" r="3" fill="#64D21E">
                  <animate attributeName="cx" values="200;300" dur="2s" begin="1s" repeatCount="indefinite" />
                  <animate attributeName="cy" values="150;200" dur="2s" begin="1s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0;1;0" dur="2s" begin="1s" repeatCount="indefinite" />
                </circle>

                {/* Left Node: Client / Frontend */}
                <rect x="60" y="130" width="40" height="40" rx="8" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
                <rect x="70" y="145" width="20" height="10" rx="2" fill="rgba(255,255,255,0.4)" />
                
                {/* Center Node: API Gateway / Load Balancer */}
                <rect x="180" y="130" width="40" height="40" rx="20" fill="rgba(100,210,30,0.1)" stroke="#64D21E" strokeWidth="1.5" />
                <circle cx="200" cy="150" r="8" fill="#64D21E" />
                <circle cx="200" cy="150" r="14" stroke="#64D21E" strokeWidth="1" strokeDasharray="2 2" className="origin-center animate-spin-slow" />

                {/* Right Top Node: Microservice 1 */}
                <rect x="300" y="80" width="40" height="40" rx="8" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
                <rect x="310" y="90" width="20" height="4" rx="2" fill="rgba(255,255,255,0.2)" />
                <rect x="310" y="100" width="20" height="4" rx="2" fill="rgba(255,255,255,0.2)" />
                <rect x="310" y="110" width="12" height="4" rx="2" fill="rgba(255,255,255,0.2)" />

                {/* Right Bottom Node: Database / Storage */}
                <rect x="300" y="180" width="40" height="40" rx="8" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
                <path d="M305 190 C305 185, 335 185, 335 190 C335 195, 305 195, 305 190 Z" fill="rgba(255,255,255,0.3)" />
                <path d="M305 200 C305 195, 335 195, 335 200 C335 205, 305 205, 305 200 Z" fill="rgba(255,255,255,0.3)" />
                <path d="M305 210 C305 205, 335 205, 335 210 C335 215, 305 215, 305 210 Z" fill="rgba(255,255,255,0.3)" />

                {/* Decorative Elements */}
                <rect x="180" y="50" width="40" height="16" rx="8" fill="rgba(100,210,30,0.1)" />
                <rect x="180" y="234" width="40" height="16" rx="8" fill="rgba(100,210,30,0.1)" />
              </svg>
              
              <div className="absolute bottom-6 left-8 right-8 flex justify-between items-center opacity-50">
                <div className="font-mono text-xs tracking-widest text-white">GROWTH_ENGINE_V2.1</div>
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-accent animate-pulse"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-accent animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-accent animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            </div>
            
            {/* Soft backdrop decorations */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/10 blur-[60px] rounded-full pointer-events-none"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary-accent/10 blur-[60px] rounded-full pointer-events-none"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
