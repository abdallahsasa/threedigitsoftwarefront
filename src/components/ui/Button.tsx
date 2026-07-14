"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  showArrow?: boolean;
}

export function Button({ 
  href, 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '',
  showArrow = false,
  ...props 
}: ButtonProps) {
  
  const baseStyles = "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 outline-none group relative overflow-hidden";
  
  const variants = {
    primary: "bg-primary-accent text-primary-bg hover:bg-emerald-400 shadow-[0_0_20px_rgba(100,210,30,0.15)] hover:shadow-[0_8px_30px_rgba(100,210,30,0.3)] hover:-translate-y-0.5 border border-primary-accent",
    secondary: "bg-secondary-bg text-white hover:bg-white/10 border border-white/5",
    outline: "border-2 border-white/10 text-white hover:border-white/30 bg-transparent hover:bg-white/5",
    ghost: "bg-transparent text-white hover:text-primary-accent"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const InnerContent = (
    <>
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {showArrow && (
          <ArrowRight className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1.5" />
        )}
      </span>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={className.includes('w-full') ? 'w-full block' : ''}>
        <motion.button 
          whileTap={{ scale: 0.97 }}
          className={combinedClassName} 
          {...props as any}
        >
          {InnerContent}
        </motion.button>
      </Link>
    );
  }

  return (
    <motion.button 
      whileTap={{ scale: 0.97 }}
      className={combinedClassName} 
      {...(props as any)}
    >
      {InnerContent}
    </motion.button>
  );
}
