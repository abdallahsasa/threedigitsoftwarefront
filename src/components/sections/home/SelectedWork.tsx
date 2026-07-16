"use client";

import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

// Reusable Tilt Card Component
function TiltCard({ children, className }: { children: React.ReactNode, className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(true);

  // Motion values for tracking mouse position (-1 to 1)
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Add springs for smooth movement
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  // Map mouse values to rotation degrees (max 3 degrees as requested)
  const rotateX = useTransform(mouseYSpring, [-1, 1], [3, -3]);
  const rotateY = useTransform(mouseXSpring, [-1, 1], [-3, 3]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia('(max-width: 768px)').matches || window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current || isMobile) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Calculate mouse position relative to the center of the card
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    
    // Normalize to -1 to 1
    x.set(mouseX / (width / 2));
    y.set(mouseY / (height / 2));
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: isMobile ? 0 : rotateX,
        rotateY: isMobile ? 0 : rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative ${className || ''}`}
    >
      {children}
    </motion.div>
  );
}

interface ProjectData {
  id: number;
  name: string;
  slug: string;
  category?: string;
  overview?: string;
  main_image?: string;
}

export function SelectedWork({ projects = [] }: { projects?: ProjectData[] }) {
  const t = useTranslations('SelectedWork');
  // If no projects are loaded, show a fallback or nothing.
  const displayProjects = projects.length > 0 ? projects.map((p: ProjectData, i: number) => {
    // Dynamic layout mapping based on order logic to keep the masonry-style grid
    const layout = i % 3 === 0 ? 'full' : (i % 5 === 0 ? 'half' : 'third');
    
    return {
      id: p.id,
      name: p.name,
      category: p.category || 'Case Study',
      desc: p.overview || '',
      slug: p.slug,
      image: p.main_image || 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop',
      layout: layout
    };
  }) : [];

  return (
    <section className="py-32 overflow-hidden bg-primary-bg relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <SectionHeading 
            title={t('title')} 
            subtitle={t('subtitle')}
            className="mb-0 max-w-2xl"
          />
          <Button asChild variant="ghost" className="hidden md:inline-flex mt-4 md:mt-0 items-center gap-2 group">
            <Link href="/work">
              {t('view_all')} 
              <span className="text-xl transform transition-transform duration-300 group-hover:translate-x-2">&rarr;</span>
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 [perspective:1000px]">
          {displayProjects.map((project, i: number) => {
            const isFull = project.layout === 'full';
            const isHalf = project.layout === 'half';
            const gridClass = isFull ? 'col-span-12' : isHalf ? 'col-span-12 md:col-span-6' : 'col-span-12 md:col-span-4';
            
            return (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.08, ease: "easeOut" }}
                className={`${gridClass} mb-8 block`}
              >
                <Link href={`/work/${project.slug}`} className="block w-full h-full">
                  <TiltCard className="w-full h-full">
                    <div className={`w-full bg-secondary-bg rounded-2xl border border-white/5 overflow-hidden relative group shadow-lg transition-all duration-500 hover:shadow-[0_20px_50px_rgba(100,210,30,0.1)] hover:border-primary-accent/30 ${isFull ? 'aspect-video md:aspect-[21/9]' : isHalf ? 'aspect-[4/3]' : 'aspect-[4/5]'}`}>
                    
                    <div className="absolute top-6 left-6 z-20">
                      <span className="px-4 py-2 bg-primary-bg/80 backdrop-blur-md rounded-full text-xs font-semibold text-white border border-white/10 uppercase tracking-wider group-hover:border-primary-accent/50 group-hover:text-primary-accent transition-colors duration-300 shadow-lg">
                        {project.category}
                      </span>
                    </div>
                    
                    {/* Dark Overlay that fades in heavily on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-bg via-primary-bg/80 to-primary-bg/40 z-10 transition-all duration-500 group-hover:from-primary-bg group-hover:via-primary-bg/90 group-hover:to-primary-bg/60"></div>
                    
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      src={project.image} 
                      alt={project.name}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    
                    <div className="absolute bottom-0 left-0 right-0 p-8 z-20 flex justify-between items-end transform transition-transform duration-500 group-hover:-translate-y-2">
                      <div className="max-w-xl">
                        <h3 className="text-2xl md:text-3xl font-bold mb-2 text-white transform transition-transform duration-500 group-hover:-translate-y-1 drop-shadow-md">{project.name}</h3>
                        <p className="text-white/80 text-sm md:text-base line-clamp-3 opacity-90 group-hover:opacity-100 transition-opacity duration-500 drop-shadow">{project.desc}</p>
                      </div>
                      
                      {/* View Case Study Button (Reveals on Hover) */}
                      <div className="hidden md:flex items-center gap-3 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 flex-shrink-0">
                        <span className="text-white font-medium uppercase tracking-wider text-sm whitespace-nowrap">{t('view_case_study')}</span>
                        <div className="w-12 h-12 rounded-full bg-primary-accent text-primary-bg flex items-center justify-center shadow-[0_0_20px_rgba(100,210,30,0.4)] flex-shrink-0">
                          <span className="text-2xl font-bold -rotate-45">&rarr;</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </TiltCard>
                </Link>
              </motion.div>
            );
          })}
        </div>
        
        <div className="mt-16 text-center md:hidden">
          <Button asChild variant="outline" size="lg" className="w-full">
            <Link href="/work">{t('view_all')}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
