import { SectionHeading } from '@/components/ui/SectionHeading';
import { WhyUs } from '@/components/sections/home/WhyUs';
import { FinalCTA } from '@/components/sections/home/FinalCTA';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import { Phone, Mail } from 'lucide-react';

export default async function AboutPage() {
  const t = await getTranslations('AboutPage');
  return (
    <>
      <section className="pt-32 pb-20 bg-secondary-bg">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">{t('title')}</h1>
          <p className="text-xl text-muted-text leading-relaxed">
            {t('description')}
          </p>
        </div>
      </section>

      {/* Leadership / Founder Section */}
      <section className="py-20 bg-primary-bg">
        <div className="container mx-auto px-4 max-w-7xl">
          <SectionHeading title={t('leadership')} align="center" />
          
          <div className="mt-16">
            {/* Abdullah Alsasa - Main Founder */}
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12 bg-secondary-bg border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden mb-16">
              <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary-accent/10 rounded-full blur-[100px] pointer-events-none"></div>
              <div className="w-48 h-48 md:w-64 md:h-64 relative rounded-full overflow-hidden border-4 border-primary-accent/20 flex-shrink-0 z-10 shadow-xl">
                <Image src="/abdullah.jpg" alt={t('founder_name')} fill sizes="(max-width: 768px) 192px, 256px" className="object-cover" />
              </div>
              <div className="text-center md:text-left z-10">
                <h3 className="text-3xl font-bold text-white mb-2">{t('founder_name')}</h3>
                <p className="text-primary-accent font-semibold text-lg mb-6 uppercase tracking-wider">{t('founder_role')}</p>
                <p className="text-lg text-muted-text leading-relaxed mb-8">{t('founder_desc')}</p>
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                  <a href={`tel:${t('phone').replace(/[^0-9+]/g, '')}`} className="inline-flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 px-6 py-3 rounded-full text-white transition-all duration-300 hover:border-primary-accent/30">
                    <Phone className="w-5 h-5 text-primary-accent" />
                    <span className="font-medium">{t('phone')}</span>
                  </a>
                  <a href="mailto:abdullah@threedigitsoftware.com" className="inline-flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 px-6 py-3 rounded-full text-white transition-all duration-300 hover:border-primary-accent/30">
                    <Mail className="w-5 h-5 text-primary-accent" />
                    <span className="font-medium">abdullah@threedigitsoftware.com</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Other Team Members Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* Amer Badraldeen */}
              <div className="flex flex-col items-center text-center bg-secondary-bg border border-white/10 rounded-3xl p-8 shadow-xl relative overflow-hidden group hover:border-primary-accent/30 transition-colors">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary-accent/5 rounded-full blur-[80px] pointer-events-none transition-opacity group-hover:opacity-100 opacity-50"></div>
                <div className="w-32 h-32 md:w-40 md:h-40 relative rounded-full overflow-hidden border-4 border-primary-accent/20 mb-6 shadow-lg z-10">
                  <Image src="/amer.jpg" alt={t('founder2_name')} fill sizes="(max-width: 768px) 128px, 160px" className="object-cover" />
                </div>
                <div className="z-10 flex-1 flex flex-col items-center w-full">
                  <h3 className="text-2xl font-bold text-white mb-1">{t('founder2_name')}</h3>
                  <p className="text-primary-accent font-semibold text-sm mb-4 uppercase tracking-wider">{t('founder2_role')}</p>
                  <p className="text-sm text-muted-text leading-relaxed mb-8 flex-1">{t('founder2_desc')}</p>
                  <div className="flex items-center justify-center gap-4 w-full">
                    <a href={`tel:${t('founder2_phone').replace(/[^0-9+]/g, '')}`} className="w-12 h-12 flex items-center justify-center bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-white transition-all duration-300 hover:border-primary-accent/30" title={t('founder2_phone')}>
                      <Phone className="w-5 h-5 text-primary-accent" />
                    </a>
                    <a href={`mailto:${t('founder2_email')}`} className="w-12 h-12 flex items-center justify-center bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-white transition-all duration-300 hover:border-primary-accent/30" title={t('founder2_email')}>
                      <Mail className="w-5 h-5 text-primary-accent" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Hasan Fattouh */}
              <div className="flex flex-col items-center text-center bg-secondary-bg border border-white/10 rounded-3xl p-8 shadow-xl relative overflow-hidden group hover:border-primary-accent/30 transition-colors">
                <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary-accent/5 rounded-full blur-[80px] pointer-events-none transition-opacity group-hover:opacity-100 opacity-50"></div>
                <div className="w-32 h-32 md:w-40 md:h-40 relative rounded-full overflow-hidden border-4 border-primary-accent/20 mb-6 shadow-lg z-10">
                  <Image src="/hasan.jpg" alt={t('founder3_name')} fill sizes="(max-width: 768px) 128px, 160px" className="object-cover" />
                </div>
                <div className="z-10 flex-1 flex flex-col items-center w-full">
                  <h3 className="text-2xl font-bold text-white mb-1">{t('founder3_name')}</h3>
                  <p className="text-primary-accent font-semibold text-sm mb-4 uppercase tracking-wider">{t('founder3_role')}</p>
                  <p className="text-sm text-muted-text leading-relaxed mb-8 flex-1">{t('founder3_desc')}</p>
                  <div className="flex items-center justify-center gap-4 w-full">
                    <a href={`tel:${t('founder3_phone').replace(/[^0-9+]/g, '')}`} className="w-12 h-12 flex items-center justify-center bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-white transition-all duration-300 hover:border-primary-accent/30" title={t('founder3_phone')}>
                      <Phone className="w-5 h-5 text-primary-accent" />
                    </a>
                    <a href={`mailto:${t('founder3_email')}`} className="w-12 h-12 flex items-center justify-center bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-white transition-all duration-300 hover:border-primary-accent/30" title={t('founder3_email')}>
                      <Mail className="w-5 h-5 text-primary-accent" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Othman Al Sasa */}
              <div className="flex flex-col items-center text-center bg-secondary-bg border border-white/10 rounded-3xl p-8 shadow-xl relative overflow-hidden group hover:border-primary-accent/30 transition-colors">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary-accent/5 rounded-full blur-[80px] pointer-events-none transition-opacity group-hover:opacity-100 opacity-50"></div>
                <div className="w-32 h-32 md:w-40 md:h-40 relative rounded-full overflow-hidden border-4 border-primary-accent/20 mb-6 shadow-lg z-10">
                  <Image src="/othman.jpg" alt={t('founder4_name')} fill sizes="(max-width: 768px) 128px, 160px" className="object-cover" />
                </div>
                <div className="z-10 flex-1 flex flex-col items-center w-full">
                  <h3 className="text-2xl font-bold text-white mb-1">{t('founder4_name')}</h3>
                  <p className="text-primary-accent font-semibold text-sm mb-4 uppercase tracking-wider">{t('founder4_role')}</p>
                  <p className="text-sm text-muted-text leading-relaxed mb-8 flex-1">{t('founder4_desc')}</p>
                  <div className="flex items-center justify-center gap-4 w-full">
                    <a href={`tel:${t('founder4_phone').replace(/[^0-9+]/g, '')}`} className="w-12 h-12 flex items-center justify-center bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-white transition-all duration-300 hover:border-primary-accent/30" title={t('founder4_phone')}>
                      <Phone className="w-5 h-5 text-primary-accent" />
                    </a>
                    <a href={`mailto:${t('founder4_email')}`} className="w-12 h-12 flex items-center justify-center bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-white transition-all duration-300 hover:border-primary-accent/30" title={t('founder4_email')}>
                      <Mail className="w-5 h-5 text-primary-accent" />
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
      <WhyUs />
      <FinalCTA />
    </>
  );
}
