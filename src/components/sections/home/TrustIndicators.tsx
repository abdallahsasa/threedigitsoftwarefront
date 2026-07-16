"use client";

import { motion, useInView, animate } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { useTranslations } from 'next-intl';

function Counter({ from, to, duration = 1.2 }: { from: number, to: number, duration?: number }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      const node = nodeRef.current;
      if (node) {
        const controls = animate(from, to, {
          duration,
          ease: "easeOut",
          onUpdate(value) {
            node.textContent = Math.round(value).toString();
          }
        });
        return () => controls.stop();
      }
    }
  }, [from, to, duration, isInView]);

  return <span ref={nodeRef}>{from}</span>;
}

export function TrustIndicators() {
  const t = useTranslations('TrustIndicators');
  const stats = [
    { value: 18, isNumber: true, suffix: '+', label: t('completed_products') },
    { value: 6, isNumber: true, suffix: '+', label: t('years_building') },
    { value: 10, isNumber: true, suffix: '+', label: t('industries_served') },
    { value: t('international'), isNumber: false, suffix: '', label: t('clients_across') },
  ];

  return (
    <section className="py-24 border-y border-white/5 bg-secondary-bg/50 relative overflow-hidden">
      {/* Background Soft Divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.15)_0%,transparent_70%)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8 lg:divide-x divide-white/5 text-center">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
              className="px-4 flex flex-col items-center justify-center"
            >
              <div className={`font-bold text-white mb-4 flex items-baseline tracking-tight font-mono ${stat.isNumber ? 'text-4xl md:text-5xl lg:text-6xl' : 'text-3xl md:text-4xl lg:text-5xl'}`}>
                {stat.isNumber ? (
                  <Counter from={0} to={stat.value as number} />
                ) : (
                  <span>{stat.value}</span>
                )}
                <span className="text-primary-accent text-3xl md:text-4xl lg:text-5xl ml-1">{stat.suffix}</span>
              </div>
              <div className="text-sm md:text-base text-muted-text font-medium tracking-wide uppercase max-w-[200px] mx-auto leading-relaxed">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
