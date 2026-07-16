"use client";

import { motion } from 'framer-motion';
import { 
  Globe, Smartphone, Cpu, Search, TrendingUp, Target, 
  Palette, Server, Zap, Camera, Briefcase 
} from 'lucide-react';
import { useTranslations } from 'next-intl';

export function AllInOnePartner() {
  const t = useTranslations('AllInOnePartner');
  const capabilities = [
    { name: t('cap_website'), icon: <Globe /> },
    { name: t('cap_mobile'), icon: <Smartphone /> },
    { name: t('cap_ai'), icon: <Cpu /> },
    { name: t('cap_seo'), icon: <Search /> },
    { name: t('cap_marketing'), icon: <TrendingUp /> },
    { name: t('cap_paid'), icon: <Target /> },
    { name: t('cap_branding'), icon: <Palette /> },
    { name: t('cap_platforms'), icon: <Server /> },
    { name: t('cap_automation'), icon: <Zap /> },
    { name: t('cap_photo'), icon: <Camera /> },
    { name: t('cap_consulting'), icon: <Briefcase /> },
  ];

  return (
    <section className="py-24 border-t border-white/5 bg-primary-bg overflow-hidden relative">
      {/* Background glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-primary-accent/5 blur-[120px] rounded-full pointer-events-none z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight"
          >
            {t('title_line1')}
            <br />
            <span className="text-primary-accent">{t('title_line2')}</span>
          </motion.h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
          {capabilities.map((cap, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="flex items-center gap-3 bg-secondary-bg/50 backdrop-blur-md border border-white/10 rounded-full px-6 py-3 hover:border-primary-accent/40 hover:bg-white/5 transition-all cursor-default group"
            >
              <div className="text-muted-text group-hover:text-primary-accent transition-colors w-5 h-5 flex items-center justify-center">
                {cap.icon}
              </div>
              <span className="text-white/90 font-medium text-sm md:text-base group-hover:text-white transition-colors">{cap.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
