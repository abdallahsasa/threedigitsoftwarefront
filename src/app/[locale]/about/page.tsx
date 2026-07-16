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
        <div className="container mx-auto px-4">
          <SectionHeading title={t('leadership')} align="center" />
          
          <div className="flex flex-col gap-12 max-w-4xl mx-auto mt-16">
            {/* Abdullah Alsasa */}
            <div className="flex flex-col md:flex-row items-center gap-12 bg-secondary-bg border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
              <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary-accent/10 rounded-full blur-[100px] pointer-events-none"></div>
              <div className="w-48 h-48 md:w-56 md:h-56 relative rounded-full overflow-hidden border-4 border-primary-accent/20 flex-shrink-0 z-10 shadow-xl">
                <Image src="/abdullah.jpg" alt={t('founder_name')} fill sizes="(max-width: 768px) 192px, 224px" className="object-cover" />
              </div>
              <div className="text-center md:text-left z-10">
                <h3 className="text-3xl font-bold text-white mb-2">{t('founder_name')}</h3>
                <p className="text-primary-accent font-semibold text-lg mb-6 uppercase tracking-wider">{t('founder_role')}</p>
                <p className="text-lg text-muted-text leading-relaxed mb-8">{t('founder_desc')}</p>
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                  <a href={`tel:${t('phone').replace(/[^0-9+]/g, '')}`} className="inline-flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 px-6 py-3 rounded-full text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(100,210,30,0.2)] hover:border-primary-accent/30">
                    <Phone className="w-5 h-5 text-primary-accent" />
                    <span className="font-medium">{t('phone')}</span>
                  </a>
                  <a href="mailto:abdullah@threedigitsoftware.com" className="inline-flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 px-6 py-3 rounded-full text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(100,210,30,0.2)] hover:border-primary-accent/30">
                    <Mail className="w-5 h-5 text-primary-accent" />
                    <span className="font-medium">abdullah@threedigitsoftware.com</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Amer Badraldeen */}
            <div className="flex flex-col md:flex-row items-center gap-12 bg-secondary-bg border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
              <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-primary-accent/10 rounded-full blur-[100px] pointer-events-none"></div>
              <div className="w-48 h-48 md:w-56 md:h-56 relative rounded-full overflow-hidden border-4 border-primary-accent/20 flex-shrink-0 z-10 shadow-xl">
                <Image src="/amer.jpg" alt={t('founder2_name')} fill sizes="(max-width: 768px) 192px, 224px" className="object-cover" />
              </div>
              <div className="text-center md:text-left z-10">
                <h3 className="text-3xl font-bold text-white mb-2">{t('founder2_name')}</h3>
                <p className="text-primary-accent font-semibold text-lg mb-6 uppercase tracking-wider">{t('founder2_role')}</p>
                <p className="text-lg text-muted-text leading-relaxed mb-8">{t('founder2_desc')}</p>
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                  <a href={`tel:${t('founder2_phone').replace(/[^0-9+]/g, '')}`} className="inline-flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 px-6 py-3 rounded-full text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(100,210,30,0.2)] hover:border-primary-accent/30">
                    <Phone className="w-5 h-5 text-primary-accent" />
                    <span className="font-medium">{t('founder2_phone')}</span>
                  </a>
                  <a href={`mailto:${t('founder2_email')}`} className="inline-flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 px-6 py-3 rounded-full text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(100,210,30,0.2)] hover:border-primary-accent/30">
                    <Mail className="w-5 h-5 text-primary-accent" />
                    <span className="font-medium">{t('founder2_email')}</span>
                  </a>
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
