"use client";

import { SectionHeading } from '@/components/ui/SectionHeading';
import { motion } from 'framer-motion';

export function Technologies() {
  const stack = [
    {
      category: 'Frontend',
      items: [
        { name: 'Next.js', icon: 'nextdotjs' }, 
        { name: 'React', icon: 'react' }, 
        { name: 'Tailwind CSS', icon: 'tailwindcss' }, 
        { name: 'TypeScript', icon: 'typescript' }
      ]
    },
    {
      category: 'Backend',
      items: [
        { name: 'Laravel', icon: 'laravel' }, 
        { name: 'PHP', icon: 'php' }, 
        { name: 'Node.js', icon: 'nodedotjs' }, 
        { name: 'NestJS', icon: 'nestjs' }
      ]
    },
    {
      category: 'Mobile',
      items: [
        { name: 'React Native', icon: 'react' }, 
        { name: 'Expo', icon: 'expo' }
      ]
    },
    {
      category: 'Infrastructure',
      items: [
        { name: 'Docker', icon: 'docker' }, 
        { name: 'Cloudflare', icon: 'cloudflare' }, 
        { name: 'Redis', icon: 'redis' }, 
        { name: 'MySQL', icon: 'mysql' }
      ]
    },
    {
      category: 'AI',
      items: [
        { name: 'OpenAI', icon: 'openai' }, 
        { name: 'Anthropic', icon: 'anthropic' }, 
        { name: 'ElevenLabs', icon: 'elevenlabs' }
      ]
    }
  ];

  return (
    <section className="py-32 bg-secondary-bg relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-primary-accent/5 blur-[150px] rounded-full pointer-events-none z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <SectionHeading title="Built Using Modern Technologies" align="center" />
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mt-16">
          {stack.map((group, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
              className="flex flex-col h-full"
            >
              <h4 className="text-sm font-semibold tracking-widest uppercase text-muted-text mb-6 pl-2">{group.category}</h4>
              <div className="flex-1 space-y-3">
                {group.items.map((tech, j) => (
                  <div 
                    key={j} 
                    className="group bg-primary-bg rounded-xl border border-white/5 p-4 flex items-center justify-between transition-all duration-300 hover:border-primary-accent/40 hover:bg-primary-bg shadow-sm hover:shadow-[0_8px_30px_rgba(100,210,30,0.1)] hover:-translate-y-1"
                  >
                    <span className="font-semibold text-white/80 group-hover:text-white transition-colors">{tech.name}</span>
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary-accent/10 transition-colors duration-300 overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img 
                        src={`https://cdn.simpleicons.org/${tech.icon}/ffffff`} 
                        alt={tech.name}
                        className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
