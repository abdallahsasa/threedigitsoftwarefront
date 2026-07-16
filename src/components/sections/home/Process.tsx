"use client";

import { SectionHeading } from '@/components/ui/SectionHeading';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { 
  Lightbulb, Palette, Layout, Search, 
  Share2, Target, Cpu, TrendingUp 
} from 'lucide-react';
import { useTranslations } from 'next-intl';

export function Process() {
  const t = useTranslations('Process');
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const steps = [
    { title: t('s1_title'), desc: t('s1_desc'), icon: <Lightbulb /> },
    { title: t('s2_title'), desc: t('s2_desc'), icon: <Palette /> },
    { title: t('s3_title'), desc: t('s3_desc'), icon: <Layout /> },
    { title: t('s4_title'), desc: t('s4_desc'), icon: <Search /> },
    { title: t('s5_title'), desc: t('s5_desc'), icon: <Share2 /> },
    { title: t('s6_title'), desc: t('s6_desc'), icon: <Target /> },
    { title: t('s7_title'), desc: t('s7_desc'), icon: <Cpu /> },
    { title: t('s8_title'), desc: t('s8_desc'), icon: <TrendingUp /> },
  ];

  return (
    <section className="py-32 bg-secondary-bg" ref={containerRef}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-20"
        >
          <SectionHeading 
            title={t('title')} 
            subtitle={t('subtitle')}
            align="center" 
          />
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Animated Timeline Line */}
          <div className="absolute left-12 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2"></div>
          <motion.div 
            style={{ height: lineHeight }}
            className="absolute left-12 md:left-1/2 top-0 w-1 bg-gradient-to-b from-primary-accent via-primary-accent to-blue-500 -translate-x-1/2 origin-top rounded-full shadow-[0_0_15px_rgba(100,210,30,0.5)]"
          ></motion.div>

          <div className="space-y-16">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Node */}
                <div className="absolute left-12 md:left-1/2 w-14 h-14 bg-secondary-bg border-4 border-primary-bg rounded-full -translate-x-1/2 flex items-center justify-center z-10 transition-colors duration-500 hover:border-primary-accent">
                  <div className="w-5 h-5 text-white/70">
                    {step.icon}
                  </div>
                </div>

                {/* Content */}
                <div className={`w-full md:w-1/2 pl-32 md:pl-0 ${i % 2 === 0 ? 'md:pr-16 text-left md:text-right' : 'md:pl-16 text-left'}`}>
                  <div className="bg-primary-bg rounded-2xl p-6 border border-white/5 hover:border-primary-accent/30 transition-all duration-300 shadow-sm hover:shadow-[0_10px_40px_rgba(100,210,30,0.1)] group">
                    <div className="text-sm font-mono text-primary-accent mb-2 tracking-widest uppercase opacity-80 group-hover:opacity-100 transition-opacity">{t('step')} 0{i + 1}</div>
                    <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-muted-text text-sm md:text-base">{step.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
