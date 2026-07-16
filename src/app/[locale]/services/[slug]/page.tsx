import { SectionHeading } from '@/components/ui/SectionHeading';
import { FinalCTA } from '@/components/sections/home/FinalCTA';
import { notFound } from 'next/navigation';
import { getService } from '@/lib/api';
import { CheckCircle2 } from 'lucide-react';
import { getTranslations } from 'next-intl/server';

export default async function ServicePage({ params }: { params: Promise<{ slug: string, locale: string }> }) {
  const { slug, locale } = await params;
  const t = await getTranslations('ServiceDetails');
  
  const service = await getService(slug, locale);
  
  if (!service) {
    notFound();
  }

  return (
    <>
      <section className="pt-32 pb-20 bg-secondary-bg">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title={service.name} 
            subtitle={t('subtitle')}
            align="center"
          />
          <div className="max-w-4xl mx-auto py-12">
            <h2 className="text-2xl font-bold text-white mb-6">{t('overview')}</h2>
            <p className="text-lg text-muted-text leading-relaxed mb-12">{service.overview}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
              {service.problems_solved && service.problems_solved.length > 0 && (
                <div className="bg-primary-bg rounded-2xl p-8 border border-white/5">
                  <h3 className="text-xl font-bold text-white mb-6">{t('problems_we_solve')}</h3>
                  <ul className="space-y-4">
                    {service.problems_solved.map((problem: string, index: number) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary-accent flex-shrink-0 mt-0.5" />
                        <span className="text-muted-text">{problem}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {service.capabilities && service.capabilities.length > 0 && (
                <div className="bg-primary-bg rounded-2xl p-8 border border-white/5">
                  <h3 className="text-xl font-bold text-white mb-6">{t('our_capabilities')}</h3>
                  <ul className="space-y-4">
                    {service.capabilities.map((capability: string, index: number) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary-accent flex-shrink-0 mt-0.5" />
                        <span className="text-muted-text">{capability}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {service.process && service.process.length > 0 && (
              <div className="mt-16">
                <h2 className="text-2xl font-bold text-white mb-8 text-center">{t('our_process')}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {service.process.map((step: string, index: number) => (
                    <div key={index} className="bg-primary-bg rounded-2xl p-6 border border-white/5 relative">
                      <div className="text-4xl font-black text-white/5 absolute top-4 right-4">{index + 1}</div>
                      <h4 className="text-lg font-bold text-white mt-4">{step.replace(/^\d+\.\s*/, '')}</h4>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
