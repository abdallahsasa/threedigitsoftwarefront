"use client";

import { useState } from 'react';
import { Button } from './Button';
import { useTranslations } from 'next-intl';

export function ProjectInquiryForm() {
  const t = useTranslations('ProjectInquiryForm');
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
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-success/20 text-success rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">✓</div>
        <h3 className="text-2xl font-bold mb-4">{t('req_received')}</h3>
        <p className="text-muted-text">{t('thanks_reach_out')}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {status === 'error' && <div className="p-4 bg-red-500/20 text-red-500 rounded-lg mb-4">{t('error_occurred')}</div>}
      
      {step === 1 && (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm text-muted-text">{t('full_name')}</label>
              <input name="full_name" required type="text" className="w-full bg-secondary-bg border border-border-color rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-accent" />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-muted-text">{t('company_name')}</label>
              <input name="company_name" type="text" className="w-full bg-secondary-bg border border-border-color rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-accent" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm text-muted-text">{t('email')}</label>
              <input name="email" required type="email" className="w-full bg-secondary-bg border border-border-color rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-accent" />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-muted-text">{t('phone')}</label>
              <input name="phone" type="tel" className="w-full bg-secondary-bg border border-border-color rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-accent" />
            </div>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
          <div className="space-y-2">
            <label className="text-sm text-muted-text">{t('project_type')}</label>
            <select name="project_type" className="w-full bg-secondary-bg border border-border-color rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-accent">
              <option value="Corporate website">{t('opt_corp_web')}</option>
              <option value="E-commerce website">{t('opt_ecom_web')}</option>
              <option value="Custom web platform">{t('opt_custom_web')}</option>
              <option value="Mobile application">{t('opt_mobile_app')}</option>
              <option value="AI solution">{t('opt_ai_sol')}</option>
              <option value="Business system">{t('opt_bus_sys')}</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-sm text-muted-text">{t('project_desc')}</label>
            <textarea name="project_description" rows={4} className="w-full bg-secondary-bg border border-border-color rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-accent"></textarea>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
          <div className="space-y-2">
            <label className="text-sm text-muted-text">{t('budget_range')}</label>
            <select name="budget" className="w-full bg-secondary-bg border border-border-color rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-accent">
              <option value="Under $1,000">{t('opt_b_1')}</option>
              <option value="$1,000–$3,000">{t('opt_b_2')}</option>
              <option value="$3,000–$7,500">{t('opt_b_3')}</option>
              <option value="$7,500–$15,000">{t('opt_b_4')}</option>
              <option value="$15,000+">{t('opt_b_5')}</option>
              <option value="Not sure yet">{t('opt_b_not_sure')}</option>
            </select>
          </div>
          <div className="flex items-start gap-3 mt-6">
            <input name="privacy_consent" type="checkbox" required className="mt-1" />
            <label className="text-sm text-muted-text">{t('agree_privacy')}</label>
          </div>
        </div>
      )}
      
      <div className="pt-6 border-t border-border-color flex justify-between">
        {step > 1 ? (
          <Button type="button" variant="ghost" onClick={() => setStep(step - 1)}>{t('back')}</Button>
        ) : <div></div>}
        <Button type="submit" disabled={status === 'loading'}>
          {step < 3 ? t('continue_next_step') : (status === 'loading' ? t('submitting') : t('submit_request'))}
        </Button>
      </div>
    </form>
  );
}
