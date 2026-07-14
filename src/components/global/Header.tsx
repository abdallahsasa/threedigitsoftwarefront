"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/Button';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { href: '/services', label: 'Services' },
    { href: '/work', label: 'Work' },
    { href: '/about', label: 'About' },
    { href: '/process', label: 'Process' },
    { href: '/insights', label: 'Insights' },
  ];
  
  return (
    <>
      <header className={`fixed top-0 z-[100] w-full transition-all duration-300 ease-out ${scrolled ? 'bg-primary-bg/70 backdrop-blur-xl border-b border-white/5 shadow-lg h-20' : 'bg-transparent h-24'}`}>
        <div className="container mx-auto px-4 h-full flex items-center justify-between">
          <Link href="/" className="flex items-center" onClick={() => setMobileMenuOpen(false)}>
            <Image src="/logo.svg" alt="Three Digit Software" width={180} height={45} className="w-auto h-8 md:h-10" />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10 text-base font-medium text-muted-text">
            {navLinks.map((link) => {
              const isActive = pathname.includes(link.href);
              return (
                <Link key={link.href} href={link.href} className="relative group hover:text-white transition-colors py-2">
                  {link.label}
                  <span className={`absolute -bottom-1 left-0 h-px bg-primary-accent transition-all duration-300 ease-out ${isActive ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'}`}></span>
                </Link>
              );
            })}
          </nav>
          
          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-6">
            <Button asChild size="md">
              <Link href="/start-a-project">Start a Project</Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white p-2 outline-none focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-[90] bg-primary-bg/95 backdrop-blur-xl pt-28 px-4 pb-10 flex flex-col md:hidden"
          >
            <nav className="flex flex-col gap-6 text-2xl font-semibold mb-12">
              {navLinks.map((link, i) => {
                const isActive = pathname.includes(link.href);
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 + 0.1, duration: 0.4 }}
                  >
                    <Link 
                      href={link.href} 
                      className={`block ${isActive ? 'text-primary-accent' : 'text-white'}`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="mt-auto"
            >
              <Button asChild size="lg" className="w-full text-center block" onClick={() => setMobileMenuOpen(false)}>
                <Link href="/start-a-project">Start a Project</Link>
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
