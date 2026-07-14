"use client";

import { useState } from 'react';
import { Button } from './Button';


export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      // In production, this URL will be dynamic
      const res = await fetch('http://localhost:8000/api/v1/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus('success');
        e.currentTarget.reset();
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-sm">
      {status === 'success' && <div className="p-4 bg-success/20 text-success rounded-lg mb-4">Message sent successfully!</div>}
      {status === 'error' && <div className="p-4 bg-red-500/20 text-red-500 rounded-lg mb-4">An error occurred. Please try again.</div>}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-muted-text">Full Name</label>
          <input name="name" required type="text" className="w-full bg-card-bg border border-border-color rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-accent transition-colors" placeholder="John Doe" />
        </div>
        <div className="space-y-2">
          <label className="text-muted-text">Email</label>
          <input name="email" required type="email" className="w-full bg-card-bg border border-border-color rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-accent transition-colors" placeholder="john@example.com" />
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-muted-text">Subject</label>
        <input name="subject" type="text" className="w-full bg-card-bg border border-border-color rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-accent transition-colors" placeholder="How can we help?" />
      </div>
      <div className="space-y-2">
        <label className="text-muted-text">Message</label>
        <textarea name="message" required rows={5} className="w-full bg-card-bg border border-border-color rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-accent transition-colors" placeholder="Tell us about your requirements..."></textarea>
      </div>
      <Button type="submit" disabled={status === 'loading'} className="w-full mt-4">
        {status === 'loading' ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
}
