"use client";

import { Button } from '@/components/ui/Button';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';
import { Sparkles, BarChart3, Target } from 'lucide-react';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(true);

  // Scroll parallax for the main container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Mouse parallax springs
  const springConfig = { damping: 30, stiffness: 100, mass: 1 };
  const mouseX = useSpring(0, springConfig);
  const mouseY = useSpring(0, springConfig);

  const layer1X = useTransform(mouseX, v => v * -1.5);
  const layer1Y = useTransform(mouseY, v => v * -1.5);
  const layer2X = useTransform(mouseX, v => v * 1.2);
  const layer2Y = useTransform(mouseY, v => v * 1.2);
  const layer3X = useTransform(mouseX, v => v * -0.8);
  const layer3Y = useTransform(mouseY, v => v * -0.8);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia('(max-width: 768px)').matches || window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isMobile) return;
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    // Normalize coordinates from -1 to 1
    const x = (clientX / innerWidth) * 2 - 1;
    const y = (clientY / innerHeight) * 2 - 1;
    
    // Very subtle movement (max 6px)
    mouseX.set(x * 6); 
    mouseY.set(y * 6);
  };

  return (
    <section 
      ref={containerRef}
      className="relative pt-36 pb-20 md:pt-48 md:pb-32 overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => {}}
      onMouseLeave={() => {
        mouseX.set(0);
        mouseY.set(0);
      }}
    >
      <motion.div style={{ y, opacity }} className="container mx-auto px-4 relative z-20 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold tracking-tighter mb-8 leading-[1.05]"
        >
          Complete Digital Solutions for <br className="hidden md:block" />
          <span className="text-primary-accent inline-block mt-2">Growing Businesses.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="text-xl md:text-2xl text-muted-text max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          From websites and mobile applications to AI automation, branding, SEO, paid advertising and digital strategy, we help businesses build a stronger digital presence and achieve measurable growth.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Button asChild size="lg" className="w-full sm:w-auto text-lg px-8 py-4">
            <Link href="/start-a-project">Start Your Project</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="w-full sm:w-auto text-lg px-8 py-4">
            <Link href="/work">Explore Our Work</Link>
          </Button>
        </motion.div>
      </motion.div>
      
      {/* Cinematic Responsive Video Container */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        className="relative max-w-[85%] mx-auto z-10"
      >
        {/* Floating Glass UI Cards */}
        {!isMobile && (
          <>
            <motion.div 
              style={{ x: layer1X, y: layer1Y }}
              className="absolute -top-16 -left-12 bg-secondary-bg/60 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl z-0 p-5 flex items-center gap-4"
            >
              <div className="w-10 h-10 rounded-full bg-primary-accent/20 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-primary-accent" />
              </div>
              <div>
                <div className="text-sm font-semibold text-white">AI Assistant</div>
                <div className="text-xs text-muted-text">Processing workflow...</div>
              </div>
            </motion.div>

            <motion.div 
              style={{ x: layer2X, y: layer2Y }}
              className="absolute -bottom-12 -right-8 bg-secondary-bg/60 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl z-20 p-5 flex items-center gap-4"
            >
              <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <div className="text-sm font-semibold text-white">Analytics Dashboard</div>
                <div className="text-xs text-emerald-400">+24% conversion rate</div>
              </div>
            </motion.div>

            <motion.div 
              style={{ x: layer3X, y: layer3Y }}
              className="absolute top-1/2 -translate-y-1/2 -right-16 bg-secondary-bg/60 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl z-0 p-5 hidden lg:flex items-center gap-4"
            >
              <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                <Target className="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <div className="text-sm font-semibold text-white">New Lead</div>
                <div className="text-xs text-muted-text">Enterprise client</div>
              </div>
            </motion.div>
          </>
        )}

        {/* Video Container with pulsing glow */}
        <div className="aspect-[21/9] bg-secondary-bg rounded-3xl border border-white/10 shadow-[0_0_80px_rgba(100,210,30,0.15)] overflow-hidden relative group backdrop-blur-xl animate-hero-glow">
          {/* Subtle reflection overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/40 z-20 pointer-events-none mix-blend-overlay"></div>
          
          <div className="absolute inset-0 bg-gradient-to-t from-primary-bg/90 via-transparent to-transparent z-10 pointer-events-none"></div>
          
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full h-full object-cover opacity-90 transition-opacity duration-1000 group-hover:opacity-100"
          >
            <source src="/hero.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </motion.div>
    </section>
  );
}
