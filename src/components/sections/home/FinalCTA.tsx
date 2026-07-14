"use client";

import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';
import Link from 'next/link';

export function FinalCTA() {
  return (
    <section className="relative py-32 overflow-hidden bg-primary-bg">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary-accent/10 blur-[120px] rounded-full animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-blue-500/10 blur-[100px] rounded-full"></div>
      </div>
      
      {/* Particles Overlay */}
      <div className="absolute inset-0 z-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center p-8 md:p-16 rounded-3xl border border-white/10 bg-secondary-bg/40 backdrop-blur-2xl shadow-[0_0_100px_rgba(100,210,30,0.05)]"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Let&apos;s Build Your Next <span className="text-primary-accent">Success Story.</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-text mb-12 max-w-2xl mx-auto leading-relaxed">
            Whether you need a website, mobile app, AI solution, complete digital marketing strategy or business platform, our team is ready to help transform your ideas into measurable business growth.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="w-full sm:w-auto text-lg px-8 py-4 shadow-[0_0_20px_rgba(100,210,30,0.3)] hover:shadow-[0_0_30px_rgba(100,210,30,0.5)] transition-all">
              <Link href="/start-a-project">Start Your Project</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto text-lg px-8 py-4 bg-white/5 backdrop-blur-md">
              <Link href="/contact">Book a Free Discovery Call</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto text-lg px-8 py-4 border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10 hover:text-emerald-300">
              <a href="https://wa.me/123456789" target="_blank" rel="noopener noreferrer">WhatsApp</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
