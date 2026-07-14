"use client";

import { useState } from 'react';
import { Button } from './Button';

export function ProjectInquiryForm() {
  const [step, setStep] = useState(1);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
      return;
    }

    setStatus('loading');
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    
    // Checkbox mapping
    data.privacy_consent = formData.get('privacy_consent') === 'on' ? '1' : '0';

    try {
      const res = await fetch('http://localhost:8000/api/v1/project-inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-success/20 text-success rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">✓</div>
        <h3 className="text-2xl font-bold mb-4">Request Received!</h3>
        <p className="text-muted-text">Thank you for reaching out. Our team will review your project details and get back to you shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {status === 'error' && <div className="p-4 bg-red-500/20 text-red-500 rounded-lg mb-4">An error occurred. Please check the fields and try again.</div>}
      
      {step === 1 && (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm text-muted-text">Full Name *</label>
              <input name="full_name" required type="text" className="w-full bg-secondary-bg border border-border-color rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-accent" />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-muted-text">Company Name</label>
              <input name="company_name" type="text" className="w-full bg-secondary-bg border border-border-color rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-accent" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm text-muted-text">Email *</label>
              <input name="email" required type="email" className="w-full bg-secondary-bg border border-border-color rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-accent" />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-muted-text">Phone / WhatsApp</label>
              <input name="phone" type="tel" className="w-full bg-secondary-bg border border-border-color rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-accent" />
            </div>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
          <div className="space-y-2">
            <label className="text-sm text-muted-text">Project Type</label>
            <select name="project_type" className="w-full bg-secondary-bg border border-border-color rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-accent">
              <option value="Corporate website">Corporate website</option>
              <option value="E-commerce website">E-commerce website</option>
              <option value="Custom web platform">Custom web platform</option>
              <option value="Mobile application">Mobile application</option>
              <option value="AI solution">AI solution</option>
              <option value="Business system">Business system</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-sm text-muted-text">Project Description</label>
            <textarea name="project_description" rows={4} className="w-full bg-secondary-bg border border-border-color rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-accent"></textarea>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
          <div className="space-y-2">
            <label className="text-sm text-muted-text">Budget Range</label>
            <select name="budget" className="w-full bg-secondary-bg border border-border-color rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-accent">
              <option value="Under $1,000">Under $1,000</option>
              <option value="$1,000–$3,000">$1,000–$3,000</option>
              <option value="$3,000–$7,500">$3,000–$7,500</option>
              <option value="$7,500–$15,000">$7,500–$15,000</option>
              <option value="$15,000+">$15,000+</option>
              <option value="Not sure yet">Not sure yet</option>
            </select>
          </div>
          <div className="flex items-start gap-3 mt-6">
            <input name="privacy_consent" type="checkbox" required className="mt-1" />
            <label className="text-sm text-muted-text">I agree to the privacy policy and consent to having my data processed for this inquiry. *</label>
          </div>
        </div>
      )}
      
      <div className="pt-6 border-t border-border-color flex justify-between">
        {step > 1 ? (
          <Button type="button" variant="ghost" onClick={() => setStep(step - 1)}>Back</Button>
        ) : <div></div>}
        <Button type="submit" disabled={status === 'loading'}>
          {step < 3 ? 'Continue to Next Step' : (status === 'loading' ? 'Submitting...' : 'Submit Request')}
        </Button>
      </div>
    </form>
  );
}
