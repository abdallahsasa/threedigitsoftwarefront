import os

def replace_in_file(path, old, new):
    with open(path, 'r') as f:
        content = f.read()
    with open(path, 'w') as f:
        f.write(content.replace(old, new))

# 1. Update globals.css to increase base text sizes and add utilities
with open('src/app/globals.css', 'a') as f:
    f.write("\n\n/* Premium UI Overrides */\n")
    f.write(".text-muted-text {\n  font-size: 1.05rem;\n}\n")
    f.write("@media (min-width: 768px) {\n  .text-muted-text {\n    font-size: 1.1rem;\n  }\n}\n")

# 2. Update Header.tsx
header_content = """
"use client";

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/Button';

export function Header() {
  const t = useTranslations();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled ? 'bg-primary-bg/80 backdrop-blur-xl border-b border-white/5 shadow-lg h-20' : 'bg-transparent h-24'}`}>
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-tighter">
          Three Digit<span className="text-primary-blue">.</span>
        </Link>
        <nav className="hidden md:flex items-center gap-10 text-base font-medium text-muted-text">
          <Link href="/services" className="hover:text-white transition-colors">Services</Link>
          <Link href="/work" className="hover:text-white transition-colors">Work</Link>
          <Link href="/about" className="hover:text-white transition-colors">About</Link>
          <Link href="/process" className="hover:text-white transition-colors">Process</Link>
          <Link href="/insights" className="hover:text-white transition-colors">Insights</Link>
        </nav>
        <div className="flex items-center gap-6">
          <Button href="/start-a-project" size="md" className="hidden sm:inline-flex">
            Start a Project
          </Button>
        </div>
      </div>
    </header>
  );
}
"""
with open('src/components/global/Header.tsx', 'w') as f:
    f.write(header_content.strip() + '\n')

# 3. Update Footer.tsx
footer_content = """
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-border-color bg-primary-bg pt-20 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-2">
            <Link href="/" className="text-3xl font-bold tracking-tighter mb-6 block">
              Three Digit<span className="text-primary-blue">.</span>
            </Link>
            <p className="text-muted-text text-base leading-relaxed mb-8 max-w-sm">
              Three Digit Software builds websites, platforms, mobile applications, AI solutions, and digital growth systems for businesses across international markets.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-border-color flex items-center justify-center hover:bg-primary-blue hover:border-primary-blue transition-colors">in</a>
              <a href="#" className="w-10 h-10 rounded-full border border-border-color flex items-center justify-center hover:bg-primary-blue hover:border-primary-blue transition-colors">X</a>
              <a href="#" className="w-10 h-10 rounded-full border border-border-color flex items-center justify-center hover:bg-primary-blue hover:border-primary-blue transition-colors">git</a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-6 text-white">Services</h4>
            <ul className="space-y-4 text-base text-muted-text">
              <li><Link href="/services" className="hover:text-white transition-colors">Web Development</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Mobile Apps</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Business Platforms</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">AI & Automation</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">E-commerce</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-6 text-white">Company</h4>
            <ul className="space-y-4 text-base text-muted-text">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/work" className="hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link href="/process" className="hover:text-white transition-colors">Process</Link></li>
              <li><Link href="/insights" className="hover:text-white transition-colors">Insights</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-6 text-white">Language</h4>
            <ul className="space-y-4 text-base text-muted-text">
              <li><a href="/en" className="hover:text-white transition-colors">English (EN)</a></li>
              <li><a href="/ar" className="hover:text-white transition-colors">العربية (AR)</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border-color pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-text">
          <p>&copy; {new Date().getFullYear()} Three Digit Software. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
"""
with open('src/components/global/Footer.tsx', 'w') as f:
    f.write(footer_content.strip() + '\n')

