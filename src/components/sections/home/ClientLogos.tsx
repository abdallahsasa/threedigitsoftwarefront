"use client";

import { motion } from 'framer-motion';

export function ClientLogos() {
  const clients = [
    'MEC Germany',
    'HerAntalya',
    'OpticB2B',
    'Wujha',
    'FRS Perfumes',
    'United World',
    'Sham Grill',
    'Cashoran'
  ];

  return (
    <section className="py-20 border-t border-white/5 bg-primary-bg overflow-hidden relative">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm font-semibold tracking-widest uppercase text-muted-text mb-12">Trusted by Innovative Companies</p>
        
        <div className="relative w-full">
          {/* Gradient Edges for Marquee Effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-primary-bg to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-primary-bg to-transparent z-10"></div>
          
          <div className="flex overflow-hidden group">
            {/* Double the list for infinite scroll effect */}
            <motion.div 
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
              className="flex items-center gap-16 md:gap-32 w-max px-8 md:px-16"
            >
              {[...clients, ...clients].map((client, i) => (
                <div 
                  key={i} 
                  className="flex-shrink-0 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500 hover:scale-105 cursor-pointer"
                >
                  <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white/90 font-mono">
                    {client.toUpperCase()}
                  </h3>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
