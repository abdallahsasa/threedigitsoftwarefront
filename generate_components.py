import os

components_dir = 'src/components'

files = {
    'ui/Button.tsx': """
import { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
}

export function Button({ children, variant = 'primary', size = 'md', href, className, ...props }: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-blue disabled:opacity-50 disabled:pointer-events-none';
  
  const variants = {
    primary: 'bg-primary-blue text-white hover:bg-light-blue',
    secondary: 'bg-card-bg text-white hover:bg-secondary-bg border border-border-color',
    outline: 'border border-border-color text-white hover:bg-card-bg',
    ghost: 'text-muted-text hover:text-white hover:bg-card-bg',
  };
  
  const sizes = {
    sm: 'h-9 px-4 text-sm',
    md: 'h-12 px-6 text-base',
    lg: 'h-14 px-8 text-lg',
  };

  const combinedClassName = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
}
""",
    'ui/SectionHeading.tsx': """
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeading({ title, subtitle, align = 'left', className }: SectionHeadingProps) {
  return (
    <div className={cn('mb-12', align === 'center' ? 'text-center' : 'text-left', className)}>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">{title}</h2>
      {subtitle && <p className="text-muted-text text-lg max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  );
}
""",
    'global/Header.tsx': """
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export function Header() {
  const t = useTranslations();
  
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border-color bg-primary-bg/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tighter">
          Three Digit<span className="text-primary-blue">.</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-text">
          <Link href="/services" className="hover:text-white transition-colors">Services</Link>
          <Link href="/work" className="hover:text-white transition-colors">Work</Link>
          <Link href="/about" className="hover:text-white transition-colors">About</Link>
          <Link href="/insights" className="hover:text-white transition-colors">Insights</Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="/start-a-project" className="bg-primary-blue text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-light-blue transition-colors">
            Start a Project
          </Link>
        </div>
      </div>
    </header>
  );
}
""",
    'global/Footer.tsx': """
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-border-color bg-secondary-bg pt-16 pb-8 mt-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="text-2xl font-bold tracking-tighter mb-4 block">
              Three Digit<span className="text-primary-blue">.</span>
            </Link>
            <p className="text-muted-text text-sm leading-relaxed mb-6">
              Three Digit Software builds websites, platforms, mobile applications, AI solutions, and digital growth systems for businesses across international markets.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-3 text-sm text-muted-text">
              <li><Link href="/services/web-development" className="hover:text-white transition-colors">Web Development</Link></li>
              <li><Link href="/services/mobile-app-development" className="hover:text-white transition-colors">Mobile Apps</Link></li>
              <li><Link href="/services/business-platforms" className="hover:text-white transition-colors">Business Platforms</Link></li>
              <li><Link href="/services/ai-automation" className="hover:text-white transition-colors">AI & Automation</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-muted-text">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/work" className="hover:text-white transition-colors">Our Work</Link></li>
              <li><Link href="/process" className="hover:text-white transition-colors">Process</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-3 text-sm text-muted-text">
              <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-white transition-colors">GitHub</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border-color pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-text">
          <p>&copy; {new Date().getFullYear()} Three Digit Software. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
"""
}

# Create utility file
os.makedirs('src/lib', exist_ok=True)
with open('src/lib/utils.ts', 'w') as f:
    f.write("""import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
""")

for path, content in files.items():
    full_path = os.path.join(components_dir, path)
    os.makedirs(os.path.dirname(full_path), exist_ok=True)
    with open(full_path, 'w') as f:
        f.write(content.strip() + '\n')

